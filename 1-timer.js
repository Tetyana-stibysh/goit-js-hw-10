import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as h}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector("button"),r=document.querySelector("#datetime-picker"),p=document.querySelector(".value[data-days]"),y=document.querySelector(".value[data-hours]"),b=document.querySelector(".value[data-minutes]"),C=document.querySelector(".value[data-seconds]");function g({days:e,hours:t,minutes:o,seconds:n}){C.textContent=`${n}`,b.textContent=`${o}`,y.textContent=`${t}`,p.textContent=`${e}`}let u;a.setAttribute("disabled","");const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=new Date;e[0]<t?h.show({message:"Please choose a date in the future",messageColor:"#ffffff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",closeOnEscape:!0}):(a.removeAttribute("disabled"),u=e[0])}};f("#datetime-picker",v);let c=null;a.addEventListener("click",S);function S(){const e=u.getTime();c=setInterval(()=>{const t=Date.now(),o=e-t;if(o>0){a.setAttribute("disabled",""),r.setAttribute("disabled","");const n=k(o);g(n)}else{clearInterval(c),r.removeAttribute("disabled");return}},1e3)}function k(e){const i=Math.floor(e/864e5),d=s(Math.floor(e%864e5/36e5)),l=s(Math.floor(e%864e5%36e5/6e4)),m=s(Math.floor(e%864e5%36e5%6e4/1e3));return{days:i,hours:d,minutes:l,seconds:m}}function s(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map