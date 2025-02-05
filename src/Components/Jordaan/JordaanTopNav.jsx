import SideButtons from "../SideButtons";
import {Header, HeaderNav, Menu, MobileMenu} from "../Header/Header";
import {Col, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

export const JordaanTopNav = (props) => {
  console.log('background: ', props);

  return <>
    <SideButtons/>
    {/* Header Start */}
    <Header topSpace={{md: true}} className={(props && props.background === 'white' ? 'bg-white' : '')} type="reverse-scroll">
      <HeaderNav theme="light" expand="lg"
                 className="spasalon-header py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0 border-b border-[#ffffff1a]"
                 fluid="fluid" containerClass="md:pr-0">
        <Col className="col-5 col-lg-2 ps-lg-0 me-auto me-lg-0 md:!px-0">
          <Link aria-label="header logo" className="flex items-center" to="/">
            <Navbar.Brand className="inline-block p-0 m-0">
              <img className="default-logo" width="163" height="36" loading="lazy"
                   src={`${process.env.PUBLIC_URL}/assets/img/webp/logo/logo-yellow-top.png`}
                   data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo'/>
              <img className="alt-logo" width="163" height="36" loading="lazy"
                   src={`${process.env.PUBLIC_URL}/assets/img/webp/logo/logo-white-top.png`}
                   data-rjs='/assets/img/webp/logo-gradient-tan-geraldine@2x.webp' alt='logo'/>
              <img className="mobile-logo" width="163" height="36" loading="lazy"
                   src={`${process.env.PUBLIC_URL}/assets/img/webp/logo/logo-white-top.png`}
                   data-rjs='/assets/img/webp/logo-gradient-tan-geraldine@2x.webp' alt='logo'/>
            </Navbar.Brand>
          </Link>
        </Col>
        <Menu className="justify-center col-auto col-lg-8 menu-order md-position-initial md:hidden" {...props} />
        <MobileMenu className="order-last d-lg-none" type="modern" {...props} />
        <Col className="col-auto text-right pr-0 col-lg-2 px-lg-0 md-no-padding md:!px-0">
        </Col>
      </HeaderNav>
    </Header>
    {/* Header End */}
  </>
}