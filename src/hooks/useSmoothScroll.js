import {useEffect} from 'react'
import Lenis from 'lenis'
export default function useSmoothScroll(){useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return
  const lenis=new Lenis({duration:1.15,smoothWheel:true})
  let id;const tick=time=>{lenis.raf(time);id=requestAnimationFrame(tick)};id=requestAnimationFrame(tick)
  return()=>{cancelAnimationFrame(id);lenis.destroy()}
},[])}
