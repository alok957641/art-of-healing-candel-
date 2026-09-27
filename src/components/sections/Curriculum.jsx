import {ArrowUpRight} from 'lucide-react'
import Reveal from '../ui/Reveal'
import CTA from '../ui/CTA'
import Media from '../ui/Media'
import {lessons} from '../../data/content'
import {media} from '../../data/media'

export default function Curriculum({onEnquire}){return <section className="experience-section" aria-labelledby="experience-title">
  <div className="experience-noise" aria-hidden="true"/>
  <Reveal className="experience-heading"><span className="eyebrow">03 / THE EXPERIENCE</span><h2 id="experience-title">Six moments to <em>look forward to.</em></h2><p>Step into the session with curiosity. From candle colours to a live demonstration, each chapter brings the practice a little closer.</p></Reveal>
  <div className="experience-gallery"><div className="experience-curve" aria-hidden="true"/><div className="experience-track">
    {lessons.map((lesson,i)=><article className={`experience-card experience-card-${i+1}`} key={lesson.title} style={{'--index':i}}><div className="experience-hanger" aria-hidden="true"><span/></div><div className="experience-image"><Media src={media.lessonCards[i]} alt=""/></div><div className="experience-card-body"><span>0{i+1} / 06</span><h3>{lesson.title}</h3><p>{lesson.text}</p><ArrowUpRight size={17}/></div></article>)}
  </div></div>
  <Reveal className="experience-bottom"><div className="experience-caption"><span>✦</span> A little light. A lot to discover.</div><CTA onClick={onEnquire}>Save my ₹99 seat</CTA></Reveal>
</section>}
