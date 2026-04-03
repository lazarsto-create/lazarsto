// 970x250 — Billboard (horizontal layout)
DCOAd.init({
  feed: {
    csvPath: window.currentCsvPath || '../../csv/ikea-Tables.csv',
    defaultCurrency: 'RSD'
  },
  products: { count: window.products || 5, maxCount: 5 },
  carousel: {
    slideWidth: 300,
    gap: 970,
    widthMode: 'fitted',
    layout: 'horizontal',
    initialX: '0px'
  },
  animation: { slideDuration: 0.6 },
  drag: {
    dragTarget: '.media',
    moveTarget: 'document',
    threshold: 50,
    baseDuration: 0.6,
    snapBackOffset: 0,
    cursorTarget: '.media'
  },
  nav: { scaleEffect: false },
  cta: { text: window.ctaText || 'Shop Now' },
  clickArea: { setOnAllSlides: true }
});
