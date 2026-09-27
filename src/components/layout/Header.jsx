import {useState} from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import {Flame,X} from 'lucide-react'
import CTA from '../ui/CTA'
export default function Header({onEnquire}){
  const [announcementVisible,setAnnouncementVisible]=useState(true)
  return <>
    <AnimatePresence initial={false}>{announcementVisible&&<motion.div className="topline" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.28}}><span className="topline-message">A LITTLE LIGHT CAN CHANGE THE WAY YOU BEGIN <span>· LIVE MARATHI WEBINAR · ₹99</span></span><button type="button" className="topline-close" onClick={()=>setAnnouncementVisible(false)} aria-label="Close announcement"><X size={17}/></button></motion.div>}</AnimatePresence>
    <header className="landing-header"><div className="mark"><Flame size={27} strokeWidth={1.4}/><span>ART OF HEALING<small>THE CANDLE EXPERIENCE</small></span></div><CTA onClick={onEnquire} light>Reserve my seat</CTA></header>
  </>
}
