import React from "react";
import Navbar from "../Navigation/navbar";
import MainBanner from "./MainBanner";
import About from "../LandingPage/About";
import Team from '../Common/Team';
import WorkProcess from "../LandingPage/WorkProcess";
import Footer from "../Layout/footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <About />

      <Team />

      <WorkProcess />

      <Footer />
    </>
  );
};

export default LandingPage;
