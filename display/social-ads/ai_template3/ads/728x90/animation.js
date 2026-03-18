// Load CSV feed, extract `image3` column into `images`, pick 5 random
// Adjusted for 728x90: slideWidth = 200, gap = 450, smaller carousel
(async function loadFeedAndImages(){
  try{
    const csvPath = window.currentCsvPath || '../../csv/ikea-Tables.csv';
    console.log('fetching CSV from',csvPath);
    const raw = await fetch(csvPath).then(r=>{
      if(!r.ok) throw new Error('HTTP status '+r.status);
      return r.text();
    });
    console.log('csv loaded, length', raw.length);
    window.feed = raw;

    function parseCSV(text) {
      const rows = [];
      let current = '';
      let inQuotes = false;
      let row = [];
      for(let i=0;i<text.length;i++){
        const ch = text[i];
        if(ch==='"'){
          if(inQuotes && text[i+1]==='"'){
            current += '"';
            i++;
          } else {
            inQuotes = !inQuotes;
          }
        } else if(ch===',' && !inQuotes){
          row.push(current);
          current = '';
        } else if((ch==='\n' || ch==='\r') && !inQuotes){
          if(ch==='\r' && text[i+1]==='\n') { i++; }
          row.push(current);
          rows.push(row);
          row=[];
          current='';
        } else {
          current += ch;
        }
      }
      if(current !== '' || row.length>0){
        row.push(current);
        rows.push(row);
      }
      return rows;
    }

    const lines = parseCSV(raw).filter(r=>r.length>0);
    if(lines.length<2) return;
    const headers = lines.shift().map(h=>h.trim().replace(/^"|"$/g,''));
    const feedArr = lines.map(cols=>{
      const obj = {};
      headers.forEach((h,i)=>{
        obj[h] = (cols[i]||'').trim().replace(/^"|"$/g,'');
      });
      return obj;
    });
    window.feed = feedArr;
    console.log('parsed rows', feedArr.length, 'first row', feedArr[0]);

    const images = feedArr.map(r=>({
      image3: (r['productImage'] ? r['productImage'].trim() : null),
      data8: (r['Headline'] ? r['Headline'].trim() : ''),
      price16: (r['Description'] ? r['Description'].trim() : ''),
      price4: (r['price'] ? r['price'].trim() : ''),
      url: (r['URL'] ? r['URL'].trim() : '')
    })).filter(item => item.image3 && typeof item.image3 === 'string');
    window.images = images;
    console.log('all image3 URLs count', images.length);
    
    function getRandomItems(arr, n){
      const out = [];
      const copy = arr.slice();
      const count = Math.min(n, copy.length);
      for(let i=0; i<count; i++){
        const idx = Math.floor(Math.random() * copy.length);
        out.push(copy.splice(idx, 1)[0]);
      }
      return out;
    }

    const requested = Number.isInteger(window.products) ? window.products : parseInt(window.products) || 3;
    const count = Math.max(1, Math.min(requested, 5));
    const selectedItems = getRandomItems(images, count);
    window.selectedItems = selectedItems;
    console.log(`${count} random items:`, selectedItems);
    
    const carousel = document.querySelector('.carousel');
const slideWidth = 200;
    const gap = 728;
    
    selectedItems.forEach((item, i)=>{
      const slide = document.createElement('div');
      slide.className = 'slide';
      slide.style.backgroundImage = `url(${item.image3})`;
      slide.style.left = `${i * (slideWidth + gap)}px`;
      
      if(i === 0 && item.url) {
        const adClickArea = document.getElementById('ad-clickarea');
        if(adClickArea) {
          adClickArea.href = item.url;
          adClickArea.style.display = 'block';
        }
      }
      
      const textContainer = document.createElement('div');
      textContainer.className = 'slide-text-container';

      const headline = document.createElement('div');
      headline.className = 'slide-text';
      headline.innerHTML = item.data8;
      textContainer.appendChild(headline);

      const description = document.createElement('div');
      description.className = 'slide-description';
      description.innerHTML = item.price16;
      textContainer.appendChild(description);

      const price = document.createElement('div');
      price.className = 'slide-price';
      price.innerHTML = item.price4;
      textContainer.appendChild(price);
      
      slide.appendChild(textContainer);
      carousel.appendChild(slide);
    });
    
    const carouselWidth = selectedItems.length * (slideWidth + gap) - gap;
    carousel.style.width = `${carouselWidth}px`;
    
    if(selectedItems.length <= 1){
      document.querySelector('.nav.left').style.display = 'none';
      document.querySelector('.nav.right').style.display = 'none';
      document.querySelector('.pagination').style.display = 'none';
    }
    
    const pagination = document.querySelector('.pagination');
    selectedItems.forEach((item, i) => {
      const bullet = document.createElement('div');
      bullet.className = 'bullet';
      if(i === 0) bullet.classList.add('active');
      bullet.addEventListener('click', () => {
        if(animating) return;
        updateActiveBullet(i);
        stopAuto();
        slideTo(i);
      });
      pagination.appendChild(bullet);
    });

    const ctaTextElement = document.querySelector('.cta-text');
    if(ctaTextElement && window.ctaText) {
      ctaTextElement.textContent = window.ctaText;
    }
    document.querySelector('.cta').addEventListener('click', () => {
      const url = selectedItems[currentIndex]?.url;
      if(url) window.open(url, '_blank');
    });
    
    function updateActiveBullet(index){
      const bullets = document.querySelectorAll('.pagination .bullet');
      bullets.forEach((bullet, i) => {
        bullet.classList.toggle('active', i === (index !== undefined ? index : currentIndex));
      });
    }

    let currentIndex = 0;
    let animating = false;
    
    
    function slideTo(index, onDone, duration = 0.6){
      const len = selectedItems.length;
      if(len <= 1) return;
      const step = slideWidth + gap;
      // normalize target with wrapping
      const target = ((index % len) + len) % len;
      if(target === currentIndex) return;
      if(animating) return;
      animating = true;
      // Update bullet immediately when slide starts
      updateActiveBullet(target);
      // wrap backward: 0 -> last
      if(currentIndex === 0 && target === len - 1){
        const last = carousel.children[len-1];
        const orig = last.style.left;
        gsap.set(last, {left: `${(len-1)*(slideWidth + gap)}px`});
        last.style.left = `${-step}px`;
        gsap.to(carousel, {x:`+=${step}px`, duration, ease:'power2.inOut', onComplete:()=>{
          gsap.set(carousel,{x:`-${(len-1)*step}px`});
          last.style.left = orig;
          currentIndex = target;
          updateAdUrl();
          if(typeof onDone === 'function') onDone();
          animating = false;
        }});
        return;
      }
      // wrap forward: last -> 0
      if(currentIndex === len - 1 && target === 0){
        const first = carousel.children[0];
        const orig = first.style.left;
        gsap.set(first, {left: `${len*(slideWidth + gap)}px`});
        first.style.left = `${len*step}px`;
        gsap.to(carousel, {x:`-=${step}px`, duration, ease:'power2.inOut', onComplete:()=>{
          gsap.set(carousel,{x:`0px`});
          first.style.left = orig;
          currentIndex = target;
          updateAdUrl();
          if(typeof onDone === 'function') onDone();
          animating = false;
        }});
        return;
      }
      // normal move
      const offset = target * step;
      gsap.to(carousel,{x:`-${offset}px`,duration,ease:'power2.inOut', onComplete:()=>{
        currentIndex = target;
        updateAdUrl();
        if(typeof onDone === 'function') onDone();
        animating = false;
      }});
    }

    function updateAdUrl(){
      const adClickArea = document.getElementById('ad-clickarea');
      if(adClickArea && selectedItems[currentIndex]) {
        const url = selectedItems[currentIndex].url;
        if(url) {
          adClickArea.href = url;
          adClickArea.style.display = 'block';
        } else {
          adClickArea.style.display = 'none';
        }
      }
    }

    let isDragging = false;
    let startX, currentX;
    let dragOffset = 0;
    let wasDragged = false;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;

    function dragStart(e) {
        if (animating) return;
        isDragging = true;
        wasDragged = false;
        startX = e.pageX || (e.touches && e.touches[0].pageX);
        lastX = startX;
        lastTime = Date.now();
        velocity = 0;
        stopAuto();
        carousel.style.cursor = 'grabbing';
    }

    function dragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.pageX || (e.touches && e.touches[0].pageX);
        dragOffset = currentX - startX;

        const now = Date.now();
        const dt = now - lastTime;
        if (dt > 0) {
            velocity = (currentX - lastX) / dt;
        }
        lastX = currentX;
        lastTime = now;

        if (Math.abs(dragOffset) > 10) {
            wasDragged = true;
        }

        const step = slideWidth + gap;
        const currentPos = -(currentIndex * step);
        gsap.set(carousel, { x: currentPos + dragOffset });
    }

    function dragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        carousel.style.cursor = 'grab';

        const speed = Math.abs(velocity);
        let duration = 0.6 - (speed * 0.3);
        if (duration < 0.2) duration = 0.2;
        if (duration > 0.6) duration = 0.6;

        if (wasDragged) {
            if (Math.abs(dragOffset) > 50 || speed > 0.4) {
                if (dragOffset < 0) {
                    slideTo(currentIndex + 1, null, duration);
                } else {
                    slideTo(currentIndex - 1, null, duration);
                }
            } else {
                const step = slideWidth + gap;
                const currentPos = 100 - (currentIndex * step);
                gsap.to(carousel, { x: currentPos, duration: 0.3, ease: 'power2.out' });
            }
        } else {
            const url = selectedItems[currentIndex]?.url;
            if (url) {
                window.open(url, '_blank');
            }
        }
        dragOffset = 0;
        velocity = 0;
    }

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragMove);
    carousel.addEventListener('mouseup', dragEnd);
    carousel.addEventListener('mouseleave', dragEnd);
    carousel.addEventListener('touchstart', dragStart);
    carousel.addEventListener('touchmove', dragMove);
    carousel.addEventListener('touchend', dragEnd);
    carousel.style.cursor = 'grab';

    document.querySelector('.nav.left').addEventListener('click',(e)=>{
      if(animating) return;
      stopAuto();
      slideTo(currentIndex - 1);
    });
    document.querySelector('.nav.right').addEventListener('click',(e)=>{
      if(animating) return;
      stopAuto();
      slideTo(currentIndex + 1);
    });

    let autoTimer = null;
    let autoPlaying = false;
    const AUTO_DELAY = 2000;

    function stopAuto(){
      autoPlaying = false;
      clearTimeout(autoTimer);
    }

    function scheduleAuto(){
      clearTimeout(autoTimer);
      if(!autoPlaying) return;
      autoTimer = setTimeout(()=>{
        slideTo(currentIndex + 1, ()=>{
          if(currentIndex < selectedItems.length - 1){
            scheduleAuto();
          } else {
            stopAuto();
          }
        });
      }, AUTO_DELAY);
    }

    function startAuto(){
      if(selectedItems.length <= 1) return;
      autoPlaying = true;
      scheduleAuto();
    }
    
     // start autoplay once built
    startAuto();

  } catch(err) {
    console.warn('Could not load feed', err);
  }
})();

