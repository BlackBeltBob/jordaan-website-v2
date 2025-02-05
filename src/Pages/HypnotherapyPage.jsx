import React from 'react'

// Components
import FooterStyle01 from '../Components/Footers/FooterStyle01';
import {JordaanTopNav} from "../Components/Jordaan/JordaanTopNav";
import {
  JordaanColoredSection, JordaanFAQSection,
  JordaanWhiteHeaderSection
} from "../Components/Jordaan/JordaanWhiteHeaderSection";
import {Col, Container, Row} from "react-bootstrap";
import {m} from "framer-motion";
import {fadeIn} from "../Functions/GlobalAnimations";
import Blockquote from "../Components/Blockquote/Blockquote";



const HypnotherapyPage = (props) => {
  const textIntro = 'Hypnotherapie';
  const textIntroExt = 'Gebruik hypnose om je klachten teboven te komen';
  const textTreatmentsContent = 'Beide disciplines versterken elkaar en vullen elkaar uitstekend aan. Dit zorgt voor een effectieve en efficiënte behandeling.';
  const textTreatmentsQuote = "\"Mensendieck en Fysiotherapiepraktijk Jordaan biedt twee paramedische therapievormen aan: Oefentherapie Mensendieck en Fysiotherapie. Beide therapieën hebben hun eigen sterktes, en vullen elkaar uitstekend aan.\"";

  const faqData = [
    {
      title: 'Kan ik ook terecht bij Mensendieck & Fysiotherapiepraktijk Jordaan als ik geen chronische klachten heb, en/of geen verbijzonderde zorg nodig heb?',
      content: 'Dat kan zeker. Pijn in de onderrug is de meest veelvoorkomende fysieke klacht in Nederland, en onze therapeuten zijn meer dan gekwalificeerd om je daar bij te helpen.'
    },
    {
      title: 'Wie heeft jullie geweldige website gemaakt?',
      content: 'Dat hebben wij helemaal zelf gedaan. Bedankt voor je compliment!'
    },
  ];

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
                Mensendieck & Fysiotherapie
              </m.h2>
              <p className={`text-white mb-[20px]`}>Twee zijdes van dezelfde medaille</p>
              <p className={`text-white mb-[20px]`}>Fysiotherapie is bekend van het stoornisgericht behandelen. Hierbij kunnen verschillende behandelmethoden gebruikt worden. Oefentherapie Mensendieck heeft een holistisch karakter, waarbij gekeken wordt naar het hele lichaam en naar de houding en beweging in het dagelijks leven.</p>

            </Col>
            <m.div md={6} className="col-lg-6 col-md-6 offset-lg-1" {...{...fadeIn, transition: {delay: 0.4}}}>

              <p className={`w-[85%] lg:w-full mb-[20px] text-white`}>{textTreatmentsContent}</p>
              <blockquote className="border-l-[4px] text-white-50 font-medium border-jordaanYellow text-xmd pl-[25px] pr-0 mt-[40px] mb-[30px] lg:w-[95%]">{textTreatmentsQuote}</blockquote>
            </m.div>
          </Row>
        </Container>
      </section>

      <JordaanFAQSection data={faqData} />

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-darkgray text-[#7e7e7e]"/>
      {/* Footer End */}
    </div>
  )
}

export default HypnotherapyPage;