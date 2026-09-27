import React from 'react'

// Components
import FooterStyle01 from '../Components/Footers/FooterStyle01';
import {JordaanTopNav} from "../Components/Jordaan/JordaanTopNav";
import {JordaanFAQSection, JordaanWhiteHeaderSection} from "../Components/Jordaan/JordaanWhiteHeaderSection";
import {Col, Container, Row} from "react-bootstrap";
import {m} from "framer-motion";
import {fadeIn} from "../Functions/GlobalAnimations";
import Lists from "../Components/Lists/Lists";

const GeriatricTreatmentPage = (props) => {
  const textIntro = 'Geriatrie oefentherapie';
  const textIntroExt = 'Oefentherapie voor ouderen, gericht op behoud van zelfstandigheid';

  const goalsList = [
    {icon: "fas fa-check", content: "Verbeteren van mobiliteit"},
    {icon: "fas fa-check", content: "Vergroten van spierkracht"},
    {icon: "fas fa-check", content: "Verminderen van pijn en verbeteren van evenwicht/balans"},
    {icon: "fas fa-check", content: "Advies en begeleiding bij het gebruik van hulpmiddelen"},
    {icon: "fas fa-check", content: "Verbeteren van de algehele conditie"},
    {icon: "fas fa-check", content: "Bevorderen van zelfstandigheid"},
    {icon: "fas fa-check", content: "Valpreventie en het verminderen van valangst"},
  ]

  const faqData = [
    {
      title: 'Voor wie is geriatrie oefentherapie bedoeld?',
      content: 'Voor oudere volwassenen die te maken hebben met mobiliteitsproblemen, verminderde spierkracht, evenwichtsproblemen of moeite met dagelijkse activiteiten.'
    },
    {
      title: 'Heb ik een verwijzing nodig?',
      content: 'Nee, je kunt zonder verwijzing bij ons terecht. Wel horen wij graag van je huisarts of specialist wat de diagnose of hulpvraag is, zodat wij onze behandeling hier goed op aan kunnen laten sluiten.'
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
                Actief blijven op elke leeftijd
              </m.h2>
              <p className={`text-white mb-[20px]`}>Geriatrie oefentherapie is een specialisatie van de oefentherapie die zich specifiek richt op de gezondheidszorg voor ouderen. Het is ontworpen om de unieke behoeften van oudere volwassenen aan te pakken en hen te ondersteunen bij het behouden van een zo hoog mogelijke kwaliteit van leven, ondanks de uitdagingen die vaak geassocieerd worden met veroudering.</p>
            </Col>
            <m.div md={6} className="col-lg-6 col-md-6 offset-lg-1" {...{...fadeIn, transition: {delay: 0.4}}}>
              <p className={`w-[85%] lg:w-full mb-[20px] text-white`}>Geriatrie oefentherapeuten zijn gespecialiseerd in het evalueren en behandelen van aandoeningen die vaak voorkomen bij ouderen, zoals mobiliteitsproblemen, verminderde spierkracht, evenwichtsproblemen en problemen met dagelijkse activiteiten. Wij werken samen met onze cliënten om individuele behandelplannen te ontwikkelen die zijn afgestemd op specifieke fysieke behoeften en doelen.</p>
              <p className={`w-[85%] lg:w-full mb-[20px] text-white`}>Veelvoorkomende doelen</p>
              <Lists theme="list-style-02" className="text-white" data={goalsList} />
            </m.div>
          </Row>
        </Container>
      </section>

      <section className="pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] md:pb-[75px] sm:pb-[50px] bg-jordaanYellow">
        <Container>
          <Row className="justify-center text-jordaanText font-serif">
            <Col lg={8}>
              <m.h2 className="heading-6 font-medium tracking-[-1px]" {...fadeIn}>
                Wat levert het op?
              </m.h2>
              <p className="pb-8 px-0">Over het algemeen draagt geriatrie oefentherapie bij aan het behoud of herstel van de functionaliteit en onafhankelijkheid van ouderen, waardoor ze actief kunnen deelnemen aan hun dagelijkse activiteiten en genieten van een betere levenskwaliteit.</p>
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

export default GeriatricTreatmentPage;
