// dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Sidebar from "./Navigation/sidebar";
import { FaBars } from "react-icons/fa";
import Navbar2 from './Navigation/navbar2';
import { useNavigate } from "react-router-dom";
import generatePDF from "./pdfGenerator";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Dashboard = () => {
  const [nama, setNama] = useState("");
  const [cvData, setCvData] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const generateToWebHandler = async () => {
    try {
      const username = localStorage.getItem('username_akun');
      const id_akun = localStorage.getItem('id');

      const response = await axios.get(`http://localhost:5000/convert-web/${username}`);

      console.log(response);
      navigate(`/${username}`)
      
    } catch (error) {
      console.error(error);
    }
  };


  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      const decoded = jwt_decode(response.data.accessToken);
      setNama(decoded.nama);

      const id_person = decoded.id_akun;

      const personalResponse = await axios.get(
        `http://localhost:5000/personal/${id_person}`
      );
      const educationResponse = await axios.get(
        `http://localhost:5000/pendidikan/${id_person}`
      );
      const organizationResponse = await axios.get(
        `http://localhost:5000/organisasi/${id_person}`
      );
      const skillResponse = await axios.get(
        `http://localhost:5000/skill/${id_person}`
      );
      const portfolioResponse = await axios.get(
        `http://localhost:5000/portofolio/${id_person}`
      );

      setCvData({
        personal: personalResponse.data,
        education: educationResponse.data,
        organization: organizationResponse.data,
        skills: skillResponse.data,
        portfolio: portfolioResponse.data,
      });
    } catch (error) {
      console.log(error.message);
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  const generatePDFHandler = () => {
    generatePDF(cvData);
  };

  const handleChooseTemplate = (templateName) => {
    localStorage.setItem('template', templateName);
    generateToWebHandler()
  };
  

  return (
    <div>
      {/* Navbar */}         
      <Navbar2 toggleSidebar={toggleSidebar}/>
      
      <div className={`bg-gray-200 ${isSidebarVisible ? 'h-auto' : 'h-auto'} flex`}>
        {isSidebarVisible && <Sidebar />}
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            style={{ backgroundColor: '#4D4C7D' }}
          >
            <FaBars size={24} />
          </button>
          <div className="bg-white p-4 rounded-lg shadow-md ">
            <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
            <p className="text-lg">Hello, {nama}</p>
          </div>

          {cvData ? (
            <div className="flex flex-wrap">
              <div className="bg-white p-4 rounded-lg shadow-md w-2/4 mt-4 mr-4">
                <p className="text-lg">Generate CV to Web</p>

                {/* Disini */}
                <Carousel 
                  prevIcon={<BsChevronLeft style={{ color: 'white', fontSize: '2rem' }} />}
                  nextIcon={<BsChevronRight style={{ color: 'white', fontSize: '2rem' }} />}
                  indicators={false}
                  // onSelect={(selectedIndex, e) => {
                  //   // Set state selectedTemplate sesuai dengan indeks yang dipilih
                  //   setSelectedTemplate(selectedIndex === 0 ? 'first' : 'second');
                  // }}
                >
                  <Carousel.Item>
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src="/images/personal-web/persWeb1.png" />
                      <Card.Body>
                        <Card.Title>Template 1</Card.Title>
                        <Button variant="primary" onClick={() => handleChooseTemplate('first')}>Choose Template</Button>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src="/images/personal-web/persWeb2.png" />
                      <Card.Body>
                        <Card.Title>Template 2</Card.Title>
                        <Button variant="primary" onClick={() => handleChooseTemplate('second')}>Choose Template</Button>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                </Carousel>
                {/* Disini */}
                {/* <button onClick={generateToWebHandler} className="btn btn-outline btn-success btn-sm mt-2">Click</button> */}
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md w-1/4 mt-4" style={{ height: 'fit-content'}}>
                <p className="text-lg">Generate CV to PDF</p>
                <button onClick={generatePDFHandler} className="btn btn-outline btn-success btn-sm mt-2">Click</button>
              </div>
            </div>
          ) : (
            <p></p>
          )}
          

        </main>
      </div>
    </div>
  );
};

export default Dashboard;
