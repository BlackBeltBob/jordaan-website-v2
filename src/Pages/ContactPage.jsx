import React from 'react'

// Components
import FooterStyle01 from '../Components/Footers/FooterStyle01';
import {JordaanTopNav} from "../Components/Jordaan/JordaanTopNav";
import {JordaanWhiteHeaderSection} from "../Components/Jordaan/JordaanWhiteHeaderSection";
import {JordaanContactForm} from "../Components/Jordaan/JordaanContactForm";
import GoogleMap from "../Components/GoogleMap/GoogleMap";
import Buttons from "../Components/Button/Buttons";
import {Col, Container, Row} from "react-bootstrap";
import {m} from "framer-motion";
import {fadeIn} from "../Functions/GlobalAnimations";

const textIntro = 'Contact';
const textIntroExt = 'Bel of WhatsApp ons direct';
const textIntroBody = 'Bij Mensendieck en Fysiotherapiepraktijk Jordaan geloven we in laagdrempelige, directe communicatie tussen behandelaar en cliënt. Wilt u op korte termijn in contact komen met onze therapeuten? Gebruik de knoppen hieronder om ons te bereiken.';
const textRouteHeader = 'Vind uw beste route naar de praktijk';
const textRouteIntro = 'De praktijk is gelegen in een hofje. U kunt het hofje binnenkomen door bij het groene hek aan te bellen bij nummer 238.';

const mapLocation = "https://www.google.com/maps?q=Westerstraat+238,+1015+MT+Amsterdam&output=embed";
const whatsappLink = "https://api.whatsapp.com/send?phone=31629430895";
const phoneLink = "tel:+31206235136";

const openingHours = [
  ['Maandag', '8:00 — 19:00'],
  ['Dinsdag', '8:00 — 19:00'],
  ['Woensdag', '8:30 — 19:30'],
  ['Donderdag', '8:00 — 19:00'],
  ['Vrijdag', '8:00 — 17:00'],
  ['Zaterdag', 'in overleg'],
  ['Zondag', 'in overleg'],
];

const routeSections = [
  {
    title: 'Bereikbaarheid OV',
    items: [
      'Op 2 minuten lopen is de dichtstbijzijnde halte Bus-/Tramhalte Marnixplein, waar stadsbussen 18 en 21, en tramlijnen 3 en 5 stoppen.',
      'Op ruim 8 minuten lopen is Bus-/Tramhalte Westermarkt, waar tramlijnen 13 en 17 stoppen.',
    ],
  },
  {
    title: 'Bereikbaarheid met auto',
    items: [
      'Er is parkeergelegenheid in de Westerstraat en de omliggende straten, maar het kan erg druk zijn. Op maandagen staat de markt er, waardoor parkeren niet mogelijk is.',
      'Het parkeertarief is € 7,50 per uur.',
    ],
  },
  {
    title: 'Bereikbaarheid per fiets',
    items: ['U kunt uw fiets veilig voor de deur plaatsen.'],
  },
];

const ContactPage = (props) => {
  return (
    <div style={props.style}>
      <JordaanTopNav />
      <JordaanWhiteHeaderSection header={textIntro} content={textIntroExt} />

      <section className="pb-[100px] md:pb-[75px] sm:pb-[50px]">
        <Container>
          <Row className="justify-center text-center text-jordaanText">
            <Col lg={7} md={9}>
              <m.p {...fadeIn} className="mb-[30px]">{textIntroBody}</m.p>
              <m.div {...{...fadeIn, transition: {delay: 0.2}}} className="flex justify-center gap-[15px] flex-wrap">
                <Buttons ariaLabel="WhatsApp ons" href={whatsappLink} target="_blank"
                         className="font-medium font-serif rounded-none uppercase"
                         themeColor="#25d366" color="#fff" size="lg" icon="fab fa-whatsapp" title="WhatsApp" />
                <Buttons ariaLabel="Bel ons" href={phoneLink}
                         className="font-medium font-serif rounded-none uppercase"
                         themeColor="#333045" color="#fff" size="lg" icon="fas fa-phone-alt" title="Bel ons nummer" />
              </m.div>
              <m.p {...{...fadeIn, transition: {delay: 0.3}}} className="mt-[30px] mb-0">
                Bent u een verwijzer of andere paramedische zorgaanbieder?{' '}
                <a href={`${process.env.PUBLIC_URL}/page/for-referrers`} className="underline">Klik dan hier.</a>
              </m.p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="relative py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-[#f7edee] overflow-hidden">
        <JordaanContactForm />
      </section>

      <section className="pt-[150px] pb-[150px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px] md:pb-[75px] sm:pb-[50px]">
        <Container>
          <Row className="text-jordaanText">
            <Col lg={5} md={6} className="md:mb-[40px]">
              <m.h2 {...fadeIn} className="heading-6 font-serif font-medium tracking-[-1px]">{textRouteHeader}</m.h2>
              <p className="mb-[30px]">{textRouteIntro}</p>
              {routeSections.map(section => (
                <div key={section.title} className="mb-[25px]">
                  <h3 className="font-serif font-medium text-xmd mb-[8px]">{section.title}</h3>
                  {section.items.map(item => <p key={item} className="mb-[8px]">{item}</p>)}
                </div>
              ))}
              <h3 className="font-serif font-medium text-xmd mt-[35px] mb-[8px]">Openingstijden</h3>
              <table className="mb-[10px]">
                <tbody>
                  {openingHours.map(([day, hours]) => (
                    <tr key={day}>
                      <td className="pr-[30px]">{day}</td>
                      <td>{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Buiten deze tijden en in het weekend in overleg.</p>
            </Col>
            <Col lg={{span: 6, offset: 1}} md={6}>
              <GoogleMap className="w-full h-[540px] sm:h-[400px]" location={mapLocation} />
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

export default ContactPage;
