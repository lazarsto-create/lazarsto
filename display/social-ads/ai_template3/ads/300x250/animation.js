// 300x250 — Medium Rectangle (vertical layout)
DCOAd.init({
  feed: {
    csvPath: window.currentCsvPath || '../../csv/ikea-Tables.csv',
    defaultCurrency: 'RSD'
  },
  products: { count: window.products || 5 },
  carousel: {
    slideWidth: 140,
    gap: 300,
    slideOffset: 10,
    widthMode: 'step',
    layout: 'vertical',
    pricePositioning: { enabled: true, descTopSource: -40 }
  },
  animation: {
    slideDuration: 0.5,
    descriptionFade: true
  },
  drag: { threshold: 40, baseDuration: 0.5 },
  nav: { scaleEffect: true },
  cta: { text: window.ctaText || 'Shop Now' }
});
