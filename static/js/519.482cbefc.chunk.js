"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[519],{3739:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(1413),s=t(2791),l=t(1087),r=t(3360),i=t(184),c=function(e){var n=e.themeColor&&e.themeColor[0],t=e.themeColor&&e.themeColor[1],s=e.color&&e.color[0],c=e.color&&e.color[1],d={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(n,", ").concat(t,", ").concat(n,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(n,", ").concat(t,", ").concat(n,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(s,", ").concat(c,", ").concat(s,")"):e.color};return e.href||"submit"===e.type?(0,i.jsx)(r.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:d,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,i.jsx)(o,(0,a.Z)({},e))}):(0,i.jsx)(l.rU,{style:d,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,i.jsx)(o,(0,a.Z)({},e))})},o=function(e){return(0,i.jsxs)(i.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,i.jsx)("span",{})]})};c.defaultProps={size:"lg",style:"primary"};var d=(0,s.memo)(c)},8315:function(e,n,t){t.d(n,{Z:function(){return b}});var a=t(2791),s=t(1087),l=t(7262),r=t(9743),i=t(2677),c=t(1413),o=t(5987),d=t(2734),m=t(184),u=["data","titleClass","className"],p=function(e){var n=(0,a.useContext)(d.Z).setFooterHeight;return(0,a.useEffect)((function(){var t=document.querySelector("footer");function a(){var a=window.innerWidth,s=0;e.parallax&&(!0===e.parallax.desktop&&(s=t.offsetHeight,t.classList.add("pos-fixed")),a<=1199&&(!1===e.parallax.lg&&(s=0,t.classList.remove("pos-fixed")),!0===e.parallax.lg&&(s=t.offsetHeight,t.classList.add("pos-fixed"))),a<=991&&(!1===e.parallax.md&&(s=0,t.classList.remove("pos-fixed")),!0===e.parallax.md&&(s=t.offsetHeight,t.classList.add("pos-fixed"))),a<=767&&(!1===e.parallax.sm&&(s=0,t.classList.remove("pos-fixed")),!0===e.parallax.sm&&(s=t.offsetHeight,t.classList.add("pos-fixed"))),a<=575&&(!1===e.parallax.xs&&(s=0,t.classList.remove("pos-fixed")),!0===e.parallax.xs&&(s=t.offsetHeight,t.classList.add("pos-fixed")))),n(s-1)}setTimeout(a,1e3),window.addEventListener("resize",(function(){setTimeout(a,1e3)}))}),[]),(0,m.jsx)("footer",{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),style:e.style,children:e.children})},h=function(e){var n=e.data,t=e.titleClass,a=e.className,l=(0,o.Z)(e,u);return(0,m.jsx)(m.Fragment,{children:n.map((function(e,n){return(0,m.jsxs)(i.Z,(0,c.Z)((0,c.Z)({},l),{},{className:"footer-menu".concat(a?" ".concat(a):""),children:[e.title&&(0,m.jsx)("span",{className:"mb-[20px] block font-medium font-serif xs:!mb-[10px]".concat(t?" ".concat(t):""),children:e.title}),(0,m.jsx)("ul",{children:e.submenu.map((function(e,n){return(e.link||e.title)&&(0,m.jsx)("li",{className:"mb-[7px] last:mb-0",children:(0,m.jsx)(s.rU,{"aria-label":"footer menu link",to:e.link,children:e.title})},n)}))})]}),n)}))})};p.defaultProps={theme:"dark"};var f=(0,a.memo)(h),x=[{title:"De kleine letters",submenu:[{title:"Klachtenregeling",link:"/page/complaints"},{title:"Uw privacy",link:"/page/privacy"},{title:"Privacyreglement",link:"/Assets/pdf/privacyreglement.pdf"}]},{title:"Klanten",submenu:[{title:"Client support",link:"/page/faq-s"},{title:"Pricing packages",link:"/page/pricing-packages"},{title:"Over ons",link:"/page/about-us"},{title:"Hoe wij werken",link:"/page/our-process"}]}],g=function(e){return(0,m.jsxs)(p,{theme:e.theme,className:"".concat(e.className?" ".concat(e.className):""),children:[(0,m.jsx)("div",{className:"py-[5%] lg:py-[95px] md:py-[50px]",children:(0,m.jsx)(l.Z,{children:(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(f,{data:x.slice(0,2),lg:3,sm:6,className:"xl:px-[15px] md:mb-[40px] xs:mb-[25px]",titleClass:"capitalize"}),(0,m.jsxs)(i.Z,{lg:3,sm:6,className:"xs:mb-[25px]",children:[(0,m.jsx)("span",{className:"mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]",children:"U vind ons hier"}),(0,m.jsx)("p",{className:"w-[85%] mb-[15px]",children:"Westerstraat 238, 1015 MT, Amsterdam"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("i",{className:"feather-phone-call text-sm mr-[10px] text-themecolor"}),"+31 20 623 5136"]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("i",{className:"feather-mail text-sm mr-[10px] text-themecolor"}),(0,m.jsx)("a",{"aria-label":"mail",href:"mailTo:info@mensendieck-fysiotherapie.nl",children:"info@mensendieck-fysiotherapie.nl"})]})]}),(0,m.jsx)(i.Z,{lg:3,sm:6})]})})}),(0,m.jsx)("div",{className:"py-[40px] border-t border-[#ffffff1a]",children:(0,m.jsx)(l.Z,{children:(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(i.Z,{md:3,className:"sm:mb-[20px]",children:(0,m.jsx)(s.rU,{"aria-label":"homepage",to:"/",className:"sm:flex sm:justify-center",children:(0,m.jsx)("img",{alt:"logo",src:e.logo,width:"111",height:"36"})})}),(0,m.jsx)(i.Z,{md:6,className:"flex justify-center items-center text-center sm:mb-[20px]",children:(0,m.jsxs)("p",{className:"mb-0",children:["\xa9 ",(new Date).getFullYear()," Mensendieck Jordaan"]})}),(0,m.jsx)(i.Z,{md:3,className:"text-right sm:text-center"})]})})})]})};g.defaultProps={data:x,className:"bg-darkgray text-[#828282]",logo:"/assets/img/webp/logo-white.webp",theme:"light"};var b=(0,a.memo)(g)},4099:function(e,n,t){t.d(n,{II:function(){return d}});var a=t(1413),s=t(9439),l=t(5987),r=t(2791),i=t(5705),c=t(184),o=["label","labelClass","className","showErrorMsg"],d=(0,r.memo)((function(e){var n=e.label,t=e.labelClass,r=e.className,d=e.showErrorMsg,m=(0,l.Z)(e,o),u=(0,i.U$)(m),p=(0,s.Z)(u,2),h=p[0],f=p[1];return(0,c.jsxs)("label",{className:"block relative ".concat(f.touched&&f.error?" errors-danger":"").concat(t?" ".concat(t):""),children:[n,(0,c.jsx)("input",(0,a.Z)((0,a.Z)({className:"".concat(r).concat(f.touched&&f.error?" errors-danger":"")},h),m)),f.touched&&f.error&&d?(0,c.jsx)("span",{className:"text-sm text-error block mt-[5px]",children:f.error}):null]})}));d.defaultProps={showErrorMsg:!0}},3588:function(e,n,t){t.d(n,{h4:function(){return k},Yx:function(){return S},dZ:function(){return E},eG:function(){return w},v2:function(){return y},nn:function(){return Z},E1:function(){return C},ZP:function(){return U}});var a=t(4165),s=t(5861),l=t(1413),r=t(9439),i=t(2791),c=t(1724),o=t(5705),d=t(9430),m=t(7689),u=t(1087),p=t(4217),h=t(7262),f=t(2752),x=t(4099),g=t(3739),b=t(1416),v=t(2734),j=[{title:"Home",link:"/"},{title:"Organisatie",dropdown:[{title:"Team",link:"/page/our-team"},{title:"Onze missie",link:"/page/mission-statement"},{title:"Voor verwijzers",link:"/page/info-statement"},{title:"Contact",link:"/page/contact-form"},{title:"Samenwerkingspartners",link:"/page/collaborations"}]},{title:"Tarieven",dropdown:[{title:"Prijslijst 2024",link:"/page/tariffs-2024"},{title:"Chronische zorgtrajecten",link:"/page/chronic-healthcare"}]},{title:"Reviews",dropdown:[{title:"Klanttevredenheidsonderzoek",link:"/page/reviews-prem"},{title:"Testimonials",link:"/page/reviews-testimonials"},{title:"Review achterlaten",link:"https://g.page/r/CexOIx2B4m5hEAg/review"}]},{title:"Aanbod",dropdown:[{title:"Pakketten",dropdown:[{title:"Rugklachten",link:"/page/pakket-rugklachten"},{title:"Nekklachten",link:"/page/pakket-nekklachten"},{title:"Slaaptraining",link:"/page/pakket-slaaptraining"}]}]}],N=t(184),k=(0,i.memo)((function(e){var n=(0,i.useContext)(v.Z).setHeaderHeight,t=(0,d.v)().scrollY,a=(0,i.useState)({y:0,prevY:-1,directionDown:!0}),s=(0,r.Z)(a,2),c=s[0],o=s[1],u=(0,m.TH)();return(0,i.useEffect)((function(){var t=document.querySelector("header");function a(){var a=window.innerWidth,s=e.topSpace.desktop&&!0===e.topSpace.desktop?t.offsetHeight:0;a<=1199&&e.topSpace.lg&&(s=!0===e.topSpace.lg?t.offsetHeight:0),a<=991&&e.topSpace.md&&(s=!0===e.topSpace.md?t.offsetHeight:0),a<=767&&e.topSpace.sm&&(s=!0===e.topSpace.sm?t.offsetHeight:0),a<=575&&e.topSpace.xs&&(s=!0===e.topSpace.xs?t.offsetHeight:0),n(s)}a(),window.addEventListener("load",a),window.addEventListener("resize",a),document.body.classList.contains("mobile-menu")&&(document.body.classList.remove("navbar-collapse-show"),document.body.classList.remove("menu-modern"),document.body.classList.remove("menu-full"),document.body.style.removeProperty("overflow"))}),[u]),(0,i.useEffect)((function(){var e=0;t.onChange((function(n){o(n>e?(0,l.Z)((0,l.Z)({},c),{},{y:n,prevY:n-1,directionDown:!0}):(0,l.Z)((0,l.Z)({},c),{},{y:n,prevY:n-1,directionDown:!1})),0===n&&o((0,l.Z)((0,l.Z)({},c),{},{directionDown:!0})),e=n}))}),[]),(0,N.jsx)("header",{className:"".concat(e.className?e.className:"").concat(c.y>5?" sticky-header":"").concat(!1===c.directionDown?" header-appear":"").concat(e.type?" ".concat(e.type):""),children:e.children})})),w=function(e){return(0,N.jsx)(p.Z,{collapseOnSelect:!0,id:"headerbar",expand:e.expand,bg:e.bg?e.bg:"transparent",variant:e.theme,className:"".concat(e.menu&&"menu-".concat(e.menu)).concat(e.className?" ".concat(e.className):"").concat(e.bg||"transparent"===e.bg?"":" header-transparent"),onToggle:function(){var e=document.querySelector("header").querySelector(".navbar-nav").querySelectorAll(".nav-item");document.body.classList.contains("navbar-collapse-show")?document.body.classList.remove("navbar-collapse-show"):document.body.classList.add("navbar-collapse-show"),e.forEach((function(e){e.classList.contains("open")&&setTimeout((function(){e.classList.remove("open")}),200)}))},children:(0,N.jsx)(h.Z,{fluid:e.fluid,className:e.containerClass?e.containerClass:"",children:e.children})})},y=(0,i.memo)((function(e){var n=(0,i.useRef)(null),a=(0,i.useState)(null),s=(0,r.Z)(a,2),l=s[0],c=s[1],o=(0,i.useState)(!1),d=(0,r.Z)(o,2),p=d[0],h=d[1],f=(0,m.TH)();return(0,i.useEffect)((function(){var e=document.querySelector("header").querySelectorAll(".nav-link"),n=Array.from(e).find((function(e){return e.getAttribute("href")===f.pathname}));n&&Promise.all([t.e(496),t.e(596),t.e(780)]).then(t.bind(t,8480)).then((function(e){var t=e.getParents(n).filter((function(e){return e.classList.contains("simple-dropdown")})),a=e.getParents(n).filter((function(e){return e.classList.contains("nav-item")}));t.forEach((function(e){return e.classList.add("active")})),a.forEach((function(e){return e.classList.add("active")}))}))}),[f,p]),(0,i.useEffect)((function(){document.querySelector("header").querySelectorAll(".navbar-nav > .nav-item").forEach((function(e){return e.addEventListener("mouseover",(function(){return h(!0)}))}))}),[]),(0,N.jsx)("div",{className:"".concat(e.mobileMenu?"mobile-menu-".concat(e.mobileMenu):"").concat(e.className?" ".concat(e.className):""),children:(0,N.jsx)("ul",{className:"navbar-nav",children:e.data.map((function(e,t){return(0,N.jsxs)("li",{className:"nav-item".concat(e.dropdown||e.megamenu?" dropdown":"").concat(l===t?" open":""),children:[e.link?(0,N.jsx)(u.rU,{className:"nav-link",to:e.link,children:e.title}):(0,N.jsx)("span",{className:"nav-link",children:e.title}),(0,N.jsx)("i",{className:"fa fa-angle-down",onClick:function(e){return c((n=t)!==l?n:null);var n}}),e.dropdown&&(0,N.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,N.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,N.jsxs)(u.rU,{className:"nav-link",to:e.link,children:[e.title,e.dropdown&&(0,N.jsx)("i",{className:"fas fa-angle-right"})]}):(0,N.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,N.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,N.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,N.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,N.jsxs)(u.rU,{className:"nav-link".concat(e.dropdown?" md:text-black md:mt-[15px] md:mb-[7px]":""),to:e.link,children:[e.title,e.dropdown&&(0,N.jsx)("i",{className:"fas fa-angle-right"})]}):(0,N.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,N.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,N.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,N.jsx)("li",{className:"simple-dropdown",children:(0,N.jsx)(u.rU,{className:"nav-link",to:e.link,children:e.title})},n)}))})]},n)}))})]},n)}))}),e.megamenu&&(0,N.jsx)("div",{className:"flex megamenu",ref:n,children:e.megamenu.map((function(e,n){return(0,N.jsxs)("ul",{className:"".concat(e.dropdown.filter((function(e){return e.img})).length>0?"!pr-[30px] img-wrapper inline-block last:!pr-[0px]":"inline-block"),children:[e.title&&(0,N.jsx)("li",{className:"title text-md font-medium mb-[15px] whitespace-nowrap",children:e.title}),e.dropdown&&e.dropdown.map((function(e,n){return(0,N.jsxs)("li",{className:"nav-item",children:[e.title&&(0,N.jsxs)(u.rU,{className:"nav-link",to:e.link?e.link:"#",children:[" ",e.icon&&(0,N.jsx)("i",{className:"".concat(e.icon," mr-[10px]")})," ",e.title]}),e.img&&e.link&&(0,N.jsx)(u.rU,{to:e.link,children:(0,N.jsx)("img",{height:"235",alt:"menu-banner",width:"210",className:"inline-block max-w-[210px]",src:e.img})})]},n)}))]},n)}))})]},t)}))})})})),Z=function(e){var n=(0,i.useRef)(null),t=(0,i.useState)(null),a=(0,r.Z)(t,2),s=a[0],l=a[1],c=(0,i.useState)(!1),o=(0,r.Z)(c,2),d=o[0],h=o[1],f=(0,m.TH)();return(0,i.useEffect)((function(){function e(e){for(var n=[];e.parentNode&&"body"!==e.parentNode.nodeName.toLowerCase();)e=e.parentNode,n.push(e);return n}document.querySelector("header").querySelectorAll(".nav-link").forEach((function(n){var t=n.getAttribute("href");if(n.classList.remove("active"),t===f.pathname){n.closest(".simple-dropdown")&&n.closest(".simple-dropdown").querySelectorAll(".nav-link").forEach((function(e){return e.classList.remove("active")})),n.classList.add("active");var a=e(n).filter((function(e){return e.classList.contains("simple-dropdown")})),s=e(n).filter((function(e){return e.classList.contains("nav-item")}));a.forEach((function(e){return e.classList.add("active")})),s.forEach((function(e){return e.classList.add("active")}))}}))}),[f]),(0,i.useEffect)((function(){document.body.classList.add("mobile-menu");var e=function(e){27===e.keyCode&&(document.body.classList.contains("menu-modern")||document.body.classList.contains("menu-full"))&&document.querySelector("#close-btn").click()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,i.useEffect)((function(){var n=window.matchMedia("(max-width: 991px)");function t(n){n.matches&&!0===d?(document.body.style.overflow="hidden",document.body.classList.add("menu-".concat(e.type))):(document.body.style.removeProperty("overflow"),document.body.classList.remove("menu-".concat(e.type)))}t(n),n.addListener(t)}),[d]),(0,N.jsxs)("div",{className:e.className?" ".concat(e.className):"",children:[(0,N.jsxs)(p.Z.Toggle,{id:"toggle-bar",className:"order-last md:px-[25px] sm:ml-0",onClick:function(){return h(!d)},children:[(0,N.jsx)("span",{className:"navbar-toggler-line"}),(0,N.jsx)("span",{className:"navbar-toggler-line"}),(0,N.jsx)("span",{className:"navbar-toggler-line"}),(0,N.jsx)("span",{className:"navbar-toggler-line"})]}),(0,N.jsxs)(p.Z.Collapse,{id:"myCollapsible",className:"col-auto justify-center mobile-menu-".concat(e.type),children:[(0,N.jsxs)(p.Z.Toggle,{id:"close-btn",onClick:function(){return h(!d)},children:[(0,N.jsx)("span",{className:"navbar-toggler-line bg-white"}),(0,N.jsx)("span",{className:"navbar-toggler-line bg-white"}),(0,N.jsx)("span",{className:"navbar-toggler-line bg-white"}),(0,N.jsx)("span",{className:"navbar-toggler-line bg-white"})]}),(0,N.jsx)(b.Z,{className:"pr-[15px]",theme:"light",autoHide:!0,children:(0,N.jsx)("div",{className:"",children:(0,N.jsx)("ul",{className:"navbar-nav",children:e.data.map((function(e,t){return(0,N.jsxs)("li",{className:"nav-item".concat(e.dropdown||e.megamenu?" dropdown":"").concat(s===t?" open":""),children:[e.link?(0,N.jsx)(u.rU,{className:"nav-link",to:e.link,children:e.title}):(0,N.jsx)("span",{className:"nav-link",children:e.title}),(0,N.jsx)("i",{className:"fa fa-angle-down",onClick:function(e){return l((n=t)!==s?n:null);var n}}),e.dropdown&&(0,N.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,N.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,N.jsxs)(u.rU,{className:"nav-link",to:e.link,children:[e.title,e.dropdown&&(0,N.jsx)("i",{className:"fas fa-angle-right"})]}):(0,N.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,N.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,N.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,N.jsxs)("li",{className:"simple-dropdown",children:[e.link?(0,N.jsxs)(u.rU,{className:"nav-link".concat(e.dropdown?" md:text-black md:mt-[15px] md:mb-[7px]":""),to:e.link,children:[e.title,e.dropdown&&(0,N.jsx)("i",{className:"fas fa-angle-right"})]}):(0,N.jsxs)("span",{className:"nav-link",children:[e.title,e.dropdown&&(0,N.jsx)("i",{className:"fas fa-angle-right"})]}),e.dropdown&&(0,N.jsx)("ul",{className:"simple-dropdown-menu",children:e.dropdown.map((function(e,n){return(0,N.jsx)("li",{className:"simple-dropdown",children:(0,N.jsx)(u.rU,{className:"nav-link",to:e.link,children:e.title})},n)}))})]},n)}))})]},n)}))}),e.megamenu&&(0,N.jsx)("div",{className:"megamenu",ref:n,children:(0,N.jsx)("div",{className:"flex",children:e.megamenu.map((function(e,n){return(0,N.jsxs)("ul",{className:"".concat(e.dropdown.filter((function(e){return e.img})).length>0?"img-wrapper":"inline-block"),children:[(0,N.jsx)("li",{className:"title text-md font-medium mb-[10px] whitespace-nowrap",children:e.title}),e.dropdown&&e.dropdown.map((function(e,n){return(0,N.jsx)("li",{className:"nav-item",children:(0,N.jsxs)(u.rU,{className:"nav-link",to:e.link?e.link:"#",children:[e.icon&&(0,N.jsx)("i",{className:"".concat(e.icon," mr-[10px]")})," ",e.title]})},n)}))]},n)}))})})]},t)}))})})})]})]})},L=(0,i.memo)((function(e){var n=(0,i.useRef)(null),t=(0,i.useState)(!1),a=(0,r.Z)(t,2),s=a[0],l=a[1];return(0,f.Z)(n,(function(e){return l(!1)})),(0,i.useEffect)((function(){var e=function(e){27===e.keyCode&&l(!1)};return!0===s?(document.querySelector("body").classList.add("overflow-hidden"),document.querySelector(".push-button").classList.remove("collapsed")):(document.querySelector("body").classList.remove("overflow-hidden"),document.querySelector(".push-button").classList.add("collapsed")),window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[s]),(0,N.jsx)(N.Fragment,{children:[!1].map((function(t){return(0,N.jsxs)(p.Z,{expand:t,className:"header-push-button bg-transparent inline-block ".concat(e.theme),children:[(0,N.jsx)(p.Z.Toggle,{className:"push-button",onClick:function(){return l(!0)},children:(0,N.jsxs)("div",{className:"nav-icon",children:[(0,N.jsx)("span",{className:"navbar-toggler-line"}),(0,N.jsx)("span",{className:"navbar-toggler-line"}),(0,N.jsx)("span",{className:"navbar-toggler-line"}),(0,N.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,N.jsx)("div",{className:"".concat(s?"block h-[100vh] left-0 overflow-hidden fixed top-0 w-full z-[999]":""),children:(0,N.jsxs)("div",{ref:n,className:"hamburger-menu-wrapper pos-".concat(e.position).concat(s?" show":"").concat(e.className?" ".concat(e.className):""),children:[e.closeBtn&&(0,N.jsx)("button",{"aria-label":"hamburger menu close button",className:"close-btn",onClick:function(){return l(!1)},children:(0,N.jsx)("i",{className:"fas fa-times"})}),s&&e.children]})})]},t)}))})})),C=(0,i.memo)((function(e){var n=(0,i.useContext)(v.Z).setIsModalOpen,t=(0,i.useRef)(null),l=(0,i.useState)(!1),d=(0,r.Z)(l,2),p=d[0],h=d[1],g=(0,m.s0)();return(0,f.Z)(t,(function(){return h(!1)})),(0,i.useEffect)((function(){!0===p&&n(!0),!1===p&&n(!1)}),[p]),(0,i.useEffect)((function(){var e=function(e){27===e.keyCode&&h(!1)};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,N.jsxs)("div",{className:"header-search-iconbar inline-block align-middle pl-[17px] text-[17px] leading-none".concat(e.className?" ".concat(e.className):""),style:e.style,children:[(0,N.jsx)(u.rU,{to:"#","aria-label":"search",className:"search-form-icon leading-[20px]",onClick:function(e){return e.preventDefault()},children:(0,N.jsx)("i",{className:"feather-search px-0 inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(){return h(!0)}})}),(0,N.jsxs)("div",{className:"form-wrapper ".concat(p?" show":""),children:[(0,N.jsxs)("button",{title:"Close",type:"button",className:"search-close font-serif",onClick:function(){return h(!1)},children:["\xd7"," "]}),p&&(0,N.jsx)(o.J9,{initialValues:{search:""},validationSchema:c.Ry().shape({search:c.Z_().required("Field is required.")}),onSubmit:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:t.resetForm(),h(!1),g("/page/search-result",{state:{search:n}});case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),children:(0,N.jsx)(o.l0,{role:"search",method:"get",id:"search-form",className:"search-form text-start",ref:t,children:(0,N.jsxs)("div",{className:"search-form-box",children:[(0,N.jsx)(x.II,{showErrorMsg:!1,className:"search-input font-serif text-darkgray relative border-b border-solid border-darkgray",name:"search",type:"text",label:(0,N.jsxs)("span",{className:"search-label font-medium text-spanishgray text-sm font-serif uppercase block",children:["What are you looking for?"," "]}),placeholder:"Enter your keywords..."}),(0,N.jsx)("button",{type:"submit",className:"search-button absolute top-1/2 right-0",children:(0,N.jsx)("i",{className:"feather-search text-darkgray","aria-hidden":"true"})})]})})})]})]})})),E=function(e){return(0,N.jsxs)("div",{className:"header-language dropdown inline-block align-middle pl-[17px] text-[17px]".concat(e.className?" ".concat(e.className):""),style:e.style,children:[(0,N.jsx)(u.rU,{to:"#","aria-label":"language",onClick:function(e){return e.preventDefault()},children:(0,N.jsx)("i",{className:"feather-globe py-[30px] px-0 inline-block ".concat(e.className)})}),(0,N.jsxs)("ul",{className:"dropdown-menu block absolute font-serif left-auto right-0 p-15px rounded-[6px] border-0 m-0 min-w-[140px]",children:[(0,N.jsx)("li",{children:(0,N.jsxs)(u.rU,{"aria-label":"link",onClick:function(e){return e.preventDefault()},to:"#",title:"English",children:[(0,N.jsx)("span",{className:"icon-country block py-[2px] px-0 text-xs text-[#828282]",children:(0,N.jsx)("img",{src:"/assets/img/country-flag-16X16/usa.png",alt:"usa",width:"16",height:"16"})}),"English"]})}),(0,N.jsx)("li",{children:(0,N.jsxs)(u.rU,{"aria-label":"link",onClick:function(e){return e.preventDefault()},to:"#",title:"England",children:[(0,N.jsx)("span",{className:"icon-country block py-[2px] px-0 text-xs text-[#828282]",children:(0,N.jsx)("img",{src:"/assets/img/country-flag-16X16/england.png",alt:"england",width:"16",height:"16"})}),"England"]})}),(0,N.jsx)("li",{children:(0,N.jsxs)(u.rU,{"aria-label":"link",onClick:function(e){return e.preventDefault()},to:"#",title:"France",children:[(0,N.jsx)("span",{className:"icon-country block py-[2px] px-0 text-xs text-[#828282]",children:(0,N.jsx)("img",{src:"/assets/img/country-flag-16X16/france.png",alt:"france",width:"16",height:"16"})}),"France"]})}),(0,N.jsx)("li",{children:(0,N.jsxs)(u.rU,{"aria-label":"link",onClick:function(e){return e.preventDefault()},to:"#",title:"Russian",children:[(0,N.jsx)("span",{className:"icon-country block py-[2px] px-0 text-xs text-[#828282]",children:(0,N.jsx)("img",{src:"/assets/img/country-flag-16X16/russian.png",alt:"russian",width:"16",height:"16"})}),"Russian"]})}),(0,N.jsx)("li",{children:(0,N.jsxs)(u.rU,{"aria-label":"link",onClick:function(e){return e.preventDefault()},to:"#",title:"Spain",children:[(0,N.jsx)("span",{className:"icon-country block py-[2px] px-0 text-xs text-[#828282]",children:(0,N.jsx)("img",{src:"/assets/img/country-flag-16X16/spain.png",alt:"spain",width:"16",height:"16"})}),"Spain"]})})]})]})},S=function(e){return(0,N.jsxs)("div",{className:"header-cart-icon dropdown mr-[10px] inline-block align-middle pl-[17px] text-[17px]".concat(e.className?" ".concat(e.className):""),style:e.style,children:[(0,N.jsxs)(u.rU,{"aria-label":"link",to:"#",className:"relative inline-block",children:[(0,N.jsx)("i",{className:"feather-shopping-bag px-0 py-[30px] inline-block ".concat(e.className)}),(0,N.jsx)("span",{className:"cart-count font-serif bg-basecolor text-white absolute top-[20px] right-[-10px] w-[16px] h-[16px] text-center text-[9px] leading-[16px] rounded-full",children:"2"})]}),(0,N.jsxs)("ul",{id:"myTable",className:"dropdown-menu block cart-item-list",children:[(0,N.jsxs)("li",{className:"cart-item items-center",children:[(0,N.jsx)(u.rU,{"aria-label":"link",to:"#",className:"font-serif close",children:" \xd7 "}),(0,N.jsx)("div",{className:"product-image",children:(0,N.jsx)(u.rU,{"aria-label":"link",to:"#",children:(0,N.jsx)("img",{src:"https://via.placeholder.com/150x191",className:"cart-thumb",alt:"cart-product",width:50,height:67})})}),(0,N.jsxs)("div",{className:"product-detail font-serif",children:[(0,N.jsx)(u.rU,{"aria-label":"link",to:"#",children:"Delica omtantur"}),(0,N.jsx)("span",{className:"item-ammount",children:"$100.00"})]})]}),(0,N.jsxs)("li",{className:"cart-item items-center",children:[(0,N.jsx)(u.rU,{"aria-label":"link",to:"#",className:"font-serif close",children:" \xd7 "}),(0,N.jsx)("div",{className:"product-image",children:(0,N.jsx)(u.rU,{"aria-label":"link",to:"#",children:(0,N.jsx)("img",{src:"https://via.placeholder.com/150x191",className:"cart-thumb",alt:"cart-product",width:50,height:67})})}),(0,N.jsxs)("div",{className:"product-detail font-serif",children:[(0,N.jsx)(u.rU,{"aria-label":"link",to:"#",children:"Gianvito rossi"}),(0,N.jsx)("span",{className:"item-ammount",children:"$99.99"})]})]}),(0,N.jsxs)("li",{className:"cart-item cart-total",children:[(0,N.jsxs)("div",{className:"font-serif mb-[15px] w-full",children:[(0,N.jsx)("span",{className:"w-[50%] inline-block text-md uppercase",children:"Subtotal:"}),(0,N.jsx)("span",{className:"w-[50%] inline-block text-right text-md font-medium",children:"$199.99"})]}),(0,N.jsx)(g.Z,{to:"/shop/shopping-cart",className:"btn-fill rounded-none font-medium font-serif uppercase md:mb-[15px]",themeColor:"#232323",color:"#fff",size:"sm",title:"view cart"}),(0,N.jsx)(g.Z,{to:"/shop/checkout",className:"btn-fill rounded-none font-medium font-serif mb-0 uppercase sm:mb-[15px]",themeColor:"#0038e3",color:"#fff",size:"sm",title:"checkout"})]})]})]})};k.defaultProps={topSpace:{desktop:!1}},w.defaultProps={fluid:"lg",theme:"dark",menu:"light",expand:"lg"},L.defaultProps={theme:"light",position:"right",closeBtn:!0},y.defaultProps={data:j},Z.defaultProps={type:"full",data:j};var U=k},1416:function(e,n,t){var a=t(1413),s=t(5987),l=t(2791),r=t(2520),i=t(184),c=["theme","children","className"],o=function(e){var n=e.theme,t=e.children,o=e.className,d=(0,s.Z)(e,c);return(0,l.useEffect)((function(){var e=document.querySelectorAll(".smooth-scrollbar"),n=function(){e.forEach((function(e){setTimeout((function(){var n=e.querySelector(".scroll-content");null!==n&&n.clientHeight>e.clientHeight&&e.classList.add("scrollbar-appear"),null!==n&&n.clientHeight<e.clientHeight&&e.classList.remove("scrollbar-appear")}),500)}))};n(),window.addEventListener("resize",n),document.querySelectorAll(".accordion-button").forEach((function(e){e.addEventListener("click",n)}));var t=document.querySelectorAll(".navbar-nav > .nav-item");"undefined"!=typeof t&&null!=t&&t.forEach((function(e){var t=e.querySelector(".fa");"undefined"!=typeof t&&null!=t&&t.addEventListener("click",n)}))}),[]),(0,i.jsx)(r.Scrollbar,(0,a.Z)((0,a.Z)({},d),{},{className:"smooth-scrollbar ".concat(n).concat(o?" ".concat(o):""),plugins:{overscroll:{effect:"bounce"}},children:t}))};o.defaultProps={theme:"light"},n.Z=(0,l.memo)(o)},3407:function(e,n,t){t.d(n,{Ji:function(){return s},O2:function(){return r},kr:function(){return l}});var a=window.innerWidth<768,s=a?{}:{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4}},l=a?{}:{initial:{opacity:0,scale:.3},whileInView:{opacity:1,scale:1},viewport:{once:!0}},r=a?{}:{initial:{opacity:0,x:"50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}}},2752:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(2791);function s(e,n){(0,a.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&n(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e,n])}}}]);
//# sourceMappingURL=519.482cbefc.chunk.js.map