// 728x90 — Leaderboard (horizontal layout)
DCOAd.init({
  feed: {
    csvPath: window.currentCsvPath || '../../csv/ikea-Tables.csv',
    defaultCurrency: 'RSD'
  },
  products: { count: window.products || 5, maxCount: 5 },
  carousel: {
    slideWidth: 200,
    gap: 728,
    widthMode: 'fitted',
    layout: 'horizontal'
  },
  animation: { slideDuration: 0.6 },
  drag: {
    moveTarget: 'document',
    threshold: 50,
    baseDuration: 0.6,
    snapBackOffset: 100
  },
  nav: { scaleEffect: false },
  cta: { text: window.ctaText || 'Shop Now' }
});
