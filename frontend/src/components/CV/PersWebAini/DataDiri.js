import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../../styles/styles.css';
import '../../../styles/responsive.css';
import '../../../styles/icofont.min.css';
import '../../../styles/pe-icon-7-stroke.css';
import 'animate.css';
import '../../../styles/PersWebAini.css'

const DataDiri = () => {
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
    <div className="about-list-container">
        <div className="column">
            <ul className="about-list list-unstyled open-sans-font">
            <li>
                <span className="title-gray">Name:</span>
                <span className="value-white">{data.data_diri.nama}</span>
            </li>
            <li>
                <span className="title-gray">Age:</span>
                <span className="value-white">{data.data_diri.usia}</span>
            </li>
            <li>
                <span className="title-gray">Gender:</span>
                <span className="value-white">{data.data_diri.jenis_kelamin}</span>
            </li>
            <li>
                <span className="title-gray">Status:</span>
                <span className="value-white">{data.data_diri.status}</span>
            </li>
            <li>
                <span className="title-gray">Address:</span>
                <span className="value-white">{data.data_diri.alamat}</span>
            </li>
            </ul>
        </div>
        <div className="column">
            <ul className="about-list list-unstyled open-sans-font">
            <li>
                <span className="title-gray">Email:</span>
                <span className="value-white">{data.data_diri.email}</span>
            </li>
            <li>
                <span className="title-gray">Phone:</span>
                <span className="value-white">{data.data_diri.telp}</span>
            </li>
            <li>
                <span className="title-gray">Github:</span>
                <span className="value-white">{data.data_diri.github}</span>
            </li>
            <li>
                <span className="title-gray">LinkedIn:</span>
                <span className="value-white">{data.data_diri.linkedin}</span>
            </li>
            <li>
                <span className="title-gray">Instagram:</span>
                <span className="value-white">{data.data_diri.instagram}</span>
            </li>
            </ul>
        </div>
        
    </div>
</>
) : (
  <div>Loading...</div>
)}
</div>
)
}

export default DataDiri;

