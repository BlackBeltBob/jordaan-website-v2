import React from 'react'

// Libraries
import {Col, Container, Row} from "react-bootstrap";
import {m} from 'framer-motion'

// Components
import FooterStyle01 from '../Components/Footers/FooterStyle01';
import ChronicTreatmentsExplainer from "./Elements/ChronicTreatmentExplainer";
import {JordaanTopNav} from "../Components/Jordaan/JordaanTopNav";
import {JordaanFAQSection} from "../Components/Jordaan/JordaanWhiteHeaderSection";


const textIntro = 'Chronische behandeltrajecten';
const textIntroExt = 'De vergoeding van chonische behandeltrajecten leidt tot veel vragen. Hieronder vind je een uitleg over hoe het precies werkt.';
const textWhatIsChronicHealthcare = 'Wat is een chronisch behandeltraject?';
const textWhatIsChronicHealthcareExt1 = 'Grofweg kun je de hulpvraag van iemand die naar de oefentherapeut of fysiotherapeut gaat verdelen in twee groepen: niet-chronische klachten, en chronische klachten. Niet-chronische klachten zijn van tijdelijke aard en kunnen met een effectief behandelschema opgelost worden. Dit kunnen klachten zijn als slapeloosheid, hoofdpijnklachten, of lage rugklachten. Chronische klachten zijn klachten die niet opgelost kunnen worden, maar waarvan de effecten wel verminderd of stabiel gehouden kunnen worden. Voorbeelden hiervan zijn de ziekte van Parkinson, Artrose, of duizeligheid.';
const textWhatIsChronicHealthcareExt2 = 'Door de permanente aard van chronische klachten vergoeden Nederlandse zorgverzekeraars alle behandelingen voor deze ziektebeelden vanaf de 20e behandeling. Voor de eerste 20 behandelingen geldt dat deze op dezelfde manier vergoed worden als niet-chronische behandelingen. Dit betekent dat je, afhankelijk van je polisvoorwaarden, een aantal behandelingen vergoed kunt krijgen, maar mogelijk ook een deel uit eigen zak dient te betalen.';
const textWhatIsChronicHealthcareExt3 = 'Stel; je hebt een chronische klacht en komt voor je eerste behandeling direct bij ons. Als je polisvoorwaarden 6 behandelingen vergoed, dan zal de zorgverzekeraar alle behandelingen vanaf de 7e tot en met de 20e behandeling niet vergoeden. Wij dienen ze wel in, zodat de zorgverzekeraar weet dat de behandeling gedaan is, maar zij zullen er niets van vergoeden. Voor deze behandelingen krijg je van ons een factuur. Vanaf de 21e behandeling wordt alles vergoed.';
const textWhatIsChronicHealthcareExt4 = 'Die eerste 20 behandelingen gelden voor jouw zorgtraject. Dit betekent dat je, als je eerst 5 behandelingen bij een andere therapeut gehad hebt, nog 15 behandelingen te gaan hebt voor de behandelingen vergoed worden. Dit betekent ook dat (bij een vergoeding van 6 behandelingen) je van ons een factuur krijgt van 14 behandelingen. Het is dan ook handig om bij de intake duidelijk aan te geven hoeveel behandelingen je bij een andere therapeut gevolgd hebt.';
const textWhatIsChronicHealthcareExt5 = 'Je zorgverzekering vergoed jaarlijks nieuwe behandelingen. Als je een pakket hebt voor 6 behandelingen, en eind december heb je de 6e behandeling bij ons gehad, dan zal de verzekeraar in het volgende jaar weer 6 nieuwe behandelingen vergoeden. Dit kan handig zijn om rekening mee te houden, vooral richting het eind van het jaar.';

