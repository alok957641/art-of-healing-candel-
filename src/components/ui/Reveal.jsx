import {motion,useReducedMotion} from 'framer-motion'
export default function Reveal({children,className='',delay=0,...props}){
  const reduced=useReducedMotion()
  return <motion.div className={className} initial={reduced?false:{opacity:0,y:36,filter:'blur(6px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} viewport={{once:true,amount:.15}} transition={{duration:.75,delay,ease:[.22,1,.36,1]}} {...props}>{children}</motion.div>
}
