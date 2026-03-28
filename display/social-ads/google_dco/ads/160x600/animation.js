(async function loadFeedAndImages(){
  try{
    const csvPath = window.currentCsvPath || '../../csv/ikea-Tables.csv';
    const raw = await fetch(csvPath).then(r=>{
      if(!r.ok) throw new Error('HTTP status '+r.status);
      return r.text();
    });
    window.feed = raw;

    function parseCSV(text) {
      const rows = [];
      let current = '';
      let inQuotes = false;
      let row = [];
      for(let i=0;i<text.length;i++){
        const ch = text[i];
        if(ch==='"'){
          if(inQuotes && text[i+1]==='"'){ current += '"'; i++; }
          else { inQuotes = !inQuotes; }
        } else if(ch===',' && !inQuotes){
          row.push(current); current = '';
        } else if((ch==='\n' || ch==='\r') && !inQuotes){
          if(ch==='\r' && text[i+1]==='\n') { i++; }
          row.push(current); rows.push(row); row=[]; current='';
        } else {
          current += ch;
        }
      }
      if(current !== '' || row.length>0){ row.push(current); rows.push(row); }
      return rows;
    }

    const lines = parseCSV(raw).filter(r=>r.length>0);
    if(lines.length<2) return;
    const headers = lines.shift().map(h=>h.trim().replace(/^"|"$/g,''));
    const feedArr = lines.map(cols=>{
      const obj = {};
      headers.forEach((h,i)=>{ obj[h] = (cols[i]||'').trim().replace(/^"|"$/g,''); });
      return obj;
    });
    window.feed = feedArr;

    const images = feedArr.map(r=>({
      image3:  (r['productImage'] ? r['productImage'].trim() : null),
      data8:   (r['Headline']     ? r['Headline'].trim()     : ''),
      price16: (r['Description']  ? r['Description'].trim()  : ''),
      price4:  (r['price']        ? r['price'].trim()        : ''),
      url:     (r['URL']          ? r['URL'].trim()          : '')
    })).filter(item => item.image3 && typeof item.image3 === 'string');
    window.images = images;

    function getRandomItems(arr, n){
      const out = [], copy = arr.slice();
      const count = Math.min(n, copy.length);
      for(let i=0;i<count;i++){
        const idx = Math.floor(Math.random()*copy.length);
        out.push(copy.splice(idx,1)[0]);
      }
      return out;
    }

    const requested = Number.isInteger(window.products) ? window.products : parseInt(window.products) || 3;
    const count = Math.max(1, Math.min(requested, images.length));
    const selectedItems = getRandomItems(images, count);
    window.selectedItems = selectedItems;

    const carousel = document.querySelector('.carousel');
    const slideSize = 120;
    const gap = 60;
    const step = slideSize + gap;

    selectedItems.forEach((item, i)=>{
      const slide = document.createElement('div');
      slide.className = 'slide';
      slide.style.backgroundImage = `url(${item.image3})`;
      slide.style.left = `${i * step}px`;

      if(i === 0 && item.url){
        const adClickArea = document.getElementById('ad-clickarea');
        if(adClickArea){ adClickArea.href = item.url; adClickArea.style.display = 'block'; }
      }

      const descField = document.createElement('div');
      descField.className = 'description';
      descField.textContent = item.price16 || '';
      slide.appendChild(descField);

      const price4Field = document.createElement('div');
      price4Field.className = 'price4';
      price4Field.textContent = item.price4 || '';
      slide.appendChild(price4Field);

      const textField = document.createElement('div');
      textField.className = 'slide-text';
      textField.textContent = item.data8;
      slide.appendChild(textField);

      carousel.appendChild(slide);
    });

    carousel.style.width = `${selectedItems.length * step}px`;

    if(selectedItems.length === 1){
      document.querySelector('.nav.left').style.display  = 'none';
      document.querySelector('.nav.right').style.display = 'none';
      document.querySelector('.pagination').style.display = 'none';
    }

    let currentDescription = carousel.children[0]?.querySelector('.description');
    let currentPrice4      = carousel.children[0]?.querySelector('.price4');

    function positionAllPrice4Below(){
      requestAnimationFrame(() => {
        for(let i=0;i<carousel.children.length;i++){
          const slide = carousel.children[i];
          const desc   = slide.querySelector('.description');
          const price4 = slide.querySelector('.price4');
          if(desc && price4){
            const descTop    = parseFloat(getComputedStyle(desc).top);
            const price4Top  = descTop + desc.offsetHeight + 5;
            price4.style.top = `${price4Top}px`;
          }
        }
      });
    }
    positionAllPrice4Below();

    // shrink .slide-text font until it fits in one line
    for(let i=0;i<carousel.children.length;i++){
      const st = carousel.children[i].querySelector('.slide-text');
      if(!st) continue;
      let fs = 12;
      st.style.fontSize = fs + 'px';
      while(st.scrollWidth > st.clientWidth && fs > 7){
        fs -= 0.5;
        st.style.fontSize = fs + 'px';
      }
    }

    const pagination = document.querySelector('.pagination');
    selectedItems.forEach((item, i) => {
      const bullet = document.createElement('div');
      bullet.className = 'bullet';
      if(i === 0) bullet.classList.add('active');
      bullet.addEventListener('click', () => {
        if(animating) return;
        document.querySelectorAll('.pagination .bullet').forEach((b,idx)=>b.classList.toggle('active', idx===i));
        stopAuto();
        slideTo(i);
      });
      pagination.appendChild(bullet);
    });

    const ctaTextElement = document.querySelector('.cta-text');
    if(ctaTextElement && window.ctaText){ ctaTextElement.textContent = window.ctaText; }
    document.querySelector('.cta').addEventListener('click', () => {
      const url = selectedItems[currentIndex]?.url;
      if(url) window.open(url, '_blank');
    });

    function updateActiveBullet(index){
      document.querySelectorAll('.pagination .bullet').forEach((b,i)=>{
        b.classList.toggle('active', i === (index !== undefined ? index : currentIndex));
      });
    }

    function updateDescriptionAnimation(){
      const current = carousel.children[currentIndex];
      if(current){
        currentDescription = current.querySelector('.description');
        currentPrice4      = current.querySelector('.price4');
        if(currentDescription) gsap.to(currentDescription, {opacity:1, duration:0.3, ease:'power2.out'});
        if(currentPrice4)      gsap.to(currentPrice4,      {opacity:1, duration:0.3, ease:'power2.out'});
      }
      updateActiveBullet();
      const adClickArea = document.getElementById('ad-clickarea');
      if(adClickArea && selectedItems[currentIndex]){
        const url = selectedItems[currentIndex].url;
        if(url){ adClickArea.href = url; adClickArea.style.display = 'block'; }
        else   { adClickArea.style.display = 'none'; }
      }
    }

    let currentIndex = 0;
    let animating = false;

    function slideTo(index, onDone, duration = 0.6){
      const len = selectedItems.length;
      if(len === 0) return;
      const target = ((index % len) + len) % len;
      if(target === currentIndex) return;
      if(animating) return;
      animating = true;
      updateActiveBullet(target);

      if(currentIndex === 0 && target === len - 1){
        const last = carousel.children[len-1];
        const orig = last.style.left;
        last.style.left = `${-step}px`;
        gsap.to(carousel, {x:`+=${step}px`, duration, ease:'power1.inOut', onComplete:()=>{
          gsap.set(carousel,{x:`-${(len-1)*step}px`});
          last.style.left = orig;
          currentIndex = target;
          updateDescriptionAnimation();
          if(typeof onDone==='function') onDone();
          animating = false;
        }});
        return;
      }
      if(currentIndex === len - 1 && target === 0){
        const first = carousel.children[0];
        const orig = first.style.left;
        first.style.left = `${len*step}px`;
        gsap.to(carousel, {x:`-=${step}px`, duration, ease:'power1.inOut', onComplete:()=>{
          gsap.set(carousel,{x:`0px`});
          first.style.left = orig;
          currentIndex = target;
          updateDescriptionAnimation();
          if(typeof onDone==='function') onDone();
          animating = false;
        }});
        return;
      }
      currentIndex = target;
      gsap.to(carousel,{x:`-${target*step}px`, duration, ease:'power2.inOut', onComplete:()=>{
        if(typeof onDone==='function') onDone();
        updateDescriptionAnimation();
        animating = false;
      }});
    }

    // drag
    let isDragging=false, startX, currentX, dragOffset=0, wasDragged=false;
    let velocity=0, lastX=0, lastTime=0;

    function dragStart(e){
      if(animating) return;
      isDragging=true; wasDragged=false;
      startX=e.pageX||e.touches[0].pageX; lastX=startX; lastTime=Date.now(); velocity=0;
      stopAuto(); carousel.style.cursor='grabbing';
    }
    function dragMove(e){
      if(!isDragging) return;
      e.preventDefault();
      currentX=e.pageX||e.touches[0].pageX;
      dragOffset=currentX-startX;
      const now=Date.now(), dt=now-lastTime;
      if(dt>0) velocity=(currentX-lastX)/dt;
      lastX=currentX; lastTime=now;
      if(Math.abs(dragOffset)>10) wasDragged=true;
      gsap.set(carousel,{x:-(currentIndex*step)+dragOffset});
    }
    function dragEnd(){
      if(!isDragging) return;
      isDragging=false; carousel.style.cursor='grab';
      const speed=Math.abs(velocity);
      let dur=0.6-(speed*0.3);
      if(dur<0.2) dur=0.2; if(dur>0.6) dur=0.6;
      if(wasDragged){
        if(Math.abs(dragOffset)>40||speed>0.4){
          slideTo(dragOffset<0 ? currentIndex+1 : currentIndex-1, null, dur);
        } else {
          gsap.to(carousel,{x:-(currentIndex*step), duration:0.3, ease:'power2.out'});
        }
      } else {
        const url=selectedItems[currentIndex]?.url;
        if(url) window.open(url,'_blank');
      }
      dragOffset=0; velocity=0;
    }

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragMove);
    carousel.addEventListener('mouseup',   dragEnd);
    carousel.addEventListener('mouseleave',dragEnd);
    carousel.addEventListener('touchstart', dragStart);
    carousel.addEventListener('touchmove',  dragMove);
    carousel.addEventListener('touchend',   dragEnd);
    carousel.style.cursor='grab';

    document.querySelector('.nav.left').addEventListener('click',(e)=>{
      if(animating) return;
      gsap.fromTo(e.currentTarget,{scale:1},{scale:0.86,duration:0.12,ease:'power2.inOut',yoyo:true,repeat:1});
      if(autoPlaying) stopAuto();
      slideTo(currentIndex-1);
    });
    document.querySelector('.nav.right').addEventListener('click',(e)=>{
      if(animating) return;
      gsap.fromTo(e.currentTarget,{scale:1},{scale:0.86,duration:0.12,ease:'power2.inOut',yoyo:true,repeat:1});
      if(autoPlaying) stopAuto();
      slideTo(currentIndex+1);
    });

    let autoTimer=null, autoPlaying=false;
    const AUTO_DELAY=2000;
    function stopAuto(){ autoPlaying=false; clearTimeout(autoTimer); autoTimer=null; }
    function scheduleAuto(){
      clearTimeout(autoTimer);
      if(!autoPlaying) return;
      autoTimer=setTimeout(()=>{
        slideTo(currentIndex+1,()=>{
          if(currentIndex<selectedItems.length-1) scheduleAuto();
          else stopAuto();
        });
      }, AUTO_DELAY);
    }
    function startAuto(){ if(selectedItems.length<=1) return; autoPlaying=true; scheduleAuto(); }
    startAuto();

  } catch(err){
    console.warn('Could not load feed', err);
  }
})();
