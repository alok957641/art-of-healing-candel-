import {useEffect,useState} from 'react'
import {X,Check} from 'lucide-react'
import CTA from '../ui/CTA'
import {config} from '../../config/env'
export default function EnquiryModal({open,onClose}){
  const [submitted,setSubmitted]=useState(false)
  const [sending,setSending]=useState(false)
  const [error,setError]=useState('')
  const [saved,setSaved]=useState(false)
  useEffect(()=>{if(!open)return;setSubmitted(false);setError('');setSaved(false);const previous=document.body.style.overflow;document.body.style.overflow='hidden';const key=e=>{if(e.key==='Escape')onClose()};window.addEventListener('keydown',key);return()=>{document.body.style.overflow=previous;window.removeEventListener('keydown',key)}},[open,onClose])
  async function handleSubmit(e){
    e.preventDefault();setError('')
    if(!config.leadEndpoint){setSaved(false);setSubmitted(true);return}
    setSending(true)
    const data=new FormData(e.currentTarget)
    const params=new URLSearchParams(window.location.search)
    const lead={name:String(data.get('name')||'').trim(),phone:String(data.get('phone')||'').trim(),email:String(data.get('email')||'').trim(),page:window.location.href,consent:true,utm:Object.fromEntries([...params].filter(([key])=>key.startsWith('utm_')))}
    try{const response=await fetch(config.leadEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(lead)});if(!response.ok)throw new Error('Request failed');setSaved(true);setSubmitted(true)}
    catch{setError('Could not send your enquiry. Please try again in a moment.')}
    finally{setSending(false)}
  }
  if(!open)return null
  return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="modal-heading"><button className="modal-close" aria-label="Close" onClick={onClose}><X/></button>{submitted?<div className="modal-success"><Check size={34}/><h2 id="modal-heading">{saved?'Enquiry received.':'Your form is ready.'}</h2><p>{saved?'Thank you. The team can contact you about the live webinar.':'This is a preview. Set VITE_LEAD_ENDPOINT in .env.local to collect enquiries before launching ads.'}</p>{saved&&config.paymentUrl&&<a className="button-cta" href={config.paymentUrl}><span>Continue to ₹99 checkout</span><Check size={17}/></a>}<CTA onClick={onClose}>Close</CTA></div>:<><span className="eyebrow">CANDLE HEALING · LIVE WEBINAR</span><h2 id="modal-heading">Your seat starts <em>here.</em></h2><p>Leave your details for the ₹99 Marathi webinar.</p><form onSubmit={handleSubmit}><label>Full name<input name="name" required minLength="2" autoComplete="name" placeholder="Your name"/></label><label>Mobile number<input name="phone" required type="tel" pattern="[0-9+()\s-]{10,16}" autoComplete="tel" placeholder="Your mobile number"/></label><label>Email address <small>(optional)</small><input name="email" type="email" autoComplete="email" placeholder="you@example.com"/></label><label className="consent"><input type="checkbox" required/> I agree to be contacted about this webinar.</label>{error&&<p className="form-error" role="alert">{error}</p>}<button className="button-cta submit" type="submit" disabled={sending}><span>{sending?'Sending…':'Send my enquiry'}</span><Check size={17}/></button></form><small className="modal-footnote">₹99 · Live online · Marathi · 2 hours</small></>}</div></div>
}
