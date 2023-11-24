import React from "react";
import Navbar from "./components/Navigation/navbar";
import MainBanner from "./components/LandingPage/MainBanner";
import Services from "./components/LandingPage/Service";
import Team from './components/Common/Team';
import WorkProcess from "./components/LandingPage/WorkProcess";
import Footer from "./components/Navigation/footer";

const LandingPage = () => {
  return (
      <>
          <Navbar />

          <MainBanner />

          <Services />

          <WorkProcess />

          <Team />
                
          <Footer />
      </>
  );
}

export default LandingPage;
