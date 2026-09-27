import {ArrowUpRight} from 'lucide-react'
export default function CTA({onClick,children='Reserve my seat',light=false,className=''}){return <button type="button" onClick={onClick} className={`button-cta ${light?'button-light':''} ${className}`}><span>{children}</span><ArrowUpRight size={18}/></button>}
