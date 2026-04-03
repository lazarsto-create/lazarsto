// 300x600 — Half Page (vertical layout)
DCOAd.init({
  feed: {
    csvPath: window.currentCsvPath || '../../csv/ikea-Tables.csv',
    defaultCurrency: 'RSD'
  },
  products: { count: window.products || 5 },
  carousel: {
    slideWidth: 180,
    gap: 110,
    widthMode: 'step',
    layout: 'vertical',
    pricePositioning: { enabled: true, descTopSource: -75 }
  },
  animation: {
    slideDuration: 0.6,
    descriptionFade: true
  },
  drag: { threshold: 50, baseDuration: 0.6 },
  nav: { scaleEffect: true },
  cta: { text: window.ctaText || 'Shop Now' }
});
