import React from 'react'

// Libraries
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {m} from 'framer-motion'

// Components
import Buttons from '../Components/Button/Buttons'
import {Header, HeaderNav, Menu, MobileMenu, SearchBar,} from "../Components/Header/Header";
import Overlap from '../Components/Overlap/Overlap';
import FooterStyle01 from '../Components/Footers/FooterStyle01';
import SideButtons from "../Components/SideButtons";
import {fadeIn} from '../Functions/GlobalAnimations';
import FancyTextBox from "../Components/FancyTextBox/FancyTextBox";


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


const TariffsPage = (props) => {

  return (
    <div style={props.style}>
      <SideButtons/>
      {/* Header Start */}
      <Header topSpace={{md: true}} type="reverse-scroll">
        <HeaderNav theme="light" expand="lg"
                   className="spasalon-header py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0 border-b border-[#ffffff1a]"
                   fluid="fluid" containerClass="md:pr-0">
          <Col className="col-5 col-lg-2 ps-lg-0 me-auto me-lg-0 md:!px-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="163" height="36" loading="lazy"
                     src={`${process.env.PUBLIC_URL}/assets/img/webp/logo/logo-white-top.png`}
                     data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo'/>
                <img className="alt-logo" width="163" height="36" loading="lazy"
                     src={`${process.env.PUBLIC_URL}/assets/img/webp/logo/logo-white-top.png`}
                     data-rjs='/assets/img/webp/logo-white-top@2x.webp' alt='logo'/>
                <img className="mobile-logo" width="163" height="36" loading="lazy"
                     src={`${process.env.PUBLIC_URL}/assets/img/webp/logo/logo-white-top.png`}
                     data-rjs='/assets/img/webp/logo-white-top@2x.webp' alt='logo'/>
              </Navbar.Brand>
            </Link>
          </Col>
          <Menu className="justify-center col-auto col-lg-8 menu-order md-position-initial md:hidden" {...props} />
          <MobileMenu className="order-last d-lg-none" type="modern" {...props} />
          <Col className="col-auto text-right pr-0 col-lg-2 px-lg-0 md-no-padding md:!px-0">
            <SearchBar className="font-bold"/>
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}



      {/* Section Start */}
      <section
        className="pt-[350px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]">
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
          </Row>
          {/*<IconWithText grid="row-cols-1 row-cols-lg-4 row-cols-sm-2 text-center" theme="icon-with-text-03"*/}
          {/*              data={IconWithTextData} animation={fadeIn} animationDelay={0.3}/>*/}
        </Container>
      </section>
      {/* Section End */}

      <section className="pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] bg-jordaanYellow bg-cover bg-no-repeat relative bg-center">
               {/*style={{backgroundImage: 'url(https://via.placeholder.com/1920x625)'}}>*/}
        <Container>
          <Row className="justify-center">
            <Overlap className="col-12 col-md-12 col-sm-8 md:mt-[75px]">
              {/*<RotateBox grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center" animation={fadeIn}*/}
              {/*           animationDelay={0.2} data={RotateBoxData}/>*/}
            </Overlap>
          </Row>
        </Container>
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

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-darkgray text-[#7e7e7e]"/>
      {/* Footer End */}
    </div>
  )
}

export default TariffsPage;