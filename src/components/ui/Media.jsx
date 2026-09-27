import {useState} from 'react'
export default function Media({src,alt='',className='',children}){
  const [failed,setFailed]=useState(false)
  return <div className={`media-slot ${className}`}>
    {src&&!failed&&<img src={src} alt={alt} onError={()=>setFailed(true)} loading="lazy"/>}
    {(!src||failed)&&children}
  </div>
}
