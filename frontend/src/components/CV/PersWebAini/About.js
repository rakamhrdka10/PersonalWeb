import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../../styles/styles.css';
import '../../../styles/responsive.css';
import '../../../styles/icofont.min.css';
import '../../../styles/pe-icon-7-stroke.css';
import 'animate.css';
import '../../../styles/PersWebAini.css'
import PersonalInfo from './DataDiri.js'
import Skills from './Skills.js'
import Education from './Education.js'
import Organization from './Organization.js'

const About = () => {
  const [hoveredButton, setHoveredButton] = useState("");
  const [activeTab, setActiveTab] = useState('');

  const handleButtonHover = (title) => {
    setHoveredButton(title);
  };
  
  const [data, setData] = useState(null);
  const { username } = useParams();

  const baseUrl = "http://localhost:5000/";

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/convert-web/${username}`);
      console.log("Data : ", response.data.data);
      setData(response.data.data);
      console.log("Data web 1: ", response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [username]);


  const openTab = (tabname) => (event) => {
    setActiveTab(tabname);
    let tablinks = document.getElementsByClassName("tab-link");
    let tabcontents = document.getElementsByClassName("tab-content");
    for (let tablink of tablinks) {
      tablink.classList.remove("link-active");
    }

    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("content-active");
    }

    event.currentTarget.classList.add("link-active");
    document.getElementById(tabname).classList.add("content-active");
  }

  return (
    <div style={{ background: '#111', color: 'white', minHeight: '100vh' }}>
      {data && data.data_diri ? (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
    <section className="about-area ptb-100">
        <div className="container">
            <div className="row align-items-center">
                    <div className="about-content about-content-two">
                      <div data-aos="fade-up" data-aos-duration="1200">
                        <div className="title-section text-left text-sm-center">
                          <h1>
                            ABOUT <span>ME</span>
                          </h1>
                          <span className="title-bg">Resume</span>
                        </div>
                      </div>

                      {/* Personal Info Starts */}
                    <div className="col-xl-6 col-lg-5 col-12">
                      <div className="row">
                        <div className="col-12">
                          <h3 className="text-uppercase custom-title mb-0 ft-wt-600" >
                            personal infos
                          </h3>
                        </div>
                        {/* End .col */}

                        <div className="col-12">
                          <PersonalInfo />
                        </div>
                        {/* End personal info */}

                        <div className="col-12 mt-1">
                          <a className="button" >
                            <span className="button-text">Download CV</span>
                            <span className="button-icon fa fa-download"></span>
                          </a>
                        </div>
                        {/* End download button */}
                      </div>
                    </div>
                    {/*  Personal Info Ends */}
                    </div>

                    {/* Skills Starts */}
                    <div className="row" style={{ margin: '80px 0 0 0' }}>
                      <div className="col-12">
                        <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                          My Skills
                        </h3>
                      </div>
                      <Skills />
                    </div>
                    {/* Skills Ends */}


                    {/* Experience & Education Starts */}
                    <div className="row">
                      <div className="col-12">
                        <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                        Education <span>&</span> Organization
                        </h3>
                      </div>
                      <div className="col-lg-6 m-15px-tb">
                        <div className="resume-box">
                          <Education />
                        </div>
                      </div>
                      <div className="col-lg-6 m-15px-tb">
                        <div className="resume-box">
                          <Organization />
                        </div>
                      </div>
                    </div>
                    {/*  Experience & Education Ends */}

                </div>
            </div>
    </section>


</>
) : (
  <div>Loading...</div>
)}
</div>
)
}

export default About;
