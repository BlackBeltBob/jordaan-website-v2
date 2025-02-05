import React from 'react'

// Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../Components/Header/Header";
import { fadeIn } from '../../Functions/GlobalAnimations'
import Buttons from '../../Components/Button/Buttons'
import FancyTextBox from '../../Components/FancyTextBox/FancyTextBox'
import Team from '../../Components/Team/Team'
import FooterStyle01 from '../../Components/Footers/FooterStyle01'
import IconWithText from '../../Components/IconWithText/IconWithText'
import Lists from '../../Components/Lists/Lists'
import Counter from '../../Components/Counters/Counter'
import Overlap from '../../Components/Overlap/Overlap'
import CustomModal from '../../Components/CustomModal'
import SideButtons from "../../Components/SideButtons";

// Libraries
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Col, Container, Row, Navbar } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from "swiper/react";
import { m } from 'framer-motion'
import { Link as ScrollTo } from "react-scroll"

// Data
import { fancyTextBox04 } from '../../Components/FancyTextBox/FancyTextBoxData';
import { TeamData04 } from '../../Components/Team/TeamData';
import {JordaanTopNav} from "../../Components/Jordaan/JordaanTopNav";

const TestimonialsCarouselData = [
  {
    img: "https://via.placeholder.com/800x622",
    title: "Unlimited power customization",
    number: "01",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
  },
  {
    img: "https://via.placeholder.com/800x622",
    title: "Powerful creatives designer",
    number: "02",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
  },
  {
    img: "https://via.placeholder.com/800x622",
    title: "Advanced customization options",
    number: "03",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
  },
]

const ListData = [
  {
    icon: "feather-arrow-right-circle",
    content: "Beautiful and easy to understand animations"
  },
  {
    icon: "feather-arrow-right-circle",
    content: "Theme advantages are pixel perfect design",
  },
  {
    icon: "feather-arrow-right-circle",
    content: "Find more creative ideas for your projects",
  },
]

