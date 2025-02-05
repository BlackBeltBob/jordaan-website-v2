import React from 'react'

// Libraries
import {Col, Container, Row} from "react-bootstrap";
import {m} from 'framer-motion'

// Components
import FooterStyle01 from '../Components/Footers/FooterStyle01';
import {JordaanTopNav} from "../Components/Jordaan/JordaanTopNav";
import {JordaanColoredSection, JordaanWhiteHeaderSection} from "../Components/Jordaan/JordaanWhiteHeaderSection";
import {fadeIn} from "../Functions/GlobalAnimations";





const ReviewsPremPage = (props) => {

  const textPremHeader = 'Inzicht in kwaliteit en doelmatigheid';
  const textPremContent = 'Wij gebruiken kwaliteitsonderzoeken om inzicht te houden op onze zorgkwaliteit en om deze te benchmarken.';
  const textPremWhyHeader = 'Waarom kwaliteitsonderzoeken?';
  const textPremWhySubtitle = 'Onze praktijk stelt hoge eisen aan de klanttevredenheid. Wij willen graag dat cliënten tevreden zijn. Een vast onderdeel aan het eind van het behandelproces is de vraag mee te werken aan een klanttevredenheidsonderzoek. Enerzijds is het van belang om de kwaliteit van onze behandelingen te verbeteren en anderzijds de toenemende noodzaak tot transparantie richting de zorgverzekeraars. Uw feedback betekent veel voor ons!';
  const textMottoExt = [
    'Wij gebruiken kwaliteitsonderzoeken om inzicht te houden op onze zorgkwaliteit en om deze te benchmarken.',
    'Onze kwaliteitsonderzoeken zijn een vast onderdeel van het behandeltraject en hebben als doel om laagdrempelig informatie te vergaren over hoe het behandeltraject verloopt, en wat eventuele verbeterpunten zijn.',
    'De onderzoeken verlopen te allen tijde anoniem en via een derde partij. De resultaten worden samengevoegd tot verschillende scores, die te vergelijken zijn met andere praktijken.',
  ];
  const textVideosHeader = 'Reviews 2022';


  return (
    <div style={props.style}>
      <JordaanTopNav />
      <JordaanWhiteHeaderSection header={textPremHeader} content={textPremContent} scrollTo='context' />
      <JordaanColoredSection id={'context'} header={textPremWhyHeader} content={textMottoExt} subheader={textPremWhySubtitle} scrollTo='context' variant='jordaanText' />

      <section id={props.id} className={`pt-[50px] pb-[150px] lg:pt-[30px] md:pt-[25px] sm:pt-[20px] md:pb-[75px] sm:pb-[50px] bg-white bg-cover bg-no-repeat relative bg-center`}>
        {/*<section className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1100)' }}>*/}
        <Container>
          <Row className="mt-36 md:mt-24 sm:mt-16">
            <Col lg={5} md={6}>
              <m.h2 className={`heading-5 font-serif font-medium leading-[46px] -tracking-[.5px] md:leading-[38px] text-jordaanText md:m-0 sm:leading-[36px] xs:mb-[15px]`} {...{
                ...fadeIn, transition: {delay: 0.2}}}>
                {textVideosHeader}
              </m.h2>
            </Col>
          </Row>
          <Row className='row-cols-2 justify-center sm:block'>
            <Col className="px-[15px] sm:w-full sm:mb-[30px]">
              <div className="fit-video">
                <iframe src="https://www.youtube.com/embed/7OnCY3QOh3w?mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Col>
            <Col className="px-[15px] sm:w-full sm:mb-[30px]">
              <div className="fit-video">
                <iframe src="https://www.youtube.com/embed/hOHo_yRn2NM?mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-darkgray text-[#7e7e7e]"/>
      {/* Footer End */}
    </div>
  )
}

export default ReviewsPremPage;