import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../../styles/styles.css';
import '../../../styles/responsive.css';
import '../../../styles/icofont.min.css';
import '../../../styles/pe-icon-7-stroke.css';
import 'animate.css';
import '../../../styles/PersWebAini.css'

const PersWebAini = () => {
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
    <div>
      {data && data.data_diri ? (
    <>
      <div className="tab-content content-active hero-banner it-banner overly hero-bg4" id="Home">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <span>Hi, My name is</span>
                    <h1>{data.data_diri.nama}</h1>
                    <p>{data.data_diri.deskripsi}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="animate-banner-image">
                        <img src="/images/animate-banner-img1.jpg" alt="Animate image" style={{ width: 400 }} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="sidebar" style={{ position: "relative", zIndex: 2 }}>
                        <ul>
                          <li>
                            <div className="button-container">
                              <button
                                className="round-button"
                                title="Home"
                                onMouseEnter={() => handleButtonHover("Home")}
                                onMouseLeave={() => handleButtonHover("")}
                                onClick={openTab('Home')}
                              >
                                <i className="icofont-home"></i>
                              </button>
                              {hoveredButton === "Home" && <span className="button-title">Home</span>}
                            </div>
                          </li>
                          <li>
                              <div className="button-container">
                              <button
                                className="round-button"
                                title="About"
                                onMouseEnter={() => handleButtonHover("About")}
                                onMouseLeave={() => handleButtonHover("")}
                                onClick={() => openTab('About')}
                              >
                                <i className="icofont-user"></i>
                              </button>
                                {hoveredButton === "About" && <span className="button-title">About</span>}
                              </div>
                          </li>
                          {activeTab === 'About' && (
                              <div className="tab-content content-active" id="About">
                                <div className="info">
                                  {/* Your educational information component */}
                                  {data.data_diri.pendidikans.map((pendidikan, index) => {
                                    const startDate = new Date(pendidikan.tahun_mulai_ajaran);
                                    const endDate = new Date(pendidikan.tahun_akhir_ajaran);

                                    return (
                                      <React.Fragment key={index}>
                                        <p className="text-light title">
                                          {pendidikan.instansi_pendidikan}{" "}
                                          <span>({startDate.getFullYear()} - {endDate.getFullYear()})</span>
                                        </p>
                                        <p className="subtitle text-light">{pendidikan.jurusan}</p>
                                      </React.Fragment>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          <li>
                            <div className="button-container">
                              <button
                                className="round-button"
                                title="Portfolio"
                                onMouseEnter={() => handleButtonHover("Portfolio")}
                                onMouseLeave={() => handleButtonHover("")}
                              >
                                <i className="icofont-briefcase"></i>
                              </button>
                              {hoveredButton === "Portfolio" && <span className="button-title">Portfolio</span>}
                            </div>
                          </li>
                          <li>
                            <div className="button-container">
                              <button
                                className="round-button"
                                title="Contact"
                                onMouseEnter={() => handleButtonHover("Contact")}
                                onMouseLeave={() => handleButtonHover("")}
                              >
                                <i className="icofont-envelope"></i>
                              </button>
                              {hoveredButton === "Contact" && <span className="button-title">Contact</span>}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
) : (
  <div>Loading...</div>
)}
</div>
)
}

export default PersWebAini;