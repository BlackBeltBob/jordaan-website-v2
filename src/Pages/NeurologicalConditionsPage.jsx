import React from 'react'

// Components
import FooterStyle01 from '../Components/Footers/FooterStyle01';
import {JordaanTopNav} from "../Components/Jordaan/JordaanTopNav";
import {JordaanWhiteHeaderSection} from "../Components/Jordaan/JordaanWhiteHeaderSection";
import {Col, Container, Row} from "react-bootstrap";
import Accordions from "../Components/Accordion/Accordion";

const ConditionBody = ({intro, symptoms, role}) => (
  <>
    <p className="mb-[20px]">{intro}</p>
    <span className="font-medium block mb-[10px]">Kenmerkende symptomen</span>
    <ul className="mb-[20px] pl-[20px] list-disc">
      {symptoms.map((symptom, i) => <li key={i} className="mb-[5px]">{symptom}</li>)}
    </ul>
    <span className="font-medium block mb-[10px]">Rol van Oefentherapie Mensendieck en Fysiotherapie</span>
    <p>{role}</p>
  </>
)

const neurologicalConditionsData = [
  {
    title: 'De ziekte van Parkinson en Parkinsonismen',
    content: <ConditionBody
      intro="Parkinson en Parkinsonisme verwijzen naar neurologische aandoeningen die het centrale zenuwstelsel aantasten, met name de controle over bewegingen. Parkinsonisme is een bredere term die verschillende aandoeningen omvat die vergelijkbare symptomen delen met de ziekte van Parkinson."
      symptoms={[
        'Trillen (tremoren): onwillekeurige schuddende bewegingen, meestal in rust.',
        'Spierstijfheid: stijfheid van spieren, wat de beweging kan beperken.',
        'Trage bewegingen (bradykinesie): verminderde snelheid en moeite bij het starten en uitvoeren van bewegingen.',
        'Houdingsinstabiliteit: moeite om het evenwicht te bewaren en risico op vallen.',
      ]}
      role="Oefentherapie en fysiotherapie spelen een cruciale rol bij het beheersen van symptomen en het bevorderen van functionele onafhankelijkheid. Specifieke oefeningen richten zich op bijvoorbeeld het verbeteren van mobiliteit, spierkracht en balans/evenwicht, het verminderen van spierstijfheid en het bevorderen van een betere lichaamshouding. Ook ontspannings- en ademhalingsoefeningen kunnen onderdeel zijn van de behandeling. Door individueel afgestemde behandelplannen helpen onze therapeuten bij het behouden van een actieve levensstijl en het optimaliseren van dagelijkse bewegingen en activiteiten."
    />
  },
  {
    title: 'Spierziekten, waaronder ALS',
    content: <ConditionBody
      intro="Amyotrofe Laterale Sclerose (ALS) is een progressieve neurologische aandoening die de zenuwcellen in de hersenen en het ruggenmerg aantast. ALS leidt tot afname van spiercontrole en uiteindelijk tot verlamming. Hoewel de oorzaak niet volledig begrepen is, resulteert het in het niet goed functioneren van de motorische zenuwcellen die de spieren aansturen."
      symptoms={[
        'Spierzwakte: geleidelijke afname van kracht in armen, benen en spraakspieren.',
        'Spieratrofie: verlies van spiermassa door het niet goed functioneren van de zenuwcellen.',
        'Moeite met spreken en slikken.',
        'Ademhalingsmoeilijkheden: in latere stadia kunnen ademhalingsproblemen optreden.',
      ]}
      role="Oefentherapie en fysiotherapie spelen een belangrijke rol bij het verbeteren van de kwaliteit van leven voor mensen met ALS. Hoewel de ziekte progressief is en momenteel niet te genezen, kunnen gerichte oefeningen helpen bij het behouden van spierfunctie, het verbeteren van de mobiliteit en het minimaliseren van complicaties zoals contracturen."
    />
  },
  {
    title: 'Multiple Sclerose (MS)',
    content: <ConditionBody
      intro="Multiple Sclerose (MS) is een chronische neurologische aandoening waarbij het immuunsysteem de beschermende bekleding rond zenuwvezels, genaamd myeline, aanvalt en beschadigt. Deze beschadigingen kunnen littekenweefsel (sclerose) veroorzaken, waardoor de communicatie tussen de hersenen en de rest van het lichaam wordt verstoord."
      symptoms={[
        'Vermoeidheid: ernstige vermoeidheid is een veelvoorkomend symptoom.',
        'Motorische problemen: waaronder spierzwakte, coördinatieproblemen en moeilijkheden met balans.',
        'Sensorische stoornissen: verminderd gevoel, tintelingen en pijn kunnen voorkomen.',
        'Problemen met zicht: waaronder wazig zicht, dubbelzien of verlies van gezichtsvermogen.',
      ]}
      role="Oefentherapie en fysiotherapie zijn waardevolle benaderingen bij het beheer van MS-symptomen. Gerichte oefeningen richten zich op het verbeteren van de spierkracht, balans en coördinatie, evenals het behouden van mobiliteit. Het aanpassen van oefenprogramma's aan individuele behoeften helpt bij het omgaan met dagelijkse uitdagingen en het behouden van een actieve levensstijl."
    />
  },
  {
    title: 'Functionele Neurologische Stoornissen (FNS)',
    content: <ConditionBody
      intro="Functionele Neurologische Stoornis (FNS) is een aandoening waarbij patiënten neurologische symptomen ervaren zonder aanwijsbare organische oorzaak. Het betreft een verstoring in de werking van het zenuwstelsel, waarbij de symptomen vaak variabel en niet consistent zijn."
      symptoms={[
        'Motorische stoornissen: bijvoorbeeld onwillekeurige bewegingen, zwakte of coördinatieproblemen.',
        'Sensorische stoornissen: bijvoorbeeld pijn, gevoelloosheid of tintelingen zonder duidelijke oorzaak.',
        'Conversiestoornissen: symptomen die lijken op neurologische aandoeningen, maar zonder herleidbare organische oorzaak.',
      ]}
      role="Oefentherapie en fysiotherapie spelen een cruciale rol bij het benaderen van FNS. Gerichte oefeningen, cognitieve benaderingen en het aanpakken van stressoren kunnen helpen bij het verminderen van symptomen en het bevorderen van functioneel herstel. Een individuele benadering, waarbij de therapeut samenwerkt met de patiënt om specifieke behoeften te begrijpen, is essentieel. Ook hypnose en katalepsie kunnen onderdeel zijn van de behandeling."
    />
  },
  {
    title: 'Duizeligheidsklachten, waaronder draaiduizeligheid (BPPD)',
    content: <ConditionBody
      intro="BPPD is een veelvoorkomende vorm van duizeligheid die wordt veroorzaakt door kleine kristallen in het binnenoor die losraken en terechtkomen in de halfcirkelvormige kanalen. Deze kristallen verstoren het normale vloeistofpatroon in het binnenoor, wat leidt tot kortdurende aanvallen van duizeligheid bij bepaalde hoofdbewegingen."
      symptoms={[
        'Korte aanvallen van duizeligheid: vaak getriggerd door specifieke hoofdbewegingen, zoals omdraaien in bed.',
        'Lichtheid in het hoofd: gevoel van draaierigheid of instabiliteit.',
        'Misselijkheid: kan optreden tijdens duizeligheidsaanvallen, maar is meestal mild.',
      ]}
      role="Oefentherapie en fysiotherapie kunnen effectieve behandelingen zijn voor BPPD. Specifieke manoeuvres, zoals de Epley-manoeuvre, worden gebruikt om de losgeraakte kristallen terug te brengen naar een positie waar ze geen duizeligheid veroorzaken. Daarnaast kunnen oefeningen gericht op balans en coördinatie helpen bij het verminderen van duizeligheid en het verbeteren van het evenwicht."
    />
  },
  {
    title: 'Beroerte (CVA)',
    content: <ConditionBody
      intro="Een CVA, of beroerte, treedt op wanneer de bloedtoevoer naar een deel van de hersenen wordt onderbroken, meestal als gevolg van een bloedstolsel of een gescheurd bloedvat. Dit kan leiden tot beschadiging van hersenweefsel en kan verschillende motorische en cognitieve functies beïnvloeden, afhankelijk van het getroffen gebied."
      symptoms={[
        'Verlamming of zwakte: meestal aan één kant van het lichaam.',
        'Problemen met spraak en taal: moeite met spreken, begrijpen of het vormen van zinnen.',
        'Coördinatieproblemen: verminderde balans en moeite met coördinatie.',
        'Cognitieve veranderingen: variërend van geheugenproblemen tot concentratiestoornissen.',
      ]}
      role="Oefentherapie en fysiotherapie zijn essentiële onderdelen van de revalidatie na een CVA. Gerichte oefeningen richten zich op bijvoorbeeld het verbeteren van spierkracht, mobiliteit, evenwicht, conditie, coördinatie en dagelijkse activiteiten. Behandeling kan zich ook richten op het gebruik van hulpmiddelen. Deze therapieën dragen bij aan het maximaliseren van herstel en het bevorderen van zelfstandigheid."
    />
  },
  {
    title: 'Hernia nek en lage rug en andere zenuwklachten',
    content: <ConditionBody
      intro="Een hernia in de nek of lage rug treedt op wanneer een tussenwervelschijf uitpuilt en druk uitoefent op de omliggende zenuwen. Dit kan leiden tot pijn, gevoelloosheid en zwakte in de armen of benen, afhankelijk van de locatie van de hernia."
      symptoms={[
        'Pijn: vaak scherpe pijn in de nek of onderrug.',
        'Gevoelloosheid en tintelingen: in de armen, handen, benen of voeten.',
        'Spierzwakte: verminderde kracht in de aangedane ledematen.',
        'Mogelijk uitstralende pijn: naar de schouders, armen, billen of benen.',
      ]}
      role="Oefentherapie en fysiotherapie spelen een cruciale rol bij het beheer van een hernia in de nek of lage rug. Gerichte oefeningen richten zich op het versterken van de spieren rondom de wervelkolom, het verbeteren van de houding en het vergroten van de flexibiliteit. Deze aanpak kan de druk op de tussenwervelschijven verminderen en bijdragen aan pijnverlichting."
    />
  },
]

const NeurologicalConditionsPage = (props) => {
  const textIntro = 'Neurologische klachten';
  const textIntroExt = 'Gerichte begeleiding bij neurologische aandoeningen';

  return (
    <div style={props.style}>
      <JordaanTopNav />
      <JordaanWhiteHeaderSection header={textIntro} content={textIntroExt} />

      <section className="pt-[80px] pb-[150px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px]">
        <Container>
          <Row className="justify-center">
            <Col lg={9}>
              <p className="text-jordaanText font-serif mb-[40px] text-center">Bij Mensendieck & Fysiotherapiepraktijk Jordaan begeleiden wij cliënten met uiteenlopende neurologische klachten. Hieronder lees je meer over de aandoeningen waar wij ervaring mee hebben, en welke rol oefentherapie en fysiotherapie daarbij kunnen spelen.</p>
              <Accordions
                theme="accordion-style-02"
                className="font-serif text-jordaanText"
                themeColor="light"
                data={neurologicalConditionsData}
              />
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

export default NeurologicalConditionsPage;
