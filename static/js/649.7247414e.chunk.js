"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[649],{384:function(e,t,a){var i=a(2791),n=a(184),s=function(e){var t=(0,i.useRef)(null);return(0,i.useEffect)((function(){function a(){if(t.current){var a=null===t||void 0===t?void 0:t.current.clientHeight,i=window.innerWidth>=768?a*e.value/100:0;null===t||void 0===t||t.current.style.setProperty("--overlapheight","-".concat(i,"px"))}}window.addEventListener("resize",a);var i=t.current.querySelectorAll("img");i.length>0?i.forEach((function(e){e.addEventListener("load",a)})):a()}),[]),(0,n.jsx)("div",{ref:t,className:"overlap-section".concat(e.className?" ".concat(e.className):""),children:e.children})};s.defaultProps={value:50},t.Z=(0,i.memo)(s)},5203:function(e,t,a){a.d(t,{Z:function(){return d}});var i=a(2791),n=a(9743),s=a(2677),r=a(1689),l=a(7245),o=[{img:"https://via.placeholder.com/720x828",title:"Ayurvedic",subtitle:"Starting from $50",icon:"line-icon-Environmental-3",btnLink:"#",btnTitle:"Discover more",content:"Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim"},{img:"https://via.placeholder.com/720x828",title:"Fairness",subtitle:"Starting from $90",icon:"line-icon-Crown",btnLink:"#",btnTitle:"Discover more",content:"Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim"},{img:"https://via.placeholder.com/720x828",title:"Herbal",subtitle:"Starting from $75",icon:"line-icon-Daylight",btnLink:"#",btnTitle:"Discover more",content:"Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim"}],c=a(184),m=function(e){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.Z,{className:"".concat(e.grid).concat(e.className?" ".concat(e.className):""),children:e.data.map((function(e,t){return(0,c.jsx)(s.Z,{children:(0,c.jsx)(l.m.div,{className:"rm-rotate-box text-center",initial:{opacity:0,transform:"perspective(400px) rotateY(90deg)"},whileInView:{opacity:1,transform:"perspective(400px) rotateY(0deg)"},viewport:{once:!0},transition:{type:"spring",stiffness:100,duration:1},children:(0,c.jsx)("div",{className:"flipper to-left",children:(0,c.jsxs)("div",{className:"thumb-wrap",children:[(0,c.jsxs)("div",{className:"card-side front overflow-hidden rounded-[4px] h-[490px] lg:h-[450px]",style:{backgroundImage:"url(".concat(e.img,")")},children:[(0,c.jsx)("div",{className:"absolute top-0 left-0 w-full h-full opacity-70 overlay-rotatebox"}),(0,c.jsxs)("div",{className:"content-wrap px-[15px]",children:[(0,c.jsx)("span",{className:"text-white text-lg tracking-[1px] uppercase font-serif inline-block font-medium mb-[10px]",children:e.title}),(0,c.jsx)("span",{className:"text-white opacity-60 text-md uppercase tracking-[.5px] font-serif block",children:e.subtitle})]})]}),(0,c.jsxs)("div",{className:"card-side back rounded-[4px] overflow-hidden",children:[(0,c.jsx)("div",{className:"absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#fec000] via-[#fec000] to-[#fe7a00]"}),(0,c.jsxs)("div",{className:"content-wrap p-[60px] lg:px-[30px] md:px-[40px] xs:p-[30px]",children:[(0,c.jsx)("i",{className:"".concat(e.icon," text-[50px] text-white mb-[35px] inline-block")}),(0,c.jsx)("span",{className:"text-white text-xmd tracking-[1px] font-medium uppercase font-serif block mb-[10px]",children:e.title}),(0,c.jsx)("p",{className:"text-white opacity-70 mb-[25px]",children:e.content}),(0,c.jsx)(r.Z,{ariaLabel:"pricing table",href:e.btnLink,className:"font-medium text-darkgray hover:text-darkgray font-serif after:bg-black uppercase btn-link after:h-[1px] md:text-md",color:"#232323",size:"xl",title:e.btnTitle})]})]})]})})})},t)}))})})};m.defaultProps={data:o};var d=(0,i.memo)(m)},7790:function(e,t,a){a.d(t,{Z:function(){return N}});var i=a(1413),n=a(2791),s=a(9743),r=a(8563),l=a(2558),o=a(7245),c=a(184),m=function(e){var t=e.item;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"266",height:"320",loading:"lazy",src:t.img,alt:"images"})}),(0,c.jsxs)("figcaption",{children:[(0,c.jsx)("span",{className:"title",children:t.name}),(0,c.jsx)("span",{className:"sub-title",children:t.designation}),t.social_links&&(0,c.jsx)("div",{className:"social-icon",children:t.social_links.map((function(e,t){return(0,c.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noreferrer",className:"hover:opacity-70",children:(0,c.jsx)("i",{className:e.icon})},t)}))})]})]})},d=(0,n.memo)(m),p=function(e){var t=e.item;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"367",height:"452",loading:"lazy",src:t.img,alt:"images"})}),(0,c.jsxs)("figcaption",{children:[(0,c.jsxs)("div",{className:"team-member-details",children:[(0,c.jsx)("span",{className:"title",children:t.name}),(0,c.jsx)("span",{className:"sub-title",children:t.designation})]}),t.social_links&&(0,c.jsx)("div",{className:"social-icon",children:t.social_links.map((function(e,t){return(0,c.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-70",children:(0,c.jsx)("i",{className:e.icon})},t)}))})]})]})},x=(0,n.memo)(p),u=function(e){var t=e.item;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"auto",height:"444",loading:"lazy",src:t.img,alt:"images"})}),(0,c.jsxs)("figcaption",{children:[(0,c.jsx)("span",{className:"title",children:t.name}),(0,c.jsx)("span",{className:"sub-title",children:t.designation}),t.social_links&&(0,c.jsx)("div",{className:"social-icon",children:t.social_links.map((function(e,t){return(0,c.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-70",children:(0,c.jsx)("i",{className:e.icon})},t)}))})]})]})},f=(0,n.memo)(u),h=function(e){var t=e.item;return(0,c.jsxs)("figure",{children:[(0,c.jsxs)("div",{className:"team-member-image",children:[(0,c.jsx)("img",{width:"370",height:"450",loading:"lazy",src:t.img,alt:"images"}),(0,c.jsxs)("div",{className:"team-member-details",children:[t.title&&(0,c.jsx)("span",{className:"quote",children:t.title}),t.subtitle&&(0,c.jsx)("span",{className:"text-center text-white opacity-70 w-[70%] md:w-full",children:t.subtitle}),t.social_links&&(0,c.jsx)("div",{className:"social-icon",children:t.social_links.map((function(e,t){return(0,c.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)("i",{className:e.icon})},t)}))})]})]}),(0,c.jsx)("figcaption",{children:(0,c.jsxs)("div",{className:"title-bottom",children:[(0,c.jsx)("span",{className:"title",children:t.name}),(0,c.jsx)("span",{className:"sub-title",children:t.designation})]})})]})},g=(0,n.memo)(h),b=function(e){var t=e.item;return(0,c.jsxs)("figure",{className:"rounded-[6px] shadow-[0_0_20px_rgba(0,0,0,0.08)] overflow-hidden",children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"370",height:"460",alt:"",loading:"lazy",src:t.img})}),(0,c.jsxs)("figcaption",{className:"bg-[#fff] py-[40px] text-center lg:py-[30px] relative",children:[(0,c.jsx)("div",{className:"team-title text-base font-medium font-serif text-[#262b35] text-uppercase",children:t.name}),(0,c.jsx)("span",{className:"sub-title text-sm font-sans uppercase block mb-[20px] text-[#828282] lg:mb-[10px]",children:t.designation}),t.social_links&&(0,c.jsx)("div",{className:"social-icon font-sans text-[#262b35] text-[15px]",children:t.social_links.map((function(e,t){return(0,c.jsx)("a",{"aria-label":"team",href:e.link,rel:"noreferrer",target:"_blank",className:"mx-[15px]",children:(0,c.jsx)("i",{className:e.icon})},t)}))})]})]})},v=(0,n.memo)(b),j=a(1676),w=function(e,t,a){switch(e.theme){case"team-style-01":default:return(0,c.jsx)(d,{item:t});case"team-style-02":return(0,c.jsx)(x,{item:t});case"team-style-03":return(0,c.jsx)(f,{item:t});case"team-style-04":return(0,c.jsx)(g,{item:t});case"team-style-05":return(0,c.jsx)(v,{item:t})}},k=function(e){var t=n.useRef(null),a={"--brand-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map((function(e){return e})),")"):e.overlay};return!0===e.carousel?(0,c.jsxs)(o.m.div,(0,i.Z)((0,i.Z)({className:"team-slider-wrapper relative ".concat(e.theme," ").concat(e.themeColor," ").concat(e.className)},e.animation),{},{children:[(0,c.jsx)(r.tq,(0,i.Z)((0,i.Z)({slidesPerView:3,className:"swiper-pagination-dark pb-[50px] black-move",ref:t,modules:[l.W_,l.tl,l.pt]},e.carouselOption),{},{children:e.data.map((function(t,i){return(0,c.jsx)(r.o5,{style:a,className:e.theme,children:w(e,t)},i)}))})),e.carouselOption.navigation&&(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("div",{onClick:function(){return t.current.swiper.slidePrev()},className:"btn-slider-next rounded-full flex justify-center items-center text-darkgray bg-white border-[1px] border-solid border-mediumgray h-[40px] w-[40px] cursor-pointer hover:shadow-xl transition-all duration-800 absolute top-[38%] left-[-90px] right-auto",children:(0,c.jsx)("i",{className:"feather-arrow-left text-xmd"})}),(0,c.jsx)("div",{onClick:function(){return t.current.swiper.slideNext()},className:"btn-slider-prev rounded-full border-[1px] border-solid border-mediumgray bg-white text-darkgray flex justify-center items-center h-[40px] w-[40px] ml-[10px] cursor-pointer hover:shadow-xl transition-all duration-800 absolute top-[38%] right-[-90px] left-auto",children:(0,c.jsx)("i",{className:"feather-arrow-right text-xmd"})})]})]})):(0,c.jsx)(s.Z,{className:"".concat(e.grid?e.grid:"").concat(e.className?" ".concat(e.className):""),children:e.data.map((function(t,n){return(0,c.jsx)(o.m.div,(0,i.Z)((0,i.Z)({style:a,className:"col ".concat(e.theme," ").concat(e.themeColor)},(0,i.Z)((0,i.Z)({},e.animation),{},{transition:{delay:n*e.animationDelay}})),{},{children:w(e,t)}),n)}))})};k.defaultProps={theme:"team-style-01",data:j.Ye,overlay:["#556fffcc","#b263e4cc","#e05fc4cc","#f767a6cc","#ff798ecc"],animationDelay:.5,carouselOption:{slidesPerView:1,spaceBetween:30,loop:!0,navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{dynamicBullets:!0,clickable:!0},breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2}}}};var N=(0,n.memo)(k)},1676:function(e,t,a){a.d(t,{Ye:function(){return i}});var i=[{img:"https://via.placeholder.com/525x639",name:"Alexander Harvard",designation:"CO FOUNDER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Bryan Jonhson",designation:"MANAGER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Jemmy Watson",designation:"DESIGNER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Jeremy Dupont",designation:"MANAGER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]}]},4649:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var i=a(1413),n=a(2791),s=(a(2558),a(7262)),r=a(9743),l=a(2677),o=(a(8563),a(7245)),c=(a(5667),a(4779),a(3407)),m=a(7790),d=a(6543),p=a(5987),x=a(1694),u=a.n(x),f=a(2007),h=a.n(f),g=a(162),b=a(184),v=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],j={bsPrefix:h().string,fluid:h().bool,rounded:h().bool,roundedCircle:h().bool,thumbnail:h().bool},w=n.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,s=e.fluid,r=void 0!==s&&s,l=e.rounded,o=void 0!==l&&l,c=e.roundedCircle,m=void 0!==c&&c,d=e.thumbnail,x=void 0!==d&&d,f=(0,p.Z)(e,v);return a=(0,g.vE)(a,"img"),(0,b.jsx)("img",(0,i.Z)((0,i.Z)({ref:t},f),{},{className:u()(n,r&&"".concat(a,"-fluid"),o&&"rounded",m&&"rounded-circle",x&&"".concat(a,"-thumbnail"))}))}));w.displayName="Image";var k=w,N=["className","fluid"],y=n.forwardRef((function(e,t){var a=e.className,n=e.fluid,s=void 0===n||n,r=(0,p.Z)(e,N);return(0,b.jsx)(k,(0,i.Z)((0,i.Z)({ref:t},r),{},{fluid:s,className:u()(a,"figure-img")}))}));y.displayName="FigureImage",y.propTypes=j;var Z=y,_=(0,d.Z)("figure-caption",{Component:"figcaption"}),O=(0,d.Z)("figure",{Component:"figure"}),E=Object.assign(O,{Image:Z,Caption:_}),z=a(1087),T=function(e){return(0,b.jsx)(r.Z,{className:"".concat(e.grid).concat(e.className?" ".concat(e.className):""),lg:3,md:2,children:e.data.map((function(t,a){return(0,b.jsx)(o.m.div,(0,i.Z)((0,i.Z)({className:"col interactive-banners-style-05"},(0,i.Z)((0,i.Z)({},e.animation),{},{transition:{delay:a*e.animationDelay}})),{},{children:(0,b.jsxs)(E,{className:"relative m-0",children:[(0,b.jsxs)("div",{className:"interactive-banners-image relative overflow-hidden rounded-[6px] bg-darkgray",children:[t.img&&(0,b.jsx)("img",{width:"",height:"",alt:"",src:t.img}),(0,b.jsx)("div",{className:"interactive-banners-details absolute top-0 left-0 w-full h-full items-center justify-center flex-col flex",children:(t.btnTitle||t.btnLink)&&(0,b.jsxs)(z.rU,{"aria-label":"link",className:"no-underline h-[100px] w-[100px] p-[20px] rounded-full bg-[#fff] items-center justify-center flex-col flex",to:t.btnLink,children:[(0,b.jsx)("i",{className:"".concat(t.icon," mb-[10px] text-basecolor text-lg block")}),(0,b.jsx)("span",{className:"button-name w-full leading-[14px] font-medium font-serif text-darkgray text-sm uppercase text-center",children:t.btnTitle})]})})]}),(0,b.jsx)("figcaption",{className:"text-center",children:(0,b.jsxs)("div",{className:"bg-white inline-block rounded-[4px] py-[3%] px-[20px] w-[76%] shadow-[0_0_20px_rgba(0,0,0,0.08)] font-serif font-medium uppercase",children:[(0,b.jsx)("span",{className:"text-darkgray uppercase text-md",children:t.title}),(0,b.jsx)("span",{className:"font-serif text-xs block mb-[5px]",children:t.subtitle})]})})]})}),a)}))})};T.defaultProps={data:[{title:"Senior web designer",subtitle:"2 position open",img:"https://via.placeholder.com/800x610",btnTitle:"Apply now",btnLink:"/page/contact-simple",icon:"ti-user"},{title:"SENIOR DEVELOPER",subtitle:"3 position open",img:"https://via.placeholder.com/800x610",btnTitle:"Apply now",btnLink:"/page/contact-simple",icon:"ti-user"},{title:"UX design developer",subtitle:"4 position open",img:"https://via.placeholder.com/800x610",btnTitle:"Apply now",btnLink:"/page/contact-simple",icon:"ti-user"}],animationDelay:.2};var P=a(8315),R=(a(1689),a(2106),a(384),a(5203),a(7053)),A=[{img:"".concat("/jordaan-website-v2","/assets/img/webp/team/deborah-pos.webp"),name:"DEBORAH POS",designation:"GERIATRIEOEFENTHERAPEUT, FYSIOTHERAPEUT",subtitle:"Als geriatrieoefentherapeut en fysiotherapeut is Deborah de ideale therapeut voor jou. Deborah is in staat de sterke kanten van beide disciplines optimaal met elkaar te verenigen tot een effectief en effici\xebnt behandelplan voor zowel individuen als groepen.",social_links:[]},{img:"https://via.placeholder.com/800x875",name:"ROSSY LAZAROV",designation:"Oefentherapeut",subtitle:"Rossy is door zijn ervaring op meerdere probleemgebieden breed geschoold; een absolute toegevoegde waarde voor het vak.",social_links:[]},{img:"".concat("/jordaan-website-v2","/assets/img/webp/team/sari-hoogendoorn.webp"),name:"SARI HOOGENDOORN",designation:"Oefentherapeut",subtitle:"Met haar rustige karakter en open uitstraling weet Sari een veilige en vertrouwde omgeving te cre\xebren waarin mensen zich snel op hun gemak voelen.",social_links:[]},{img:"".concat("/jordaan-website-v2","/assets/img/webp/team/jeff-irving.webp"),name:"Jeff Irving",designation:"Oefentherapeut",subtitle:"Ontdek gezonder bewegen met Jeff, onze enthousiaste Oefentherapeut bij Mensendieck & Fysiotherapie Praktijk Jordaan. Expertise in sport, werkgerelateerde zorg en ervaring in fitnessbegeleiding, personal training en groepslessen.",social_links:[]}],L=function(e){return(0,b.jsxs)("div",{style:e.style,children:[(0,b.jsx)(R.q,{}),(0,b.jsx)("section",{className:"pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]",children:(0,b.jsx)(s.Z,{children:(0,b.jsx)(r.Z,{className:"justify-center",children:(0,b.jsxs)(l.Z,{lg:7,sm:8,className:"text-center mb-26 md:mb-12 xs:mb-16",children:[(0,b.jsx)(o.m.span,{className:"inline-block font-serif text-jordaanText uppercase font-medium mb-[15px] tracking-[1px] xs:mb-[10px]",children:"Ons Team"}),(0,b.jsx)(o.m.h2,{className:"heading-5 font-serif text-jordaanText font-medium tracking-[-1px]",children:"Een hechte groep van ervaren en bedreven therapeuten"})]})})})}),(0,b.jsx)("section",{id:"downsection",className:"our-team-page-team py-[130px] lg:pt-[100px] lg:pb-[95px] md:pt-[70px] md:pb-[40px] sm:py-[50px] xs:pb-[25px] switch-tabs",children:(0,b.jsx)(s.Z,{fluid:!0,className:"px-[7%] lg:px-[3%]",children:(0,b.jsx)(m.Z,{themeColor:"light",overlay:["#0039e3cc","#4132e0cc","#5e28ddcc","#741bd9cc","#8600d4cc"],theme:"team-style-04",data:A,grid:"row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 justify-center",carousel:!1,carouselOption:{slidesPerView:3,spaceBetween:30,loop:!0,navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!0},pagination:{dynamicBullets:!0,clickable:!0}}})})}),(0,b.jsx)("section",{className:"py-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] bg-jordaanYellow bg-cover bg-no-repeat relative bg-center",children:(0,b.jsx)(s.Z,{children:(0,b.jsxs)(r.Z,{className:"mt-36 md:mt-24 sm:mt-16",children:[(0,b.jsx)(l.Z,{lg:5,md:6,children:(0,b.jsx)(o.m.h2,(0,i.Z)((0,i.Z)({className:"heading-5 font-serif font-medium leading-[46px] -tracking-[.5px] md:leading-[38px]  text-jordaanText md:m-0 sm:leading-[36px] xs:mb-[15px]"},(0,i.Z)((0,i.Z)({},c.Ji),{},{transition:{delay:.2}})),{},{children:"Ons team is gedreven en vol passie voor onze missie"}))}),(0,b.jsxs)(o.m.div,(0,i.Z)((0,i.Z)({md:6,className:"col-lg-6 col-md-6 offset-lg-1"},(0,i.Z)((0,i.Z)({},c.Ji),{},{transition:{delay:.4}})),{},{children:[(0,b.jsx)("p",{className:"w-[85%] lg:w-full mb-[20px] text-jordaanText",children:"Het is een uitdaging om de paramedische zorg in Nederland goed te regelen. Op onze locatie in het centrum van Amsterdam staat ons team klaar om deze uitdaging aan te gaan. Met een gevarieerd aanbod van specialisaties, kennis, en ervaring lukt het ons al meer dan tien jaar om zorgtrajecten aan te laten sluiten aan de wensen van onze clienten."}),(0,b.jsx)("p",{className:"w-[85%] lg:w-full mb-[20px] text-jordaanText",children:"Ben jij  een zorgprofessional en heb je een beeld over hoe jij onze missie kan versterken? Neem dan contact met ons op om ons te overtuigen!"})]}))]})})}),(0,b.jsx)(P.Z,{theme:"dark",className:"bg-[#262b35] text-slateblue"})]})}}}]);
//# sourceMappingURL=649.7247414e.chunk.js.map