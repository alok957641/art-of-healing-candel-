// Swap these paths for your approved photos in /public/images/ whenever you want.
// The local stock image is temporary. The portrait comes from Art of Healing's existing page.
export const media = {
  hero: '/images/candle-stock.jpg',
  introduction: '/images/candle-stock.jpg',
  mentor: '/images/sharda-about.png',
  interlude: '/images/candle-stock.jpg',
  lessonCards: [
    '/images/candle-stock.jpg',
    '/images/candle-stock.jpg',
    '/images/candle-stock.jpg',
    '/images/candle-stock.jpg',
    '/images/candle-stock.jpg',
    '/images/candle-stock.jpg',
  ],
  reviewCards: [
    '/images/candle-stock.jpg', '/images/candle-stock.jpg',
    '/images/candle-stock.jpg', '/images/candle-stock.jpg',
  ],
  communityPortraits: [1,2,3,4,5,6].map(n => `/images/portraits/person-${n}.jpg`),
  // This video ID was present on the existing Candle Therapy page.
  introductionVideoId: 'hcDtUHqvZ2M',
  videoPoster: '/images/candle-stock.jpg',
}
