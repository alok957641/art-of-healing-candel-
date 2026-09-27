import {Check,Quote} from 'lucide-react'
import Reveal from '../ui/Reveal'
import Media from '../ui/Media'
import CTA from '../ui/CTA'
import {media} from '../../data/media'
export default function AboutSharda({onEnquire}){return <section className="section about-sharda" aria-labelledby="sharda-title">
  <Reveal className="about-photo"><Media src={media.mentor} alt="Mrs. Sharda Karve, founder of Art of Healing" className="about-photo-media"/><span className="about-photo-caption">Mrs. Sharda Karve <small>FOUNDER · ART OF HEALING</small></span></Reveal>
  <Reveal className="about-content" delay={.12}><span className="eyebrow">05 / ABOUT YOUR GUIDE</span><h2 id="sharda-title">Meet the woman<br/>behind <em>Art of Healing.</em></h2><p className="about-name">Mrs. Sharda Karve</p><p>Mrs. Sharda Karve is the founder of Art of Healing and an energy healing grandmaster. With 35 years of experience, she has guided thousands of people through approachable healing practices.</p><p>Her teaching is rooted in clear explanations, practical demonstrations and a gentle approach. In the Candle Healing webinar, she shares her personal journey with candles, explains their colours and significance, and guides a live ritual followed by questions.</p><div className="about-points"><span><Check size={16}/> 35 years of experience</span><span><Check size={16}/> Live guidance in Marathi</span><span><Check size={16}/> A calm, beginner friendly approach</span></div><div className="about-quote"><Quote size={23}/><span>Learn the foundations with someone who has spent decades teaching them.</span></div><CTA onClick={onEnquire}>Join Sharda Ma’am</CTA></Reveal>
</section>}
