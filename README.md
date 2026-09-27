# Art of Healing · Candle Healing Webinar

React and Tailwind landing page in the warm candle theme, with Framer Motion, Lenis scrolling and a subtle decorative WebGL glow. The Experience section has a curved gallery. The testimonial section uses a moving portrait gallery and a separate infinite carousel of real review text.

## Run in VS Code

Open this folder and run `npm install`, then `npm run dev`. Use `npm run build` for a production build.

## Edit the page

| Change | File |
| --- | --- |
| Content, lesson cards, testimonials and FAQ | `src/data/content.js` |
| Photos and video poster | `src/data/media.js` |
| Video ID, lead endpoint and checkout URL | `.env` |
| Page section order | `src/pages/LandingPage.jsx` |
| Individual sections | `src/components/sections/` |
| Main styling | `src/style.css` |
| Testimonial layout and animation | `src/styles/testimonials.css` |
| Popup form | `src/components/layout/EnquiryModal.jsx` |

The stock portraits in `public/images/portraits` are illustrative. They are deliberately separated from named learner reviews. Replace them with approved learner photos if available. The candle photo is temporary. Sharda Karve's image and other candle imagery came from the existing Art of Healing page.

## Integration

Set your values in `.env`, then restart the dev server. `VITE_LEAD_ENDPOINT` is a public HTTPS endpoint that accepts JSON POST containing `name`, `phone`, `email`, `page`, `utm` and `consent`. When it is blank, the popup explains that no lead was stored. If you set `VITE_PAYMENT_URL`, checkout is offered after a successfully saved lead.

Never put private API keys in `VITE_` variables, as Vite includes them in browser code. Keep secrets on a server.

Source: https://artofhealing.co.in/pages/candle-therapy
Stock images: https://unsplash.com/license
