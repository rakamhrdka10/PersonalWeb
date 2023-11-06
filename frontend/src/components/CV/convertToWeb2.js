import React from "react";
import Navbar from "../Navigation/navbar";
import MainBanner from "./Main";
import Pendidikan from "./pendidikan"
import Team from '../Common/Team';
import WorkProcess from "../LandingPage/WorkProcess";
import Footer from "../Layout/footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Pendidikan />

      <Team />

      <WorkProcess />

      <Footer />
    </>
  );
};

export default LandingPage;
