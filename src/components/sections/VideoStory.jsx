import {useState} from 'react'
import {Play,Volume2} from 'lucide-react'
import Reveal from '../ui/Reveal'
import CTA from '../ui/CTA'
import {media} from '../../data/media'
import {config} from '../../config/env'
export default function VideoStory({onEnquire}){
  const [playing,setPlaying]=useState(false)
  const videoId=config.youtubeVideoId||media.introductionVideoId
  return <section className="section video-section" aria-labelledby="video-title">
    <Reveal className="video-intro"><span className="eyebrow">02 / WATCH THE STORY</span><h2 id="video-title">See the experience <em>for yourself.</em></h2><p>Hear more about the candle healing session before you reserve your seat.</p></Reveal>
    <Reveal className="video-layout" delay={.12}>
      <div className="video-frame">{playing?<iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`} title="Art of Healing Candle Therapy video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>:<button className="video-poster" onClick={()=>setPlaying(true)} aria-label="Play Candle Therapy video" style={{backgroundImage:`linear-gradient(0deg,rgba(25,15,10,.82),rgba(25,15,10,.08)),url('${media.videoPoster}')`}}><span className="play-circle"><Play fill="currentColor" size={28}/></span><span className="video-poster-label"><Volume2 size={17}/> WATCH THE INTRODUCTION</span></button>}</div>
      <aside className="video-aside"><span className="eyebrow">A CLOSER LOOK</span><h3>Learn from a real guide, in real time.</h3><p>Explore the fundamentals, watch a live candle ritual and bring your questions to the session. This is a place to understand the practice at a comfortable pace.</p><div className="video-aside-stat"><strong>₹99</strong><span>Live Marathi webinar<br/>2 hours · Beginner friendly</span></div><CTA onClick={onEnquire}>Save my place</CTA></aside>
    </Reveal>
  </section>
}