const FrequentlyAskedQuestionData = [
  {
    title: "Maar mijn verzekeraar vergoedt toch alle behandelingen van een chronische ziekte?",
    content: "Om de zorg betaalbaar te houden is het besluit gemaakt dat zorgverzekeraars bij chronische ziektes vanaf de 21e behandeling alle kosten vergoeden. De eerste 20 behandelingen vallen dus onder de polisvoorwaarden die gelden voor niet-chronische behandelingen. De zorgverzekeraar noteert dit verschil door het gebruik van codes: de eerste 20 behandelingen vallen onder de code 008, alles vanaf de 21e behandeling valt onder 001."
  },
  {
    title: "Hoeveel van de eerste 20 behandelingen krijg ik vergoed?",
    content: "Dat is geheel afhankelijk van de polisvoorwaarden bij het pakket dat je afgesloten hebt bij de verzekeraar. Een basis zorgverzekering vergoed bijna niets, terwijl een aanvullende verzekering meerdere behandelingen zal vergoeden. De kosten van aanvullende pakketten zijn dan ook vaak aanzienlijk hoger."
  },
  {
    title: "Kan ik de eerste 20 behandelingen over 2 kalenderjaren verdelen?",
    content: "Dat kan! Uw verzekeraar vergoed jaarlijks een aantal behandelingen in uw pakket. Als u de mogelijkheid heeft, kunt u dus kijken of u hiervan gebruik kunt maken. U kunt ook een aanvullende verzekering afsluiten als u weet dat u nog een aantal behandelingen moet betalen in het komende kalenderjaar. Dit zal, afhankelijk van het aantal behandelingen, soms gunstiger uitpakken dan de behandelingen zelf betalen."
  },
  {
    title: "Kunnen de eerste 20 behandelingen zo verdeeld worden dat ze pas later ingediend worden bij de verzekeraar?",
    content: "Dat kan helaas niet. De behandelingen moeten chronologisch ingediend worden, en behandeldata aanpassen of uitstellen is onverstandig."
  },
]

const ChronicTreatmentsPage = (props) => {

  return (
    <div style={props.style}>
      <JordaanTopNav />




      {/* Section Start */}
      <section className="pt-[350px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]">
        <Container>
          <Row className="justify-center">
            <Col lg={7} sm={8} className="text-center mb-26 md:mb-12 xs:mb-16">
              <m.span className="inline-block font-serif text-jordaanText uppercase font-medium mb-[15px] tracking-[1px] xs:mb-[10px]">
                {textIntro}
              </m.span>
              <m.h2 className="heading-6 font-serif text-jordaanText font-medium tracking-[-1px]">
                {textIntroExt}
              </m.h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px] bg-jordaanYellow">
        <Container>
          <Row className="justify-center text-jordaanText font-serif">
            <m.h2 className="heading-6 font-medium tracking-[-1px]">
              {textWhatIsChronicHealthcare}
            </m.h2>
            <p dangerouslySetInnerHTML={{__html: textWhatIsChronicHealthcareExt1}} className="pb-8 px-0"/>
            <p dangerouslySetInnerHTML={{__html: textWhatIsChronicHealthcareExt2}} className="pb-8 px-0"/>
            <ChronicTreatmentsExplainer version='explainer1' explainer='Een voorbeeld van iemand die basisverzekerd is. Geen van de eerste 20 behandelingen worden vergoed. Deze rode behandelingen dienen zelf betaald te worden.' />
            <p dangerouslySetInnerHTML={{__html: textWhatIsChronicHealthcareExt3}} className="pb-8 px-0"/>
            <ChronicTreatmentsExplainer version='explainer2' explainer='Een voorbeeld van een client met een verzekering die 6 behandelingen vergoed. Van de eerste 20 behandelingen worden er 6 vergoed. De 14 rode behandelingen dienen zelf betaald te worden.' />
            <p dangerouslySetInnerHTML={{__html: textWhatIsChronicHealthcareExt4}} className="pb-8 px-0"/>
            <ChronicTreatmentsExplainer version='explainer3' explainer='Een voorbeeld van een client met een verzekering die 6 behandelingen vergoed, welke eerst 5 behandelingen bij een andere therapeut heeft gehad. Van de eerste 20 behandelingen worden er 6 vergoed. Omdat er al 5 bij een andere therapeut gevolgd zijn wordt er bij ons nog maar een vergoed. De 14 rode behandelingen dienen zelf betaald te worden.' />
            <p dangerouslySetInnerHTML={{__html: textWhatIsChronicHealthcareExt5}} className="pb-8 px-0"/>
            <ChronicTreatmentsExplainer version='explainer4' explainer='Een voorbeeld van een client met een verzekering die 6 behandelingen vergoed. De eerste 6 behandelingen worden vergoed. Omdat de 11e behandeling in een nieuw kalenderjaar valt, worden behandelingen 11 tot 16 ook vergoed. De client hoeft in totaal maar 8 behandelingen zelf te betalen.' />
          </Row>
        </Container>
      </section>


      <JordaanFAQSection data={FrequentlyAskedQuestionData} />


      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-darkgray text-[#7e7e7e]"/>
      {/* Footer End */}
    </div>
  )
}

export default ChronicTreatmentsPage;