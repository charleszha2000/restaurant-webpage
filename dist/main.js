!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=()=>{document.querySelector("#home-button").classList.add("active");let e=document.querySelector("#main");e.innerHTML="";let t=document.createElement("img");t.id="home-pic",t.setAttribute("src","images/food_1.jpg");let n=document.createElement("div");n.textContent="Food? That's a thing we have at our Restaurant! Come to Charlie's Eatery!",n.id="main-text",e.appendChild(t),e.appendChild(n)},r=[{id:"home-button",content:"Home",render:o},{id:"about-button",content:"About"},{id:"menu-button",content:"Menu"},{id:"contact-button",content:"Contact Us"}],i=[{link:"https://www.instagram.com/c.zhang_/",name:"Instagram"},{link:"https://www.facebook.com/profile.php?id=100012222333426",name:"Facebook"},{link:"https://twitter.com/ChZhang_",name:"Twitter"}];(()=>{let e=document.querySelector("#content"),t=document.createElement("div");t.id="header";let n=document.createElement("div");n.id="title",n.textContent="Charlie's Eatery",t.appendChild(n);let d=document.createElement("div");d.id="nav-bar";let a,l=document.createElement("ul");for(a of(l.id="nav-list",r)){let e=document.createElement("li");e.classList.add("nav-button"),e.id=a.id,e.textContent=a.content,console.log(a.render),l.appendChild(e);const t=a.render;e.addEventListener("click",()=>{document.querySelectorAll(".nav-button").forEach(e=>e.classList.remove("active")),t()})}d.appendChild(l),t.appendChild(d),e.appendChild(t);let c=document.createElement("div");c.id="main",e.appendChild(c),o();let u=document.createElement("div");u.id="footer";let m,p=document.createElement("ul");for(m of(p.id="footer-list",i)){let e=document.createElement("li"),t=document.createElement("a");t.setAttribute("href",m.link),t.textContent=m.name,e.appendChild(t),p.appendChild(e)}u.appendChild(p),e.appendChild(u)})()}]);