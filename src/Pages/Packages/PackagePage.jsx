import React from 'react'

// Libraries
import {Col, Container, Row} from "react-bootstrap";
import {m} from "framer-motion";

// Components
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import {JordaanTopNav} from "../../Components/Jordaan/JordaanTopNav";
import {JordaanWhiteHeaderSection} from "../../Components/Jordaan/JordaanWhiteHeaderSection";
import Buttons from "../../Components/Button/Buttons";
import Lists from "../../Components/Lists/Lists";
import {fadeIn} from "../../Functions/GlobalAnimations";

// Shared layout for the fixed-price treatment packages (see PackagesData.jsx).
const PackagePage = ({style, data}) => {
  const contentsList = data.contents.map(content => ({icon: "fas fa-check", content}));

  return (
    <div style={style}>
      <JordaanTopNav />
      <JordaanWhiteHeaderSection header={data.header} content={data.intro} />

      <section className="pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] md:pb-[75px] sm:pb-[50px] bg-jordaanText bg-cover bg-no-repeat relative bg-center">
        <Container>
          <Row className="mt-36 md:mt-24 sm:mt-16">
            <Col lg={5} md={6}>
              <m.h2 className="heading-5 font-serif font-medium leading-[46px] -tracking-[.5px] md:leading-[38px] text-white md:m-0 sm:leading-[36px] xs:mb-[15px]" {...{
                ...fadeIn, transition: {delay: 0.2}}}>
                {data.question}
              </m.h2>
              <p className="text-white mb-[20px]">{data.description}</p>
              <p className="text-white mb-[20px]">{data.about}</p>
            </Col>
            <m.div md={6} className="col-lg-6 col-md-6 offset-lg-1" {...{...fadeIn, transition: {delay: 0.4}}}>
              <p className="w-[85%] lg:w-full mb-[20px] text-white">Dit zit in het pakket</p>
              <Lists theme="list-style-02" className="text-white" data={contentsList} />
            </m.div>
          </Row>
        </Container>
      </section>

      <section className="pt-[100px] pb-[100px] md:pt-[75px] md:pb-[75px] sm:pt-[50px] sm:pb-[50px] bg-jordaanYellow">
        <Container>
          <Row className="justify-center items-center text-jordaanText font-serif text-center">
            <Col lg={6}>
              <m.span {...fadeIn} className="block uppercase font-medium tracking-[1px] mb-[5px]">Kosten</m.span>
              <m.h2 {...fadeIn} className="heading-4 font-medium tracking-[-1px] mb-[25px]">€ {data.price}</m.h2>
              <Buttons ariaLabel="Maak een afspraak" to="/page/contact-form"
                       className="font-medium font-serif rounded-none uppercase"
                       themeColor="#333045" color="#fff" size="lg" title="Maak een afspraak" />
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

export default PackagePage;
