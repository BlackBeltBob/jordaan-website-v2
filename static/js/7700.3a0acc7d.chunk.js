"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[7700,4368,3739,1471],{43739:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var n=s(1413),a=s(72791),i=s(11087),l=s(43360),c=s(80184),o=function(e){var t=e.themeColor&&e.themeColor[0],s=e.themeColor&&e.themeColor[1],a=e.color&&e.color[0],o=e.color&&e.color[1],m={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(s,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(s,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(a,", ").concat(o,", ").concat(a,")"):e.color};return e.href||"submit"===e.type?(0,c.jsx)(l.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:m,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,c.jsx)(r,(0,n.Z)({},e))}):(0,c.jsx)(i.rU,{style:m,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,c.jsx)(r,(0,n.Z)({},e))})},r=function(e){return(0,c.jsxs)(c.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,c.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,c.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,c.jsx)("span",{})]})};o.defaultProps={size:"lg",style:"primary"};var m=(0,a.memo)(o)},34564:function(e,t,s){var n=s(1413),a=s(72791),i=s(97948),l=s.n(i),c=s(52007),o=s(62752),r=s(12734),m=s(80184),x={Close:function(e){var t=(0,a.useContext)(r.Z),s=t.customModal,i=t.setCustomModal;return(0,m.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(e){e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((function(){i((0,n.Z)((0,n.Z)({},s),{},{el:null,isOpen:!1}))}),100)},children:e.children})},Wrapper:function(e){var t=(0,a.useRef)(null),i=(0,a.useRef)(null),c=(0,a.useContext)(r.Z),x=c.customModal,d=c.setCustomModal,p=function(){t.current.node.classList.remove("open"),setTimeout((function(){d((0,n.Z)((0,n.Z)({},x),{},{el:null,isOpen:!1}))}),100)},h=function(){d((0,n.Z)((0,n.Z)({},x),{},{el:t.current.node,isOpen:!0})),setTimeout((function(){t.current.node.classList.add("open")}),100)};return(0,a.useEffect)((function(){t.current.node.classList.add("custom_modal");var e=function(e){27===e.keyCode&&p()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,a.useEffect)((function(){!0===e.defaultOpen&&setTimeout((function(){Promise.resolve().then(s.bind(s,38480)).then((function(e){"shown"===e.getCookie("litho-promo-popup")?p():h()}))}),200)}),[]),(0,o.Z)(i,p),l().setAppElement("#modal-outer"),(0,m.jsxs)("div",{className:e.className,children:[(0,m.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:h,children:e.modalBtn}),(0,m.jsx)(l(),{className:e.animation,ref:t,isOpen:null!==x.el&&x.el===t.current.node&&!0===x.isOpen,onRequestClose:p,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:function(){return document.body},children:(0,m.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,m.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:p,children:"\xd7"}),(0,m.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:i,children:e.children})]})})]})}};x.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},x.Wrapper.propTypes={className:c.PropTypes.string,closeBtnOuter:c.PropTypes.bool,defaultOpen:c.PropTypes.bool,children:c.PropTypes.oneOfType([c.PropTypes.arrayOf(c.PropTypes.node),c.PropTypes.node]).isRequired},x.Close.propTypes={className:c.PropTypes.string,children:c.PropTypes.oneOfType([c.PropTypes.arrayOf(c.PropTypes.node),c.PropTypes.node]).isRequired},t.Z=x},44368:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var n=s(1413),a=s(72791),i=s(89743),l=s(34290),c=s(11087),o=s(43739),r=s(98899),m=s(80184),x=function(e){return(0,m.jsx)(i.Z,{className:"".concat(e.grid," md:justify-center"),children:e.data.map((function(t,s){return(0,m.jsx)(l.m.div,(0,n.Z)((0,n.Z)({className:"col".concat(e.theme?" ".concat(e.theme):"").concat(e.className?" ".concat(e.className):"")},(0,n.Z)((0,n.Z)({},e.animation),{},{transition:{delay:s*e.animationDelay,ease:e.animationTransition,duration:e.animationDuration}})),{},{children:(0,m.jsxs)("div",{className:"rounded-md w-full",children:[t.img?(0,m.jsx)("img",{height:42,width:51,className:"inline-block items-center justify-center mb-[30px]",src:t.img,alt:"featurebox"}):t.icon?"icon-with-text-05"===e.theme?(0,m.jsx)(c.rU,{"aria-label":"link for icon",to:"#",children:(0,m.jsx)("i",{className:t.icon})}):(0,m.jsx)("i",{className:t.icon}):t.textIcon?(0,m.jsx)("span",{className:"text-basecolor inline-block icon-text",children:t.textIcon}):(0,m.jsx)("span",{className:"text-basecolor inline-block icon-text",children:"".concat(s<=9?"0":"").concat(s+1)}),(0,m.jsxs)("div",{className:"feature-box-content",children:[t.title&&(0,m.jsx)("span",{className:"font-medium title font-serif",children:t.title}),t.content&&(0,m.jsx)("p",{children:t.content}),"icon-with-text-11"===e.theme?(0,m.jsx)(o.default,{ariaLabel:"iconwithtext",href:"#",className:"font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray md:text-md md:mb-[15px]",size:"xl",color:"#232323",title:"Read more"}):""]}),(t.linkTitle||t.link)&&(0,m.jsx)(o.default,{ariaLabel:"iconwithtext",className:"font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor",to:t.link,title:t.linkTitle})]})}),s)}))})};x.defaultProps={data:r.y_,animationDelay:.6,animationDuration:.8,animationTransition:"circOut",theme:"icon-with-text-01"};var d=(0,a.memo)(x)},62752:function(e,t,s){s.d(t,{Z:function(){return a}});var n=s(72791);function a(e,t){(0,n.useEffect)((function(){var s=function(s){e.current&&!e.current.contains(s.target)&&t(s)};return document.addEventListener("mousedown",s),function(){document.removeEventListener("mousedown",s)}}),[e,t])}},97700:function(e,t,s){s.r(t);s(72791);var n=s(47022),a=s(89743),i=s(2677),l=s(11087),c=s(21240),o=s(43739),r=s(44368),m=s(34564),x=s(98899),d=s(80184);t.default=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,d.jsx)(n.Z,{children:(0,d.jsxs)(a.Z,{className:"items-center justify-center mb-0",children:[(0,d.jsx)(i.Z,{xl:8,lg:6,children:(0,d.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Icon with text"})}),(0,d.jsx)(i.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,d.jsxs)("ul",{className:"xs-text-center",children:[(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"#","aria-label":"breadcrumb",onClick:function(e){return e.preventDefault()},className:"hover:text-white",children:"Elements"})}),(0,d.jsx)("li",{children:"Icon with text"})]})})]})})}),(0,d.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Icon with text style 01"})})}),(0,d.jsx)(r.default,{grid:"row-cols-1 row-cols-lg-3 row-cols-sm-2 gap-y-[60px] sm:gap-y-[30px] xs:gap-y-[40px]",theme:"icon-with-text-01",data:x.y_,animation:c.Ji,animationDelay:.1})]})}),(0,d.jsx)("section",{className:"bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{className:"mb-[6%]",children:(0,d.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Icon with text style 02"})})}),(0,d.jsx)(a.Z,{className:"justify-center",children:(0,d.jsx)(i.Z,{xs:12,lg:12,md:9,children:(0,d.jsx)(r.default,{grid:"row-cols-1 row-cols-lg-2 gap-y-[30px] xs:gap-y-[15px]",theme:"icon-with-text-02",data:x.Pf,animation:c.Ji,animationDelay:.2})})})]})}),(0,d.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Icon with text style 03"})})}),(0,d.jsx)(r.default,{grid:"row-cols-1 row-cols-lg-4 row-cols-sm-2 text-center gap-y-10",theme:"icon-with-text-03",data:x.RR,animation:c.Ji,animationDelay:.2})]})}),(0,d.jsx)("section",{className:"bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{className:"mb-[6%]",children:(0,d.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Icon with text style 04"})})}),(0,d.jsx)(a.Z,{className:"justify-center",children:(0,d.jsx)(i.Z,{xs:12,sm:8,md:12,children:(0,d.jsx)(r.default,{grid:"row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center md:mb-[30px] gap-y-10",theme:"icon-with-text-04",data:x.lp,animation:c.Ji,animationDelay:.2})})})]})}),(0,d.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Icon with text style 05"})})}),(0,d.jsx)(r.default,{grid:"row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 justify-center gap-y-10",theme:"icon-with-text-05",className:"text-center md:mb-[50px]",data:x.ub,animation:c.Ji,animationDelay:.2})]})}),(0,d.jsx)("section",{className:"bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Icon with text style 06"})})}),(0,d.jsx)(a.Z,{className:"justify-center",children:(0,d.jsx)(i.Z,{xs:12,sm:8,md:12,children:(0,d.jsx)(r.default,{grid:"row-cols-1 row-cols-lg-3 row-cols-md-2 row-col-sm-8 justify-center gap-y-10",theme:"icon-with-text-06",data:x.G5,animation:c.Ji,animationDelay:.2})})})]})}),(0,d.jsx)("section",{className:"bg-white py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Icon with text style 07"})})}),(0,d.jsx)(r.default,{grid:"row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-center gap-y-10",theme:"icon-with-text-07",data:x.Tw,animation:c.Ji,animationDelay:.2})]})}),(0,d.jsx)("section",{className:"bg-lightgray py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Icon with text style 08"})})}),(0,d.jsxs)(a.Z,{className:"items-center justify-center",children:[(0,d.jsxs)(i.Z,{lg:6,className:"relative",children:[(0,d.jsx)("img",{width:"",height:"",className:"mx-auto",src:"https://via.placeholder.com/476x652",alt:""}),(0,d.jsx)("div",{className:"h-full w-full absolute top-0 left-0 flex items-center justify-center",children:(0,d.jsx)(m.Z.Wrapper,{className:"items-center flex h-full justify-center w-full",modalBtn:(0,d.jsx)(o.default,{className:"btn-sonar border-0 shadow-[0_0_15px_rgba(0,0,0,0.1)]",type:"submit",themeColor:"#fff",color:"#232323",size:"lg",title:(0,d.jsx)("i",{className:"icon-control-play"})}),children:(0,d.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,d.jsx)("div",{className:"fit-video",children:(0,d.jsx)("iframe",{width:"100%",height:"100%",className:"shadow-[0_0_8px_rgba(0,0,0,0.06)]",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})})})]}),(0,d.jsx)(i.Z,{xl:4,lg:{span:5,offset:1},md:7,children:(0,d.jsx)(r.default,{grid:"flex-col gap-y-[60px]",theme:"icon-with-text-08",data:x.VW,animation:c.O2,animationDelay:.2})})]})]})}),(0,d.jsx)("section",{className:"bg-white py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Icon with text style 09"})})}),(0,d.jsx)(a.Z,{className:"justify-center",children:(0,d.jsx)(i.Z,{xl:8,lg:9,children:(0,d.jsx)(r.default,{grid:"row-cols-1 row-cols-lg-4 row-cols-md-4 row-cols-sm-2 gap-y-10",theme:"icon-with-text-09",data:x.Oh,animation:c.kr,animationDelay:.2})})})]})}),(0,d.jsx)("section",{className:"bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Icon with text style 10"})})}),(0,d.jsx)(r.default,{grid:"row-cols-1 row-cols-lg-3 row-cols-sm-2",theme:"icon-with-text-10",data:x.zj,animation:c.Ji,animationDelay:.2})]})}),(0,d.jsx)("section",{className:"bg-darkgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(n.Z,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-lightgray text-center font-medium mb-[25px] lg:mb-[15px]",children:"Icon with text style 11"})})}),(0,d.jsx)(a.Z,{className:"justify-center",children:(0,d.jsx)(i.Z,{xs:12,sm:8,md:12,children:(0,d.jsx)(r.default,{grid:"row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1",theme:"icon-with-text-11",className:"md:mb-[30px] xs:mb-[15px]",data:x.EH,animation:c.Ji,animationDelay:.2})})})]})})]})}},43360:function(e,t,s){var n=s(1413),a=s(29439),i=s(45987),l=s(81694),c=s.n(l),o=s(72791),r=s(15341),m=s(10162),x=s(80184),d=["as","bsPrefix","variant","size","active","disabled","className"],p=o.forwardRef((function(e,t){var s=e.as,l=e.bsPrefix,o=e.variant,p=void 0===o?"primary":o,h=e.size,u=e.active,f=void 0!==u&&u,y=e.disabled,j=void 0!==y&&y,b=e.className,g=(0,i.Z)(e,d),w=(0,m.vE)(l,"btn"),N=(0,r.FT)((0,n.Z)({tagName:s,disabled:j},g)),Z=(0,a.Z)(N,2),v=Z[0],k=Z[1].tagName;return(0,x.jsx)(k,(0,n.Z)((0,n.Z)((0,n.Z)({},v),g),{},{ref:t,disabled:j,className:c()(b,w,f&&"active",p&&"".concat(w,"-").concat(p),h&&"".concat(w,"-").concat(h),g.href&&j&&"disabled")}))}));p.displayName="Button",t.Z=p}}]);
//# sourceMappingURL=7700.3a0acc7d.chunk.js.map