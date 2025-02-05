import React from 'react'

// Libraries
import {Col, Container, Row} from "react-bootstrap";
import {m} from 'framer-motion'

// Components
import Buttons from '../Components/Button/Buttons'
import FooterStyle01 from '../Components/Footers/FooterStyle01';
import {fadeIn} from '../Functions/GlobalAnimations';
import FancyTextBox from "../Components/FancyTextBox/FancyTextBox";
import {JordaanTopNav} from "../Components/Jordaan/JordaanTopNav";
import {Link as ScrollTo} from "react-scroll";


const fancyTextBox = [
  {
    icon: {
      text: "€45",
      class: "text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"
    },
    title: "Zitting oefentherapie / fysiotherapie",
    description: "30 min. Reguliere zitting oefentherapie Mensendieck of Fysiotherapie.",
  },
  {
    icon: {
      text: "€55",
      class: "text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"
    },
    title: "Geriatrie zitting",
    description: "30 min. Zitting geriatrie oefentherapie, van een gespecialiseerde therapeut.",
  },
  {
    icon: {
      text: "€129",
      class: "text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"
    },
    title: "Hypnotherapie",
    description: "45 min. Zitting Hypnotherapie. Lorem Ipsum dolor sit amet. Nunquam titilanus",
  },
  {
    icon: {
      text: "€65",
      class: "text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"
    },
    title: "Lange zitting",
    description: "45 min. Lange zitting voor cliënten met complexe of meervoudige zorgvragen.",
  },
  {
    icon: {
      text: "€65",
      class: "text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"
    },
    title: "Paramedisch Onderzoek",
    description: "30 min. Eenmalig oefentherapeutisch/fysiotherapeutisch onderzoek.",
  },
  {
    icon: {
      text: "€65",
      class: "text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"
    },
    title: "Screening, Intake, en Onderzoek",
    description: "30 min. Screening, Intake, en Onderzoek. Nodig als u geen verwijzing heeft.",
  },
  {
    icon: {
      text: "€65",
      class: "text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"
    },
    title: "Intake en onderzoek na verwijzing",
    description: "30 min. Intake en onderzoek na verwijzing van huisarts of medisch specialist.",
  },
  {
    icon: {
      text: "€25",
      class: "text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"
    },
    title: "Toeslag behandeling aan huis",
    description: "Toeslag boven op de behandelprijs voor zitting die aan huis gegeven worden.",
  },
  {
    icon: {
      text: "€--",
      class: "text-gradient bg-gradient-to-r from-[#ff6557] to-[#ff367c]"
    },
    title: "Groepszitting van 2 personen",
    description: "Duur en prijs in overleg. Paramedische zitting met twee personen. Op uitzonderingsbasis.",
  },
]

const textMotto = 'Betaalbare paramedische zorg, afgestemd op jouw situatie';
const textMottoExt = 'Tarieven voor oefentherapie en fysiotherapie buiten je verzekering om';
const textPackagesHeader = 'Als je verzekerd bent wordt een deel van je behandelingen vergoed door een zorgverzekeraar.';
const textPackagesInfo = 'Als u een zorgverzekering heeft kan het zijn dat zij een deel of zelfs alle kosten vergoeden. Dit is afhankelijk van je polisvoorwaarden. Basisverzekeringen dekken vaak niets of weinig, terwijl aanvullende verzekeringen veel of zelfs alle kosten vergoeden.';
const textPackagesInfo2 = 'Heeft u een <strong>chronische klacht</strong> als de ziekte van Parkinson of MS? De zorgverzekeraar vergoed dan op lange termijn uw behandelingen, maar mogelijk moet u aan het begin van het traject toch zelf behandelingen betalen. Lees hieronder meer over.';
const textPackagesButton = "Hoe vergoeden zorgverzekeraars chonische klachten?"
const textPackagesButtonUrl = `${process.env.PUBLIC_URL}/page/chronic-healthcare`;
const textBitcoinHeader = "Een speciale korting als u betaalt met Bitcoin";
const textBitcoinContent = "Bij Mensendieck & Fysiotherapiepraktijk Jordaan kun je een eventuele factuur ook betalen met Bitcoin. Omdat wij overtuigd zijn van de mogelijkheden en de potentie voor maatschappelijke verandering die Bitcoin biedt geven wij een korting op betalingen die voldaan worden in Bitcoin.";

