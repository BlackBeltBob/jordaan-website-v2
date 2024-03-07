import React, {lazy, useState} from 'react'

// Libraries
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from "swiper";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AnimatePresence, m} from 'framer-motion'
import {Form, Formik} from 'formik';

// Components
import Buttons from '../../Components/Button/Buttons'
import {Header, HeaderNav, Menu, MobileMenu, SearchBar,} from "../../Components/Header/Header";
import Overlap from '../../Components/Overlap/Overlap';
import CustomModal from '../../Components/CustomModal'
import {Input} from '../../Components/Form/Form'
import {ContactFormStyle02Schema} from '../../Components/Form/FormSchema';
import MessageBox from '../../Components/MessageBox/MessageBox';
import Clients from '../../Components/Clients/Clients';
import TestimonialsCarousel05 from "../../Components/TestimonialCarousel/TestimonialsCarousel05";
import BlogModern from '../../Components/Blogs/BlogModern';
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import RotateBox from '../../Components/RotateBox/RotateBox';
import SideButtons from "../../Components/SideButtons";
import {fadeIn, fadeInLeft, zoomIn} from '../../Functions/GlobalAnimations';
import {resetForm, sendEmail} from "../../Functions/Utilities";

// Data
import {blogData} from '../../Components/Blogs/BlogData';
import {JordaanHeader} from "../../Components/Jordaan/JordaanHeader";

const IconWithText = lazy(() => import('../../Components/IconWithText/IconWithText'))

const RotateBoxData = [
  {
    img: `${process.env.PUBLIC_URL}/assets/img/webp/pakketten/rugklachten.webp`,
    title: "Rugklachten",
    subtitle: "Holistische benadering | 5 behandelingen",
    icon: "line-icon-Environmental-3",
    btnLink: `${process.env.PUBLIC_URL}/page/pakket-rugklachten`,
    btnTitle: "Lees meer",
    content: "Houding- en bewegingsadvies ter genezing en preventie van rugklachten"
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/img/webp/pakketten/nekklachten.webp`,
    title: "Nekklachten",
    subtitle: "Holistische benadering | 6 behandelingen",
    icon: "line-icon-Crown",
    btnLink: "/page/pakket-nekklachten",
    btnTitle: "Lees meer",
    content: "Integrale, holistische aanpak van een veel voorkomende klacht."
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/img/webp/pakketten/slaaptraining.webp`,
    title: "Slaaptraining",
    subtitle: "4 behandelingen | online training",
    icon: "line-icon-Daylight",
    btnLink: "/page/pakket-slaaptraining",
    btnTitle: "Lees meer",
    content: "Heeft u moeite om in slaap te vallen? Ook slapen kun je leren!"
  }
]



const HighlightsData = [
  {
    url: `${process.env.PUBLIC_URL}/assets/img/webp/spa-image-05.webp`,
    title: 'Kom tot jezelf',
    content: 'Vind jezelf terug door meer kennis over je lichaam op te doen',
  },
  {
    url: `${process.env.PUBLIC_URL}/assets/img/webp/spa-image-05.webp`,
    title: 'Kom tot de essentie',
    content: 'Veel klachten zijn symptomen van een onderliggende kwaal. Samen vinden we die, en lossen het op',
  },
  {
    url: `${process.env.PUBLIC_URL}/assets/img/webp/spa-image-05.webp`,
    title: 'Kom tot rust',
    content: 'Stress of slapeloosheid leiden tot een dysbalans die we kunnen aanpakken',
  },
]


