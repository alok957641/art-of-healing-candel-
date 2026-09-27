import Reveal from '../ui/Reveal';import {highlights} from '../../data/content'
export default function Highlights(){return <div className="highlights">{highlights.map(([value,label],i)=><Reveal delay={i*.08} key={label} className="highlight"><strong>{value}</strong><span>{label}</span></Reveal>)}<div className="highlight-ornament">✦</div></div>}
