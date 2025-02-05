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



const ReferrersPage = (props) => {

  const textReferrersHeader = 'Informatie voor verwijzers';
  const textReferrersBody = 'Informatie voor verwijzers';
  const textReferrersContent = [
    'Mensendieck- en Fysiotherapiepraktijk Jordaan is laagdrempelig bereikbaar voor intercollegiaal overleg.',
    'Aarzel niet om tijdens kantooruren telefonisch contact met ons te leggen. Ook zijn wij eenvoudig bereikbaar via de app Siilo, en vindt u ons via Zorgdomein.',
    'Bent u een medisch specialist, huisarts, of paramedische zorgprofessional, dan heeft u mogelijk bepaalde informatie nodig om clienten te verwijzen. Hieronder vindt u deze informatie:',
  ]

  const tableItems = [
    {
      header: 'Praktijk AGB code',
      content: '07/087233',
    },
    {
      header: 'Siilo',
      content: '06 294 30 895',
    },
  ];

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
                {textReferrersHeader}
              </m.span>
              <m.h2 className="heading-5 font-serif text-jordaanText font-medium tracking-[-1px]">
                {textReferrersBody}
              </m.h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section RotateBox/Pakketten Start */}
      <section className="py-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] bg-jordaanYellow bg-cover bg-no-repeat relative bg-center">
        <Container>
          <Row className="mt-36 md:mt-24 sm:mt-16">
            <Col lg={5} md={6}>
              <m.h2
                className="heading-5 font-serif font-medium leading-[46px] -tracking-[.5px] md:leading-[38px]  text-jordaanText md:m-0 sm:leading-[36px] xs:mb-[15px]" {...{
                ...fadeIn, transition: {delay: 0.2}}}>
                {textReferrersContent[0]}
              </m.h2>
            </Col>
            <m.div md={6} className="col-lg-6 col-md-6 offset-lg-1" {...{...fadeIn, transition: {delay: 0.4}}}>
              <p className="w-[85%] lg:w-full mb-[20px] text-justify text-jordaanText">{textReferrersContent[1]}</p>

              <p className="w-[85%] lg:w-full mb-[20px] text-justify text-jordaanText">{textReferrersContent[2]}</p>
              <table className="text-jordaanText" style={{width: '100%'}}>
                {tableItems.map(r => {
                  return (<tr><td>{r.header}</td><td>{r.content}</td></tr>)
                })}
              </table>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}



      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" />
      {/* Footer End */}


    </div>
  )
}

export default ReferrersPage