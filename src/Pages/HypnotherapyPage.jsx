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
  const textTreatmentsContent = 'Hypnose en katalepsie zetten wij gericht in als aanvulling op oefentherapie en fysiotherapie, bijvoorbeeld bij functionele neurologische stoornissen (FNS) of hardnekkige spanningsklachten.';
  const textTreatmentsQuote = "\"Door lichaam en geest samen te behandelen komen we vaak sneller tot de kern van een klacht dan met alleen oefentherapie of fysiotherapie.\"";

  const faqData = [
    {
      title: 'Is hypnotherapie een vervanging voor oefentherapie of fysiotherapie?',
      content: 'Nee. Wij zetten hypnose en katalepsie in als aanvullende techniek binnen je behandeltraject, niet als losstaande behandeling.'
    },
    {
      title: 'Voor welke klachten wordt hypnotherapie ingezet?',
      content: 'Onder andere bij functionele neurologische stoornissen (FNS), chronische spanningsklachten en waar ontspanning een belangrijk onderdeel van het herstel is.'
    },
    {
      title: 'Heb ik een verwijzing nodig?',
      content: 'Nee, je kunt zonder verwijzing bij ons terecht.'
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
                Hypnose en katalepsie
              </m.h2>
              <p className={`text-white mb-[20px]`}>Werken met lichaam én geest</p>
              <p className={`text-white mb-[20px]`}>Sommige klachten laten zich niet alleen door oefeningen oplossen. Spanning, stress en onbewuste patronen kunnen een grote rol spelen in hoe je lichaam reageert. Hypnose helpt om dieper contact te maken met deze processen, en katalepsie kan worden ingezet om het lichaam bewust te leren ontspannen.</p>

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