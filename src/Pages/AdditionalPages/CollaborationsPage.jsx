import React from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { m } from "framer-motion"

// Components
import { fadeIn } from '../../Functions/GlobalAnimations';
import Team from '../../Components/Team/Team';
import FooterStyle01 from '../../Components/Footers/FooterStyle01';

// Data
import {JordaanTopNav} from "../../Components/Jordaan/JordaanTopNav";
import Services from "../../Components/Services/Services";



const serviceData = [
  {
    img: "https://www.ergotherapie-hartel.nl/wp-content/uploads/2015/08/11830106_1169967546352601_1640499594_n-e1623332264202.jpg",
    icon: "fas fa-arrow-right",
    title: "Ergotherapie Hartel",
    content:
      "Ergotherapie voor volwassenen en ouderen in Amsterdam Zuid en West",
    link: "https://www.ergotherapie-hartel.nl/",
  },
  {
    img: "https://static.wixstatic.com/media/5c2dcf_65ebe57429b940c0825644150ea7c6b5~mv2.jpg/v1/crop/x_0,y_674,w_7018,h_2953/fill/w_1872,h_788,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Robert_Kuizenga-HR-photo-Simon_van_Boxte.jpg",
    icon: "fas fa-arrow-right",
    title: "Robert Kuizinga",
    content:
      "Manueel therapeut, dry needling, echografie, en arbeidsfysiotherapie",
    link: "https://www.mindyourmotion.nl/",
  },
];

const CollaborationsPage = (props) => {

  const textCollaborationsHeader = 'Samenwerkingspartners';
  const textCollaborationsBody = 'Met deze partners werken wij samen';

  return (
    <div style={props.style}>
      <JordaanTopNav />


      {/* Section Start */}
      <section
        className="pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]">
        {/*<section className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1100)' }}>*/}
        <Container>
          <Row className="justify-center">
            <Col lg={7} sm={8} className="text-center mb-26 md:mb-12 xs:mb-16">
              <m.span className="inline-block font-serif text-jordaanText uppercase font-medium mb-[15px] tracking-[1px] xs:mb-[10px]">
                {textCollaborationsHeader}
              </m.span>
              <m.h2 className="heading-5 font-serif text-jordaanText font-medium tracking-[-1px]">
                {textCollaborationsBody}
              </m.h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}



      {/* Section Start */}
      <section
        className="pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]">
        {/*<section className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1100)' }}>*/}
        <Container>
          <Row className="justify-center">
            <Col lg={7} sm={8} className="text-center mb-26 md:mb-12 xs:mb-16">
              <Services
                grid="row-cols-1 row-cols-md-2 justify-center text-left gap-y-10 md:gap-y-[45px]"
                theme="service-style-01"
                data={serviceData}
                animation={fadeIn}
                animationDelay={0.5}
              />
            </Col>
          </Row>
        </Container>
      </section>



      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" />
      {/* Footer End */}


    </div>
  )
}

export default CollaborationsPage;