const TestimonialsCarouselData = [
  {
    firstname: "Merve",
    lastname: "T",
    designation: "Ziekenhuisopname",
    content: "Na een lange ziekenhuisopname heeft Deborah mij overgenomen en mij uitstekend begeleid in een complex proces. Ze is erg kundig en doet haar werk met haar hart. Ik ben haar enorm dankbaar hiervoor!",
    img: "https://via.placeholder.com/359x359"
  },
  {
    firstname: "Jimi",
    lastname: "Hendrik",
    designation: "Hernia",
    content: "Deborah geeft je de volledige aandacht en goede tips. Mijn hernia is helaas niet helemaal verdwenen, maar dat lag niet aan haar werkwijze. Ze deed alle moeite om me verder te helpen met een alternatieve behandeling elders.",
    img: "https://via.placeholder.com/359x359"
  },
  {
    firstname: "Deyanira",
    lastname: "Gonzalez",
    designation: "Verschillende klachten",
    content: "Hele fijne en lieve fysio/mensendieck. Deborah neemt rustig de tijd om te kijken naar de klachten, neemt tijd voor de behandeling en helpt nadenken over het herstel. Bijvoorbeeld door middel van tools en oefeningen. Ben voor verschillende klachten door Deborah geholpen.",
    img: "https://via.placeholder.com/359x359"
  }
]
const ClientData = [
  {
    img: 'https://via.placeholder.com/140x110',
    target: "_self",
    link: '#'
  },
  {
    img: 'https://via.placeholder.com/140x110',
    target: "_self",
    link: '#'
  },
  {
    img: 'https://via.placeholder.com/140x110',
    target: "_self",
    link: '#'
  },
  {
    img: 'https://via.placeholder.com/140x110',
    target: "_self",
    link: '#'
  }
]

const IconWithTextData = [
  {
    icon: "line-icon-MaleFemale text-[40px] text-jordaanText mb-[30px]",
    title: "GERIATRIE OEFENTHERAPIE",
    content: "Gespecialiseerde oefentherapie met een focus op ouderen.",
  },
  {
    icon: "line-icon-Master-Card text-[40px] text-jordaanText mb-[30px]",
    title: "OEFENTHERAPIE & FYSIOTHERAPIE",
    content: "Een krachtige combinatie van disciplines",
  },
  {
    icon: "line-icon-Support text-[40px] text-jordaanText mb-[30px]",
    title: "ONDERSTEUNING OP AFSTAND",
    content: "Bij ons kunt u ook met een e-consult terecht.",
  },
  {
    icon: "line-icon-Heart text-[40px] text-[#f18c8c] mb-[30px]",
    title: "HARTJE JORDAAN",
    content: "Onze praktijk ligt in een hofje in het bruisende centrum van de jordaan",
  },
]

const InteractiveBannersData01 = [
  {
    subtitle: "Relaxing",
    title: "Rest and your energy will be restored",
    img: "https://via.placeholder.com/800x1018",
    btnTitle: "Learn more",
    btnLink: "#"
  },
  {
    subtitle: "Massage",
    title: "Massage day is the best day of the week",
    img: "https://via.placeholder.com/800x1018",
    btnTitle: "learn more",
    btnLink: "#"
  },
  {
    subtitle: "Massage",
    title: "Relax like your life depends on it",
    img: "https://via.placeholder.com/800x1018",
    btnTitle: "learn more",
    btnLink: "#"
  },
  {
    subtitle: "Relaxing",
    title: "Spa days are a necessity not a luxury",
    img: "https://via.placeholder.com/800x1018",
    btnTitle: "learn more",
    btnLink: "#"
  },
]

const SwiperImgData = [
  {
    img: "https://via.placeholder.com/1920x1080",
    img2: "/assets/img/webp/spa-image-01.webp",
    title: "something for mind and soul",
  },
  {
    img: "https://via.placeholder.com/1920x1080",
    img2: "https://via.placeholder.com/620x223",
    title: "something for mind and soul",
  },
  {
    img: "https://via.placeholder.com/1920x1080",
    img2: "https://via.placeholder.com/623x189",
    title: "something for mind and soul",
  },
]

