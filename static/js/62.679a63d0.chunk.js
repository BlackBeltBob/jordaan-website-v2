"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[62],{3739:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(1413),s=n(2791),o=n(1087),i=n(3360),r=n(184),l=function(e){var t=e.themeColor&&e.themeColor[0],n=e.themeColor&&e.themeColor[1],s=e.color&&e.color[0],l=e.color&&e.color[1],d={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(s,", ").concat(l,", ").concat(s,")"):e.color};return e.href||"submit"===e.type?(0,r.jsx)(i.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:d,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,r.jsx)(c,(0,a.Z)({},e))}):(0,r.jsx)(o.rU,{style:d,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,r.jsx)(c,(0,a.Z)({},e))})},c=function(e){return(0,r.jsxs)(r.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,r.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,r.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,r.jsx)("span",{})]})};l.defaultProps={size:"lg",style:"primary"};var d=(0,s.memo)(l)},8315:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(2791),s=n(1087),o=n(7262),i=n(9743),r=n(2677),l=n(1413),c=n(5987),d=n(2734),m=n(184),u=["data","titleClass","className"],p=function(e){var t=(0,a.useContext)(d.Z).setFooterHeight;return(0,a.useEffect)((function(){var n=document.querySelector("footer");function a(){var a=window.innerWidth,s=0;e.parallax&&(!0===e.parallax.desktop&&(s=n.offsetHeight,n.classList.add("pos-fixed")),a<=1199&&(!1===e.parallax.lg&&(s=0,n.classList.remove("pos-fixed")),!0===e.parallax.lg&&(s=n.offsetHeight,n.classList.add("pos-fixed"))),a<=991&&(!1===e.parallax.md&&(s=0,n.classList.remove("pos-fixed")),!0===e.parallax.md&&(s=n.offsetHeight,n.classList.add("pos-fixed"))),a<=767&&(!1===e.parallax.sm&&(s=0,n.classList.remove("pos-fixed")),!0===e.parallax.sm&&(s=n.offsetHeight,n.classList.add("pos-fixed"))),a<=575&&(!1===e.parallax.xs&&(s=0,n.classList.remove("pos-fixed")),!0===e.parallax.xs&&(s=n.offsetHeight,n.classList.add("pos-fixed")))),t(s-1)}setTimeout(a,1e3),window.addEventListener("resize",(function(){setTimeout(a,1e3)}))}),[]),(0,m.jsx)("footer",{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),style:e.style,children:e.children})},f=function(e){var t=e.data,n=e.titleClass,a=e.className,o=(0,c.Z)(e,u);return(0,m.jsx)(m.Fragment,{children:t.map((function(e,t){return(0,m.jsxs)(r.Z,(0,l.Z)((0,l.Z)({},o),{},{className:"footer-menu".concat(a?" ".concat(a):""),children:[e.title&&(0,m.jsx)("span",{className:"mb-[20px] block font-medium font-serif xs:!mb-[10px]".concat(n?" ".concat(n):""),children:e.title}),(0,m.jsx)("ul",{children:e.submenu.map((function(e,t){return(e.link||e.title)&&(0,m.jsx)("li",{className:"mb-[7px] last:mb-0",children:(0,m.jsx)(s.rU,{"aria-label":"footer menu link",to:e.link,children:e.title})},t)}))})]}),t)}))})};p.defaultProps={theme:"dark"};var h=(0,a.memo)(f),g=[{title:"De kleine letters",submenu:[{title:"Klachtenregeling",link:"/page/complaints"},{title:"Uw privacy",link:"/page/privacy"},{title:"Privacyreglement",link:"/Assets/pdf/privacyreglement.pdf"}]},{title:"Klanten",submenu:[{title:"Client support",link:"/page/faq-s"},{title:"Pricing packages",link:"/page/pricing-packages"},{title:"Over ons",link:"/page/about-us"},{title:"Hoe wij werken",link:"/page/our-process"}]}],x=function(e){return(0,m.jsxs)(p,{theme:e.theme,className:"".concat(e.className?" ".concat(e.className):""),children:[(0,m.jsx)("div",{className:"py-[5%] lg:py-[95px] md:py-[50px]",children:(0,m.jsx)(o.Z,{children:(0,m.jsxs)(i.Z,{children:[(0,m.jsx)(h,{data:g.slice(0,2),lg:3,sm:6,className:"xl:px-[15px] md:mb-[40px] xs:mb-[25px]",titleClass:"capitalize"}),(0,m.jsxs)(r.Z,{lg:3,sm:6,className:"xs:mb-[25px]",children:[(0,m.jsx)("span",{className:"mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]",children:"U vind ons hier"}),(0,m.jsx)("p",{className:"w-[85%] mb-[15px]",children:"Westerstraat 238, 1015 MT, Amsterdam"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("i",{className:"feather-phone-call text-sm mr-[10px] text-themecolor"}),"+31 20 623 5136"]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("i",{className:"feather-mail text-sm mr-[10px] text-themecolor"}),(0,m.jsx)("a",{"aria-label":"mail",href:"mailTo:info@mensendieck-fysiotherapie.nl",children:"info@mensendieck-fysiotherapie.nl"})]})]}),(0,m.jsx)(r.Z,{lg:3,sm:6})]})})}),(0,m.jsx)("div",{className:"py-[40px] border-t border-[#ffffff1a]",children:(0,m.jsx)(o.Z,{children:(0,m.jsxs)(i.Z,{children:[(0,m.jsx)(r.Z,{md:3,className:"sm:mb-[20px]",children:(0,m.jsx)(s.rU,{"aria-label":"homepage",to:"/",className:"sm:flex sm:justify-center",children:(0,m.jsx)("img",{alt:"logo",src:e.logo,width:"111",height:"36"})})}),(0,m.jsx)(r.Z,{md:6,className:"flex justify-center items-center text-center sm:mb-[20px]",children:(0,m.jsxs)("p",{className:"mb-0",children:["\xa9 ",(new Date).getFullYear()," Mensendieck Jordaan"]})}),(0,m.jsx)(r.Z,{md:3,className:"text-right sm:text-center"})]})})})]})};x.defaultProps={data:g,className:"bg-darkgray text-[#828282]",logo:"/assets/img/webp/logo-white.webp",theme:"light"};var v=(0,a.memo)(x)},4099:function(e,t,n){n.d(t,{II:function(){return d}});var a=n(1413),s=n(9439),o=n(5987),i=n(2791),r=n(5705),l=n(184),c=["label","labelClass","className","showErrorMsg"],d=(0,i.memo)((function(e){var t=e.label,n=e.labelClass,i=e.className,d=e.showErrorMsg,m=(0,o.Z)(e,c),u=(0,r.U$)(m),p=(0,s.Z)(u,2),f=p[0],h=p[1];return(0,l.jsxs)("label",{className:"block relative ".concat(h.touched&&h.error?" errors-danger":"").concat(n?" ".concat(n):""),children:[t,(0,l.jsx)("input",(0,a.Z)((0,a.Z)({className:"".concat(i).concat(h.touched&&h.error?" errors-danger":"")},f),m)),h.touched&&h.error&&d?(0,l.jsx)("span",{className:"text-sm text-error block mt-[5px]",children:h.error}):null]})}));d.defaultProps={showErrorMsg:!0}},3588:function(e,t,n){n.d(t,{h4:function(){return w},eG:function(){return j},v2:function(){return N},nn:function(){return y},E1:function(){return Z}});var a=n(4165),s=n(5861),o=n(1413),i=n(9439),r=n(2791),l=n(1724),c=n(5705),d=n(9430),m=n(7689),u=n(1087),p=n(9602),f=n(7262),h=n(2752),g=n(4099),x=(n(3739),n(1416)),v=n(2734),b=[{title:"Home",link:"/"},{title:"Organisatie",megamenu:[{title:"Organisatie",dropdown:[{icon:"fas fa-user-friends",title:"Team",link:"/page/our-team"},{icon:"solid-icon-Target",title:"Onze missie",link:"/page/mission-statement"},{icon:"solid-icon-Medical-Sign",title:"Voor verwijzers",link:"/page/for-referrers"},{icon:"fas fa-skull-crossbones",title:"Contact",link:"/page/contact-form"},{icon:"solid-icon-Affiliate",title:"Samenwerkingspartners",link:"/page/collaborations"}]}]},{title:"Tarieven",megamenu:[{title:"Tarieven",dropdown:[{icon:"fas fa-money-bill-wave-alt",title:"Prijslijst 2024",link:"/page/tariffs-2024"},{icon:"fas fa-clock",title:"Chronische zorgtrajecten",link:"/page/chronic-healthcare"},{icon:"fas fa-file-contract",title:"Gecontracteerde zorgverzekeraars",link:"/page/contracted-insurers"}]}]},{title:"Reviews",megamenu:[{title:"Reviews",dropdown:[{icon:"fas fa-flask",title:"Klanttevredenheidsonderzoek",link:"/page/reviews-prem"},{icon:"far fa-comment",title:"Testimonials",link:"/page/reviews-testimonials"},{icon:"fab fa-google",title:"Review achterlaten",link:"https://g.page/r/CexOIx2B4m5hEAg/review"}]},{dropdown:[{img:"".concat("/jordaan-website-v2","/assets/img/qualityseal.png"),link:"https://mensendieck.substack.com/"}]}]},{title:"Aanbod",megamenu:[{title:"Pakketten",dropdown:[{icon:"fas fa-skull-crossbones",title:"Rugklachten",link:"/page/pakket-rugklachten"},{icon:"fas fa-skull-crossbones",title:"Nekklachten",link:"/page/pakket-nekklachten"},{icon:"fas fa-skull-crossbones",title:"Slaaptraining",link:"/page/pakket-slaaptraining"}]},{title:"Behandelingen",dropdown:[{icon:"fas fa-skull-crossbones",title:"Onze reguliere behandelingen",link:"/"},{icon:"fas fa-skull-crossbones",title:"Hypnotherapie",link:"/"},{icon:"fas fa-skull-crossbones",title:"Bewegingsgroepen",link:"/"},{icon:"fas fa-skull-crossbones",title:"Parkinsonisme",link:"/"}]},{title:"Nieuwsbrief",dropdown:[{img:"".concat("/jordaan-website-v2","/assets/img/webp/download.jpeg"),link:"https://mensendieck.substack.com/"}]}]}],k=n(184),w=(0,r.memo)((function(e){var t=(0,r.useContext)(v.Z).setHeaderHeight,n=(0,d.v)().scrollY,a=(0,r.useState)({y:0,prevY:-1,directionDown:!0}),s=(0,i.Z)(a,2),l=s[0],c=s[1],u=(0,m.TH)();return(0,r.useEffect)((function(){var n=document.querySelector("header");function a(){var a=window.innerWidth,s=e.topSpace.desktop&&!0===e.topSpace.desktop?n.offsetHeight:0;a<=1199&&e.topSpace.lg&&(s=!0===e.topSpace.lg?n.offsetHeight:0),a<=991&&e.topSpace.md&&(s=!0===e.topSpace.md?n.offsetHeight:0),a<=767&&e.topSpace.sm&&(s=!0===e.topSpace.sm?n.offsetHeight:0),a<=575&&e.topSpace.xs&&(s=!0===e.topSpace.xs?n.offsetHeight:0),t(s)}a(),window.addEventListener("load",a),window.addEventListener("resize",a),document.body.classList.contains("mobile-menu")&&(document.body.classList.remove("navbar-collapse-show"),document.body.classList.remove("menu-modern"),document.body.classList.remove("menu-full"),document.body.style.removeProperty("overflow"))}),[u]),(0,r.useEffect)((function(){var e=0;n.onChange((function(t){c(t>e?(0,o.Z)((0,o.Z)({},l),{},{y:t,prevY:t-1,directionDown:!0}):(0,o.Z)((0,o.Z)({},l),{},{y:t,prevY:t-1,directionDown:!1})),0===t&&c((0,o.Z)((0,o.Z)({},l),{},{directionDown:!0})),e=t}))}),[]),(0,k.jsx)("header",{className:"".concat(e.className?e.className:"").concat(l.y>5?" sticky-header":"").concat(!1===l.directionDown?" header-appear":"").concat(e.type?" ".concat(e.type):""),children:e.children})})),j=function(e){return(0,k.jsx)(p.Z,{collapseOnSelect:!0,id:"headerbar",expand:e.expand,bg:e.bg?e.bg:"transparent",variant:e.theme,className:"".concat(e.menu&&"menu-".concat(e.menu)).concat(e.className?" ".concat(e.className):"").concat(e.bg||"transparent"===e.bg?"":" header-transparent"),onToggle:function(){var e=document.querySelector("header").querySelector(".navbar-nav").querySelectorAll(".nav-item");document.body.classList.contains("navbar-collapse-show")?document.body.classList.remove("navbar-collapse-show"):document.body.classList.add("navbar-collapse-show"),e.forEach((function(e){e.classList.contains("open")&&setTimeout((function(){e.classList.remove("open")}),200)}))},children:(0,k.jsx)(f.Z,{fluid:e.fluid,className:e.containerClass?e.containerClass:"",children:e.children})})},N=(0,r.memo)((function(e){var t=(0,r.useRef)(null),a=(0,r.useState)(null),s=(0,i.Z)(a,2),o=s[0],l=s[1],c=(0,r.useState)(!1),d=(0,i.Z)(c,2),p=d[0],f=d[1],h=(0,m.TH)();return(0,r.useEffect)((function(){var e=document.querySelector("header").querySelectorAll(".nav-link"),t=Array.from(e).find((function(e){return e.getAttribute("href")===h.pathname}));t&&Promise.all([n.e(558),n.e(596),n.e(780)]).then(n.bind(n,8480)).then((function(e){var n=e.getParents(t).filter((function(e){return e.classList.contains("simple-dropdown")})),a=e.getParents(t).filter((function(e){return e.classList.contains("nav-item")}));n.forEach((function(e){return e.classList.add("active")})),a.forEach((function(e){return e.classList.add("active")}))}))}),[h,p]),(0,r.useEffect)((function(){document.querySelector("header").querySelectorAll(".navbar-nav > .nav-item").forEach((function(e){return e.addEventListener("mouseover",(function(){return f(!0)}))}))}),[]),(0,k.jsx)("div",{className:"".concat(e.mobileMenu?"mobile-menu-".concat(e.mobileMenu):"").concat(e.className?" ".concat(e.className):""),children:(0,k.jsx)("ul",{className:"navbar-nav",children:e.data.map((function(e,n){return(0,k.jsxs)("li",{className:"nav-item".concat(e.dropdown||e.megamenu?" dropdown":"").concat(o===n?" open":""),children:[e.link?(0,k.jsx)(u.rU,{className:"nav-link",to:e.link,children:e.title}):(0,k.jsx)("span",{className:"nav-link",children:e.title}),(0,k.jsx)("i",{className:"fa fa-angle-down",onClick:function(e){return l((t=n)!==o?t:null);var t}}),e.dropdown&&(0,k.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,t){return(0,k.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,k.jsxs)(u.rU,{className:"nav-link",to:e.link,children:[e.title,e.dropdown&&(0,k.jsx)("i",{className:"fas fa-angle-right"})]}):(0,k.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,k.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,k.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,t){return(0,k.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,k.jsxs)(u.rU,{className:"nav-link".concat(e.dropdown?" md:text-black md:mt-[15px] md:mb-[7px]":""),to:e.link,children:[e.title,e.dropdown&&(0,k.jsx)("i",{className:"fas fa-angle-right"})]}):(0,k.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,k.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,k.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,t){return(0,k.jsx)("li",{className:"simple-dropdown",children:(0,k.jsx)(u.rU,{className:"nav-link",to:e.link,children:e.title})},t)}))})]},t)}))})]},t)}))}),e.megamenu&&(0,k.jsx)("div",{className:"flex megamenu",ref:t,children:e.megamenu.map((function(e,t){return(0,k.jsxs)("ul",{className:"".concat(e.dropdown.filter((function(e){return e.img})).length>0?"!pr-[30px] img-wrapper inline-block last:!pr-[0px]":"inline-block"),children:[e.title&&(0,k.jsx)("li",{className:"title text-md font-medium mb-[15px] whitespace-nowrap",children:e.title}),e.dropdown&&e.dropdown.map((function(e,t){return(0,k.jsxs)("li",{className:"nav-item",children:[e.title&&(0,k.jsxs)(u.rU,{className:"nav-link",to:e.link?e.link:"#",children:[" ",e.icon&&(0,k.jsx)("i",{className:"".concat(e.icon," mr-[10px]")})," ",e.title]}),e.img&&e.link&&(0,k.jsx)(u.rU,{to:e.link,children:(0,k.jsx)("img",{height:"235",alt:"menu-banner",width:"210",className:"inline-block max-w-[210px]",src:e.img})})]},t)}))]},t)}))})]},n)}))})})})),y=function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(null),a=(0,i.Z)(n,2),s=a[0],o=a[1],l=(0,r.useState)(!1),c=(0,i.Z)(l,2),d=c[0],f=c[1],h=(0,m.TH)();return(0,r.useEffect)((function(){function e(e){for(var t=[];e.parentNode&&"body"!==e.parentNode.nodeName.toLowerCase();)e=e.parentNode,t.push(e);return t}document.querySelector("header").querySelectorAll(".nav-link").forEach((function(t){var n=t.getAttribute("href");if(t.classList.remove("active"),n===h.pathname){t.closest(".simple-dropdown")&&t.closest(".simple-dropdown").querySelectorAll(".nav-link").forEach((function(e){return e.classList.remove("active")})),t.classList.add("active");var a=e(t).filter((function(e){return e.classList.contains("simple-dropdown")})),s=e(t).filter((function(e){return e.classList.contains("nav-item")}));a.forEach((function(e){return e.classList.add("active")})),s.forEach((function(e){return e.classList.add("active")}))}}))}),[h]),(0,r.useEffect)((function(){document.body.classList.add("mobile-menu");var e=function(e){27===e.keyCode&&(document.body.classList.contains("menu-modern")||document.body.classList.contains("menu-full"))&&document.querySelector("#close-btn").click()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,r.useEffect)((function(){var t=window.matchMedia("(max-width: 991px)");function n(t){t.matches&&!0===d?(document.body.style.overflow="hidden",document.body.classList.add("menu-".concat(e.type))):(document.body.style.removeProperty("overflow"),document.body.classList.remove("menu-".concat(e.type)))}n(t),t.addListener(n)}),[d]),(0,k.jsxs)("div",{className:e.className?" ".concat(e.className):"",children:[(0,k.jsxs)(p.Z.Toggle,{id:"toggle-bar",className:"order-last md:px-[25px] sm:ml-0",onClick:function(){return f(!d)},children:[(0,k.jsx)("span",{className:"navbar-toggler-line"}),(0,k.jsx)("span",{className:"navbar-toggler-line"}),(0,k.jsx)("span",{className:"navbar-toggler-line"}),(0,k.jsx)("span",{className:"navbar-toggler-line"})]}),(0,k.jsxs)(p.Z.Collapse,{id:"myCollapsible",className:"col-auto justify-center mobile-menu-".concat(e.type),children:[(0,k.jsxs)(p.Z.Toggle,{id:"close-btn",onClick:function(){return f(!d)},children:[(0,k.jsx)("span",{className:"navbar-toggler-line bg-white"}),(0,k.jsx)("span",{className:"navbar-toggler-line bg-white"}),(0,k.jsx)("span",{className:"navbar-toggler-line bg-white"}),(0,k.jsx)("span",{className:"navbar-toggler-line bg-white"})]}),(0,k.jsx)(x.Z,{className:"pr-[15px]",theme:"light",autoHide:!0,children:(0,k.jsx)("div",{className:"",children:(0,k.jsx)("ul",{className:"navbar-nav",children:e.data.map((function(e,n){return(0,k.jsxs)("li",{className:"nav-item".concat(e.dropdown||e.megamenu?" dropdown":"").concat(s===n?" open":""),children:[e.link?(0,k.jsx)(u.rU,{className:"nav-link",to:e.link,children:e.title}):(0,k.jsx)("span",{className:"nav-link",children:e.title}),(0,k.jsx)("i",{className:"fa fa-angle-down",onClick:function(e){return o((t=n)!==s?t:null);var t}}),e.dropdown&&(0,k.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,t){return(0,k.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,k.jsxs)(u.rU,{className:"nav-link",to:e.link,children:[e.title,e.dropdown&&(0,k.jsx)("i",{className:"fas fa-angle-right"})]}):(0,k.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,k.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,k.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,t){return(0,k.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,k.jsxs)(u.rU,{className:"nav-link".concat(e.dropdown?" md:text-black md:mt-[15px] md:mb-[7px]":""),to:e.link,children:[e.title,e.dropdown&&(0,k.jsx)("i",{className:"fas fa-angle-right"})]}):(0,k.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,k.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,k.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,t){return(0,k.jsx)("li",{className:"simple-dropdown",children:(0,k.jsx)(u.rU,{className:"nav-link",to:e.link,children:e.title})},t)}))})]},t)}))})]},t)}))}),e.megamenu&&(0,k.jsx)("div",{className:"megamenu",ref:t,children:(0,k.jsx)("div",{className:"flex",children:e.megamenu.map((function(e,t){return(0,k.jsxs)("ul",{className:"".concat(e.dropdown.filter((function(e){return e.img})).length>0?"img-wrapper":"inline-block"),children:[(0,k.jsx)("li",{className:"title text-md font-medium mb-[10px] whitespace-nowrap",children:e.title}),e.dropdown&&e.dropdown.map((function(e,t){return(0,k.jsx)("li",{className:"nav-item",children:(0,k.jsxs)(u.rU,{className:"nav-link",to:e.link?e.link:"#",children:[e.icon&&(0,k.jsx)("i",{className:"".concat(e.icon," mr-[10px]")})," ",e.title]})},t)}))]},t)}))})})]},n)}))})})})]})]})},L=(0,r.memo)((function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(!1),a=(0,i.Z)(n,2),s=a[0],o=a[1];return(0,h.Z)(t,(function(e){return o(!1)})),(0,r.useEffect)((function(){var e=function(e){27===e.keyCode&&o(!1)};return!0===s?(document.querySelector("body").classList.add("overflow-hidden"),document.querySelector(".push-button").classList.remove("collapsed")):(document.querySelector("body").classList.remove("overflow-hidden"),document.querySelector(".push-button").classList.add("collapsed")),window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[s]),(0,k.jsx)(k.Fragment,{children:[!1].map((function(n){return(0,k.jsxs)(p.Z,{expand:n,className:"header-push-button bg-transparent inline-block ".concat(e.theme),children:[(0,k.jsx)(p.Z.Toggle,{className:"push-button",onClick:function(){return o(!0)},children:(0,k.jsxs)("div",{className:"nav-icon",children:[(0,k.jsx)("span",{className:"navbar-toggler-line"}),(0,k.jsx)("span",{className:"navbar-toggler-line"}),(0,k.jsx)("span",{className:"navbar-toggler-line"}),(0,k.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,k.jsx)("div",{className:"".concat(s?"block h-[100vh] left-0 overflow-hidden fixed top-0 w-full z-[999]":""),children:(0,k.jsxs)("div",{ref:t,className:"hamburger-menu-wrapper pos-".concat(e.position).concat(s?" show":"").concat(e.className?" ".concat(e.className):""),children:[e.closeBtn&&(0,k.jsx)("button",{"aria-label":"hamburger menu close button",className:"close-btn",onClick:function(){return o(!1)},children:(0,k.jsx)("i",{className:"fas fa-times"})}),s&&e.children]})})]},n)}))})})),Z=(0,r.memo)((function(e){var t=(0,r.useContext)(v.Z).setIsModalOpen,n=(0,r.useRef)(null),o=(0,r.useState)(!1),d=(0,i.Z)(o,2),p=d[0],f=d[1],x=(0,m.s0)();return(0,h.Z)(n,(function(){return f(!1)})),(0,r.useEffect)((function(){!0===p&&t(!0),!1===p&&t(!1)}),[p]),(0,r.useEffect)((function(){var e=function(e){27===e.keyCode&&f(!1)};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,k.jsxs)("div",{className:"header-search-iconbar inline-block align-middle pl-[17px] text-[17px] leading-none".concat(e.className?" ".concat(e.className):""),style:e.style,children:[(0,k.jsx)(u.rU,{to:"#","aria-label":"search",className:"search-form-icon leading-[20px]",onClick:function(e){return e.preventDefault()},children:(0,k.jsx)("i",{className:"feather-search px-0 inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(){return f(!0)}})}),(0,k.jsxs)("div",{className:"form-wrapper ".concat(p?" show":""),children:[(0,k.jsxs)("button",{title:"Close",type:"button",className:"search-close font-serif",onClick:function(){return f(!1)},children:["\xd7"," "]}),p&&(0,k.jsx)(c.J9,{initialValues:{search:""},validationSchema:l.Ry().shape({search:l.Z_().required("Field is required.")}),onSubmit:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:n.resetForm(),f(!1),x("/page/search-result",{state:{search:t}});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:(0,k.jsx)(c.l0,{role:"search",method:"get",id:"search-form",className:"search-form text-start",ref:n,children:(0,k.jsxs)("div",{className:"search-form-box",children:[(0,k.jsx)(g.II,{showErrorMsg:!1,className:"search-input font-serif text-darkgray relative border-b border-solid border-darkgray",name:"search",type:"text",label:(0,k.jsxs)("span",{className:"search-label font-medium text-spanishgray text-sm font-serif uppercase block",children:["What are you looking for?"," "]}),placeholder:"Enter your keywords..."}),(0,k.jsx)("button",{type:"submit",className:"search-button absolute top-1/2 right-0",children:(0,k.jsx)("i",{className:"feather-search text-darkgray","aria-hidden":"true"})})]})})})]})]})}));w.defaultProps={topSpace:{desktop:!1}},j.defaultProps={fluid:"lg",theme:"dark",menu:"light",expand:"lg"},L.defaultProps={theme:"light",position:"right",closeBtn:!0},N.defaultProps={data:b},y.defaultProps={type:"full",data:b}},3992:function(e,t,n){n(2791);var a=n(7262),s=n(9743),o=n(2677),i=n(184);t.Z=function(e){var t=function(){e.onFilterChange&&e.onFilterChange()};return(e.title||e.filterData)&&(0,i.jsx)(a.Z,{className:"mb-24 md:mb-[4.5rem] sm:mb-8",children:(0,i.jsxs)(s.Z,{className:"".concat(e.title?"justify-between":"justify-center"," items-center md:justify-center md:items-center md:text-center md:flex-col"),children:[e.title&&(0,i.jsx)(o.Z,{xs:"auto",className:"md:mb-[30px]",children:(0,i.jsx)("h3",{className:"heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]",children:e.title})}),(0,i.jsx)(o.Z,{xs:"auto",children:e.filterData&&(0,i.jsx)("ul",{className:"filter-menu items-center justify-center flex flex-wrap uppercase",children:e.filterData.map((function(e,n){return(0,i.jsx)("li",{className:"px-[20px]".concat(0===n?" active":""),children:(0,i.jsx)("span",{"data-filter":e.key,onClick:t,children:e.title})},n)}))})})]})})}},1416:function(e,t,n){var a=n(1413),s=n(5987),o=n(2791),i=n(2520),r=n(184),l=["theme","children","className"],c=function(e){var t=e.theme,n=e.children,c=e.className,d=(0,s.Z)(e,l);return(0,o.useEffect)((function(){var e=document.querySelectorAll(".smooth-scrollbar"),t=function(){e.forEach((function(e){setTimeout((function(){var t=e.querySelector(".scroll-content");null!==t&&t.clientHeight>e.clientHeight&&e.classList.add("scrollbar-appear"),null!==t&&t.clientHeight<e.clientHeight&&e.classList.remove("scrollbar-appear")}),500)}))};t(),window.addEventListener("resize",t),document.querySelectorAll(".accordion-button").forEach((function(e){e.addEventListener("click",t)}));var n=document.querySelectorAll(".navbar-nav > .nav-item");"undefined"!=typeof n&&null!=n&&n.forEach((function(e){var n=e.querySelector(".fa");"undefined"!=typeof n&&null!=n&&n.addEventListener("click",t)}))}),[]),(0,r.jsx)(i.Scrollbar,(0,a.Z)((0,a.Z)({},d),{},{className:"smooth-scrollbar ".concat(t).concat(c?" ".concat(c):""),plugins:{overscroll:{effect:"bounce"}},children:n}))};c.defaultProps={theme:"light"},t.Z=(0,o.memo)(c)},2106:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(9439),s=n(2791),o=n(7689),i=(n(1416),n(3739),n(1087)),r=n(7245),l=n(3992),c=n(184),d=function(e){var t=(0,s.useRef)(),o=(0,s.useState)(!0),d=(0,a.Z)(o,2),m=d[0],u=d[1];(0,s.useEffect)((function(){var e=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((function(e){return!e.complete})).map((function(e){return new Promise((function(t){e.onload=e.onerror=t}))}))).then((function(){Promise.all([n.e(558),n.e(596),n.e(780)]).then(n.bind(n,8480)).then((function(e){e.initializeIsotop(t.current).on("arrangeComplete",(function(){return u(!1)}))}))}))}));return(0,c.jsxs)("div",{className:"".concat(e.className?" ".concat(e.className):""," grid-wrapper"),children:[(0,c.jsx)(l.Z,{title:e.title,filterData:e.filterData,onFilterChange:function(){t.current.querySelectorAll("li").forEach((function(e){var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),(0,c.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(m?" loading":""),children:[(0,c.jsx)("li",{className:"grid-sizer"}),e.data.map((function(t,n){return(0,c.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category.toString().split(",").join(" ").toLowerCase()),children:(0,c.jsx)(i.rU,{"aria-label":"link",target:e.target,to:t.link,className:"no-underline",children:(0,c.jsxs)(r.m.div,{className:"portfolio-switchimg overflow-hidden",initial:{opacity:0},whileInView:!m&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:[(0,c.jsxs)("div",{className:"portfolio-image",children:[t.frontimg&&(0,c.jsx)("img",{src:t.frontimg,width:600,height:500,alt:"portfolio-switch",className:"w-full"}),t.backimg&&(0,c.jsx)("img",{className:"portfolio-switch-image w-full",src:t.backimg,width:600,height:500,alt:"portfolio-switch"})]}),(0,c.jsxs)("div",{className:"py-[30px] portfolio-content lg:py-[20px] xs:py-[15px]",children:[t.title&&(0,c.jsx)("span",{className:"inline-block font-medium text-darkgray font-serif",children:t.title}),t.subtitle&&(0,c.jsx)("span",{className:"block text-spanishgray text-md",children:t.subtitle})]})]})})},n)}))]})]})};d.defaultProps={data:[{title:"Magazine Cover",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:[""],subtitle:"Design and create brand",link:"/portfolio/single-project-page-01"},{title:"Biolator Series",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:["branding"],subtitle:"Most wonderful place",link:"/portfolio/single-project-page-02"},{title:"Potato Oslands",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:["branding","graphics"],subtitle:"You have a good family",link:"/portfolio/single-project-page-03"},{title:"Daimler Financial",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:["graphics","logos"],subtitle:"These are good suggestions",link:"/portfolio/single-project-page-04"},{title:"Skoda Corporate",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:["logos","photography"],subtitle:"Carmen is a good wife",link:"/portfolio/single-project-page-05"},{title:"Jeremy Dupont",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:["branding","photography"],subtitle:"Everything was in good",link:"/portfolio/single-project-page-01"},{title:"Bill Gardner",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:["branding","graphics"],subtitle:"Quit talking and begin doing",link:"/portfolio/single-project-page-02"},{title:"The Aparthotel",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:["graphics","logos"],subtitle:"Opportunity in every difficulty",link:"/portfolio/single-project-page-03"},{title:"Armchair Mojo",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:["logos","photography"],subtitle:"You learn more from failure",link:"/portfolio/single-project-page-04"},{title:"Truenorth Web",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:["branding","photography"],subtitle:"You are working on something",link:"/portfolio/single-project-page-05"},{title:"Mass Productions",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:["branding","graphics"],subtitle:"Failure will never overtake",link:"/portfolio/single-project-page-01"},{title:"Cortifiel Look",frontimg:"https://via.placeholder.com/800x650",backimg:"https://via.placeholder.com/800x650",category:["graphics"],subtitle:"Imagine your life",link:"/portfolio/single-project-page-02"}]};n(3407);var m=n(2752),u=(0,s.memo)((function(e){var t=(0,s.useState)(!1),n=(0,a.Z)(t,2),i=n[0],r=n[1],l=(0,s.useState)(!1),d=(0,a.Z)(l,2),u=(d[0],d[1]),p=(0,s.useRef)(null);(0,m.Z)(p,(function(){return r(!1)}));var f=(0,o.TH)();return(0,s.useEffect)((function(){window.addEventListener("scroll",(function(){document.documentElement.scrollTop>100&&u(!0)}))}),[]),(0,s.useEffect)((function(){var e=function(e){27===e.keyCode&&r(!1)};return!0===i?document.querySelector("body").classList.add("overflow-hidden"):document.querySelector("body").classList.remove("overflow-hidden"),window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[i]),(0,s.useEffect)((function(){u(!1),!1===e.animation&&u(!0)}),[f]),(0,c.jsx)(c.Fragment,{})})),p=(0,s.memo)(u)},3407:function(e,t,n){n.d(t,{Ji:function(){return s},O2:function(){return i},kr:function(){return o}});var a=window.innerWidth<768,s=a?{}:{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4}},o=a?{}:{initial:{opacity:0,scale:.3},whileInView:{opacity:1,scale:1},viewport:{once:!0}},i=a?{}:{initial:{opacity:0,x:"50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}}},2752:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(2791);function s(e,t){(0,a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t])}}}]);
//# sourceMappingURL=62.679a63d0.chunk.js.map