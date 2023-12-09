import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PortofolioList = () => {
  const navigate = useNavigate(); 
  const token = localStorage.getItem('access_token');

  if (!token){
    navigate('/login')
  }

  const { id_person } = useParams();
  const [portofolios, setPortofolios] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const baseUrl = 'http://194.233.93.124:4201/';

  useEffect(() => {
    getPortofolio();
  }, [])
  
  const getPortofolio = async () => {
    try {
      const response = await axios.get(`http://194.233.93.124:4201/portofolio/${id_person}`)
      console.log("Berhasil ambil data portofolio dari id_person = ", id_person)
      console.log("Data : ", response.data)
      // Tambahkan nomor urut pada data portofolio
      const portofoliosWithIndex = response.data.map((item, index) => ({ ...item, index: index + 1 }));
      setPortofolios(portofoliosWithIndex);
    } catch (error) {
      console.log(error.message)
    }
  }

  const redirectToEditPortofolio = (id_portofolio) => {
    navigate(`/portofolio/${id_person}/edit/${id_portofolio}`);
  }

  const redirectToAddPortofolio = () => {
    navigate('/portofolio/create');
  }

  const deletePortoHandler = async(id_portofolio) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
    if(confirmDelete){
      try {
        await axios.delete(`http://194.233.93.124:4201/portofolio/${id_portofolio}`);
        window.location.reload();
        console.log("Data berhasil dihapus");
      } catch (error) {
        console.log(error);
      }
    }
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <Navbar2 toggleSidebar={toggleSidebar}/>
      <div className={`bg-gray-200 ${isSidebarVisible ? '' : 'h-screen'} flex`}>
        {isSidebarVisible && <Sidebar />}
        {/* Main Content */}
        <main className={`flex-1 p-4 ${isSidebarVisible ? '' : ''}`}>
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            style={{ backgroundColor: '#4D4C7D' }}
          >
            <FaBars size={24} />
          </button>
          {/* Tombol hamburger untuk menampilkan/sembunyikan sidebar */}
          <div className={`bg-gray-200 box-border p-4 pt-0`}>
            <div className="flex justify-center items-center">
              <h1>
                <b>Portofolio</b>
              </h1>
            </div>
            
            <div className="flex justify-center items-center p-2">
              {portofolios.length > 0 ? (
                <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                  <div className="flex justify-end items-center p-2 mb-4">
                    <button onClick={redirectToAddPortofolio} className="btn btn-success">
                      Tambah Portofolio
                    </button>
                  </div>

                  <div className="card-wrapper flex flex-wrap">
                    {portofolios.map((portofolio) => (
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`${baseUrl}${portofolio.file_portofolio}`} />
                        <Card.Body>
                          <Card.Title>{portofolio.nama_portofolio}</Card.Title>
                          <Card.Text>
                            {portofolio.deskripsi_portofolio}
                          </Card.Text>

                          <div className="flex justify-start">
                            <button onClick={() => redirectToEditPortofolio(portofolio.id_portofolio)} className="btn btn-success mr-3">
                              Edit
                            </button>
                            <button onClick={() => deletePortoHandler(portofolio.id_portofolio)} className="btn btn-danger">
                              Delete
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <button onClick={redirectToAddPortofolio} className="btn btn-success mt-4">
                    Tambah Portofolio
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortofolioList;
