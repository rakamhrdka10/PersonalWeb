import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../../styles/styles.css';
import '../../../styles/responsive.css';
import '../../../styles/icofont.min.css';
import '../../../styles/pe-icon-7-stroke.css';
import 'animate.css';
import '../../../styles/PersWebAini.css';

const Portfolio = () => {
  const [hoveredButton, setHoveredButton] = useState("");
  const [activeTab, setActiveTab] = useState('');
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
  };

  return (
    <div id="ai-body">
      {data && data.data_diri ? (
        <>
          {/* Added Section */}
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
          <section className="about-area ptb-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="about-content about-content-two">
                  <div data-aos="fade-up" data-aos-duration="1200">
                    {/* Title Section */}
                    <div className="title-section text-left text-sm-center">
                      <h1>
                         my <span>portfolio</span>
                      </h1>
                      <span className="title-bg">works</span>
                    </div>

                    {/* Portfolio Items */}
                    <div className="row">
                      {data.data_diri.portofolios.map((portofolio, index) => (
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                          <article className="post-container">
                            <div className="post-thumb">
                              <div className="d-block position-relative overflow-hidden">
                                <img
                                  src={`${baseUrl}${portofolio.file_portofolio}`}
                                  alt={`Portfolio ${index + 1}`}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="post-content">
                              <div className="entry-header">
                                <h3>{portofolio.nama_portofolio}</h3>
                              </div>
                              <div className="entry-content open-sans-font">
                                <p>{portofolio.deskripsi_portofolio.slice(0, 100)}</p>
                              </div>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Portfolio;
