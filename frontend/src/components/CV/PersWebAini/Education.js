import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../../styles/styles.css';
import '../../../styles/responsive.css';
import '../../../styles/icofont.min.css';
import '../../../styles/pe-icon-7-stroke.css';
import 'animate.css';
import '../../../styles/PersWebAini.css';

const Education = () => {
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
  };

  return (
    <div className="row" style={{ margin: '0 50px 0 50px' }}>
      {data && data.data_diri ? (
        <>
           {data.data_diri.pendidikans.map((pendidikan, index) => {
                const startDate = new Date(pendidikan.tahun_mulai_ajaran);
                const endDate = new Date(pendidikan.tahun_akhir_ajaran);

            return (
                <li key={index}>
                <div className="resume-box icon">
                  <i className="resume-box fa fa-graduation-cap"></i>
                </div>
                <span className="resume-box time open-sans-font text-uppercase">
                  {`${startDate.getFullYear()} - ${endDate.getFullYear()}`}
                </span>
                <h5 className="poppins-font text-uppercase">{pendidikan.instansi_pendidikan}</h5>
                <p className="resume-box open-sans-font">{pendidikan.jurusan}</p>
              </li>
            );
          })}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );  
};

export default Education;
