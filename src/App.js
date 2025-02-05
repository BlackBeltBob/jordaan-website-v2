import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import retina from "retinajs";
import { AnimatePresence } from "framer-motion";

// Context
import GlobalContext from "./Context/Context";

// Components
import ScrollToTopButton from "./Components/ScrollToTop"

// Landing
const LandingPage = lazy(() => import("./Pages/Home/Landing"))
const RugklachtenPage = lazy(() => import("./Pages/Packages/RugklachtenPage"))
const TeamPage = lazy(() => import('./Pages/AdditionalPages/OurTeamPage'))
const ReferrersPage = lazy(() => import('./Pages/AdditionalPages/ReferrersPage'))
const TariffsPage = lazy(() => import('./Pages/TariffsPage'))
const ChronicTreatmentsPage = lazy(() => import('./Pages/ChronicTreatmentsPage'))
const ReviewsPremPage = lazy(() => import('./Pages/ReviewsPremPage'))
const ReviewsTestimonialsPage = lazy(() => import('./Pages/ReviewsTestimonialsPage'))
const ContractedInsurersPage = lazy(() => import('./Pages/ContractedInsurersPage'))
const MissionStatementPage = lazy(() => import('./Pages/About/MissionStatementPage'))
const CollaborationsPage = lazy(() => import('./Pages/AdditionalPages/CollaborationsPage'))
const GeneralTreatmentsPage = lazy(() => import('./Pages/GeneralTreatmentsPage'))
const HypnotherapyPage = lazy(() => import('./Pages/HypnotherapyPage'))
const MovementGroupsPage = lazy(() => import('./Pages/MovementGroupsPage'))
const NotFoundPage = lazy(() => import("./Pages/404"))


function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false
  })
  const location = useLocation();

  // RetinaJS
  useEffect(() => {
    window.addEventListener('load', retina(document.querySelectorAll('img')));
  }, [])


  useEffect(() => {
    setTimeout(() => {
      import("./Functions/Utilities").then(module => {
        module.SetHeaderMenuPos()
        module.setDocumentFullHeight()
      })
    }, 1000);
  }, [location])

  useEffect(() => {
    if (isModalOpen === true) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  // Get the current location and set the window to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setFooterHeight(0);
    setCustomModal({
      ...customModal,
      el: null,
      isOpen: false
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <GlobalContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
        isModalOpen,
        setIsModalOpen,
        customModal,
        setCustomModal,
      }}
    >
      <div className="App" style={{ "--header-height": `${headerHeight}px` }}>
        {
          <main style={{ marginTop: headerHeight, marginBottom: footerHeight }}>
            <ScrollToTopButton  />
            <AnimatePresence exitBeforeEnter>
              <Suspense fallback={<></>}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/page/our-team" element={<TeamPage />} />`
                  <Route path="/page/for-referrers" element={<ReferrersPage />} />`
                  <Route path="/page/pakket-rugklachten" element={<RugklachtenPage />} />`
                  <Route path="/page/tariffs-2024" element={<TariffsPage />} />`
                  <Route path="/page/chronic-healthcare" element={<ChronicTreatmentsPage />} />`
                  <Route path="/page/mission-statement" element={<MissionStatementPage />} />
                  <Route path="/page/collaborations" element={<CollaborationsPage />} />
                  <Route path="/page/reviews-prem" element={<ReviewsPremPage />} />`
                  <Route path="/page/reviews-testimonials" element={<ReviewsTestimonialsPage />} />
                  <Route path="/page/contracted-insurers" element={<ContractedInsurersPage />} />
                  <Route path="/page/treatments" element={<GeneralTreatmentsPage />} />
                  <Route path="/page/treatment-hypnotherapy" element={<HypnotherapyPage />} />
                  <Route path="/page/treatment-exercisegroups" element={<MovementGroupsPage />} />
                  <Route path="/page/treatment-parkinsonism" element={<ReviewsTestimonialsPage />} />
                  <Route path="/*" element={<NotFoundPage style={{ "--base-color": "#0038e3" }} />} />

                  {/*/!* Elements *!/*/}
                  {/*<Route path="elements" element={<ElementPage style={{ "--base-color": "#0038e3" }} />} >*/}
                  {/*  <Route path="accordions" element={<AccordionPage />} />*/}
                  {/*  <Route path="buttons" element={<ButtonPage />} />*/}
                  {/*</Route>*/}

                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
        }
      </div>
    </GlobalContext.Provider>
  )
}

export default App;