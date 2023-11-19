import React, { Component, useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import '../../styles/style.css';
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import 'animate.css';
import GenerateWeb from './generateWeb';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const baseUrl = "http://localhost:5000/";

const CommonAncestorComponent = () => {
  const [data, setData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const id_akun = localStorage.getItem('id');
  const username = localStorage.getItem('username_akun');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5000/convert-web/`,
          { username: username, id_akun: id_akun }
        );
        console.log("Data : ", response.data);
        setData(response.data);
        setDataLoaded(true);
      } catch (error) {
        console.log(error.message);
        setNotFound(true);
      }
    };

    fetchData();

    // Initialize AOS with options
    AOS.init({ duration: 1000, once: true });
  }, [username, id_akun]);

  return (
    <>
      <GenerateWeb />
      <div className="education">
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-up">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="timeline-content">
              <h3>Computer Science</h3>
              <p>Stanford University - 2003</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="timeline-content">
              <h3>Bachelor's Degree</h3>
              <p>Harvard University - 2005</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="timeline-content">
              <h3>Computer Programming</h3>
              <p>Stanford University - 2007</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonAncestorComponent;
