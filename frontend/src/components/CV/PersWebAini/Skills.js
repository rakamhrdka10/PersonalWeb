import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../../styles/styles.css';
import '../../../styles/responsive.css';
import '../../../styles/icofont.min.css';
import '../../../styles/pe-icon-7-stroke.css';
import 'animate.css';
import '../../../styles/PersWebAini.css';

const Skills = () => {
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
          {data.data_diri.skills.map((skill, index) => {
            const percentage = skill.capability;
            const c100Class = `c100 p${percentage}`;
            const isEvenIndex = index % 2 === 0;
  
            return (
              <div
                className={`col-6 col-md-2 mb-2 mb-sm-5${isEvenIndex ? ' order-md-1' : ''}`}
                key={index}
                style={{ margin: '0 10px 0 10px' }}
              >
                <div className={c100Class}>
                  <span>{percentage}%</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                  {skill.nama_skill}
                </h6>
              </div>
            );
          })}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );  
};

export default Skills;
