import React from 'react'

// Components
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import {JordaanTopNav} from "../../Components/Jordaan/JordaanTopNav";
import {JordaanColoredSection, JordaanWhiteHeaderSection} from "../../Components/Jordaan/JordaanWhiteHeaderSection";
import {Col, Container, Row} from "react-bootstrap";
import {m} from "framer-motion";
import {fadeIn} from "../../Functions/GlobalAnimations";
import Lists from "../../Components/Lists/Lists";

const bioParagraphs1 = [
  'Deborah Pos, ik ben sinds 2008 Oefentherapeut Mensendieck en sinds 2009 Fysiotherapeut. Mijn passie voor het menselijk lichaam en mijn brede kennis van beide disciplines, gecombineerd met specialisaties binnen de Fysiotherapie en Oefentherapie Mensendieck, stellen mij in staat om de sterke kanten van beide te combineren en te komen tot een effectief en efficiënt behandelplan.',
  'Door mijn ervaring in verschillende werkvelden, waaronder particuliere praktijk, revalidatie, verzorgingshuis, verpleeghuis en ziekenhuis, heb ik veel geleerd over het verbeteren van de kwaliteit van leven van mijn cliënten.',
  'Voor mij is het belangrijkste aspect van mijn werk het verbeteren van het welzijn en welbevinden van mijn cliënten. Ik ben dan ook zeer betrokken en bied behandelingen aan die afgestemd zijn op de individuele wensen en behoeften van mijn cliënten.',
]

const bioParagraphs2 = [
  'Sinds 2011 ben ik praktijkhouder van een bloeiende praktijk in de Jordaan, waar ik ontzettend trots op ben. Naast mijn rol als praktijkhouder ben ik ook enige tijd bestuurslid geweest bij de VvOCM, de beroepsvereniging voor oefentherapeuten Cesar en Mensendieck: het opkomen voor de belangen van zowel cliënten als therapeuten, en actief bijdragen aan de verbetering en vooruitgang van ons vakgebied. Als beroepsgroep staan we voor verschillende uitdagingen en kansen, gezien de voortdurende ontwikkelingen binnen de gezondheidszorg. Daarnaast ben ik betrokken geweest bij de ontwikkeling van de Paramedische richtlijn Kwetsbare ouderen.',
  'Ik begeleid studenten van de Hogeschool van Amsterdam/Utrecht, zowel Fysiotherapie- als Oefentherapiestudenten.',
  'Tijdens mijn studie heb ik voor de vrijwilligersorganisatie Somoi trainingsprogramma\'s en naslagwerken ontwikkeld voor gehandicapte (wees)kinderen in Indonesië, en heb ik enige tijd op de revalidatieafdeling met de kinderen doorgebracht om mijn kennis in de praktijk toe te passen.',
]

const specialisatiesList = [
  {icon: "fas fa-check", content: "Oefentherapeut Mensendieck"},
  {icon: "fas fa-check", content: "Fysiotherapeut"},
  {icon: "fas fa-check", content: "Geriatrie (ouderen) oefentherapeut"},
  {icon: "fas fa-check", content: "Slaapoefentherapeut volwassenen en kinderen"},
  {icon: "fas fa-check", content: "Neurologische aandoeningen, samenwerking met UMC Amsterdam en OLVG Amsterdam"},
  {icon: "fas fa-check", content: "Spierziekten, samenwerking met UMC Amsterdam"},
  {icon: "fas fa-check", content: "Chronische pijn"},
  {icon: "fas fa-check", content: "Revalidatie na operatie"},
  {icon: "fas fa-check", content: "Astma/COPD"},
  {icon: "fas fa-check", content: "Katalepsie en hypnose"},
  {icon: "fas fa-check", content: "Post intensive care syndroom"},
  {icon: "fas fa-check", content: "Palliatieve fysiotherapie"},
  {icon: "fas fa-check", content: "Hypermobiliteit en Ehlers-Danlos"},
]

const networksList = [
  {icon: "fas fa-check", content: "Slaapoefentherapie Netwerk"},
  {icon: "fas fa-check", content: "Neuronet Groot Amsterdam"},
  {icon: "fas fa-check", content: "FNS netwerk"},
  {icon: "fas fa-check", content: "ParkinsonNet"},
  {icon: "fas fa-check", content: "Osteoporose Netwerk"},
  {icon: "fas fa-check", content: "Duizeligheidsnetwerk"},
  {icon: "fas fa-check", content: "Chronische Pijn netwerk"},
  {icon: "fas fa-check", content: "Bugnet"},
  {icon: "fas fa-check", content: "PICS netwerk"},
]

const DeborahBioPage = (props) => {
  const textIntro = 'Deborah Pos';
  const textIntroExt = 'Oefentherapeut Mensendieck en Fysiotherapeut, praktijkhouder sinds 2011';

  return (
    <div style={props.style}>
      <JordaanTopNav />
      <JordaanWhiteHeaderSection header={textIntro} content={textIntroExt} />

      <JordaanColoredSection id="over-deborah" header="Over Deborah" content={bioParagraphs1} />
      <JordaanColoredSection id="praktijkhouder" variant="jordaanYellow" header="Praktijkhouder en betrokken bij het vak" content={bioParagraphs2} />

      <section className="pt-[150px] pb-[80px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px]">
        <Container>
          <Row className="justify-center text-jordaanText font-serif">
            <Col lg={8}>
              <m.h2 className="heading-6 font-medium tracking-[-1px] mb-8" {...fadeIn}>
                Specialisaties
              </m.h2>
              <Lists theme="list-style-02" data={specialisatiesList} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-[80px] pb-[150px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px]">
        <Container>
          <Row className="justify-center text-jordaanText font-serif">
            <Col lg={8}>
              <m.h2 className="heading-6 font-medium tracking-[-1px] mb-8" {...fadeIn}>
                Aangesloten bij
              </m.h2>
              <Lists theme="list-style-02" data={networksList} />
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

export default DeborahBioPage
