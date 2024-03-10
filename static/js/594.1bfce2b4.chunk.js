"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[594,480],{9127:function(e,t,n){n.d(t,{Z:function(){return f}});var i=n(1413),r=n(2791),s=n(2677),a=n(9743),o=n(1087),c=n(7245),l=n(8480),d=n(7235),m=n(184),x=function(e,t,n){switch(e.theme){case"fancy-text-box-01":return(0,m.jsxs)("div",{className:"text-box-content",children:[(0,m.jsxs)("div",{className:"text-box",children:[t.icon.class&&(0,m.jsx)("i",{className:t.icon.class}),t.title&&(0,m.jsx)("span",{children:t.title})]}),(0,m.jsxs)("div",{className:"text-box-hover",children:[t.title&&(0,m.jsx)("span",{className:"inline-block text-darkgray",children:t.title}),t.description&&(0,m.jsx)("p",{children:t.description})]})]});case"fancy-text-box-02":return(0,m.jsx)("div",{className:"text-box-content",children:(0,m.jsxs)("div",{className:"text-box-wrapper",children:[t.icon.class&&(0,m.jsx)("i",{className:t.icon.class}),(0,m.jsxs)("div",{className:"text-box",children:[t.title&&(0,m.jsx)("span",{children:t.title}),(t.link||t.linkTitle)&&(0,m.jsx)("a",{"aria-label":"fancytextbox",href:t.link,children:(0,m.jsx)("u",{children:t.linkTitle})})]}),t.description&&(0,m.jsx)("p",{children:t.description})]})});case"fancy-text-box-03":return(0,m.jsx)("div",{className:"text-box-content",children:(0,m.jsxs)("div",{className:"text-box font-serif flex justify-center items-center",children:[t.icon&&(0,m.jsx)("h2",{className:"heading-4 fancy-text-icon".concat(t.icon.class?" ".concat(t.icon.class):""),children:t.icon.text}),(0,m.jsxs)("div",{className:"fancy-box-wrapper",children:[t.title&&(0,m.jsx)("span",{className:"font-medium text-darkgray",children:t.title}),t.description&&(0,m.jsx)("p",{children:t.description})]})]})});case"fancy-text-box-04":return(0,m.jsxs)("div",{className:"text-box-content h-full p-16 bg-[#fff] relative shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden lg:p-[2.5rem] md:p-16",children:[(0,m.jsx)("div",{className:"feature-box-icon text-[40px] inline-block mr-[20px]",children:t.icon.class&&(0,m.jsx)("i",{className:t.icon.class})}),(0,m.jsxs)("div",{className:"feature-box-content inline-block leading-[22px]",children:[(0,m.jsx)("div",{className:"text-darkgray font-serif text-base font-medium leading-[20px]",children:t.title}),(0,m.jsx)("span",{className:"text-sm font-serif",children:t.subTitle})]}),(0,m.jsx)("div",{className:"bg-[#ededed] mt-[25px] w-full h-[1px]"}),t.description&&(0,m.jsx)("p",{className:"mt-[25px]",children:t.description}),(0,m.jsx)("h3",{className:"font-serif opacity-20 font-medium -tracking-[2px] absolute -bottom-[10px] sm:-bottom-[15px] right-[50px] m-0 h-[3.4rem]",children:(0,l.addZeroBeforeNumber)(n+1)})]});case"fancy-text-box-05":return(0,m.jsxs)(s.Z,{className:"fancy-box-item divide-x divide-[#ffffff33] lg:divide-y z-[3]",children:[(0,m.jsx)("div",{className:"bg-banner-image bg-cover overflow-hidden bg-center relative z-0",style:{backgroundImage:"url(".concat(t.hoverImg,")")},children:(0,m.jsx)("div",{className:"opacity-very-light opacity-30 absolute top-0 left-0 w-full h-full bg-black"})}),(0,m.jsx)("div",{className:"fancy-text-box relative overflow-hidden h-[800px] xl:h-[500px] xs:h-[250px] z-[3]",children:(0,m.jsxs)("div",{className:"fancy-text-content px-[5rem] py-[4.5rem] xl:px-[2rem] xl:py-[1.5rem] lg:p-16",children:[(0,m.jsx)("h3",{className:"heading-6 font-serif font-semibold text-[#fff] uppercase w-[85%] xl:w-full lg:w-3/5 md:w-[80%]",children:t.title}),(0,m.jsx)("div",{className:"fancy-text-box-bottom justify-center",children:(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("p",{className:"m-0 self-center w-[75%] text-[#fff] opacity-60",children:t.description}),t.link&&(0,m.jsx)("span",{className:"self-center text-center ml-auto",children:(0,m.jsx)(o.rU,{"aria-label":"link",to:t.link,className:"inline-flex justify-center items-center leading-10 rounded-full bg-darkgray h-[40px] w-[40px]",children:(0,m.jsx)("i",{className:"feather-arrow-right text-[#fff]"})})})]})}),(0,m.jsx)("div",{className:"feature-box-overlay bg-[#c3964e] transition-default"})]})})]});default:return(0,m.jsxs)("div",{className:"text-box-content",children:[(0,m.jsxs)("div",{className:"text-box",children:[t.icon&&(0,m.jsx)("i",{className:t.icon}),t.title&&(0,m.jsx)("span",{children:t.title})]}),(0,m.jsxs)("div",{className:"text-box-hover",children:[t.title&&(0,m.jsx)("span",{children:t.title}),t.description&&(0,m.jsx)("p",{children:t.description})]})]})}},p=function(e){return(0,m.jsx)(a.Z,{className:"".concat(e.theme).concat(e.grid?" ".concat(e.grid):""),children:e.data.map((function(t,n){return(0,m.jsx)(c.m.div,(0,i.Z)((0,i.Z)({className:"col".concat(e.themeColor?" ".concat(e.themeColor):"").concat(e.className?" ".concat(e.className):"")},(0,i.Z)((0,i.Z)({},e.animation),{},{transition:{delay:n*e.animationDelay}})),{},{children:x(e,t,n)}),n)}))})};p.defaultProps={data:d.oG,theme:"fancy-text-box-01",animationDelay:.2};var f=(0,r.memo)(p)},7235:function(e,t,n){n.d(t,{oG:function(){return i}});var i=[{icon:{class:"line-icon-Archery-2"},title:"STRATEGY",description:"Lorem ipsum dolor consectetur adipiscing eiusmod tempor"},{icon:{class:"line-icon-Glasses-3"},title:"RESEARCH",description:"Lorem ipsum dolor consectetur adipiscing eiusmod tempor"},{icon:{class:"line-icon-Knight"},title:"PLANNING",description:"Lorem ipsum dolor consectetur adipiscing eiusmod tempor"},{icon:{class:"line-icon-Coins-2"},title:"ASSURANCE",description:"Lorem ipsum dolor consectetur adipiscing eiusmod tempor"},{icon:{class:"line-icon-Bar-Chart2"},title:"ANALYSTS",description:"Lorem ipsum dolor consectetur adipiscing eiusmod tempor"},{icon:{class:"line-icon-Coins"},title:"INVESTMENT",description:"Lorem ipsum dolor consectetur adipiscing eiusmod tempor"}]},384:function(e,t,n){var i=n(2791),r=n(184),s=function(e){var t=(0,i.useRef)(null);return(0,i.useEffect)((function(){function n(){if(t.current){var n=null===t||void 0===t?void 0:t.current.clientHeight,i=window.innerWidth>=768?n*e.value/100:0;null===t||void 0===t||t.current.style.setProperty("--overlapheight","-".concat(i,"px"))}}window.addEventListener("resize",n);var i=t.current.querySelectorAll("img");i.length>0?i.forEach((function(e){e.addEventListener("load",n)})):n()}),[]),(0,r.jsx)("div",{ref:t,className:"overlap-section".concat(e.className?" ".concat(e.className):""),children:e.children})};s.defaultProps={value:50},t.Z=(0,i.memo)(s)},8480:function(e,t,n){n.r(t),n.d(t,{InputField:function(){return p},SetHeaderMenuPos:function(){return g},addZeroBeforeNumber:function(){return d},getCookie:function(){return c},getParents:function(){return l},initializeIsotop:function(){return x},initializeSwiper:function(){return m},resetForm:function(){return u},sendEmail:function(){return f},setDocumentFullHeight:function(){return h}});var i=n(4165),r=n(5861),s=n(6596),a=n.n(s),o=n(2558),c=function(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var i=t[n].split("=");if(e===i[0].trim())return decodeURIComponent(i[1])}return null},l=function(e){for(var t=[];e.parentNode&&"body"!==e.parentNode.nodeName.toLowerCase();)e=e.parentNode,t.push(e);return t},d=function(e){return e>9?e:"0".concat(e)},m=function(e,t){var n=new o.ZP(e,t);return n.init(),n},x=function(e){var t=e.closest(".grid-wrapper").querySelector(".filter-menu"),n=new(a())(e,{itemSelector:".grid-item",layoutMode:"masonry",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}});return setTimeout((function(){n.arrange({filter:"*"})}),1e3),t&&t.querySelectorAll("li").forEach((function(e){e.querySelector("span").addEventListener("click",(function(e){var i=e.target,r=i.getAttribute("data-filter");t.querySelectorAll("li").forEach((function(e){return e.classList.remove("active")})),i.closest("li").classList.add("active"),n.arrange({filter:"*"===r?"*":".".concat(r)})}))})),n},p=function(e){document.querySelectorAll(".quantity").forEach((function(t){var n=e||0,i=t.querySelector(".qty-text"),r=t.querySelector(".qty-plus"),s=t.querySelector(".qty-minus");r.addEventListener("click",(function(){n+=1,i.setAttribute("value",n)})),s.addEventListener("click",(function(){n=n>0?n-1:0,i.setAttribute("value",n)})),i.setAttribute("value",n)}))},f=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/api","/send"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return e}));case 2:return n=e.sent,e.next=5,n;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e,t){e&&(e.resetForm(),e.setStatus(!0),e.setSubmitting(!1),setTimeout((function(){return e.setStatus(!1)}),5e3)),t&&(t.current.reset(),t.current.captcha.classList.remove("error"))},g=function(){function e(){var e=document.querySelectorAll(".megamenu");e.length>0&&e.forEach((function(e){var t=e.clientWidth,n=e.getBoundingClientRect().left;n+t>=window.screen.width&&(e.style.left="-".concat(n+t-window.innerWidth+25,"px"))}))}function t(){var e=document.querySelectorAll(".simple-dropdown-menu");"undefined"!=typeof e&&null!=e&&e.forEach((function(e){var t=e.getBoundingClientRect().left,n=e.getBoundingClientRect().top,i=e.clientWidth,r=e.clientHeight;t+i+10>window.innerWidth&&(e.style.left="".concat(window.innerWidth-(t+i+10),"px"),e.classList.add("menu-left")),n+r>window.innerHeight&&(e.style.transform="translateY(".concat(-(n+r-window.innerHeight),"px)"))}))}e(),t(),window.addEventListener("resize",(function(n){setTimeout((function(){e(),t()}),500)}))},h=function(){var e=function(){document.documentElement.style.setProperty("--viewport-height","".concat(window.innerHeight,"px"))};window.addEventListener("resize",e),e()}},8594:function(e,t,n){n.r(t);var i=n(1413),r=(n(2791),n(2677)),s=n(9602),a=n(7262),o=n(9743),c=n(1087),l=n(7245),d=n(1689),m=n(4779),x=n(384),p=n(8315),f=n(2106),u=n(3407),g=n(9127),h=n(184),v=[{icon:{text:"\u20ac45",class:"text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"},title:"Zitting oefentherapie / fysiotherapie",description:"30 min. Reguliere zitting oefentherapie Mensendieck of Fysiotherapie."},{icon:{text:"\u20ac55",class:"text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"},title:"Geriatrie zitting",description:"30 min. Zitting geriatrie oefentherapie, van een gespecialiseerde therapeut."},{icon:{text:"\u20ac129",class:"text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"},title:"Hypnotherapie",description:"45 min. Zitting Hypnotherapie. Lorem Ipsum dolor sit amet. Nunquam titilanus"},{icon:{text:"\u20ac65",class:"text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"},title:"Lange zitting",description:"45 min. Lange zitting voor cli\xebnten met complexe of meervoudige zorgvragen."},{icon:{text:"\u20ac65",class:"text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"},title:"Paramedisch Onderzoek",description:"30 min. Eenmalig oefentherapeutisch/fysiotherapeutisch onderzoek."},{icon:{text:"\u20ac65",class:"text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"},title:"Screening, Intake, en Onderzoek",description:"30 min. Screening, Intake, en Onderzoek. Nodig als u geen verwijzing heeft."},{icon:{text:"\u20ac65",class:"text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"},title:"Intake en onderzoek na verwijzing",description:"30 min. Intake en onderzoek na verwijzing van huisarts of medisch specialist."},{icon:{text:"\u20ac25",class:"text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"},title:"Toeslag behandeling aan huis",description:"Toeslag boven op de behandelprijs voor zitting die aan huis gegeven worden."},{icon:{text:"\u20ac--",class:"text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"},title:"Groepszitting van 2 personen",description:"Duur en prijs in overleg. Paramedische zitting met twee personen. Op uitzonderingsbasis."}],b="".concat("/jordaan-website-v2","/page/chronic-healthcare");t.default=function(e){return(0,h.jsxs)("div",{style:e.style,children:[(0,h.jsx)(f.default,{}),(0,h.jsx)(m.h4,{topSpace:{md:!0},type:"reverse-scroll",children:(0,h.jsxs)(m.eG,{theme:"light",expand:"lg",className:"spasalon-header py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0 border-b border-[#ffffff1a]",fluid:"fluid",containerClass:"md:pr-0",children:[(0,h.jsx)(r.Z,{className:"col-5 col-lg-2 ps-lg-0 me-auto me-lg-0 md:!px-0",children:(0,h.jsx)(c.rU,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,h.jsxs)(s.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,h.jsx)("img",{className:"default-logo",width:"163",height:"36",loading:"lazy",src:"".concat("/jordaan-website-v2","/assets/img/webp/logo/logo-white-top.png"),"data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,h.jsx)("img",{className:"alt-logo",width:"163",height:"36",loading:"lazy",src:"".concat("/jordaan-website-v2","/assets/img/webp/logo/logo-white-top.png"),"data-rjs":"/assets/img/webp/logo-white-top@2x.webp",alt:"logo"}),(0,h.jsx)("img",{className:"mobile-logo",width:"163",height:"36",loading:"lazy",src:"".concat("/jordaan-website-v2","/assets/img/webp/logo/logo-white-top.png"),"data-rjs":"/assets/img/webp/logo-white-top@2x.webp",alt:"logo"})]})})}),(0,h.jsx)(m.v2,(0,i.Z)({className:"justify-center col-auto col-lg-8 menu-order md-position-initial md:hidden"},e)),(0,h.jsx)(m.nn,(0,i.Z)({className:"order-last d-lg-none",type:"modern"},e)),(0,h.jsx)(r.Z,{className:"col-auto text-right pr-0 col-lg-2 px-lg-0 md-no-padding md:!px-0",children:(0,h.jsx)(m.E1,{className:"font-bold"})})]})}),(0,h.jsx)("section",{className:"pt-[350px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]",children:(0,h.jsx)(a.Z,{children:(0,h.jsx)(o.Z,{className:"justify-center",children:(0,h.jsxs)(r.Z,{lg:7,sm:8,className:"text-center mb-26 md:mb-12 xs:mb-16",children:[(0,h.jsx)(l.m.span,{className:"inline-block font-serif text-jordaanText uppercase font-medium mb-[15px] tracking-[1px] xs:mb-[10px]",children:"Betaalbare paramedische zorg, afgestemd op jouw situatie"}),(0,h.jsx)(l.m.h2,{className:"heading-5 font-serif text-jordaanText font-medium tracking-[-1px]",children:"Tarieven voor oefentherapie en fysiotherapie buiten je verzekering om"})]})})})}),(0,h.jsxs)("section",{className:"pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] bg-jordaanYellow bg-cover bg-no-repeat relative bg-center",children:[(0,h.jsx)(a.Z,{children:(0,h.jsx)(o.Z,{className:"justify-center",children:(0,h.jsx)(x.Z,{className:"col-12 col-md-12 col-sm-8 md:mt-[75px]"})})}),(0,h.jsx)(a.Z,{children:(0,h.jsxs)(o.Z,{className:"mt-36 md:mt-24 sm:mt-16",children:[(0,h.jsx)(r.Z,{lg:5,md:6,children:(0,h.jsx)(l.m.h2,(0,i.Z)((0,i.Z)({className:"heading-5 font-serif font-medium leading-[46px] -tracking-[.5px] md:leading-[38px]  text-jordaanText md:m-0 sm:leading-[36px] xs:mb-[15px]"},(0,i.Z)((0,i.Z)({},u.Ji),{},{transition:{delay:.2}})),{},{children:"Als je verzekerd bent wordt een deel van je behandelingen vergoed door een zorgverzekeraar."}))}),(0,h.jsxs)(l.m.div,(0,i.Z)((0,i.Z)({md:6,className:"col-lg-6 col-md-6 offset-lg-1"},(0,i.Z)((0,i.Z)({},u.Ji),{},{transition:{delay:.4}})),{},{children:[(0,h.jsx)("p",{className:"w-[85%] lg:w-full mb-[20px] text-jordaanText",children:"Als u een zorgverzekering heeft kan het zijn dat zij een deel of zelfs alle kosten vergoeden. Dit is afhankelijk van je polisvoorwaarden. Basisverzekeringen dekken vaak niets of weinig, terwijl aanvullende verzekeringen veel of zelfs alle kosten vergoeden."}),(0,h.jsx)("p",{dangerouslySetInnerHTML:{__html:"Heeft u een <strong>chronische klacht</strong> als de ziekte van Parkinson of MS? De zorgverzekeraar vergoed dan op lange termijn uw behandelingen, maar mogelijk moet u aan het begin van het traject toch zelf behandelingen betalen. Lees hieronder meer over."},className:"w-[85%] lg:w-full mb-[20px] text-jordaanText"}),(0,h.jsx)(d.Z,{ariaLabel:"Explore more",href:b,color:"#000",title:"Hoe vergoeden zorgverzekeraars chonische klachten?",size:"xl",className:"font-medium hover:text-darkgray font-serif uppercase btn-link after:h-[1px] after:bg-black md:text-md"})]}))]})})]}),(0,h.jsx)("section",{className:"pt-[350px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]",children:(0,h.jsx)(a.Z,{children:(0,h.jsx)(g.Z,{grid:"row-cols-1 row-cols-lg-2 gap-y-10 lg:gap-y-[30px] xs:gap-y-[15px]",className:"col-12 col-lg-6 col-md-9 col-sm-10",theme:"fancy-text-box-03",data:v})})}),(0,h.jsx)(p.Z,{theme:"dark",className:"bg-darkgray text-[#7e7e7e]"})]})}}}]);
//# sourceMappingURL=594.1bfce2b4.chunk.js.map