const textMissionStatement = 'Ontdek wat onze holistische aanpak voor jou kan betekenen';
const textVision = 'Onze praktijk kenmerkt zich door de holistische benadering: combineert veel verschillende specialisaties, zodat je een effectieve en efficiënte behandeling krijgt.';
const textMissionLink = 'Lees meer over onze visie';
const textMotto = 'Welzijn in beweging: In beweging naar beter';
const textMottoExt = 'Op weg naar vitaliteit, samen Met jou';
const textTestimonalsHeader = 'Testimonials';
const textTestimonalsText = 'Wat onze clienten over onze service zeggen';
const textPackagesHeader = 'Online trainingspakketten om helder, veilig, en betaalbaar op je eigen tempo werken aan je gezondheid.';
const textPackagesInfo = 'Onze praktijk biedt online trainingspakketten aan. Elk trainingspakket bestaat uit een intake, en meerdere online instructies en contactmomenten.';
const textGeriatricHeader = 'De specialisatie Geriatrieoefentherapie';
const textGeriatricContent = 'Geriatrieoefentherapie is een gespecialiseerde vorm van paramedische zorg gericht op het behandelen van lichamelijke klachten bij ouderen. Het richt zich op het verbeteren van mobiliteit, spierkracht, balans en coördinatie, met als doel het bevorderen van zelfstandigheid en de kwaliteit van leven van oudere individuen. De therapie omvat specifieke oefeningen en advies om ouderen te ondersteunen bij het behouden of verbeteren van hun dagelijks functioneren in hun eigen leefomgeving.';
const textGeriatricUrl = '#';
const textGeriatricLink = 'Lees meer';

// Filter the blog data category wise
const blogModernData = blogData.filter((item) => item.blogType === "modern");

