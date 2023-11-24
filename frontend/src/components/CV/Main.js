import React, { Component, useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import '../../styles/styles.css';
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import 'animate.css';
import GenerateWeb from './generateWeb';
import axios from 'axios';

const baseUrl = "http://localhost:5000/";

const MainBanner = ({ data }) => {
  // Check if data is null or undefined
  if (data === null || data === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GenerateWeb />
      <div className="hero-banner it-banner overly hero-bg4">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <span>MODERATE TEAM 1</span>
                    <h1>Personal Web CV Maker</h1>
                    <p>Dirancang oleh Moderate 1 Team</p>
                  </div>
                </div>
                <div className="col-lg-6">
                <div className="animate-banner-image">
                  <img src="/images/animate-banner-img1.jpg" alt="Animate image" style={{width: 400}} />
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

const ConvertToWeb = ({ data }) => {
  // ... the rest of the ConvertToWeb component
};

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
  }, [username, id_akun]);

  return (
    <>
      <MainBanner data={data} />
      <ConvertToWeb data={data} />
    </>
  );
};

export default CommonAncestorComponent;
