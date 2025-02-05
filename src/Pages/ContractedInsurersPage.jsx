import React from 'react'

// Components
import FooterStyle01 from '../Components/Footers/FooterStyle01';
import {JordaanTopNav} from "../Components/Jordaan/JordaanTopNav";
import {
  JordaanFAQSection,
  JordaanWhiteHeaderSection
} from "../Components/Jordaan/JordaanWhiteHeaderSection";


const textIntro = 'Contracten Zorgverzekeraars';
const textIntroExt = 'Mensendieck en Fysiotherapiepraktijk Jordaan is gecontracteerd bij alle zorgverzekeraars';

const FrequentlyAskedQuestionData = [
  {
    title: "Als jullie gecontracteerd zijn, worden dan ook alle behandelingen vergoed?",
    content: "Nee, hoeveel behandelingen vergoed worden is onder andere afhankelijk van je polisvoorwaarden, en hoeveel behandelingen je eerder dit jaar al vergoed hebt gekregen. Neem contact op met je verzekeraar om op te vragen wat jouw saldo is."
  },
  {
    title: "Kan ik volgend jaar gewoon van verzekeraar wisselen als ik nu al een behandeltraject start?",
    content: "Dat kan zeker, en je kunt ook van verzekerpakket wisselen. Zo kun je een aanvullender pakket afsluiten, of juist terugstappen als je klachten onder controle zijn."
  },
]

const ContractedInsurersPage = (props) => {

  return (
    <div style={props.style}>
      <JordaanTopNav />
      <JordaanWhiteHeaderSection header={textIntro} content={textIntroExt} scrollTo="faq" />
      <JordaanFAQSection data={FrequentlyAskedQuestionData} />


      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-darkgray text-[#7e7e7e]"/>
      {/* Footer End */}
    </div>
  )
}

export default ContractedInsurersPage;