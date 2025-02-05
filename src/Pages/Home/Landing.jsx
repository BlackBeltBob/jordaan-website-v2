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
import {JordaanContactForm} from "../../Components/Jordaan/JordaanContactForm";
import {JordaanTopNav} from "../../Components/Jordaan/JordaanTopNav";
import {Link as ScrollTo} from "react-scroll";

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
    url: `${process.env.PUBLIC_URL}/assets/img/webp/spa-image-06.webp`,
    title: 'Kom tot de essentie',
    content: 'Veel klachten zijn symptomen van een onderliggende kwaal. Samen vinden we die, en lossen het op',
  },
  {
    url: `${process.env.PUBLIC_URL}/assets/img/webp/spa-image-07.webp`,
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

const LandingPage = (props) => {
  const swiperReff = React.useRef(null)

  return (
    <div style={props.style}>
      <JordaanTopNav />


      {/* Section Mission Statement start */}
      <section
        className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]"
        style={{backgroundColor: '#fede4f'}}>
        <Container>
          <Row className="mt-32 md:mt-24">
            <JordaanHeader className="mt-32 md:mt-24 row"/>
          </Row>
          <Row className="mt-32 md:mt-24">
            <m.div {...fadeIn} className="col-12 col-md-6">
              <h2
                className="heading-5 font-serif font-medium leading-[46px] -tracking-[1px] w-[95%] text-jordaanText m-md-0 lg:w-full sm:leading-[32px]">
                {textMissionStatement}
              </h2>
            </m.div>
            <m.div {...{...fadeIn, transition: {delay: 0.6}}} className="col-12 col-lg-5 col-md-6">
              <p className="leading-[32px] w-[95%] mb-[25px] text-[#333045]">
                <i>{textVision}</i>
              </p>
              <Buttons ariaLabel={textMissionLink} href={`${process.env.PUBLIC_URL}/page/mission-statement`}
                       className="font-semibold font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-[#333045] hover:text-darkgray"
                       size="xlg" color="#333045" title={textMissionLink}/>
            </m.div>
            <ScrollTo to="mission" offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[50px] left-1/2 w-auto inline-block p-0 -translate-x-1/2 sm:bottom-7 xs:bottom-[4.5rem] cursor-pointer">
              <i className="ti-arrow-down text-lg leading-[1] text-white bg-[#000000b3] p-[15px] xs:p-[10px] rounded-full flex justify-center items-center"></i>
            </ScrollTo>
          </Row>
        </Container>
      </section>
      {/* Section Mission Statement end */}

      {/* Section Start */}
      <section id="mission"
        className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]">
        {/*<section className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1100)' }}>*/}
        <Container>
          <Row className="justify-center">
            <Col lg={7} sm={8} className="text-center mb-26 md:mb-12 xs:mb-16">
              <m.span className="block mb-[40px] md:mb-[25px] xs:mb-[15px]" {...fadeIn}><img width={150} height={78}
                                                                                             src={`${process.env.PUBLIC_URL}/assets/img/webp/logo/logo-white-top.png`}
                                                                                             className="my-0 mx-auto"
                                                                                             alt="spa"
                                                                                             data-no-retina=""/>
              </m.span>
              <m.span className="inline-block font-serif text-spanishgray uppercase font-medium mb-[15px] tracking-[1px] xs:mb-[10px]">
                {textMotto}
              </m.span>
              <m.h2 className="heading-5 font-serif text-darkgray font-medium tracking-[-1px]">
                {textMottoExt}
              </m.h2>
            </Col>
          </Row>
          <IconWithText grid="row-cols-1 row-cols-lg-4 row-cols-sm-2 text-center" theme="icon-with-text-03"
                        data={IconWithTextData} animation={fadeIn} animationDelay={0.3}/>
        </Container>
      </section>
      {/* Section End */}

      {/* Section RotateBox/Pakketten Start */}
      <section className="pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] bg-jordaanYellow bg-cover bg-no-repeat relative bg-center">
               {/*style={{backgroundImage: 'url(https://via.placeholder.com/1920x625)'}}>*/}
        <Container>
          <Row className="justify-center">
            <Overlap className="col-12 col-md-12 col-sm-8 md:mt-[75px]">
              <RotateBox grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center" animation={fadeIn}
                         animationDelay={0.2} data={RotateBoxData}/>
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


      <section className="relative py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-[#f7edee] overflow-hidden">
        <JordaanContactForm />
      </section>




      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-darkgray text-[#7e7e7e]"/>
      {/* Footer End */}
    </div>
  )
}

export default LandingPage