const RugklachtenPage = (props) => {
  const swiperRef = React.useRef(null)
  const swiperpakage = React.useRef(null)
  const swiperReff = React.useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div style={props.style}>
      <SideButtons/>
      {/* Header Start */}
      <Header topSpace={{md: true}} type="reverse-scroll">
        <HeaderNav theme="light" expand="lg"
                   className="spasalon-header py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0 border-b border-[#ffffff1a]"
                   fluid="fluid" containerClass="md:pr-0">
          <Col className="col-5 col-lg-2 ps-lg-0 me-auto me-lg-0 md:!px-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="163" height="36" loading="lazy"
                     src={`${process.env.PUBLIC_URL}/assets/img/webp/logo/logo-white-top.png`}
                     data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo'/>
                <img className="alt-logo" width="163" height="36" loading="lazy"
                     src={`${process.env.PUBLIC_URL}/assets/img/webp/logo/logo-white-top.png`}
                     data-rjs='/assets/img/webp/logo-white-top@2x.webp' alt='logo'/>
                <img className="mobile-logo" width="163" height="36" loading="lazy"
                     src={`${process.env.PUBLIC_URL}/assets/img/webp/logo/logo-white-top.png`}
                     data-rjs='/assets/img/webp/logo-white-top@2x.webp' alt='logo'/>
              </Navbar.Brand>
            </Link>
          </Col>
          <Menu className="justify-center col-auto col-lg-8 menu-order md-position-initial md:hidden" {...props} />
          <MobileMenu className="order-last d-lg-none" type="modern" {...props} />
          <Col className="col-auto text-right pr-0 col-lg-2 px-lg-0 md-no-padding md:!px-0">
            <SearchBar className="font-bold"/>
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}



      {/* Section Start */}
      <section
        className="pt-[350px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]">
        {/*<section className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1100)' }}>*/}
        <Container>
          <Row className="justify-center">
            <Col lg={7} sm={8} className="text-center mb-26 md:mb-12 xs:mb-16">
              <m.span className="inline-block font-serif text-jordaanText uppercase font-medium mb-[15px] tracking-[1px] xs:mb-[10px]">
                {textMotto}
              </m.span>
              <m.h2 className="heading-5 font-serif text-jordaanText font-medium tracking-[-1px]">
                {textMottoExt}
              </m.h2>
            </Col>
          </Row>
          {/*<IconWithText grid="row-cols-1 row-cols-lg-4 row-cols-sm-2 text-center" theme="icon-with-text-03"*/}
          {/*              data={IconWithTextData} animation={fadeIn} animationDelay={0.3}/>*/}
        </Container>
      </section>
      {/* Section End */}

      <section className="pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] bg-jordaanYellow bg-cover bg-no-repeat relative bg-center">
               {/*style={{backgroundImage: 'url(https://via.placeholder.com/1920x625)'}}>*/}
        <Container>
          <Row className="justify-center">
            <Overlap className="col-12 col-md-12 col-sm-8 md:mt-[75px]">
              {/*<RotateBox grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center" animation={fadeIn}*/}
              {/*           animationDelay={0.2} data={RotateBoxData}/>*/}
            </Overlap>
          </Row>
        </Container>
        <Container>
          <Row className="mt-36 md:mt-24 sm:mt-16">
            <Col lg={5} md={6}>
              <m.h2
                className="heading-5 font-serif font-medium leading-[46px] -tracking-[.5px] md:leading-[38px]  text-jordaanText md:m-0 sm:leading-[36px] xs:mb-[15px]" {...{
                ...fadeIn, transition: {delay: 0.2}}}>
                {textPackagesHeader}
              </m.h2>
            </Col>
            <m.div md={6} className="col-lg-6 col-md-6 offset-lg-1" {...{...fadeIn, transition: {delay: 0.4}}}>
              <p className="w-[85%] lg:w-full mb-[20px] text-jordaanText">
                {textPackagesInfo}
              </p>
              <Buttons ariaLabel="Explore more" href="#"
                       className="font-medium hover:text-darkgray font-serif uppercase btn-link after:h-[1px] after:bg-black md:text-md"
                       color="#000" title="Explore more" size="xl"/>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] cover-background"
               style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/webp/spa-image-14.webp)`}}>
        <Container>
          <Row className="items-center justify-center">
            <Col lg={6} className="text-start lg:text-start md:mb-[30px]">
              <img className="md:mx-auto" src={`${process.env.PUBLIC_URL}/assets/img/webp/temp1.webp`} width="555" height="607.67"
                   alt="spa" loading="lazy"/>
            </Col>
            <Col xl={{span: 5, offset: 1}} lg={6} md={8}>
              <Row className="row row-cols-1 justify-center">
                {HighlightsData.map(item => {
                  return <Col className="mb-[40px] sm:mb-[30px]">
                    <div className="items-center justify-start text-left flex">
                      <div className="mr-[35px] xs:mr-[15px]">
                        <m.img
                          className="rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)]  h-[130px] w-[130px] border-8 border-white xs:w-[80px] xs:h-[80px]"
                          src={item.url} alt="" data-no-retina="" {...{
                          ...zoomIn,
                          transition: {duration: 0.7}
                        }} />
                      </div>
                      <m.div className="flex-1" {...{...fadeInLeft, transition: {delay: 0.2, duration: 1}}}>
                        <span className="font-serif text-darkgray inline-block font-medium mb-[5px]">{item.title}</span>
                        <p>{item.content}</p>
                      </m.div>
                    </div>
                  </Col>
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section
        className="relative py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-[#f7edee] overflow-hidden">
        <div
          className="text-overlap absolute tracking-[-3px] left-[-115px] top-0 text-[255px] leading-[255px] h-full text-center w-auto font-semibold font-serif text-white block md:hidden">relax
        </div>
        <Container>
          <Row>
            <m.div
              className="relative md:mb-16 justify-center items-start flex flex-col col-xl-4 col-lg-4 col-md-8" {...fadeIn}>
              <span
                className="font-serif font-medium text-gradient bg-gradient-to-r from-[#ec606c] to-[#eb7242] uppercase mb-[15px] inline-block sm:mb-[5px]">Luxury packages</span>
              <h2 className="heading-5 font-serif font-medium text-darkgray">Our spa massage therapy packages</h2>
              <p className="w-[85%] mb-[35px] lg:w-full">Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.</p>
              <div className="flex">
                <div onClick={() => swiperpakage.current.swiper.slidePrev()}
                     className="btn-slider-next rounded-full flex justify-center items-center shadow-[0_0_10px_rgba(0,0,0,0.07)] text-black bg-white right-inherit h-[40px] w-[40px] cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-default">
                  <button aria-label="link for swiper next" className="text-xmd flex"><i
                    className="feather-arrow-left"></i></button>
                </div>
                <div onClick={() => swiperpakage.current.swiper.slideNext()}
                     className="btn-slider-prev text-black shadow-[0_0_10px_rgba(0,0,0,0.07)] bg-white rounded-full flex justify-center items-center right-inherit h-[40px] w-[40px] ml-[10px] cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-default">
                  <button aria-label="link for swiper prev" className="text-xmd flex"><i
                    className="feather-arrow-right"></i></button>
                </div>
              </div>
            </m.div>
            <m.div className="col-lg-7 offset-xs-1 will-change-transform">
              <m.div {...{...fadeInLeft, transition: {duration: 0.6, ease: "linear"}}}>
                <Swiper
                  className="interactivebanners-style-02 w-full h-full min-w-[1170px] md:min-w-full md:mr-0 white-move"
                  modules={[Autoplay, Pagination]}
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={40}
                  observer={true}
                  observeParents={true}
                  keyboard={{
                    enabled: "true",
                    onlyInViewport: "true"
                  }}
                  breakpoints={{
                    992: {slidesPerView: "3"},
                    768: {slidesPerView: "2"},
                  }}
                  effect={'slide'}
                  ref={swiperpakage}
                >
                  {
                    InteractiveBannersData01.map((item, i) => {
                      return (
                        <SwiperSlide key={i} className="my-swiper">
                          <m.div className="interactivebanners-main overflow-hidden rounded-[6px]" {...{
                            ...props.animation,
                            transition: {delay: ((i / 2) * 0.36) * props.animationDelay}
                          }}>
                            <div className="relative">
                              {item.img &&
                                <img width="412px" height="524px" className="interactiveanners-img" src={item.img}
                                     alt="spa"/>}
                              <div
                                className="absolute h-full w-full opacity-100 top-0 left-0 bg-gradient-to-b from-transparent to-[#141414]"></div>
                            </div>
                            <div className="fancy-text-content px-[55px] xs:px-[30px] xxs:px-[30px]">
                              {item.subtitle && <span
                                className="interactivebanners-subtitle font-medium bg-gradient-to-tr from-[#fd7f87] to-[#f7aa80] inline-block px-[15px] py-[5px] mb-[20px] rounded-[2px] text-white text-xs font-serif uppercase">{item.subtitle}</span>}
                              {item.title && <div
                                className="interactivebanners-title mb-[10px] text-white text-xlg font-serif lg:text-[18px] w-100">{item.title}</div>}
                              {item.btnTitle &&
                                <Buttons ariaLabel="link for swiper" to={item.btnLink} title={item.btnTitle}
                                         className="btn-fill btn-fancy rounded-[3px] mt-[15px] font-medium font-serif uppercase md:mb-[15px]"
                                         themeColor="#fff" color="#232323" size="xs"/>}
                            </div>
                          </m.div>
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </m.div>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}


      {/* Section Start */}
      <section className="pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px]">
        <Container>
          <Row className="justify-center xs:mx-0 gx-0">
            <Overlap value={70}>
              <Col xl={10} lg={11}
                   className="col-12 relative bg-white rounded-[6px] shadow-[0_0_20px_rgba(0,0,0,0.1)] mx-auto overflow-hidden">
                <m.div className="row" {...fadeIn}>
                  <Col md={6} className="col-12 bg-no-repeat bg-cover overflow-hidden relative bg-center sm:h-[350px]"
                       style={{backgroundImage: "url(https://via.placeholder.com/800x838)"}}></Col>
                  <Col md={6} className="col-12 p-24 xs:p-14 md:p-10">
                    <h2
                      className="heading-5 font-serif font-bold text-[#262b35] uppercase tracking-[-1px] w-[90%] mb-[20px]">GET
                      BOOK YOUR SPA APPOINTMENT</h2>
                    <p className="w-[90%] lg:w-full mb-[35px]">Lorem ipsum is simply dummy text of the printing and
                      typesetting industry</p>
                    <Formik
                      initialValues={{name: "", email: ""}}
                      validationSchema={ContactFormStyle02Schema}
                      onSubmit={async (values, actions) => {
                        actions.setSubmitting(true)
                        const response = await sendEmail(values)
                        response.status === "success" && resetForm(actions)
                      }}
                    >
                      {({isSubmitting, status}) => (
                        <Form>
                          <Input showErrorMsg={false} type="text" name="name" labelclass="mb-[25px]"
                                 className="rounded-[5px] py-[15px] px-[20px] w-full bg-lightgray mb-[20px] border-[1px] border-transparent"
                                 placeholder="Your name"/>
                          <Input showErrorMsg={false} type="email" name="email" labelclass="mb-[30px]"
                                 className="rounded-[5px] py-[15px] px-[20px] w-full bg-lightgray mb-[15px] border-[1px] border-transparent"
                                 placeholder="Your email address"/>
                          <Buttons ariaLabel="link for subscribe" type="submit"
                                   className={`text-sm leading-none font-medium rounded-[4px] w-full uppercase${isSubmitting ? " loading" : ""}`}
                                   themeColor={["#fd7f87", "#f7aa80"]} color="#fff" size="lg" title="Get started now"/>
                          <AnimatePresence>
                            {status && (
                              <m.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                                <MessageBox className="mt-[20px] relative py-[13px] px-[20px] text-md leading-[22px]"
                                            theme="message-box01" variant="success"
                                            message="Your message has been sent successfully subscribed to our email list!"/>
                              </m.div>
                            )}
                          </AnimatePresence>
                        </Form>
                      )}
                    </Formik>
                  </Col>
                </m.div>
              </Col>
            </Overlap>
          </Row>
          <Row className="justify-center mt-36 lg:mt-24">
            <Col md={10} xs={12}>
              <Clients grid="row-cols-1 row-cols-md-4 row-cols-sm-2 gap-y-[40px]" theme="client-logo-style-02"
                       data={ClientData} animation={fadeIn}/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="overflow-hidden">
        <Row className="g-0">
          <m.div className="col-xl-6 bg-cover lg:h-[600px] md:h-[500px] sm:h-[350px] relative"
                 style={{backgroundImage: 'url(https://via.placeholder.com/950x668)'}} {...fadeIn}>
          </m.div>
          <Col xl={6} className="relative p-0">
            <div className="flex absolute bottom-0 right-full z-10 lg:right-0">
              <div onClick={() => swiperReff.current.swiper.slidePrev()}
                   className="btn-slider-next bg-[#00000080] hover:bg-[#fff]  text-[#fff] hover:text-darkgray h-[62px] transition-default w-[62px] leading-[62px] text-[18px] absolute right-0 left-auto  z-10 bottom-[63px] flex items-center justify-center cursor-pointer md:w-[70px]">
                <button aria-label="swiper next link" className="text-xmd"><i className="feather-arrow-left"></i>
                </button>
              </div>
              <div onClick={() => swiperReff.current.swiper.slideNext()}
                   className="btn-slider-prev bg-[#00000080] hover:bg-[#fff]  text-[#fff] hover:text-darkgray h-[62px] transition-default w-[62px] leading-[62px] text-[18px] absolute right-0 left-auto bottom-0 z-10 flex items-center justify-center cursor-pointer md:w-[70px]">
                <button aria-label="swiper prev link" className="text-xmd"><i className="feather-arrow-right"></i>
                </button>
              </div>
            </div>
            <Swiper ref={swiperReff} loop={true} modules={[Autoplay]} autoHeight={false} className="black-move">
              <SwiperSlide className="cover-background"
                           style={{backgroundImage: 'url(https://via.placeholder.com/950x668)'}}>
                <div className="text-center h-full">
                  <div
                    className="flex flex-col justify-center bg-[#f7edee] py-28 px-[9.5rem] h-full w-[70%] xl:px-20 lg:w-[55%] md:p-16 xs:px-8 md:w-[65%] sm:w-[70%] xs:w-full">
                    <div>
                      <img
                        className="rounded-full mx-auto shadow-[0_0_15px_rgba(0,0,0,0.1)] w-[150px] h-[150px] border-[8px] border-white mb-[40px] xs:mb-[30px] xs:mx-auto"
                        src="https://via.placeholder.com/250x250" alt="" data-no-retina=""/>
                      <div className="font-serif text-[36px] leading-[42px] font-semibold text-darkgray mb-[30px] tracking-[-1px] xs:mb-[20px]">
                        {textGeriatricHeader}
                      </div>
                      <p className="mb-[25px]">{textGeriatricContent}</p>
                      <Buttons ariaLabel="Explore more" href={textGeriatricUrl}
                               className="mx-3 font-medium after:bg-black hover:text-black font-serif uppercase btn-link after:h-[1px] md:text-md"
                               color="#000" title={textGeriatricLink} size="xl"/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cover-background"
                           style={{backgroundImage: 'url(https://via.placeholder.com/950x668)'}}>
                <div className="text-center h-full">
                  <div
                    className="flex flex-col justify-center bg-[#f7edee] py-28 px-[9.5rem] h-full w-[70%] xl:px-20 lg:w-[55%] md:p-16 md:w-[65%] sm:w-[70%] xs:w-full">
                    <div>
                      <img
                        className="rounded-full mx-auto shadow-[0_0_15px_rgba(0,0,0,0.1)] w-[150px] h-[150px] border-[8px] border-white mb-[40px] xs:mb-[30px] xs:mx-auto"
                        src="/assets/img/webp/spa-image-05.webp" alt="" data-no-retina=""/>
                      <div
                        className="font-serif text-[36px] leading-[42px] font-semibold text-darkgray mb-[30px] tracking-[-1px] xs:mb-[20px]">A
                        good weekend starts with a positive attitude
                      </div>
                      <p className="mb-[25px]">Lorem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua enim quis nostrud exercitation ullamco.</p>
                      <Buttons href="#"
                               className="mx-3 font-medium after:bg-black hover:text-black font-serif uppercase btn-link after:h-[1px] md:text-md"
                               color="#000" title="Explore more" size="xl"/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cover-background"
                           style={{backgroundImage: 'url(https://via.placeholder.com/950x668)'}}>
                <div className="text-center h-full">
                  <div
                    className="flex flex-col justify-center bg-[#f7edee] py-28 px-[9.5rem] h-full w-[70%] xl:px-20 lg:w-[55%] md:p-16 md:w-[65%] sm:w-[70%] xs:w-full">
                    <div>
                      <img
                        className="rounded-full mx-auto shadow-[0_0_15px_rgba(0,0,0,0.1)] w-[150px] h-[150px] border-[8px] border-white mb-[40px] xs:mb-[30px] xs:mx-auto"
                        src="https://via.placeholder.com/250x250" alt="" data-no-retina=""/>
                      <div
                        className="font-serif text-[36px] leading-[42px] font-semibold text-darkgray mb-[30px] tracking-[-1px] xs:mb-[20px]">Spa
                        days are a necessity not a luxury
                      </div>
                      <p className="mb-[25px]">Lorem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua enim quis nostrud exercitation ullamco.</p>
                      <Buttons href="#"
                               className="mx-3 font-medium after:bg-black hover:text-black font-serif uppercase btn-link after:h-[1px] md:text-md"
                               color="#000" title="Explore more" size="xl"/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="justify-center">
            <m.div className="text-left md:text-center md:mb-[50px] col-lg-4 col-sm-8" {...{
              ...fadeIn,
              transition: {delay: 0.2}
            }}>
              <span
                className="font-serif font-medium text-gradient bg-gradient-to-r from-[#ec606c] to-[#eb7242] uppercase inline-block mb-[15px] sm:mb-[5px]">{textTestimonalsHeader}</span>
              <h2
                className="heading-5 font-serif font-medium text-darkgray tracking-[-1px] m-0">{textTestimonalsText}</h2>
            </m.div>
            <m.div className="col-xl-7 col-lg-8 offset-xl-1" {...{...fadeIn, transition: {delay: 0.6}}}>
              <TestimonialsCarousel05 data={TestimonialsCarouselData} carouselOption={{
                slidesPerView: 1,
                loop: true,
                navigation: false,
                autoplay: {delay: 10000, disableOnInteraction: false},
              }}/>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="pt-[130px] pb-[100px] lg:pt-[90px] lg:pb-[50px] md:pt-[75px] sm:pt-[50px] bg-lightgray">
        <Container>
          <Row className="justify-center">
            <Col lg={6} sm={8} className="col-12 text-center mb-20 md:mb-12">
              <span className="font-serif font-medium text-basecolor uppercase inline-block mb-[10px] sm:mb-[5px]">Latest blogs</span>
              <h2 className="heading-5 font-serif font-semibold text-darkgray m-0">Interesting stories</h2>
            </Col>
          </Row>
          <Row>
            <Col className="xs:px-0">
              <BlogModern overlay={["#fb7f87", "#fb957f", "#f7aa80"]} pagination={false}
                          grid="grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large md:pt-[4.5rem] xs:pt-0"
                          data={blogModernData.slice(0, 3)}/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-darkgray text-[#7e7e7e]"/>
      {/* Footer End */}
    </div>
  )
}

export default RugklachtenPage