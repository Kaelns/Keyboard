"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[300],{696:(e,t,s)=>{s.d(t,{l:()=>i});let a=!0;function i(){let e=document.querySelector("html"),t=document.querySelector(".burger-menu"),s=document.querySelector(".blackout"),a=document.querySelector("nav.nav"),i=[t,s,a];[t,s].forEach((t=>{t.addEventListener("click",n(i,e,a))}))}function n(e,t,s){return()=>{let s=document.documentElement.clientWidth,i=document.querySelector("nav.nav");e.forEach((e=>{e.classList.toggle("_active")})),t.classList.toggle("_no-scroll"),a&&(a=!1,s<768&&i.addEventListener("click",function(e,t,s){const i=o=>{o.target.classList.contains("nav__link")&&(a=!0,n(t,s)(),e.removeEventListener("click",i))};return i}(i,e,t)))}}},85:(e,t,s)=>{s.d(t,{M:()=>r});var a=s(499);class i{constructor({id:e,name:t,img:s,type:a,breed:i,description:n,age:o,inoculations:r,diseases:l,parasites:c}){this.id=e,this.name=t,this.img=s,this.type=a,this.breed=i,this.description=n,this.age=o,this.inoculations=r,this.diseases=l,this.parasites=c}generatePopupCard(){let e="",t=document.createDocumentFragment(),s=document.createElement("div"),a=document.createElement("div");return a.className="popup__close",s.className="popup__body",e+='<div class="popup__content">',e+='<div class="popup-btn__wrapper">',e+='<button class="btn-round_transparent popup__btn cross" id="popup__btn"></button>',e+="</div>",e+=`<img class="popup__column_1" src="${this.img}" alt="dog"/>`,e+='<div class="popup__column_2">',e+=`<h3 class="popup__title modal-text">${this.name}</h3>`,e+=`<h4 class="popup__subtitle modal-text">${this.type} - ${this.breed}</h4>`,e+='<h5 class="popup__text modal-text">',e+=`${this.description}`,e+="</h5>",e+='<ul class="popup__list h5-modal">',e+='<li class="popup__parameter popup__parameter_1 parameter__wrapper">Age: ',e+='<h5 class="modal-text">',e+=`${this.age}`,e+="</h5>",e+='<li class="popup__parameter popup__parameter_2 parameter__wrapper">Inoculations: ',e+='<h5 class="modal-text">',e+=`${this.inoculations.join(", ")}`,e+="</h5>",e+='<li class="popup__parameter popup__parameter_3 parameter__wrapper">Diseases: ',e+='<h5 class="modal-text">',e+=`${this.diseases.join(", ")}`,e+="</h5>",e+='<li class="popup__parameter popup__parameter_4 parameter__wrapper">Parasites: ',e+='<h5 class="modal-text">',e+=`${this.parasites.join(", ")}`,e+="</h5>",e+="</ul>",e+="</div>",e+="</div>",s.innerHTML=e,t.append(s,a),t}}let n,o=[];const r=()=>{let e=document.querySelector(".slider-listener");e.addEventListener("click",(t=>{let s=t.target.closest(".slider__slide");s&&e.contains(s)&&function(e){let t=function(e){let t=document.querySelector("#popup");e!==n&&(t.innerHTML="");return t}(e);o[e]||(o[s=e]=new i(a[s]).generatePopupCard());var s;(function(e,t){t.append(o[e].cloneNode(!0)),n=e})(e,t),l(t),function(e){let t=document.querySelector(".popup__close");e.addEventListener("click",function(e){const t=s=>{(s.target.classList.contains("popup__close")||s.target.classList.contains("popup__btn"))&&(l(e),e.removeEventListener("click",t))};return t}(e)),t.onmouseover=t.onmouseout=c}(t)}(s.getAttribute("data-id"))}))};function l(e){e.classList.toggle("_open"),document.querySelector("html").classList.toggle("_no-scroll")}function c(e){let t=document.querySelector("#popup__btn");"mouseover"==e.type&&t.classList.add("hover-btn"),"mouseout"==e.type&&t.classList.remove("hover-btn")}},568:(e,t,s)=>{s.d(t,{U:()=>S});var a=s(499);function i(e){for(let t=e.length-1;t>0;t--){let s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}class n{constructor({id:e,name:t,img:s,...a}){this.id=e,this.name=t,this.img=s}generateCard(){let e="",t=document.createElement("div");return t.className="slider__slide",t.dataset.id=this.id,e+='<div class="slide-img__container">',e+=`<img class="slide__img" src="${this.img}" alt="dog"/>`,e+="</div>",e+=` <h4 class="slide__title">${this.name}</h4>`,e+='<button class="slide__btn btn-oval_transparent">Learn more</button>',t.innerHTML=e,t}}const o=1280,r=768,l=document.querySelectorAll("div.slider"),c=document.querySelector("#carousel"),d=document.querySelector("button.btn-left"),p=document.querySelector("button.btn-right"),u=document.querySelector("button.btn-left-mobile"),m=document.querySelector("button.btn-right-mobile"),h=document.querySelector("button.btn-start"),g=document.querySelector("button.btn-end"),b=document.querySelector("button.btn-page");let v,f,y,_,k,L,w=[],E=!0;function S(e){v=e,a.forEach((e=>{w.push(new n(e).generateCard())})),y=function(e,t){if(!(e>1))return t;let s=[];for(let a=0;a<48/e;a++)s.push(i(t.slice(a*e,a*e+e)));return s}(function(){let e,t=document.documentElement.clientWidth;"pets"===v?t>=o?e=8:r<=t&&t<o?e=6:320<=t&&t<r&&(e=3):e=3;return f=48/e-1,k="pets"===v?[null,0,1]:[f,0,1],e}(),function(){let e=[...Array(8)].map(((e,t)=>t));return[...Array(6)].flatMap((t=>e))}()),q(),c.addEventListener("animationend",(e=>{if(L)L=void 0,c.classList.remove("move-left"),c.classList.remove("move-right");else{switch(e.animationName){case"move-left":case"move-left-table":case"move-left-mobile":case"move-left-pets":case"move-left-pets-table":case"move-left-pets-mobile":c.classList.remove("move-left"),"pets"===v?x("left"):D("left");break;case"move-right":case"move-right-table":case"move-right-mobile":case"move-right-pets":case"move-right-pets-table":case"move-right-pets-mobile":c.classList.remove("move-right"),"pets"===v?x("right"):D("right")}q(),"pets"===v&&(b.innerHTML=k[1]+1),d.addEventListener("click",H),p.addEventListener("click",C),"main"===v&&(u.addEventListener("click",H),m.addEventListener("click",C))}})),d.addEventListener("click",H),p.addEventListener("click",C),"main"===v?(u.addEventListener("click",H),m.addEventListener("click",C)):(h.addEventListener("click",M),g.addEventListener("click",$))}function q(){k.forEach(((e,t)=>{null!==e&&T(y[e],e,t)})),E=!1}function T(e,t,s){l[s].innerHTML="",l[s].append(function(e,t){let s=document.createDocumentFragment();return"pets"===v?(E&&(_=[...Array(f)]),s[t]||(e.forEach((e=>{s.append(w[e].cloneNode(!0))})),_[t]=s),_[t]):(e.forEach((e=>{s.append(w[e].cloneNode(!0))})),s)}(e,t))}function H(){c.classList.add("move-left"),d.removeEventListener("click",H),p.removeEventListener("click",C),"main"===v&&(u.removeEventListener("click",H),m.removeEventListener("click",C))}function C(){c.classList.add("move-right"),d.removeEventListener("click",H),p.removeEventListener("click",C),"main"===v&&(u.removeEventListener("click",H),m.removeEventListener("click",C))}function M(){L=!0,k=[0,0,1],q(),"pets"===v&&(b.innerHTML=k[1]+1),d.disabled=!0,h.disabled=!0,p.disabled=!1,g.disabled=!1,c.classList.add("move-left")}function $(){L=!0,k=[f-1,f,f],q(),"pets"===v&&(b.innerHTML=k[1]+1),p.disabled=!0,g.disabled=!0,d.disabled=!1,h.disabled=!1,c.classList.add("move-right")}function x(e){let t,s,a;if("left"===e)if(1===k[1])d.disabled=!0,h.disabled=!0,[t,s,a]=k,k=[null,s-1,a-1];else p.disabled=!1,g.disabled=!1,[t,s,a]=k,k=[t-1,s-1,null===a?f:a-1];else if(k[1]===f-1)p.disabled=!0,g.disabled=!0,[t,s,a]=k,k=[t+1,s+1,null];else d.disabled=!1,h.disabled=!1,[t,s,a]=k,k=[null===t?0:t+1,s+1,a+1]}function D(e){let t,s,a;if("left"===e)switch(k[1]){case 0:[t,s,a]=k,k=[t-1,s=f,a-1];break;case 1:[t,s,a]=k,k=[t=f,s-1,a-1];break;case f:[t,s,a]=k,k=[t-1,s-1,a=f];break;default:[t,s,a]=k,k=[t-1,s-1,a-1]}else switch(k[1]){case f-1:[t,s,a]=k,k=[t+1,s+1,a=0];break;case f:[t,s,a]=k,k=[t+1,s=0,a+1];break;case 0:[t,s,a]=k,k=[t=0,s+1,a+1];break;default:[t,s,a]=k,k=[t+1,s+1,a+1]}}},499:e=>{e.exports=JSON.parse('[{"id":0,"name":"Jennifer","img":"./assets/images/jennifer.png","type":"Dog","breed":"Labrador","description":"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.","age":"2 months","inoculations":["none"],"diseases":["none"],"parasites":["none"]},{"id":1,"name":"Sophia","img":"./assets/images/sophia.png","type":"Dog","breed":"Shih tzu","description":"Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.","age":"1 month","inoculations":["parvovirus"],"diseases":["none"],"parasites":["none"]},{"id":2,"name":"Woody","img":"./assets/images/woody.png","type":"Dog","breed":"Golden Retriever","description":"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.","age":"3 years 6 months","inoculations":["adenovirus","distemper"],"diseases":["right back leg mobility reduced"],"parasites":["none"]},{"id":3,"name":"Scarlett","img":"./assets/images/scarlett.png","type":"Dog","breed":"Jack Russell Terrier","description":"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.","age":"3 months","inoculations":["parainfluenza"],"diseases":["none"],"parasites":["none"]},{"id":4,"name":"Katrine","img":"./assets/images/katrine.png","type":"Cat","breed":"British Shorthair","description":"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.","age":"6 months","inoculations":["panleukopenia"],"diseases":["none"],"parasites":["none"]},{"id":5,"name":"Timmy","img":"./assets/images/timmy.png","type":"Cat","breed":"British Shorthair","description":"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.","age":"2 years 3 months","inoculations":["calicivirus","viral rhinotracheitis"],"diseases":["kidney stones"],"parasites":["none"]},{"id":6,"name":"Freddie","img":"./assets/images/freddie.png","type":"Cat","breed":"British Shorthair","description":"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.","age":"2 months","inoculations":["rabies"],"diseases":["none"],"parasites":["none"]},{"id":7,"name":"Charly","img":"./assets/images/charly.png","type":"Dog","breed":"Jack Russell Terrier","description":"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.","age":"8 years","inoculations":["bordetella bronchiseptica","leptospirosis"],"diseases":["deafness","blindness"],"parasites":["lice","fleas"]}]')}}]);
//# sourceMappingURL=../maps/script/300.b7534b31fe30d3885762.js.map