const CounterData05 = [
  {
    number: {
      text: "1227",
      class: "text-fastblue"
    },
    title: "Winning awards",
    content: "For creative design",
  },
  {
    number: {
      text: "1947",
      class: "text-fastblue"
    },
    title: "Working hours",
    content: "Desperate for work",
  },
  {
    number: {
      text: "1587",
      class: "text-fastblue"
    },
    title: "Happy clients",
    content: "We love clients",
  },
]
const IconWithTextData = [
  {
    icon: "line-icon-Female text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Geriatrie Oefentherapie",
    content: "Onze praktijkhouder heeft een verbijzondering in geriatrieoefentherapie. U bent bij ons aan het juiste adres.",
    linkTitle: 'Lees meer',
    link: '#',
  },
  {
    icon: "line-icon-Cursor-Click text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Combinatie Oefentherapie en Fysiotherapie",
    content: "Door de sterke punten van beide disciplines te combineren komen we tot effectieve en efficiënte behandelplannen voor hun cliënten.",
    linkTitle: 'Lees meer',
    link: '#',
  },
  {
    icon: "line-icon-Navigation-LeftWindow text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Interdisciplinaire samenwerking",
    content: "Wij werken samen met huisartsen, dietisten, medisch specialisten, ziekenhuizen, en andere paramedici in de buurt.",
    linkTitle: 'Lees meer',
    link: '#',
  },
  {
    icon: "line-icon-Archery-2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Online producten",
    content: "Met onze online slaaptraining en oefenprogramma's kunt u vanuit het comfort van uw eigen woning werken aan uw gezondheid.",
    linkTitle: 'Lees meer',
    link: '#',
  },
]
const MissionStatementPage = (props) => {
  const vacaturesBeschikbaar = false;

  return (
    <div style={props.style}>
      {/* Header Start */}
      <JordaanTopNav background='white'/>
      {/* Header End */}

      {/* Parallax Scrolling Start */}
      <div className="h-[660px] lg:h-[580px] md:h-[550px] sm:h-[500px] xs:h-[380px] flex items-center overflow-hidden relative">
        <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[0px] left-0 w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/webp/hofje.webp)` }}></Parallax>
        <div className="absolute h-full w-full opacity-50 top-0 left-0 bg-darkgray"></div>
        <Container>
          <Row className="items-center justify-center">
            <Col md={8} xl={6} lg={7} sm={9} className="relative text-center">
              <h1 className="inline-block text-white opacity-60 mb-[20px] text-xmd leading-[20px] -tracking-[.5px] font-serif">Over onze visie</h1>
              <h2 className="font-serif text-white -tracking-[1px] text-[3.9rem] font-medium mb-0 sm:-tracking-[1px]">een praktijk met een missie</h2>
            </Col>
            <ScrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[50px] left-1/2 w-auto inline-block p-0 -translate-x-1/2 sm:bottom-7 xs:bottom-[4.5rem] cursor-pointer">
              <i className="ti-arrow-down text-lg leading-[1] text-white bg-[#000000b3] p-[15px] xs:p-[10px] rounded-full flex justify-center items-center"></i>
            </ScrollTo>
          </Row>
        </Container>
      </div>
      {/* Parallax Scrolling End */}

      {/* Section Start */}
      <section id="about" className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="font-serif">
            <Col lg={4} className="pe-lg-0 flex md:mb-[30px]">
              <div className="w-full md:h-[700px] sm:h-[550px] xs:h-[450px] cover-background" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/img/webp/team/praktijkhouder.jpg') ` }}></div>
            </Col>
            <Col lg={4} md={6} className="ps-lg-0 flex items-center sm:mb-[30px]">
              <div className="justify-center h-full w-full flex flex-col items-start bg-jordaanYellow px-[5.5rem] lg:px-[3rem] p-16">
                <span className="text-xlg lg:text-lg lg:leading-[26px] font-medium text-jordaanText mb-[20px] block">Met trots kan ik, Deborah Pos, zeggen dat mijn droom als praktijkhouder werkelijkheid is geworden.</span>
                <p className="text-jordaanText font-sans opacity-70 mb-[20px] xs:mb-[15px]">Onze praktijk in de Jordaan is uitgegroeid tot een bloeiende plek met een breed scala aan specialisaties en een fantastisch team van professionals. Wat begon als zorg voor lokale cliënten, heeft zich uitgebreid naar cliënten die vanuit verschillende plaatsen, en zelfs uit het buitenland, naar ons toe reizen vanwege onze expertise en specialistische zorg. </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="flex flex-col pr-0">
              <img src={`${process.env.PUBLIC_URL}/assets/img/webp/hofje.jpg`} alt="about us" className="sm:w-full" />
              <div className="bg-white px-[3.5rem] py-[3rem] h-full lg:p-8 sm:p-16">
                <span className="text-jordaanText font-medium mb-[10px] block">Onze praktijk</span>
                <p className="text-jordaanText font-sans">Onze praktijk ligt in een rustig Jordaans hofje, achter de Westerstraat. U kunt eventueel uw fiets achter het hek plaatsen.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px]">
        <Container>
          <Row className="justify-center flex">
            <m.div className="text-center mb-20 md:mb-12 col-lg-6 col-sm-8" {...fadeIn}>
              <span className="text-xmd mb-[15px] font-serif block w-full">Onze methodes</span>
              <h5 className="font-serif text-darkgray font-medium mb-8 sm:w-full">Hoe wij onze missie aanpakken</h5>
            </m.div>
            <Col xs={12} md={9} lg={12}>
              <IconWithText
                grid="row-cols-1 row-cols-md-1 row-cols-lg-2 gap-y-[15px]"
                theme="icon-with-text-02 mission-statement-icon-with-text"
                data={IconWithTextData}
                animation={fadeIn}
                animationDelay={0.1}
              />
            </Col>
          </Row>
        </Container>
      </section >
      {/* Section End */}


      {/* Section Start */}
      { vacaturesBeschikbaar &&
      <section className="pb-[130px] lg:pb-[90px] md:pb-[75px] xs:pb-[50px]">
        <Container>
          <div className="bg-[#ededed] mb-24 mt-12 w-full h-[1px]"></div>
          <Row className="items-center justify-center">
            <Col xl={7} md={8} sm={10} className="text-start md:text-center sm:mb-[30px]">
              <h6 className="font-serif text-darkgray font-medium mb-0 md:w-[90%] sm:w-full sm:text-center"><strong className="font-semibold underline underline-offset-2">Creative thinkers,</strong> clever developer and marketing superheroes apply for work with us.</h6>
            </Col>
            <Col xl={5} md={4} className="text-center md:text-end flex justify-end sm:justify-center">
              <Buttons to="/page/contact-classic" className="font-medium rounded-[4px] font-serif uppercase hover:text-white bg-transparent btn-slide-right" size="lg" color="#0038e3" themeColor="#0038e3" title="JOIN THE TEAM" />
            </Col>
          </Row>
        </Container>
      </section>}
      {/* Section End */}

      {/* Footer start */}
      <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
      {/* Footer end */}
    </div>
  )
}

export default MissionStatementPage