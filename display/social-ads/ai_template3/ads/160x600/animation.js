// 160x600 — Wide Skyscraper (vertical layout)
DCOAd.init({
  feed: {
    csvPath: window.currentCsvPath || '../../csv/ikea-Tables.csv',
    defaultCurrency: 'RSD'
  },
  products: { count: window.products || 5 },
  carousel: {
    slideWidth: 120,
    gap: 60,
    widthMode: 'step',
    layout: 'vertical',
    pricePositioning: { enabled: true, descTopSource: 'computed' },
    fontShrink: { enabled: true, maxSize: 12, minSize: 7 }
  },
  animation: {
    slideDuration: 0.6,
    descriptionFade: true
  },
  drag: { threshold: 40, baseDuration: 0.6 },
  nav: { scaleEffect: true },
  cta: { text: window.ctaText || 'Shop Now' }
});
