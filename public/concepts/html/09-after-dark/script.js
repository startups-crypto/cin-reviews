// Review-only composition of the exact supplied model frame. The production
// HumanModelScene and its gender/constructor interactions remain unchanged.
window.artReady=(async()=>{
 const img=new Image();img.src='assets/hero-source.png';await img.decode();
 const c=document.querySelector('#anatomy'),ctx=c.getContext('2d');
 ctx.drawImage(img,0,64,1100,435,0,0,1100,435);
 const im=ctx.getImageData(0,0,1100,435),d=im.data;
 // Neutral background is keyed only outside the anatomical silhouette;
 // white anatomical details enclosed by the silhouette remain unchanged.
 const seen=new Uint8Array(1100*435),q=[];
 for(let y=0;y<435;y++)for(const x of [0,1099]){let p=y*1100+x;seen[p]=1;q.push(p)}
 for(let x=0;x<1100;x++)for(const y of [0,434]){let p=y*1100+x;if(!seen[p]){seen[p]=1;q.push(p)}}
 for(let i=0;i<q.length;i++){const p=q[i],x=p%1100,y=Math.floor(p/1100);for(const n of [x>0?p-1:-1,x<1099?p+1:-1,y>0?p-1100:-1,y<434?p+1100:-1]){if(n<0||seen[n])continue;const k=n*4;if(Math.max(d[k],d[k+1],d[k+2])-Math.min(d[k],d[k+1],d[k+2])<13){seen[n]=1;q.push(n)}}}
 for(let p=0;p<seen.length;p++){const k=p*4,x=p%1100,y=Math.floor(p/1100);if(seen[p]||x<520||x>625||y>355){d[k+3]=0;continue}if(y>180){const u=Math.min(1,(y-180)/85),t=u*u*(3-2*u);const a=(1-t)+t*Math.min(1,Math.max(0,(d[k]-d[k+1])/95));const fade=Math.min(1,Math.max(0,(320-y)/65));if(a>0){for(let j=0;j<3;j++)d[k+j]=Math.max(0,Math.min(255,(d[k+j]-246*(1-a))/a));}d[k+3]=Math.round(255*a*fade);}}
 ctx.putImageData(im,0,0);await document.fonts.ready;
})();
document.querySelectorAll('details').forEach(el=>el.addEventListener('toggle',()=>el.querySelector('b').textContent=el.open?'−':'+'));
document.querySelector('form').addEventListener('submit',e=>{e.preventDefault();const fields=[...e.target.querySelectorAll('input[required]')];fields.forEach(f=>f.setAttribute('aria-invalid',String(!f.checkValidity())));const bad=fields.find(f=>!f.checkValidity());document.querySelector('.status').textContent=bad?'Проверьте заполнение обязательных полей.':'Спасибо! Это демонстрация состояния формы. Заявка не отправлена.';bad?.focus();});

