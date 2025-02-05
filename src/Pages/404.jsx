import React, { lazy } from "react";

// Libraries
import { Col, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { m } from "framer-motion";

// Components
import Header, {
  HeaderCart,
  HeaderLanguage,
  HeaderNav,
  Menu,
  SearchBar,
} from "../Components/Header/Header";
import Buttons from '../Components/Button/Buttons'
import FooterStyle01 from "../Components/Footers/FooterStyle01";
import { fadeIn } from "../Functions/GlobalAnimations";
import {JordaanTopNav} from "../Components/Jordaan/JordaanTopNav";
const SideButtons = lazy(() => import("../Components/SideButtons"))

const NotFoundPage = (props) => {
  return (
    <div style={props.style}>
      <JordaanTopNav/>
      {/* Section Start */}
      <section
        className="cover-background overflow-hidden flex items-center justify-center p-0"
        style={{ backgroundImage: `url("/assets/img/webp/404-bg.webp")` }}
      >
        <Container>
          <m.div className="row items-stretch full-screen justify-center" {...fadeIn}>
            <Col xl={6} lg={7} md={8} className="col-12 text-center flex items-center justify-center flex-col" >
              <h6 className="font-serif text-jordaanText -tracking-[1px] mb-[10px] uppercase">
                Uhm, hier hoor je niet te zijn!
              </h6>
              <h1 className="font-serif text-[230px] leading-[230px] font-bold tracking-[-5px] text-darkgray mb-24 lg:text-[170px] lg:leading-[170px] md:text-[130px] md:leading-[130px] md:mb-16 sm:text-[100px] sm:leading-[100px] xs:text-[55px] xs:leading-[55px] xl:text-[200px] xl:leading-[200px]">
                404
              </h1>
              <span className="font-serif font-medium text-darkgray block mb-[20px]">
                Deze pagina kon niet gevonden worden.
              </span>
              <Buttons className="font-medium font-serif uppercase" to="/" themeColor={["#ff0", "#fd0"]} size="lg" color="#000" title="Terug naar af" />
            </Col>
          </m.div>
        </Container>
      </section>
      {/* Section End */}

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
      {/* Footer End */}
    </div>
  );
};

export default NotFoundPage;
