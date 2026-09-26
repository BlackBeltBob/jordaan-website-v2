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


const ParkinsonismPage = (props) => {
  const textIntro = 'Parkinson';
  const textIntroExt = 'Blijf in beweging en behoud je zelfstandigheid';

  const benefitsList = [
    {
      icon: "fas fa-check",
      content: "Werken aan balans, loopvaardigheid en het voorkomen van vallen",
    },
    {
      icon: "fas fa-check",
      content: "Grotere, vloeiendere bewegingen in het dagelijks leven",
    },
    {
      icon: "fas fa-check",
      content: "Behoud van spierkracht, souplesse en conditie",
    },
    {
      icon: "fas fa-check",
      content: "Persoonlijke oefeningen die je thuis zelf kunt doen",
    },
  ]

  const faqData = [
    {
      title: 'Wordt de behandeling van Parkinson vergoed?',
      content: 'Parkinson valt onder de chronische aandoeningen. De eerste 20 behandelingen vallen onder de vergoeding uit je aanvullende verzekering, daarna worden behandelingen vanuit de basisverzekering vergoed. Meer uitleg vind je op de pagina over chronische behandeltrajecten.'
    },
    {
      title: 'Heb ik een verwijzing nodig?',
      content: 'Nee, je kunt zonder verwijzing bij ons terecht. Wel horen wij graag van je huisarts of neuroloog wat de diagnose is, zodat wij onze behandeling hier goed op aan kunnen laten sluiten.'
    },
    {
      title: 'Is het nog zinvol om te bewegen als de ziekte al ver gevorderd is?',
      content: 'Ja. Bewegen blijft ook in een later stadium belangrijk om zo lang mogelijk zelfstandig te blijven. De behandeling wordt afgestemd op wat jij op dat moment kunt en nodig hebt.'
    },
    {
      title: 'Kan mijn partner of mantelzorger meekomen?',
      content: 'Zeker. Het kan prettig zijn als ook je naasten weten hoe ze je kunnen ondersteunen bij de oefeningen en in het dagelijks leven.'
    },
  ];

  return (
    <div style={props.style}>
      <JordaanTopNav />
      <JordaanWhiteHeaderSection header={textIntro} content={textIntroExt} />

      <section className={`pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] md:pb-[75px] sm:pb-[50px] bg-jordaanText bg-cover bg-no-repeat relative bg-center`}>
        <Container>
          <Row className="mt-36 md:mt-24 sm:mt-16">
            <Col lg={5} md={6}>
              <m.h2 className={`heading-5 font-serif font-medium leading-[46px] -tracking-[.5px] md:leading-[38px] text-white md:m-0 sm:leading-[36px] xs:mb-[15px]`} {...{
                ...fadeIn, transition: {delay: 0.2}}}>
                Leven met de ziekte van Parkinson
              </m.h2>
              <p className={`text-white mb-[20px]`}>De ziekte van Parkinson heeft invloed op hoe je beweegt: bewegingen worden trager en kleiner, spieren voelen stijf aan, en evenwicht en lopen kosten meer moeite. Regelmatig en gericht bewegen is een van de belangrijkste manieren om hier zelf invloed op uit te oefenen.</p>
            </Col>
            <m.div md={6} className="col-lg-6 col-md-6 offset-lg-1" {...{...fadeIn, transition: {delay: 0.4}}}>
              <p className={`w-[85%] lg:w-full mb-[20px] text-white`}>Bij Mensendieck & Fysiotherapiepraktijk Jordaan kijken we samen met je naar wat je in het dagelijks leven tegenkomt, en werken we aan de bewegingen die voor jou het verschil maken. Dat doen we individueel, en op maat.</p>
              <p className={`w-[85%] lg:w-full mb-[20px] text-white`}>De voordelen</p>
              <Lists theme="list-style-02" className="text-white" data={benefitsList} />
            </m.div>
          </Row>
        </Container>
      </section>

      <section className="pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] md:pb-[75px] sm:pb-[50px] bg-jordaanYellow">
        <Container>
          <Row className="justify-center text-jordaanText font-serif">
            <Col lg={8}>
              <m.h2 className="heading-6 font-medium tracking-[-1px]" {...fadeIn}>
                Hoe wij je helpen
              </m.h2>
              <p className="pb-8 px-0">Na een uitgebreide intake stellen we samen een behandelplan op. We geven je inzicht in hoe je lichaam beweegt en oefenen met houding, balans en het op gang komen van bewegingen. Ook leren we je strategieën waarmee je moeilijke momenten, zoals het draaien in bed of het opstaan uit een stoel, makkelijker doorstaat.</p>
              <p className="pb-8 px-0">De behandeling kan worden gecombineerd met onze bewegingsgroepen, zodat je ook in een groep aan je conditie en spierkracht kunt werken.</p>
            </Col>
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

export default ParkinsonismPage;
