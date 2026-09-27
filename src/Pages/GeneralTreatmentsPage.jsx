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


const GeneralTreatmentsPage = (props) => {
  const textIntro = 'Onze reguliere behandelingen';
  const textIntroExt = 'Wij bieden zowel Fysiotherapie als Oefentherapie Mensendieck aan';
  const textTreatmentsContent = 'Beide disciplines versterken elkaar en vullen elkaar uitstekend aan. Dit zorgt voor een effectieve en efficiënte behandeling.';
  const textTreatmentsQuote = "\"Mensendieck en Fysiotherapiepraktijk Jordaan biedt twee paramedische therapievormen aan: Oefentherapie Mensendieck en Fysiotherapie. Beide therapieën hebben hun eigen sterktes, en vullen elkaar uitstekend aan.\"";
  const textSynergyContent = 'Wij geloven in de synergie van Oefentherapie Mensendieck en Fysiotherapie. Oefentherapie Mensendieck richt zich op het verbeteren van de houding en het aanleren van gezond bewegingsgedrag. Aan de andere kant helpt Fysiotherapie bij de behandeling van specifieke klachten en het herstellen van de functie van het bewegingsapparaat. Door deze twee disciplines te combineren, realiseren we een benadering die gericht is op de oorzaken van klachten, niet alleen op de symptomen. Dit leidt tot efficiëntere behandelingen en sneller herstel.';
  const textSpecialisatiesIntro = 'Ons doel is altijd geweest om hoogwaardige zorg te bieden, afgestemd op de individuele behoeften van elke cliënt. We zijn er trots op dat we een veelzijdigheid aan specialisaties en behandelingen kunnen aanbieden, waardoor we in staat zijn om een breed scala aan gezondheidsuitdagingen aan te pakken. We streven ernaar om een verschil te maken in het leven van mensen door middel van persoonlijke aandacht, deskundige zorg en continue professionele ontwikkeling.';

  const specialisatiesList = [
    {icon: "fas fa-check", content: "Chronische pijn; pijn die langer dan 3 maanden aanhoudt"},
    {icon: "fas fa-check", content: "Spanningsklachten (bijv. hyperventilatie, spanningshoofdpijn, moeite met ontspannen lichamelijk/geestelijk)"},
    {icon: "fas fa-check", content: "Bugnet; voor o.a. hypermobiliteitsklachten en neurologische klachten"},
    {icon: "fas fa-check", content: "Artrose (slijtage van gewrichten)"},
    {icon: "fas fa-check", content: "Osteoporose (slijtage van de wervelkolom)"},
    {icon: "fas fa-check", content: "Slaapoefentherapie: bij problemen bij slapen, bijv. inslapen, doorslapen of te vroeg wakker worden"},
    {icon: "fas fa-check", content: "Oefen- en fysiotherapie voor longen (o.a. COPD)"},
    {icon: "fas fa-check", content: "Revalidatie na ziekenhuisopname, operatie of breuk"},
    {icon: "fas fa-check", content: "Revalidatie na COVID-19"},
  ];

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
              <p className={`text-white mb-[20px]`}>{textSynergyContent}</p>
            </Col>
            <m.div md={6} className="col-lg-6 col-md-6 offset-lg-1" {...{...fadeIn, transition: {delay: 0.4}}}>

              <p className={`w-[85%] lg:w-full mb-[20px] text-white`}>{textTreatmentsContent}</p>
              <blockquote className="border-l-[4px] text-white-50 font-medium border-jordaanYellow text-xmd pl-[25px] pr-0 mt-[40px] mb-[30px] lg:w-[95%]">{textTreatmentsQuote}</blockquote>
            </m.div>
          </Row>
        </Container>
      </section>

      <section className="pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] md:pb-[75px] sm:pb-[50px]">
        <Container>
          <Row className="justify-center text-jordaanText font-serif">
            <Col lg={8}>
              <m.h2 className="heading-6 font-medium tracking-[-1px]" {...fadeIn}>
                Onze specialisaties
              </m.h2>
              <p className="pb-8 px-0">{textSpecialisatiesIntro}</p>
              <p className="pb-4 px-0">Daarnaast bieden wij gerichte zorg bij:</p>
              <Lists theme="list-style-02" data={specialisatiesList} />
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

export default GeneralTreatmentsPage;