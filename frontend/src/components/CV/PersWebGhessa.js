import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const PersWebGhessa = () => {
  const [data, setData] = useState(null);
  const {username} = useParams();
  const baseUrl = "http://localhost:5000/";

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/convert-web/${username}`);
      console.log("Data : ", response.data.data);
      setData(response.data.data);
      console.log("Data : ",response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [username])


  return (
    <div>
      {data && data.data_diri ? (
        <div style={{ 
          background: "linear-gradient(135deg, #1d232a, #2a323c, #1fb2a6)",
          minHeight: "100vh",
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          padding: "0 20px",
        }}>
          {/* Navbar */}
          <section id="home">
          <div className="navbar">
            <div className="flex-1">
              <a className="text-white text-xl">My Personal Website</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 text-white">
                <li><a>Home</a></li>
              </ul>
              <ul className="menu menu-horizontal px-1 text-white">
                <li><a>Profile</a></li>
              </ul>
              <ul className="menu menu-horizontal px-1 text-white">
                <li><a>Contact</a></li>
              </ul>
            </div>
          </div>
          {/* Teks Nama */}
          <div className="pl-3 text-xl font-medium text-white text-left h-screen flex items-center">
            <div style={{
              textAlign: "left",
              fontSize: "3rem",
              color: "#ccd6f6",
              fontWeight: "700",}}>
              Halo, I'm {data.data_diri.nama}
              <h1 className="pb-2 text-bold mt-5 text-left text-[#8892b0]">
                {data.data_diri.status}
              </h1>
              <h2 className="p-1 text-sm mt-3 text-left text-[#8892b0]">
                {data.data_diri.deskripsi}
              </h2>
            </div>
            {/* Foto*/}
            <div>
              <img
                src={`${baseUrl}${data.data_diri.foto}`}
                alt=""
                className="pb-3 w-59 h-auto text-right rounded-full"
              />
            </div>
          </div>
          </section>

          {/* Pendidikan */}
          <section id="pendidikan" style={{ marginBottom: '7rem' }}>
            <h2 className="text-xl font-bold mt-4 text-[#ccd6f6]">Pendidikan</h2>
            <div>
              <ul className="steps steps-vertical" style={{ padding: '0.75rem' }}>
                {data.data_diri.pendidikans.map((pendidikan, index) => (
                  <li className="step step-success text-[#8892b0] transition-transform transform hover:scale-105 hover:shadow-gray-800" 
                      style={{ fontSize: '1.25em', marginBottom: '0.5rem' }}
                      key={index}>
                    {pendidikan.instansi_pendidikan}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Skill*/} 
          <h2 className="text-xl pu-8 font-bold mt-4 text-[#ccd6f6]">Skill</h2>
          <section id="skill">
          <div className="pl-3 text-xl font-medium text-white text-left h-screen flex items-center">
            <div style={{
              textAlign: "left",
              fontSize: "3rem",
              color: "#ccd6f6",
              fontWeight: "700",
              marginBottom: '10px'}}>
              some talents..
            </div>
              <div className="flex items-start space-y-2 ml-5">
              {data.data_diri.skills.map((skill, index) => (
                <div className="mr-3 transition-transform transform hover:scale-105 hover:shadow-gray-800" key={index}>
                  <span className="font-medium mr-2 text-white">{skill.nama_skill}</span>
                  <div
                    className="radial-progress text-primary-content"
                    style={{
                      "--value": skill.capability,
                      "--size": "12rem", 
                      "--thickness": "2rem"
                    }}>
                    {skill.capability}%
                  </div>
                  </div>))}
              </div> 
          </div>
          </section>

          {/* Organisasi */}
          <h2 className="text-xl font-bold mt-4 text-[#ccd6f6]" style={{ marginBottom: '4rem' }}>Organisasi</h2>
          <div className="tab-content" id="organization">
            <div className="info">
              {data.data_diri.organisasis.map((organisasi, index) => {
                const startDate = new Date(organisasi.tanggal_mulai_menjabat);
                const endDate = new Date(organisasi.tanggal_akhir_menjabat);

                return (
                  <div key={index} className="max-w-sm bg-accent-content shadow-lg rounded-lg overflow-hidden mx-4 my-4 transition-transform transform hover:scale-105 hover:shadow-gray-800">
                    <div className="px-6 py-4">
                      <h2 className="font-bold text-xl mb-2">{organisasi.nama_organisasi}</h2>
                      <p>({startDate.getFullYear()} - {endDate.getFullYear()})</p>
                      <p className="text-gray-700 text-base">Sebagai: {organisasi.posisi}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
                            
          {/* Portofolio */}
          <section id="portfolio">
            <h2 className="text-light p-5 title text-center">Portofolio</h2>

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              style={{ 
                width: "75%",
                height: "500px",
              }}
            >
              {data.data_diri.portofolios.map((portofolio, index) => (
                <SwiperSlide key={index}>
                  <div className="slide-container">
                    <img
                      src={`${baseUrl}${portofolio.file_portofolio}`}
                      alt={`Portfolio ${index + 1}`}
                      className="top-aligned-image"
                    />
                    <div className="text-overlay">
                      <h2 className="text-light">{portofolio.nama_portofolio}</h2>
                      <p className="text-light">{portofolio.deskripsi_portofolio}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* Contact */}
          <footer className="footer footer-center p-5 bg-[#1d232a] text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
              <p className="text-light ">For business inquiry please send email to {data.data_diri.email}</p>
            </nav> 
            <div className="wrapper flex">
              <a href={'https://instagram.com/' + data.data_diri.instagram} target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram className="contact-element" size={"50px"} color="#fff" />
              </a>
              <a href={'https://linkedin.com/in/' + data.data_diri.linkedin} target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin className="contact-element" size={"50px"} color="#fff"/>
              </a>
              <a href={'https://github.com/' + data.data_diri.github} target="_blank" rel="noopener noreferrer">
                <AiOutlineGithub className="contact-element" size={"50px"} color="#fff"/>
              </a>
            </div>
            <aside>
              <p>Copyright © 2023 - Web Development</p>
            </aside>
          </footer>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default PersWebGhessa