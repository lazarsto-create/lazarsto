/**
 * DCO Display Ad Component Library
 * Reusable carousel-based display ad system with CSV feed support.
 *
 * Usage:  DCOAd.init({ feed:{...}, carousel:{...}, ... })
 * Requires: GSAP 3.x loaded before this script.
 */
(function () {
  'use strict';

  // ════════════════════════════════════════════════════════════════
  // UTILITY
  // ════════════════════════════════════════════════════════════════

  function mergeDeep(target, source) {
    var out = Object.assign({}, target);
    for (var key in source) {
      if (!source.hasOwnProperty(key)) continue;
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])
          && typeof target[key] === 'object' && target[key] !== null) {
        out[key] = mergeDeep(target[key], source[key]);
      } else if (source[key] !== undefined) {
        out[key] = source[key];
      }
    }
    return out;
  }

  // ════════════════════════════════════════════════════════════════
  // DEFAULTS
  // ════════════════════════════════════════════════════════════════

  var DEFAULTS = {
    feed: {
      csvPath: '../../csv/ikea-Tables.csv',
      fieldMap: {
        image: 'productImage', headline: 'Headline',
        description: 'Description', price: 'price',
        currency: 'currency', url: 'URL'
      },
      defaultCurrency: 'RSD'
    },
    products: { count: 3, maxCount: null, randomize: true },
    carousel: {
      selector: '.carousel',
      slideWidth: 140,
      gap: 100,
      widthMode: 'step',       // 'step' = count*step  |  'fitted' = count*step - gap
      layout: 'vertical',      // 'vertical' | 'horizontal'
      slideOffset: 0,             // px offset added to each slide's left (for centering within media)
      pricePositioning: { enabled: false, descTopSource: 'computed' },
      fontShrink: { enabled: false, selector: '.slide-text', maxSize: 12, minSize: 7, step: 0.5 },
      initialX: null
    },
    animation: {
      slideDuration: 0.6,
      slideEase: 'power2.inOut',
      wrapEase: 'power1.inOut',
      descriptionFade: false,
      fadeDuration: 0.3
    },
    drag: {
      dragTarget: '.carousel',
      moveTarget: 'self',       // 'self' | 'document'
      threshold: 50,
      velocityThreshold: 0.4,
      baseDuration: 0.6,
      snapBackOffset: 0,
      cursorTarget: null
    },
    nav: {
      leftSelector: '.nav.left',
      rightSelector: '.nav.right',
      scaleEffect: false,
      scaleAmount: 0.86,
      scaleDuration: 0.12
    },
    pagination: { selector: '.pagination', bulletClass: 'bullet', activeClass: 'active' },
    autoplay: { enabled: true, delay: 2000, stopAtEnd: true },
    cta: { selector: '.cta', textSelector: '.cta-text', text: 'Shop Now' },
    clickArea: { selector: '#ad-clickarea', setOnAllSlides: false },
    header: { enabled: false, imageSelector: '.table-img img', videoSelector: '.header-video' },
    hooks: { onSlidesBuilt: null, onSlideChange: null, onInit: null }
  };

  // ════════════════════════════════════════════════════════════════
  // FEED MODULE
  // ════════════════════════════════════════════════════════════════

  function parseCSV(text) {
    var rows = [], current = '', inQuotes = false, row = [];
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (ch === '"') {
        if (inQuotes && text[i + 1] === '"') { current += '"'; i++; }
        else { inQuotes = !inQuotes; }
      } else if (ch === ',' && !inQuotes) {
        row.push(current); current = '';
      } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
        if (ch === '\r' && text[i + 1] === '\n') i++;
        row.push(current); rows.push(row); row = []; current = '';
      } else {
        current += ch;
      }
    }
    if (current !== '' || row.length > 0) { row.push(current); rows.push(row); }
    return rows;
  }

  async function loadCSV(path) {
    var res = await fetch(path);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.text();
  }

  function mapFields(feedArr, fm, defCurrency) {
    return feedArr.map(function (r) {
      var rawPrice = r[fm.price] ? r[fm.price].trim() : '';
      var rawCurr = r[fm.currency] ? r[fm.currency].trim() : '';
      var currency = rawPrice.includes('\u20AC')
        ? ''
        : (rawCurr ? rawCurr : defCurrency);
      return {
        image:       r[fm.image]       ? r[fm.image].trim()       : null,
        headline:    r[fm.headline]    ? r[fm.headline].trim()    : '',
        description: r[fm.description] ? r[fm.description].trim() : '',
        price:       rawPrice,
        currency:    currency,
        url:         r[fm.url]         ? r[fm.url].trim()         : ''
      };
    }).filter(function (it) { return it.image && typeof it.image === 'string'; });
  }

  function getRandomItems(arr, n) {
    var out = [], copy = arr.slice();
    var count = Math.min(n, copy.length);
    for (var i = 0; i < count; i++) {
      var idx = Math.floor(Math.random() * copy.length);
      out.push(copy.splice(idx, 1)[0]);
    }
    return out;
  }

  // ════════════════════════════════════════════════════════════════
  // CAROUSEL — SLIDE BUILDING
  // ════════════════════════════════════════════════════════════════

  function buildVerticalSlide(item, idx, step, cfg) {
    var slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.width = cfg.carousel.slideWidth + 'px';
    slide.style.left = (idx * step + cfg.carousel.slideOffset) + 'px';
    slide.style.backgroundImage = 'url(' + item.image + ')';

    var desc = document.createElement('div');
    desc.className = 'description';
    desc.textContent = item.description;
    slide.appendChild(desc);

    var price = document.createElement('div');
    price.className = 'price4';
    price.textContent = item.price;
    price.dataset.currency = item.currency;
    slide.appendChild(price);

    var text = document.createElement('div');
    text.className = 'slide-text';
    text.textContent = item.headline;
    slide.appendChild(text);

    return slide;
  }

  function buildHorizontalSlide(item, idx, step, cfg) {
    var slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.left = (idx * step) + 'px';
    slide.style.backgroundImage = 'url(' + item.image + ')';

    var container = document.createElement('div');
    container.className = 'slide-text-container';

    var text = document.createElement('div');
    text.className = 'slide-text';
    text.innerHTML = item.headline;
    container.appendChild(text);

    var desc = document.createElement('div');
    desc.className = 'slide-description';
    desc.innerHTML = item.description;
    container.appendChild(desc);

    var price = document.createElement('div');
    price.className = 'slide-price';
    price.innerHTML = item.price;
    price.dataset.currency = item.currency;
    container.appendChild(price);

    slide.appendChild(container);
    return slide;
  }

  function buildSlides(carouselEl, items, cfg) {
    var step = cfg.carousel.slideWidth + cfg.carousel.gap;
    var isHoriz = cfg.carousel.layout === 'horizontal';
    var builder = isHoriz ? buildHorizontalSlide : buildVerticalSlide;

    items.forEach(function (item, i) {
      carouselEl.appendChild(builder(item, i, step, cfg));
    });

    // Set carousel width
    if (cfg.carousel.widthMode === 'fitted') {
      carouselEl.style.width = (items.length * (cfg.carousel.slideWidth + cfg.carousel.gap) - cfg.carousel.gap) + 'px';
    } else {
      carouselEl.style.width = (items.length * step) + 'px';
    }

    return step;
  }

  // ════════════════════════════════════════════════════════════════
  // POST-PROCESS: price positioning & font shrinking
  // ════════════════════════════════════════════════════════════════

  function positionPrices(carouselEl, cfg) {
    if (!cfg.carousel.pricePositioning.enabled) return;
    var slides = carouselEl.children;
    for (var i = 0; i < slides.length; i++) {
      var desc = slides[i].querySelector('.description');
      var p4 = slides[i].querySelector('.price4');
      if (!desc || !p4) continue;

      var descTop;
      if (cfg.carousel.pricePositioning.descTopSource === 'computed') {
        descTop = parseFloat(getComputedStyle(desc).top) || 0;
      } else {
        descTop = cfg.carousel.pricePositioning.descTopSource;
      }
      var descH = desc.offsetHeight;
      p4.style.top = (descTop + descH + 5) + 'px';
    }
  }

  function shrinkFonts(carouselEl, cfg) {
    if (!cfg.carousel.fontShrink.enabled) return;
    var sel = cfg.carousel.fontShrink.selector;
    var max = cfg.carousel.fontShrink.maxSize;
    var min = cfg.carousel.fontShrink.minSize;
    var s = cfg.carousel.fontShrink.step;

    for (var i = 0; i < carouselEl.children.length; i++) {
      var el = carouselEl.children[i].querySelector(sel);
      if (!el) continue;
      var fs = max;
      el.style.fontSize = fs + 'px';
      while (el.scrollWidth > el.clientWidth && fs > min) {
        fs -= s;
        el.style.fontSize = fs + 'px';
      }
    }
  }

  // ════════════════════════════════════════════════════════════════
  // ENGINE — slide navigation with wrapping
  // ════════════════════════════════════════════════════════════════

  function createEngine(carouselEl, items, step, cfg) {
    var currentIndex = 0;
    var animating = false;
    var len = items.length;
    var bulletEls = [];
    var clickAreaEl = document.querySelector(cfg.clickArea.selector);

    // ── bullet management ──
    function updateBullet(idx) {
      bulletEls.forEach(function (b, i) {
        b.classList.toggle(cfg.pagination.activeClass, i === idx);
      });
    }

    // ── vertical: fade description + price ──
    function updateDescription() {
      if (!cfg.animation.descriptionFade) return;
      var slide = carouselEl.children[currentIndex];
      if (!slide) return;
      var d = slide.querySelector('.description');
      var p = slide.querySelector('.price4');
      if (d) gsap.to(d, { opacity: 1, duration: cfg.animation.fadeDuration, ease: 'power2.out' });
      if (p) gsap.to(p, { opacity: 1, duration: cfg.animation.fadeDuration, ease: 'power2.out' });
    }

    // ── horizontal: update click URL ──
    function updateUrl() {
      var item = items[currentIndex];
      if (item && item.url && clickAreaEl) {
        clickAreaEl.href = item.url;
      }
    }

    // ── core navigation ──
    function slideTo(target, onDone, overrideDuration) {
      if (animating) return;
      var duration = overrideDuration || cfg.animation.slideDuration;

      if (target < 0) {
        // Wrap backward (first → last):
        // Move last slide to just before first (position -step), animate carousel right,
        // then snap everything back to natural positions.
        animating = true;
        var lastSlide = carouselEl.children[len - 1];
        var origLeft = lastSlide.style.left;
        lastSlide.style.left = (-step) + 'px';
        gsap.to(carouselEl, {
          x: '+=' + step,
          duration: duration,
          ease: cfg.animation.wrapEase,
          onComplete: function () {
            gsap.set(carouselEl, { x: -((len - 1) * step) });
            lastSlide.style.left = origLeft;
            currentIndex = len - 1;
            updateBullet(currentIndex);
            updateDescription();
            updateUrl();
            animating = false;
            if (cfg.hooks.onSlideChange) cfg.hooks.onSlideChange(currentIndex);
            if (onDone) onDone();
          }
        });
      } else if (target >= len) {
        // Wrap forward (last → first):
        // Move first slide to just after last (position len*step), animate carousel left,
        // then snap everything back to natural positions.
        animating = true;
        var firstSlide = carouselEl.children[0];
        var origLeftF = firstSlide.style.left;
        firstSlide.style.left = (len * step) + 'px';
        gsap.to(carouselEl, {
          x: -(len * step),
          duration: duration,
          ease: cfg.animation.wrapEase,
          onComplete: function () {
            gsap.set(carouselEl, { x: '0px' });
            firstSlide.style.left = origLeftF;
            currentIndex = 0;
            updateBullet(currentIndex);
            updateDescription();
            updateUrl();
            animating = false;
            if (cfg.hooks.onSlideChange) cfg.hooks.onSlideChange(currentIndex);
            if (onDone) onDone();
          }
        });
      } else {
        // Normal indexed move
        animating = true;
        currentIndex = target;
        updateBullet(currentIndex);
        gsap.to(carouselEl, {
          x: -(target * step) + 'px',
          duration: duration,
          ease: cfg.animation.slideEase,
          onComplete: function () {
            updateDescription();
            updateUrl();
            animating = false;
            if (cfg.hooks.onSlideChange) cfg.hooks.onSlideChange(currentIndex);
            if (onDone) onDone();
          }
        });
      }
    }

    return {
      slideTo: slideTo,
      getIndex: function () { return currentIndex; },
      isAnimating: function () { return animating; },
      getStep: function () { return step; },
      setBullets: function (els) { bulletEls = els; },
      updateBullet: updateBullet,
      updateDescription: updateDescription,
      updateUrl: updateUrl
    };
  }

  // ════════════════════════════════════════════════════════════════
  // DRAG MODULE
  // ════════════════════════════════════════════════════════════════

  function attachDrag(carouselEl, cfg, engine, stopAutoFn, schedAutoFn, items) {
    var step = engine.getStep();
    var isDragging = false;
    var startX = 0, currentX = 0, lastX = 0, lastTime = 0, velocity = 0;
    var clickAllowed = true;

    var dragEl = (cfg.drag.dragTarget === '.carousel')
      ? carouselEl
      : document.querySelector(cfg.drag.dragTarget) || carouselEl;

    var moveEl = cfg.drag.moveTarget === 'document' ? document : dragEl;

    // cursor
    if (cfg.drag.cursorTarget) {
      var curEl = document.querySelector(cfg.drag.cursorTarget);
      if (curEl) curEl.style.cursor = 'grab';
    }

    function getX(e) {
      return e.touches ? e.touches[0].clientX : e.clientX;
    }

    function onStart(e) {
      if (engine.isAnimating()) return;
      isDragging = true;
      clickAllowed = true;
      startX = getX(e);
      currentX = startX;
      lastX = startX;
      lastTime = Date.now();
      velocity = 0;
      stopAutoFn();
    }

    function onMove(e) {
      if (!isDragging) return;
      var x = getX(e);
      var now = Date.now();
      var dt = now - lastTime;
      if (dt > 0) velocity = (x - lastX) / dt;
      lastX = x;
      lastTime = now;
      currentX = x;
      if (Math.abs(x - startX) > 5) clickAllowed = false;

      var basePos = cfg.drag.snapBackOffset - (engine.getIndex() * step);
      gsap.set(carouselEl, { x: basePos + (x - startX) });
    }

    function onEnd() {
      if (!isDragging) return;
      isDragging = false;

      var dragOffset = Math.abs(currentX - startX);
      var speed = Math.abs(velocity);

      if (dragOffset > cfg.drag.threshold || speed > cfg.drag.velocityThreshold) {
        var dir = (currentX - startX) > 0 ? -1 : 1;
        var target = engine.getIndex() + dir;
        var dur = Math.max(0.2, Math.min(cfg.drag.baseDuration, cfg.drag.baseDuration - speed * 0.3));
        engine.slideTo(target, schedAutoFn, dur);
      } else if (clickAllowed) {
        // It's a click — open current product URL
        var item = items && items[engine.getIndex()];
        if (item && item.url) window.open(item.url, '_blank');
        // Snap back to current position
        gsap.to(carouselEl, {
          x: cfg.drag.snapBackOffset - (engine.getIndex() * step),
          duration: 0.3,
          ease: 'power2.out'
        });
        schedAutoFn();
      } else {
        // Snap back (small drag, no click)
        gsap.to(carouselEl, {
          x: cfg.drag.snapBackOffset - (engine.getIndex() * step),
          duration: 0.3,
          ease: 'power2.out'
        });
        schedAutoFn();
      }
    }

    dragEl.addEventListener('mousedown', onStart);
    dragEl.addEventListener('touchstart', onStart, { passive: true });
    moveEl.addEventListener('mousemove', onMove);
    moveEl.addEventListener('touchmove', onMove, { passive: true });

    if (cfg.drag.moveTarget === 'document') {
      document.addEventListener('mouseup', onEnd);
      document.addEventListener('touchend', onEnd);
    } else {
      dragEl.addEventListener('mouseup', onEnd);
      dragEl.addEventListener('mouseleave', onEnd);
      dragEl.addEventListener('touchend', onEnd);
    }

    return { isClickAllowed: function () { return clickAllowed; } };
  }

  // ════════════════════════════════════════════════════════════════
  // AUTOPLAY MODULE
  // ════════════════════════════════════════════════════════════════

  function createAutoplay(engine, items, cfg) {
    var timer = null;

    function stop() {
      if (timer) { clearTimeout(timer); timer = null; }
    }

    function schedule() {
      stop();
      if (!cfg.autoplay.enabled) return;
      if (cfg.autoplay.stopAtEnd && engine.getIndex() >= items.length - 1) return;
      timer = setTimeout(function () {
        engine.slideTo(engine.getIndex() + 1, schedule);
      }, cfg.autoplay.delay);
    }

    function start() {
      schedule();
    }

    return { start: start, stop: stop, schedule: schedule };
  }

  // ════════════════════════════════════════════════════════════════
  // NAVIGATION MODULE
  // ════════════════════════════════════════════════════════════════

  function attachNav(cfg, engine, autoplay) {
    var leftBtn = document.querySelector(cfg.nav.leftSelector);
    var rightBtn = document.querySelector(cfg.nav.rightSelector);

    function handleClick(dir) {
      if (engine.isAnimating()) return;
      autoplay.stop();
      engine.slideTo(engine.getIndex() + dir, function () { autoplay.schedule(); });
    }

    function scalePress(btn) {
      if (!cfg.nav.scaleEffect) return;
      gsap.fromTo(btn, { scale: 1 },
        { scale: cfg.nav.scaleAmount, duration: cfg.nav.scaleDuration,
          ease: 'power2.inOut', yoyo: true, repeat: 1 });
    }

    if (leftBtn) {
      leftBtn.addEventListener('click', function () {
        scalePress(leftBtn);
        handleClick(-1);
      });
    }
    if (rightBtn) {
      rightBtn.addEventListener('click', function () {
        scalePress(rightBtn);
        handleClick(1);
      });
    }
  }

  // ════════════════════════════════════════════════════════════════
  // PAGINATION MODULE
  // ════════════════════════════════════════════════════════════════

  function buildPagination(items, cfg, engine, autoplay) {
    var container = document.querySelector(cfg.pagination.selector);
    if (!container) return;

    var bullets = [];
    items.forEach(function (_, i) {
      var b = document.createElement('div');
      b.className = cfg.pagination.bulletClass + (i === 0 ? ' ' + cfg.pagination.activeClass : '');
      b.addEventListener('click', function () {
        if (engine.isAnimating()) return;
        autoplay.stop();
        engine.slideTo(i, function () { autoplay.schedule(); });
      });
      container.appendChild(b);
      bullets.push(b);
    });

    engine.setBullets(bullets);
  }

  // ════════════════════════════════════════════════════════════════
  // CTA MODULE
  // ════════════════════════════════════════════════════════════════

  function setupCTA(cfg, engine, items) {
    var ctaEl = document.querySelector(cfg.cta.selector);
    var textEl = document.querySelector(cfg.cta.textSelector);
    if (textEl) textEl.textContent = cfg.cta.text;

    if (ctaEl) {
      ctaEl.addEventListener('click', function (e) {
        e.preventDefault();
        var item = items[engine.getIndex()];
        if (item && item.url) window.open(item.url, '_blank');
      });
    }
  }

  // ════════════════════════════════════════════════════════════════
  // CLICK AREA MODULE
  // ════════════════════════════════════════════════════════════════

  function setupClickArea(cfg, items) {
    var el = document.querySelector(cfg.clickArea.selector);
    if (!items.length) return;

    if (el) {
      // Set initial URL (updateUrl() keeps it in sync on slide change)
      el.href = items[0].url || '#';
      // Disable native link — URL opening is handled 100% via JavaScript below
      el.style.pointerEvents = 'none';
    }

    // Ad-level click handler: opens URL for clicks anywhere on the ad,
    // except on interactive controls (nav, pagination, cta) and the drag area.
    var adEl = document.getElementById('ad');
    if (!adEl) return;

    var dragTargetSel = cfg.drag && cfg.drag.dragTarget ? cfg.drag.dragTarget : '.carousel';

    adEl.addEventListener('click', function (e) {
      // Ignore interactive controls
      if (e.target.closest('.nav')) return;
      if (e.target.closest('.pagination')) return;
      if (e.target.closest('.cta')) return;
      // Ignore drag area — the drag system's onEnd handles clicks there
      var dragEl = document.querySelector(dragTargetSel);
      if (dragEl && dragEl.contains(e.target)) return;
      // Open current slide URL
      var href = el ? el.getAttribute('href') : '';
      if (href && href !== '#' && href !== '') {
        window.open(href, '_blank');
      }
    });
  }

  // ════════════════════════════════════════════════════════════════
  // OPACITY REVEAL
  // ════════════════════════════════════════════════════════════════

  function revealAd() {
    var ad = document.getElementById('ad');
    if (ad) ad.style.opacity = '1';
  }

  // ════════════════════════════════════════════════════════════════
  // MAIN INIT
  // ════════════════════════════════════════════════════════════════

  window.DCOAd = {
    init: async function (userConfig) {
      var cfg = mergeDeep(DEFAULTS, userConfig || {});

      try {
        // ── 1. Load & parse CSV ──
        var csvPath = cfg.feed.csvPath;
        var raw = await loadCSV(csvPath);
        window.feed = raw;

        var lines = parseCSV(raw).filter(function (r) { return r.length > 0; });
        if (lines.length < 2) return;
        var headers = lines.shift().map(function (h) { return h.trim().replace(/^"|"$/g, ''); });
        var feedArr = lines.map(function (cols) {
          var obj = {};
          headers.forEach(function (h, i) { obj[h] = (cols[i] || '').trim().replace(/^"|"$/g, ''); });
          return obj;
        });
        window.feed = feedArr;

        // ── 2. Map fields & select items ──
        var allItems = mapFields(feedArr, cfg.feed.fieldMap, cfg.feed.defaultCurrency);
        window.images = allItems;

        var requested = cfg.products.count;
        var maxN = cfg.products.maxCount ? Math.min(requested, cfg.products.maxCount) : requested;
        var count = Math.max(1, Math.min(maxN, allItems.length));
        var selectedItems = cfg.products.randomize
          ? getRandomItems(allItems, count)
          : allItems.slice(0, count);

        // ── 3. Build carousel slides ──
        var carouselEl = document.querySelector(cfg.carousel.selector);
        if (!carouselEl) { console.warn('DCOAd: carousel element not found'); return; }

        var step = buildSlides(carouselEl, selectedItems, cfg);

        if (cfg.carousel.initialX !== null) {
          gsap.set(carouselEl, { x: cfg.carousel.initialX });
        }

        // ── 4. Hide nav/pagination if single product ──
        if (selectedItems.length === 1) {
          var navL = document.querySelector(cfg.nav.leftSelector);
          var navR = document.querySelector(cfg.nav.rightSelector);
          var pagEl = document.querySelector(cfg.pagination.selector);
          if (navL) navL.style.display = 'none';
          if (navR) navR.style.display = 'none';
          if (pagEl) pagEl.style.display = 'none';
        }

        // ── 5. Post-process ──
        positionPrices(carouselEl, cfg);
        shrinkFonts(carouselEl, cfg);

        if (cfg.hooks.onSlidesBuilt) cfg.hooks.onSlidesBuilt(carouselEl, selectedItems);

        // ── 6. Create engine ──
        var engine = createEngine(carouselEl, selectedItems, step, cfg);

        // ── 7. Pagination ──
        buildPagination(selectedItems, cfg, engine, { stop: function(){}, schedule: function(){} });

        // ── 8. Autoplay ──
        var autoplay = createAutoplay(engine, selectedItems, cfg);

        // Re-wire pagination with real autoplay
        var pagContainer = document.querySelector(cfg.pagination.selector);
        if (pagContainer) {
          var bullets = pagContainer.querySelectorAll('.' + cfg.pagination.bulletClass);
          bullets.forEach(function (b, i) {
            b.replaceWith(b.cloneNode(true)); // remove old listeners
          });
          // Re-query and re-attach
          var newBullets = [];
          pagContainer.querySelectorAll('.' + cfg.pagination.bulletClass).forEach(function (b, i) {
            b.addEventListener('click', function () {
              if (engine.isAnimating()) return;
              autoplay.stop();
              engine.slideTo(i, function () { autoplay.schedule(); });
            });
            newBullets.push(b);
          });
          engine.setBullets(newBullets);
        }

        // ── 9. CTA ──
        setupCTA(cfg, engine, selectedItems);

        // ── 10. Click area ──
        setupClickArea(cfg, selectedItems);

        // ── 11. Drag ──
        attachDrag(carouselEl, cfg, engine, autoplay.stop, autoplay.schedule, selectedItems);

        // ── 12. Navigation arrows ──
        attachNav(cfg, engine, autoplay);

        // ── 13. Start autoplay ──
        autoplay.start();

        // ── 14. Reveal ad ──
        revealAd();

        // ── 15. Hook ──
        if (cfg.hooks.onInit) cfg.hooks.onInit(engine, selectedItems);

      } catch (err) {
        console.warn('DCOAd: Could not load feed', err);
        revealAd(); // show ad even on error
      }
    }
  };

})();
