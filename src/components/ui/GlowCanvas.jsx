import {useEffect,useRef} from 'react'
// Decorative WebGL shader. It never blocks page content or form interactions.
export default function GlowCanvas(){const ref=useRef(null);useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return
  const canvas=ref.current,gl=canvas?.getContext('webgl',{alpha:true,powerPreference:'low-power'})
  if(!gl)return
  const vertex='attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}'
  const fragment='precision mediump float;uniform vec2 r;uniform float t;void main(){vec2 p=gl_FragCoord.xy/r.xy;vec2 q=vec2(.58+.025*sin(t*.28),.53+.04*sin(t*.21));float d=distance(p,q);float halo=exp(-d*d*10.);float core=exp(-d*d*90.);vec3 col=vec3(.97,.54,.19)*halo+vec3(1.,.78,.42)*core;gl_FragColor=vec4(col,clamp(halo*.35+core*.17,0.,.55));}'
  const shader=(type,source)=>{let s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);return s}
  const v=shader(gl.VERTEX_SHADER,vertex),f=shader(gl.FRAGMENT_SHADER,fragment),program=gl.createProgram();gl.attachShader(program,v);gl.attachShader(program,f);gl.linkProgram(program)
  if(!gl.getProgramParameter(program,gl.LINK_STATUS))return
  gl.useProgram(program);const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);let a=gl.getAttribLocation(program,'a');gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0)
  let frame,visible=true;const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting});observer.observe(canvas)
  function render(ms){if(visible){const w=canvas.clientWidth,h=canvas.clientHeight;if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h)}gl.uniform2f(gl.getUniformLocation(program,'r'),w,h);gl.uniform1f(gl.getUniformLocation(program,'t'),ms*.001);gl.drawArrays(gl.TRIANGLES,0,6)}frame=requestAnimationFrame(render)}frame=requestAnimationFrame(render)
  return()=>{cancelAnimationFrame(frame);observer.disconnect();gl.deleteBuffer(b);gl.deleteProgram(program);gl.deleteShader(v);gl.deleteShader(f)}
},[]);return <canvas ref={ref} className="glow-canvas" aria-hidden="true"/>}