const TariffsPage = (props) => {

  return (
    <div style={props.style}>
      <JordaanTopNav />




      {/* Section Start */}
      <section
        className="pt-[250px] pb-[250px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]">
        {/*<section className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1100)' }}>*/}
        <Container>
          <Row className="justify-center">
            <Col lg={7} sm={8} className="text-center mb-26 md:mb-12 xs:mb-16">
              <m.span className="inline-block font-serif text-jordaanText uppercase font-medium mb-[15px] tracking-[1px] xs:mb-[10px]">
                {textMotto}
              </m.span>
              <m.h2 className="heading-5 font-serif text-jordaanText font-medium tracking-[-1px]">
                {textMottoExt}
              </m.h2>
            </Col>
            <ScrollTo to="context" offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[50px] left-1/2 w-auto inline-block p-0 -translate-x-1/2 sm:bottom-7 xs:bottom-[4.5rem] cursor-pointer">
              <i className="ti-arrow-down text-lg leading-[1] text-white bg-[#000000b3] p-[15px] xs:p-[10px] rounded-full flex justify-center items-center"></i>
            </ScrollTo>

          </Row>
          {/*<IconWithText grid="row-cols-1 row-cols-lg-4 row-cols-sm-2 text-center" theme="icon-with-text-03"*/}
          {/*              data={IconWithTextData} animation={fadeIn} animationDelay={0.3}/>*/}
        </Container>
      </section>
      {/* Section End */}

      <section id='context' className="py-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] bg-jordaanYellow bg-cover bg-no-repeat relative bg-center">
               {/*style={{backgroundImage: 'url(https://via.placeholder.com/1920x625)'}}>*/}
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
              <p dangerouslySetInnerHTML={{__html: textPackagesInfo2}} className="w-[85%] lg:w-full mb-[20px] text-jordaanText" />
              <Buttons ariaLabel="Explore more" href={textPackagesButtonUrl} color="#000" title={textPackagesButton} size="xl"
               className="font-medium hover:text-darkgray font-serif uppercase btn-link after:h-[1px] after:bg-black md:text-md"
              />
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section
        className="pt-[350px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]">
        <Container>
          <FancyTextBox
            grid="row-cols-1 row-cols-lg-2 gap-y-10 lg:gap-y-[30px] xs:gap-y-[15px]"
            className="col-12 col-lg-6 col-md-9 col-sm-10"
            theme="fancy-text-box-03"
            data={fancyTextBox} />
        </Container>
      </section>

      {/* Section Start */}
      <section className="py-[80px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-[#FFbb33]">
        <Container>
          <Row className="items-center justify-center">
            <m.div
              className="col col-xl-4 col-lg-5 col-md-10 md:mb-20"
              {...fadeIn}
            >
              <h2 className="heading-5 font-serif text-jordaanText font-bold uppercase tracking-[-1px]">Betalen met Bitcoin</h2>
              <blockquote className="border-l-[4px] text-jordaanText font-medium border-jordaanText text-xmd pl-[25px] pr-0 mt-[40px] mb-[30px] lg:w-[95%]">{textBitcoinHeader}</blockquote>
              <p className="text-jordaanText w-[90%] mb-[25px] md:w-full">{textBitcoinContent}</p>
              <Buttons
                to="https://bitcoin.org/nl/hoe-het-werkt"
                className="font-medium mt-[10px] btn-fancy font-serif tracking-[1px] uppercase text-decoration-underline btn-transparent rounded-none hover:text-white"
                color="#232323"
                size="sm"
                themeColor="#232323"
                title="wat is bitcoin?"
                icon="fas fa-capsules" // orange-pill people!
                target="_blank"
              />
            </m.div>
            <m.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="col-12 col-md-10 col-lg-7 offset-xl-1"
            >
              <img height="200" width="" alt="..." src={`${process.env.PUBLIC_URL}/assets/img/webp/bitcoin.webp`} />
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}


      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-darkgray text-[#7e7e7e]"/>
      {/* Footer End */}
    </div>
  )
}

export default TariffsPage;