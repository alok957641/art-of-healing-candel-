// Only public, browser-safe values belong in VITE_ variables. Keep secret keys on a server.
export const config = {
  leadEndpoint: import.meta.env.VITE_LEAD_ENDPOINT || '',
  paymentUrl: import.meta.env.VITE_PAYMENT_URL || '',
  youtubeVideoId: import.meta.env.VITE_YOUTUBE_VIDEO_ID || 'hcDtUHqvZ2M',
}
