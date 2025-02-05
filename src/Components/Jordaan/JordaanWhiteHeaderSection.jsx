import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {m} from "framer-motion";
import {Link as ScrollTo} from "react-scroll";
import {fadeIn} from "../../Functions/GlobalAnimations";
import Accordions from "../Accordion/Accordion";

export const JordaanWhiteHeaderSection = (props) => {

  return <>
    <section className="pt-[250px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-fill  md:pb-[75px] sm:pb-[50px]">
      {/*<section className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1100)' }}>*/}
      <Container>
        <Row className="justify-center relative">
          <Col lg={7} sm={8} className="text-center mb-26 md:mb-12 xs:mb-16">
            <m.span className="inline-block font-serif text-jordaanText uppercase font-medium mb-[15px] tracking-[1px] xs:mb-[10px]">
              {props.header}
            </m.span>
            <m.h2 className="heading-5 font-serif text-jordaanText font-medium tracking-[-1px]">
              {props.content}
            </m.h2>
          </Col>
          {props.scrollTo &&
            <ScrollTo to={props.scrollTo} offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[-100px] left-1/2 w-auto inline-block p-0 -translate-x-1/2 sm:bottom-7 xs:bottom-[4.5rem] cursor-pointer">
              <i className="ti-arrow-down text-lg leading-[1] text-white bg-[#000000b3] p-[15px] xs:p-[10px] rounded-full flex justify-center items-center"></i>
            </ScrollTo>
          }

        </Row>
      </Container>
    </section>
  </>
}



export const JordaanColoredSection = (props) => {
  let bgColor = 'bg-white';
  let textColor = 'text-jordaanText';

  if (props.variant === 'jordaanYellow') {
    bgColor = 'bg-jordaanYellow';
    textColor = 'text-jordaanText';
  } else if (props.variant === 'jordaanText') {
    bgColor = 'bg-jordaanText';
    textColor = 'text-white';
  }


  return <>
    <section id={props.id} className={`pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] md:pb-[75px] sm:pb-[50px] ${bgColor} bg-cover bg-no-repeat relative bg-center`}>
      {/*<section className="pt-[130px] pb-[350px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1100)' }}>*/}
      <Container>
        <Row className="mt-36 md:mt-24 sm:mt-16">
          <Col lg={5} md={6}>
            <m.h2 className={`heading-5 font-serif font-medium leading-[46px] -tracking-[.5px] md:leading-[38px] ${textColor} md:m-0 sm:leading-[36px] xs:mb-[15px]`} {...{
              ...fadeIn, transition: {delay: 0.2}}}>
              {props.header}
            </m.h2>
            {props.subheader && <p className={`${textColor} mb-[20px]`}>{props.subheader}</p>}
            {props.quote &&  <p className={`${textColor} mb-[20px]`}>{props.quote}</p>}

          </Col>
          {props.content &&
            <m.div md={6} className="col-lg-6 col-md-6 offset-lg-1" {...{...fadeIn, transition: {delay: 0.4}}}>
              {props.content.map(s => <p className={`w-[85%] lg:w-full mb-[20px] ${textColor}`}>{s}</p> )}
            </m.div>
          }
        </Row>
      </Container>
    </section>
  </>
}


export const JordaanFAQSection = (props) => {
  const textFAQHeader = "Veelgestelde vragen";

  return (
  <section id="faq" className="pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] cover-background md:pb-[75px] sm:pb-[50px]">
    <Container>
      <Row className="justify-center text-jordaanText font-serif">
        <Col>
          <h6 className="font-serif text-jordaanText font-medium mb-[5%]">{textFAQHeader}</h6>
          <Accordions
            theme="accordion-style-02"
            className="font-serif text-jordaanText"
            themeColor="light"
            data={props.data}
          />
        </Col>
      </Row>
    </Container>
  </section>);


}