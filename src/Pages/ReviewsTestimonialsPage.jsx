import React from 'react'

// Libraries
import {Col, Container, Row} from "react-bootstrap";
import {m} from 'framer-motion'

// Components
import FooterStyle01 from '../Components/Footers/FooterStyle01';
import {JordaanTopNav} from "../Components/Jordaan/JordaanTopNav";
import {JordaanWhiteHeaderSection} from "../Components/Jordaan/JordaanWhiteHeaderSection";
import {fadeIn} from "../Functions/GlobalAnimations";
import Testimonials from "../Components/Testimonials/Testimonials";
import Dropcaps from "../Components/Dropcaps/Dropcaps";



const TestimonialsData = [
  {
    name: "Merve",
    designation: "Ziekenhuisopname",
    content: "Na een lange ziekenhuisopname heeft Deborah mij overgenomen en mij uitstekend begeleid in een complex proces. Ze is erg kundig en doet haar werk met haar hart. Ik ben haar enorm dankbaar hiervoor!",
    img: "https://via.placeholder.com/359x359"
  },
  {
    name: "Jimi",
    designation: "Hernia",
    content: "Deborah geeft je de volledige aandacht en goede tips. Mijn hernia is helaas niet helemaal verdwenen, maar dat lag niet aan haar werkwijze. Ze deed alle moeite om me verder te helpen met een alternatieve behandeling elders.",
    img: "https://via.placeholder.com/359x359"
  },
  {
    name: "Deyanira",
    designation: "Verschillende klachten",
    content: "Hele fijne en lieve fysio/mensendieck. Deborah neemt rustig de tijd om te kijken naar de klachten, neemt tijd voor de behandeling en helpt nadenken over het herstel. Bijvoorbeeld door middel van tools en oefeningen. Ben voor verschillende klachten door Deborah geholpen.",
    img: "https://via.placeholder.com/359x359"
  }
]



const ReviewsTestimonialsPage = (props) => {

  const textPremHeader = 'Je hoeft ons woord er niet op te geloven';
  const textPremContent = 'Lees wat onze klanten zelf zeggen over de kwaliteit van onze zorg.';

  const textStory = [
    'Bij binnenkomst in Deborah\'s praktijk voelde ik de zwaarte van mijn ernstige rugklachten op mijn schouders drukken. Mijn gezichtsuitdrukking verried de langdurige pijn die mijn dagelijks leven en werkzaamheden ernstig beperkte. Deborah begroette me met een professionele glimlach en stelde me direct op mijn gemak. Met haar deskundigheid stelde ze een behandelplan op dat gericht was op mijn specifieke situatie.',
    'Gedurende het zorgtraject van een half jaar werkten we systematisch aan mijn herstel. Deborah integreerde fysieke oefeningen en emotionele ondersteuning in het behandelplan, wat cruciaal bleek voor mijn vooruitgang. Ik onderging diverse therapieën en leerde effectieve methoden om stress te verminderen, wat een positieve impact had op mijn algehele welzijn.',
    'Langzaam maar gestaag boekte ik progressie. Mijn rugklachten verminderden aanzienlijk, en ik herwon mijn zelfvertrouwen naarmate ik mijn fysieke mogelijkheden herontdekte. Deborah was een constante bron van aanmoediging en sturing gedurende het hele traject. Haar professionele benadering en geloof in mijn herstel droegen bij aan het succes van de behandeling.',
    'Bij de afronding van het zorgtraject voelde ik trots en dankbaarheid. Mijn rugklachten waren significant verminderd, en ik kon mijn werkzaamheden weer volledig oppakken. Het zakelijke en doelgerichte traject onder leiding van Deborah benadrukte niet alleen mijn persoonlijke vooruitgang, maar ook de effectiviteit van een goed gepland en uitgevoerd behandelplan.',
  ];

  return (
    <div style={props.style}>
      <JordaanTopNav />
      <JordaanWhiteHeaderSection header={textPremHeader} content={textPremContent} scrollTo='context' />

      {/* Section Start */}
      <section id="context" className="bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] border-t">
        <Container>
          <Row className="justify-center">
            <Col md={12} className="text-center mb-[6%]">
              <h6 className="font-serif text-darkgray font-medium">Tevreden klanten</h6>
            </Col>
          </Row>
          <Row className="justify-center">
            <Col xs={12} sm={8} md={12}>
              <Testimonials
                grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-[30px] justify-center"
                theme='testimonials-style-03'
                className="sm:px-0"
                data={TestimonialsData}
                animation={fadeIn}
                animationDelay={0.3} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Start */}

      {/* Section Start */}
      <m.section
        className="cover-background py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
        style={{
          backgroundImage:
            "url(/assets/img/webp/home-corporate-hand-crafted-bg.webp)",
        }}
        {...fadeIn}
      >
        <Container>
          <Row className="items-center justify-center pb-[250px]">
            <Col xs={10} lg={6}>
              <div className="relative">
                <img className="w-[70%]" alt="" src="https://via.placeholder.com/391x567" />
                <img className="flex justify-center items-center w-1/2 bg-no-repeat absolute bottom-[-100px] right-[15px] lg:!left-auto lg:!top-[250px] sm:!top-[100px]" width="341.25px" height="349.78px" alt="" src="https://via.placeholder.com/318x386" />
              </div>
            </Col>
            <Col xs={10} xl={{ span: 4 }} lg={{ span: 5, offset: 1 }} className="md:mt-[15%] xs:mt-[18%]">
              <m.h2 className="heading-4 mb-16 font-semibold -tracking-[1px] text-darkgray font-serif" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                Op weg naar vitaliteit, samen met ons
              </m.h2>
              <m.span className="mb-[5px] font-serif text-darkgray font-medium block" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                Een passend traject
              </m.span>
              <m.p className="mb-0 w-[85%]" {...{ ...fadeIn, transition: { delay: 0.5 } }}>
                Iedereen doorloopt een eigen zorgtraject. Niemand is hetzelfde, en dus wordt elk zorgtraject afgestemd op het individue.
              </m.p>
              <m.span className="h-[1px] my-12 bg-mediumgray w-full block sm:my-6" {...{ ...fadeIn, transition: { delay: 0.6 } }}></m.span>
              <m.span className="mb-[5px] font-serif text-darkgray font-medium block" {...{ ...fadeIn, transition: { delay: 0.7 } }}>
                Het verhaal van Pietje
              </m.span>
              <m.p className="mb-0 w-[85%]" {...{ ...fadeIn, transition: { delay: 0.8 } }}>
                Hieronder leest u het verhaal van Pietje, die bij gebroken bij ons binnen kwam. Een verhaal over veerkracht en volhardendheid.
              </m.p>
            </Col>
          </Row>
          <Row className="items-top">
            <Col xs={10} lg={6}>
              <Row className="items-center justify-center"><Col className="pb-8 px-8"><Dropcaps theme="dropcaps-style02" content={textStory[0]} /></Col></Row>
              <Row className="items-center justify-center"><Col className="pb-8 px-8"><p>{textStory[1]}</p></Col></Row>
            </Col>
            <Col xs={10} lg={6}>
              <Row className="items-center justify-center"><Col className="pb-8 px-8"><p>{textStory[2]}</p></Col></Row>
              <Row className="items-center justify-center"><Col className="pb-8 px-8"><p>{textStory[3]}</p></Col></Row>
            </Col>
          </Row>

        </Container>
      </m.section>
      {/* Section End */}

      <FooterStyle01 theme="dark" className="bg-darkgray text-[#7e7e7e]"/>
      {/* Footer End */}
    </div>
  )
}

export default ReviewsTestimonialsPage;