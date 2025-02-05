import React from 'react'

// Libraries
import { Link } from 'react-router-dom'
import { Autoplay, EffectFade, Keyboard } from "swiper";
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { m } from "framer-motion"
import { Link as ScrollTo } from "react-scroll"

// Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../Components/Header/Header";
import { fadeIn } from '../../Functions/GlobalAnimations';
import Team from '../../Components/Team/Team';
import InteractiveBanners05 from '../../Components/InteractiveBanners/InteractiveBanners05';
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import Buttons from '../../Components/Button/Buttons'
import SideButtons from "../../Components/SideButtons";

// Data
import { InteractiveBannersData05 } from '../../Components/InteractiveBanners/InteractiveBannersData';
import Overlap from "../../Components/Overlap/Overlap";
import RotateBox from "../../Components/RotateBox/RotateBox";
import {JordaanTopNav} from "../../Components/Jordaan/JordaanTopNav";

const TeamData = [
  {
    img: `${process.env.PUBLIC_URL}/assets/img/webp/team/deborah-pos.webp`,
    name: 'DEBORAH POS',
    designation: 'GERIATRIEOEFENTHERAPEUT, FYSIOTHERAPEUT',
    subtitle: 'Als geriatrieoefentherapeut en fysiotherapeut is Deborah de ideale therapeut voor jou. Deborah is in staat de sterke kanten van beide disciplines optimaal met elkaar te verenigen tot een effectief en efficiënt behandelplan voor zowel individuen als groepen.',
    social_links: [
    ]
  },
  {
    img: 'https://via.placeholder.com/800x875',
    name: 'ROSSY LAZAROV',
    designation: 'Oefentherapeut',
    subtitle: 'Rossy is door zijn ervaring op meerdere probleemgebieden breed geschoold; een absolute toegevoegde waarde voor het vak.',
    social_links: [
    ]
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/img/webp/team/sari-hoogendoorn.webp`,
    name: 'SARI HOOGENDOORN',
    designation: 'Oefentherapeut',
    subtitle: 'Met haar rustige karakter en open uitstraling weet Sari een veilige en vertrouwde omgeving te creëren waarin mensen zich snel op hun gemak voelen.',
    social_links: [
    ]
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/img/webp/team/jeff-irving.webp`,
    name: 'Jeff Irving',
    designation: 'Oefentherapeut',
    subtitle: 'Ontdek gezonder bewegen met Jeff, onze enthousiaste Oefentherapeut bij Mensendieck & Fysiotherapie Praktijk Jordaan. Expertise in sport, werkgerelateerde zorg en ervaring in fitnessbegeleiding, personal training en groepslessen.',
    social_links: [
    ]
  },
]



const OurTeamPage = (props) => {

  const textTeamHeader = 'Ons team is gedreven en vol passie voor onze missie';
  const textTeamContent = 'Het is een uitdaging om de paramedische zorg in Nederland goed te regelen. Op onze locatie in het centrum van Amsterdam staat ons team klaar om deze uitdaging aan te gaan. Met een gevarieerd aanbod van specialisaties, kennis, en ervaring lukt het ons al meer dan tien jaar om zorgtrajecten aan te laten sluiten aan de wensen van onze clienten.';
  const textTeamVacature = 'Ben jij  een zorgprofessional en heb je een beeld over hoe jij onze missie kan versterken? Neem dan contact met ons op om ons te overtuigen!';

  return (
    <div style={props.style}>
      <JordaanTopNav />


      {/* Section Start */}
      <section
        className="pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]">
        {/*<section className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1100)' }}>*/}
        <Container>
          <Row className="justify-center">
            <Col lg={7} sm={8} className="text-center mb-26 md:mb-12 xs:mb-16">
              <m.span className="inline-block font-serif text-jordaanText uppercase font-medium mb-[15px] tracking-[1px] xs:mb-[10px]">
                Ons Team
              </m.span>
              <m.h2 className="heading-5 font-serif text-jordaanText font-medium tracking-[-1px]">
                Een hechte groep van ervaren en bedreven therapeuten
              </m.h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section id="downsection" className="our-team-page-team py-[130px] lg:pt-[100px] lg:pb-[95px] md:pt-[70px] md:pb-[40px] sm:py-[50px] xs:pb-[25px] switch-tabs">
        <Container fluid className="px-[7%] lg:px-[3%]">
          <Team
            themeColor="light"
            overlay={["#0039e3cc", "#4132e0cc", "#5e28ddcc", "#741bd9cc", "#8600d4cc"]}
            theme='team-style-04'
            data={TeamData}
            grid="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 justify-center"
            carousel={false}
            carouselOption={{ slidesPerView: 3, spaceBetween: 30, loop: true, navigation: true, autoplay: { delay: 3000, disableOnInteraction: true }, pagination: { dynamicBullets: true, clickable: true } }} />
        </Container>
      </section>
      {/* Section Start */}




      {/* Section RotateBox/Pakketten Start */}
      <section className="py-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] bg-jordaanYellow bg-cover bg-no-repeat relative bg-center">
        {/*style={{backgroundImage: 'url(https://via.placeholder.com/1920x625)'}}>*/}
        <Container>
          <Row className="mt-36 md:mt-24 sm:mt-16">
            <Col lg={5} md={6}>
              <m.h2
                className="heading-5 font-serif font-medium leading-[46px] -tracking-[.5px] md:leading-[38px]  text-jordaanText md:m-0 sm:leading-[36px] xs:mb-[15px]" {...{
                ...fadeIn, transition: {delay: 0.2}}}>
                {textTeamHeader}
              </m.h2>
            </Col>
            <m.div md={6} className="col-lg-6 col-md-6 offset-lg-1" {...{...fadeIn, transition: {delay: 0.4}}}>
              <p className="w-[85%] lg:w-full mb-[20px] text-jordaanText">{textTeamContent}</p>
              <p className="w-[85%] lg:w-full mb-[20px] text-jordaanText">{textTeamVacature}</p>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}


      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" />
      {/* Footer End */}


    </div>
  )
}

export default OurTeamPage