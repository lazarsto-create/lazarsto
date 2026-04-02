// Load CSV feed, extract `image3` column into `images`, pick 5 random
(async function loadFeedAndImages(){
  try{
    // ad lives in ads/300x250, CSVs are in AI_template3/csv/
    const csvPath = window.currentCsvPath || '../../csv/ikea-Tables.csv';
    console.log('fetching CSV from',csvPath);
    const raw = await fetch(csvPath).then(r=>{
      if(!r.ok) throw new Error('HTTP status '+r.status);
      return r.text();
    });
    console.log('csv loaded, length', raw.length);
    // expose raw CSV content as `feed` (string) and parsed as array of objects
    window.feed = raw;

    // Robust CSV parsing respecting quoted fields with commas
    function parseCSV(text) {
      const rows = [];
      let current = '';
      let inQuotes = false;
      let row = [];
      for(let i=0;i<text.length;i++){
        const ch = text[i];
        if(ch==='"'){
          if(inQuotes && text[i+1]==='"'){
            // escaped quote
            current += '"';
            i++; // skip next
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
      // last field
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
    // overwrite feed with parsed array of objects
    window.feed = feedArr;
    console.log('parsed rows', feedArr.length, 'first row', feedArr[0]);

    // images array from column 'productImage' (URLs) and include Description, price, Headline, URL
    const images = feedArr.map(r=>({
      image3: (r['productImage'] ? r['productImage'].trim() : null),
      data8: (r['Headline'] ? r['Headline'].trim() : ''),
      price16: (r['Description'] ? r['Description'].trim() : ''),
      price4: (r['price'] ? r['price'].trim() : ''),
      currency: (r['price'] && r['price'].includes('€')) ? '' : (r['currency'] && r['currency'].trim() ? r['currency'].trim() : 'RSD'),
      url: (r['URL'] ? r['URL'].trim() : '')
    })).filter(item => item.image3 && typeof item.image3 === 'string');
    window.images = images;
    console.log('all image3 URLs count', images.length);
    // helper to pick N random unique items
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

    // determine how many slides to show from `window.products` (default 3)
    const requested = Number.isInteger(window.products) ? window.products : parseInt(window.products) || 3;
    const count = Math.max(1, Math.min(requested, images.length));
    const selectedItems = getRandomItems(images, count);
    window.selectedItems = selectedItems;
    console.log(`${count} random items:`, selectedItems);
    
    // build carousel inside .carousel container (140x100 slides with text)
    const carousel = document.querySelector('.carousel');
    const gap = 300;
    selectedItems.forEach((item, i)=>{
      const slide = document.createElement('div');
      slide.className = 'slide';
      slide.style.backgroundImage = `url(${item.image3})`;
      slide.style.left = `${i*(140+gap)+10}px`;
      
      // Update full ad clickable area with current slide URL
      if(i === 0 && item.url) {
        const adClickArea = document.getElementById('ad-clickarea');
        if(adClickArea) {
          adClickArea.href = item.url;
          adClickArea.style.display = 'block';
        }
      }
      
      // create description element (price16) inside each slide
      const descField = document.createElement('div');
      descField.className = 'description';
      descField.textContent = item.price16 || '';
      slide.appendChild(descField);
      
      // create price4 element below description
      const price4Field = document.createElement('div');
      price4Field.className = 'price4';
      price4Field.textContent = item.price4 || '';
      price4Field.dataset.currency = item.currency;
      slide.appendChild(price4Field);
      
      // create text field for data8
      const textField = document.createElement('div');
      textField.className = 'slide-text';
      textField.textContent = item.data8;
      slide.appendChild(textField);
      
      carousel.appendChild(slide);
    });
    // set carousel width dynamically so slides align
    carousel.style.width = `${selectedItems.length * (140 + gap)}px`;
    
    // hide nav buttons if only 1 product
    if(selectedItems.length === 1){
      document.querySelector('.nav.left').style.display = 'none';
      document.querySelector('.nav.right').style.display = 'none';
      document.querySelector('.pagination').style.display = 'none';
    }
    
    // reference the first slide's description and price4 elements
    let currentDescription = carousel.children[0]?.querySelector('.description');
    let currentPrice4 = carousel.children[0]?.querySelector('.price4');
    
    // function to position price4 elements below description elements for ALL slides
    function positionAllPrice4Below(){
      requestAnimationFrame(() => {
        for(let i = 0; i < carousel.children.length; i++){
          const slide = carousel.children[i];
          const desc = slide.querySelector('.description');
          const price4 = slide.querySelector('.price4');
          if(desc && price4){
            const descTop = -40; // description position Y
            const descHeight = desc.offsetHeight;
            // price4 position = description top + description height + 3px
            const price4Top = descTop + descHeight + 3;
            price4.style.top = `${price4Top}px`;
          }
        }
      });
    }
    
    // position all price4 elements below their descriptions
    positionAllPrice4Below();
    
    // create pagination bullets
    const pagination = document.querySelector('.pagination');
    selectedItems.forEach((item, i) => {
      const bullet = document.createElement('div');
      bullet.className = 'bullet';
      if(i === 0) bullet.classList.add('active');
      bullet.addEventListener('click', () => {
        if(animating) return;
        // Change bullet color immediately on click
        const bullets = document.querySelectorAll('.pagination .bullet');
        bullets.forEach((b, idx) => {
          b.classList.toggle('active', idx === i);
        });
        stopAuto();
        slideTo(i);
      });
      pagination.appendChild(bullet);
    });

    // populate CTA text from window.ctaText variable
    const ctaTextElement = document.querySelector('.cta-text');
    if(ctaTextElement && window.ctaText) {
      ctaTextElement.textContent = window.ctaText;
    }
    document.querySelector('.cta').addEventListener('click', () => {
      const url = selectedItems[currentIndex]?.url;
      if(url) window.open(url, '_blank');
    });
    
    // update active bullet on slide change
    function updateActiveBullet(index){
      const bullets = document.querySelectorAll('.pagination .bullet');
      bullets.forEach((bullet, i) => {
        bullet.classList.toggle('active', i === (index !== undefined ? index : currentIndex));
      });
    }
    
    function updateDescriptionAnimation(){
      const current = carousel.children[currentIndex];
      if(current){
        currentDescription = current.querySelector('.description');
        currentPrice4 = current.querySelector('.price4');
        if(currentDescription){
          gsap.to(currentDescription, {opacity:1, duration:0.3, ease:'power2.out'});
        }
        if(currentPrice4){
          gsap.to(currentPrice4, {opacity:1, duration:0.3, ease:'power2.out'});
        }
      }
      updateActiveBullet();
      // Update ad clickable area URL
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

    let currentIndex = 0;
    let animating = false; // prevent overlapping moves
    function slideTo(index, onDone, duration = 0.5){
      const len = selectedItems.length;
      if(len === 0) return;
      const step = 140 + gap;
      // normalize target with wrapping
      const target = ((index % len) + len) % len;
      if(target === currentIndex) return;
      if(animating) return; // ignore while a transition is under way
      animating = true;
      // Update bullet immediately when slide starts
      updateActiveBullet(target);
      // wrap backward: 0 -> last
      if(currentIndex === 0 && target === len - 1){
        const last = carousel.children[len-1];
        const orig = last.style.left;
        last.style.left = `${-step}px`;
        gsap.to(carousel, {x:`+=${step}px`, duration, ease:'power1.inOut', onComplete:()=>{
          gsap.set(carousel,{x:`-${(len-1)*step}px`});
          last.style.left = orig;
          currentIndex = target;
          updateDescriptionAnimation();
          if(typeof onDone === 'function') onDone();
          animating = false;
        }});
        return;
      }
      // wrap forward: last -> 0
      if(currentIndex === len - 1 && target === 0){
        const first = carousel.children[0];
        const orig = first.style.left;
        first.style.left = `${len*step}px`;
        gsap.to(carousel, {x:`-=${step}px`, duration, ease:'power1.inOut', onComplete:()=>{
    gsap.set(carousel,{x:`0px`});
          first.style.left = orig;
          currentIndex = target;
          updateDescriptionAnimation();
          if(typeof onDone === 'function') onDone();
          animating = false;
        }});
        return;
      }
      // normal move
      currentIndex = target;
      const offset = target * step;
      gsap.to(carousel,{x:`-${offset}px`,duration,ease:'power2.inOut', onComplete:()=>{
        if(typeof onDone === 'function') onDone();
        updateDescriptionAnimation();
        animating = false;
      }});
    }

    // Drag to slide functionality
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
        startX = e.pageX || e.touches[0].pageX;
        lastX = startX;
        lastTime = Date.now();
        velocity = 0;
        stopAuto();
        carousel.style.cursor = 'grabbing';
    }

    function dragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.pageX || e.touches[0].pageX;
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

        const step = 140 + gap;
        const currentPos = -(currentIndex * step);
        gsap.set(carousel, { x: currentPos + dragOffset });
    }

    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;
        carousel.style.cursor = 'grab';

        const speed = Math.abs(velocity);
        let duration = 0.5 - (speed * 0.3);
        if (duration < 0.2) duration = 0.2;
        if (duration > 0.5) duration = 0.5;

        if (wasDragged) {
            if (Math.abs(dragOffset) > 40 || speed > 0.4) { // Threshold to trigger slide change
                if (dragOffset < 0) {
                    slideTo(currentIndex + 1, null, duration);
                } else {
                    slideTo(currentIndex - 1, null, duration);
                }
            } else {
                // Snap back to current slide
                const step = 140 + gap;
                const currentPos = -(currentIndex * step);
                gsap.to(carousel, { x: currentPos, duration: 0.3, ease: 'power2.out' });
            }
        } else {
            // It's a click
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
      if(animating) return; // ignore extra clicks
      const btn = e.currentTarget;
      gsap.fromTo(btn, {scale:1}, {scale:0.86, duration:0.12, ease:'power2.inOut', yoyo:true, repeat:1});
      // clicking should cancel autoplay entirely
      if(autoPlaying){
        stopAuto();
      }
      slideTo(currentIndex-1);
    });
    document.querySelector('.nav.right').addEventListener('click',(e)=>{
      if(animating) return;
      const btn = e.currentTarget;
      gsap.fromTo(btn, {scale:1}, {scale:0.86, duration:0.12, ease:'power2.inOut', yoyo:true, repeat:1});
      if(autoPlaying){
        stopAuto();
      }
      slideTo(currentIndex+1);
    });
    // autoplay implementation (single pass, resumes after manual clicks)
    let autoTimer = null;
    let autoPlaying = false;
    const AUTO_DELAY = 2000; // milliseconds between slide starts
    function stopAuto(){
      autoPlaying = false;
      clearTimeout(autoTimer);
      autoTimer = null;
    }
    function scheduleAuto(){
      clearTimeout(autoTimer);
      if(!autoPlaying) return;
      autoTimer = setTimeout(()=>{
        slideTo(currentIndex+1, ()=>{
          if(currentIndex < selectedItems.length-1){
            scheduleAuto();
          } else {
            stopAuto();
          }
        });
      }, AUTO_DELAY);
    }
    function startAuto(){
      if(selectedItems.length<=1) return;
      autoPlaying = true;
      scheduleAuto();
    }
    // start autoplay once built
    startAuto();
  } catch(err) {
    console.warn('Could not load feed', err);
  }
})();