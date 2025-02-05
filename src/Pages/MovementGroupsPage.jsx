import React from 'react'

// Components
import FooterStyle01 from '../Components/Footers/FooterStyle01';
import {JordaanTopNav} from "../Components/Jordaan/JordaanTopNav";
import {
  JordaanFAQSection,
  JordaanWhiteHeaderSection
} from "../Components/Jordaan/JordaanWhiteHeaderSection";
import {Col, Container, Row} from "react-bootstrap";
import {m} from "framer-motion";
import {fadeIn} from "../Functions/GlobalAnimations";
import Lists from "../Components/Lists/Lists";


const MovementGroupsPage = (props) => {
  const textIntro = 'Bewegingsgroepen';
  const textIntroExt = 'Wekelijks in een kleine groep aan je gezondheid werken';
  const benefitsList = [
    {
      icon: "fas fa-check",
      content: "Begeleiding van een ervaren therapeut",
    },
    {
      icon: "fas fa-check",
      content: "Naadloos aangesloten aan je behandelingen",
    },
    {
      icon: "fas fa-check",
      content: "Verschillende opties qua trainingstoestellen",
    },
    {
      icon: "fas fa-check",
      content: "Gezellig, maar wel effectief",
    },
  ]
  return (
    <div style={props.style}>
      <JordaanTopNav />
      <JordaanWhiteHeaderSection header={textIntro} content={textIntroExt} />

      <section className={`pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] md:pb-[75px] sm:pb-[50px] bg-jordaanText bg-cover bg-no-repeat relative bg-center`}>
        {/*<section className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1100)' }}>*/}
        <Container>
          <Row className="mt-36 md:mt-24 sm:mt-16">
            <Col lg={5} md={6}>
              <m.h2 className={`heading-5 font-serif font-medium leading-[46px] -tracking-[.5px] md:leading-[38px] text-white md:m-0 sm:leading-[36px] xs:mb-[15px]`} {...{
                ...fadeIn, transition: {delay: 0.2}}}>
                Is de sportschool je te massaal?
              </m.h2>
              <p className={`text-white mb-[20px]`}>Er is een grote groep Nederlanders die baat zouden hebben bij regelmatig sporten, maar die zich niet prettig voelen in de sportschool. Of je je bezwaard voelt omdat je soms hulp nodig hebt, niet opgejaagd wilt worden door anderen, of het er gewoon te druk vind: er is een alternatief.</p>

            </Col>
            <m.div md={6} className="col-lg-6 col-md-6 offset-lg-1" {...{...fadeIn, transition: {delay: 0.4}}}>

              <p className={`text-white mb-[20px]`}>Mensendieck & Fysiotherapiepraktijk Jordaan biedt bewegingsgroepen aan: samen met een kleine groep deelnemers in onze praktijkruimte werken aan je gezondheid.</p>
              <p className={`w-[85%] lg:w-full mb-[20px] text-white`}>De voordelen</p>
              <Lists theme="list-style-02" className="text-white" data={benefitsList} />
            </m.div>
          </Row>
        </Container>
      </section>


      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-darkgray text-[#7e7e7e]"/>
      {/* Footer End */}
    </div>
  )
}

export default MovementGroupsPage;