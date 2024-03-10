"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[147],{7790:function(e,a,t){t.d(a,{Z:function(){return v}});var i=t(1413),s=t(2791),n=t(9743),r=t(8563),l=t(2558),c=t(7245),o=t(184),m=function(e){var a=e.item;return(0,o.jsxs)("figure",{children:[(0,o.jsx)("div",{className:"team-member-image",children:(0,o.jsx)("img",{width:"266",height:"320",loading:"lazy",src:a.img,alt:"images"})}),(0,o.jsxs)("figcaption",{children:[(0,o.jsx)("span",{className:"title",children:a.name}),(0,o.jsx)("span",{className:"sub-title",children:a.designation}),a.social_links&&(0,o.jsx)("div",{className:"social-icon",children:a.social_links.map((function(e,a){return(0,o.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noreferrer",className:"hover:opacity-70",children:(0,o.jsx)("i",{className:e.icon})},a)}))})]})]})},d=(0,s.memo)(m),p=function(e){var a=e.item;return(0,o.jsxs)("figure",{children:[(0,o.jsx)("div",{className:"team-member-image",children:(0,o.jsx)("img",{width:"367",height:"452",loading:"lazy",src:a.img,alt:"images"})}),(0,o.jsxs)("figcaption",{children:[(0,o.jsxs)("div",{className:"team-member-details",children:[(0,o.jsx)("span",{className:"title",children:a.name}),(0,o.jsx)("span",{className:"sub-title",children:a.designation})]}),a.social_links&&(0,o.jsx)("div",{className:"social-icon",children:a.social_links.map((function(e,a){return(0,o.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-70",children:(0,o.jsx)("i",{className:e.icon})},a)}))})]})]})},x=(0,s.memo)(p),h=function(e){var a=e.item;return(0,o.jsxs)("figure",{children:[(0,o.jsx)("div",{className:"team-member-image",children:(0,o.jsx)("img",{width:"auto",height:"444",loading:"lazy",src:a.img,alt:"images"})}),(0,o.jsxs)("figcaption",{children:[(0,o.jsx)("span",{className:"title",children:a.name}),(0,o.jsx)("span",{className:"sub-title",children:a.designation}),a.social_links&&(0,o.jsx)("div",{className:"social-icon",children:a.social_links.map((function(e,a){return(0,o.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-70",children:(0,o.jsx)("i",{className:e.icon})},a)}))})]})]})},f=(0,s.memo)(h),u=function(e){var a=e.item;return(0,o.jsxs)("figure",{children:[(0,o.jsxs)("div",{className:"team-member-image",children:[(0,o.jsx)("img",{width:"370",height:"450",loading:"lazy",src:a.img,alt:"images"}),(0,o.jsxs)("div",{className:"team-member-details",children:[a.title&&(0,o.jsx)("span",{className:"quote",children:a.title}),a.subtitle&&(0,o.jsx)("span",{className:"text-center text-white opacity-70 w-[70%] md:w-full",children:a.subtitle}),a.social_links&&(0,o.jsx)("div",{className:"social-icon",children:a.social_links.map((function(e,a){return(0,o.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:e.icon})},a)}))})]})]}),(0,o.jsx)("figcaption",{children:(0,o.jsxs)("div",{className:"title-bottom",children:[(0,o.jsx)("span",{className:"title",children:a.name}),(0,o.jsx)("span",{className:"sub-title",children:a.designation})]})})]})},g=(0,s.memo)(u),b=function(e){var a=e.item;return(0,o.jsxs)("figure",{className:"rounded-[6px] shadow-[0_0_20px_rgba(0,0,0,0.08)] overflow-hidden",children:[(0,o.jsx)("div",{className:"team-member-image",children:(0,o.jsx)("img",{width:"370",height:"460",alt:"",loading:"lazy",src:a.img})}),(0,o.jsxs)("figcaption",{className:"bg-[#fff] py-[40px] text-center lg:py-[30px] relative",children:[(0,o.jsx)("div",{className:"team-title text-base font-medium font-serif text-[#262b35] text-uppercase",children:a.name}),(0,o.jsx)("span",{className:"sub-title text-sm font-sans uppercase block mb-[20px] text-[#828282] lg:mb-[10px]",children:a.designation}),a.social_links&&(0,o.jsx)("div",{className:"social-icon font-sans text-[#262b35] text-[15px]",children:a.social_links.map((function(e,a){return(0,o.jsx)("a",{"aria-label":"team",href:e.link,rel:"noreferrer",target:"_blank",className:"mx-[15px]",children:(0,o.jsx)("i",{className:e.icon})},a)}))})]})]})},j=(0,s.memo)(b),w=t(1676),N=function(e,a,t){switch(e.theme){case"team-style-01":default:return(0,o.jsx)(d,{item:a});case"team-style-02":return(0,o.jsx)(x,{item:a});case"team-style-03":return(0,o.jsx)(f,{item:a});case"team-style-04":return(0,o.jsx)(g,{item:a});case"team-style-05":return(0,o.jsx)(j,{item:a})}},k=function(e){var a=s.useRef(null),t={"--brand-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map((function(e){return e})),")"):e.overlay};return!0===e.carousel?(0,o.jsxs)(c.m.div,(0,i.Z)((0,i.Z)({className:"team-slider-wrapper relative ".concat(e.theme," ").concat(e.themeColor," ").concat(e.className)},e.animation),{},{children:[(0,o.jsx)(r.tq,(0,i.Z)((0,i.Z)({slidesPerView:3,className:"swiper-pagination-dark pb-[50px] black-move",ref:a,modules:[l.W_,l.tl,l.pt]},e.carouselOption),{},{children:e.data.map((function(a,i){return(0,o.jsx)(r.o5,{style:t,className:e.theme,children:N(e,a)},i)}))})),e.carouselOption.navigation&&(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("div",{onClick:function(){return a.current.swiper.slidePrev()},className:"btn-slider-next rounded-full flex justify-center items-center text-darkgray bg-white border-[1px] border-solid border-mediumgray h-[40px] w-[40px] cursor-pointer hover:shadow-xl transition-all duration-800 absolute top-[38%] left-[-90px] right-auto",children:(0,o.jsx)("i",{className:"feather-arrow-left text-xmd"})}),(0,o.jsx)("div",{onClick:function(){return a.current.swiper.slideNext()},className:"btn-slider-prev rounded-full border-[1px] border-solid border-mediumgray bg-white text-darkgray flex justify-center items-center h-[40px] w-[40px] ml-[10px] cursor-pointer hover:shadow-xl transition-all duration-800 absolute top-[38%] right-[-90px] left-auto",children:(0,o.jsx)("i",{className:"feather-arrow-right text-xmd"})})]})]})):(0,o.jsx)(n.Z,{className:"".concat(e.grid?e.grid:"").concat(e.className?" ".concat(e.className):""),children:e.data.map((function(a,s){return(0,o.jsx)(c.m.div,(0,i.Z)((0,i.Z)({style:t,className:"col ".concat(e.theme," ").concat(e.themeColor)},(0,i.Z)((0,i.Z)({},e.animation),{},{transition:{delay:s*e.animationDelay}})),{},{children:N(e,a)}),s)}))})};k.defaultProps={theme:"team-style-01",data:w.Ye,overlay:["#556fffcc","#b263e4cc","#e05fc4cc","#f767a6cc","#ff798ecc"],animationDelay:.5,carouselOption:{slidesPerView:1,spaceBetween:30,loop:!0,navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{dynamicBullets:!0,clickable:!0},breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2}}}};var v=(0,s.memo)(k)},1676:function(e,a,t){t.d(a,{Ye:function(){return i}});var i=[{img:"https://via.placeholder.com/525x639",name:"Alexander Harvard",designation:"CO FOUNDER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Bryan Jonhson",designation:"MANAGER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Jemmy Watson",designation:"DESIGNER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Jeremy Dupont",designation:"MANAGER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]}]},6147:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var i=t(2791),s=t(7262),n=t(9743),r=t(2677),l=t(7245),c=t(3407),o=(t(7790),t(8315)),m=t(7053),d=t(1413),p=t(1087),x=t(184),h=function(e){return(0,x.jsx)(n.Z,{className:e.grid,children:e.data.map((function(a,t){return(0,x.jsx)(l.m.div,(0,d.Z)((0,d.Z)({className:"col px-[15px]".concat(e.className?" ".concat(e.className):"")},(0,d.Z)((0,d.Z)({},e.animation),{},{transition:{delay:t*e.animationDelay}})),{},{children:(0,x.jsxs)("div",{className:e.theme,children:[(0,x.jsxs)("div",{className:"img-wrapper",children:["service-style-05"===e.theme&&(0,x.jsxs)("span",{className:"text-xmd",children:[t+1>=10?"":"0",t+1]}),a.img&&(0,x.jsx)("img",{height:238,width:360,className:"w-full max-w-full align-middle",src:a.img,alt:"service-style-5"}),"service-style-01"===e.theme&&(0,x.jsx)("div",{className:"services-box-hover",children:(a.icon||a.link)&&(0,x.jsx)(p.rU,{"aria-label":"services",to:a.link?a.link:"#",children:(0,x.jsx)("i",{className:a.icon})})})]}),(0,x.jsxs)("div",{className:"service-style",children:["service-style-03"===e.theme&&(0,x.jsx)("span",{className:"verticalline"}),a.title&&(0,x.jsx)("span",{className:"title font-medium text-darkgray block font-serif mb-[10px]",children:a.title}),a.content&&(0,x.jsx)("p",{children:a.content}),("service-style-02"===e.theme||"service-style-05"===e.theme)&&(0,x.jsx)("div",{className:"info-service",children:(a.linkTitle||a.icon)&&(0,x.jsxs)(p.rU,{"aria-label":"services",to:a.link?a.link:"#",className:"no-underline font-serif font-medium text-gray-900 text-sm uppercase block",children:[a.linkTitle,(0,x.jsx)("i",{className:a.icon})]})})]})]})}),t)}))})};h.defaultProps={data:[{img:"https://via.placeholder.com/800x618",icon:"fas fa-arrow-right",title:"FINANCE SERVICES",content:"Lorem ipsum consectetur adipiscing elit do eiusmod tempor incididunt.",link:"/page/our-story"},{img:"https://via.placeholder.com/800x618",icon:"fas fa-arrow-right",title:"BUSINESS PLANNING",content:"Lorem ipsum consectetur adipiscing elit do eiusmod tempor incididunt.",link:"/page/our-story"},{img:"https://via.placeholder.com/800x618",icon:"fas fa-arrow-right",title:"MARKETING STRATEGY",content:"Lorem ipsum consectetur adipiscing elit do eiusmod tempor incididunt.",link:"/page/our-story"}],theme:"service-style-01",animationDelay:.2};var f=(0,i.memo)(h),u=[{img:"https://www.ergotherapie-hartel.nl/wp-content/uploads/2015/08/11830106_1169967546352601_1640499594_n-e1623332264202.jpg",icon:"fas fa-arrow-right",title:"Ergotherapie Hartel",content:"Ergotherapie voor volwassenen en ouderen in Amsterdam Zuid en West",link:"https://www.ergotherapie-hartel.nl/"},{img:"https://static.wixstatic.com/media/5c2dcf_65ebe57429b940c0825644150ea7c6b5~mv2.jpg/v1/crop/x_0,y_674,w_7018,h_2953/fill/w_1872,h_788,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Robert_Kuizenga-HR-photo-Simon_van_Boxte.jpg",icon:"fas fa-arrow-right",title:"Robert Kuizinga",content:"Manueel therapeut, dry needling, echografie, en arbeidsfysiotherapie",link:"https://www.mindyourmotion.nl/"}],g=function(e){return(0,x.jsxs)("div",{style:e.style,children:[(0,x.jsx)(m.q,{}),(0,x.jsx)("section",{className:"pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]",children:(0,x.jsx)(s.Z,{children:(0,x.jsx)(n.Z,{className:"justify-center",children:(0,x.jsxs)(r.Z,{lg:7,sm:8,className:"text-center mb-26 md:mb-12 xs:mb-16",children:[(0,x.jsx)(l.m.span,{className:"inline-block font-serif text-jordaanText uppercase font-medium mb-[15px] tracking-[1px] xs:mb-[10px]",children:"Samenwerkingspartners"}),(0,x.jsx)(l.m.h2,{className:"heading-5 font-serif text-jordaanText font-medium tracking-[-1px]",children:"Met deze partners werken wij samen"})]})})})}),(0,x.jsx)("section",{className:"pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]",children:(0,x.jsx)(s.Z,{children:(0,x.jsx)(n.Z,{className:"justify-center",children:(0,x.jsx)(r.Z,{lg:7,sm:8,className:"text-center mb-26 md:mb-12 xs:mb-16",children:(0,x.jsx)(f,{grid:"row-cols-1 row-cols-md-2 justify-center text-left gap-y-10 md:gap-y-[45px]",theme:"service-style-01",data:u,animation:c.Ji,animationDelay:.5})})})})}),(0,x.jsx)(o.Z,{theme:"dark",className:"bg-[#262b35] text-slateblue"})]})}}}]);
//# sourceMappingURL=147.faee3a85.chunk.js.map