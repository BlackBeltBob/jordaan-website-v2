"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[690,780],{8480:function(t,e,n){n.r(e),n.d(e,{InputField:function(){return p},SetHeaderMenuPos:function(){return w},addZeroBeforeNumber:function(){return l},getCookie:function(){return a},getParents:function(){return s},initializeIsotop:function(){return d},initializeSwiper:function(){return f},resetForm:function(){return h},sendEmail:function(){return m},setDocumentFullHeight:function(){return v}});var r=n(4165),i=n(5861),o=n(6596),u=n.n(o),c=n(1496),a=function(t){for(var e=document.cookie.split(";"),n=0;n<e.length;n++){var r=e[n].split("=");if(t===r[0].trim())return decodeURIComponent(r[1])}return null},s=function(t){for(var e=[];t.parentNode&&"body"!==t.parentNode.nodeName.toLowerCase();)t=t.parentNode,e.push(t);return e},l=function(t){return t>9?t:"0".concat(t)},f=function(t,e){var n=new c.ZP(t,e);return n.init(),n},d=function(t){var e=t.closest(".grid-wrapper").querySelector(".filter-menu"),n=new(u())(t,{itemSelector:".grid-item",layoutMode:"masonry",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}});return setTimeout((function(){n.arrange({filter:"*"})}),1e3),e&&e.querySelectorAll("li").forEach((function(t){t.querySelector("span").addEventListener("click",(function(t){var r=t.target,i=r.getAttribute("data-filter");e.querySelectorAll("li").forEach((function(t){return t.classList.remove("active")})),r.closest("li").classList.add("active"),n.arrange({filter:"*"===i?"*":".".concat(i)})}))})),n},p=function(t){document.querySelectorAll(".quantity").forEach((function(e){var n=t||0,r=e.querySelector(".qty-text"),i=e.querySelector(".qty-plus"),o=e.querySelector(".qty-minus");i.addEventListener("click",(function(){n+=1,r.setAttribute("value",n)})),o.addEventListener("click",(function(){n=n>0?n-1:0,r.setAttribute("value",n)})),r.setAttribute("value",n)}))},m=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("/api","/send"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})).then((function(t){return t}));case 2:return n=t.sent,t.next=5,n;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t,e){t&&(t.resetForm(),t.setStatus(!0),t.setSubmitting(!1),setTimeout((function(){return t.setStatus(!1)}),5e3)),e&&(e.current.reset(),e.current.captcha.classList.remove("error"))},w=function(){function t(){var t=document.querySelectorAll(".megamenu");t.length>0&&t.forEach((function(t){var e=t.clientWidth,n=t.getBoundingClientRect().left;n+e>=window.screen.width&&(t.style.left="-".concat(n+e-window.innerWidth+25,"px"))}))}function e(){var t=document.querySelectorAll(".simple-dropdown-menu");"undefined"!=typeof t&&null!=t&&t.forEach((function(t){var e=t.getBoundingClientRect().left,n=t.getBoundingClientRect().top,r=t.clientWidth,i=t.clientHeight;e+r+10>window.innerWidth&&(t.style.left="".concat(window.innerWidth-(e+r+10),"px"),t.classList.add("menu-left")),n+i>window.innerHeight&&(t.style.transform="translateY(".concat(-(n+i-window.innerHeight),"px)"))}))}t(),e(),window.addEventListener("resize",(function(n){setTimeout((function(){t(),e()}),500)}))},v=function(){var t=function(){document.documentElement.style.setProperty("--viewport-height","".concat(window.innerHeight,"px"))};window.addEventListener("resize",t),t()}}}]);
//# sourceMappingURL=690.fb05e373.chunk.js.map