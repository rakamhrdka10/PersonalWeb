import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";

const PortofolioList = () => {
  const navigate = useNavigate(); 
  const token = localStorage.getItem('access_token');

  if (!token){
    navigate('/login')
  }

  const { id_person } = useParams();
  const [portofolios, setPortofolios] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    getPortofolio();
  }, [])

  const getPortofolio = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/portofolio/${id_person}`)
      console.log("Berhasil ambil data portofolio dari id_person = ", id_person)
      console.log("Data : ", response.data)
      // Tambahkan nomor urut pada data portofolio
      const portofoliosWithIndex = response.data.map((item, index) => ({ ...item, index: index + 1 }));
      setPortofolios(portofoliosWithIndex);
    } catch (error) {
      console.log(error.message)
    }
  }

  const redirectToPortofolioDetails = (id_portofolio) => {
    navigate(`/portofolio/${id_person}/${id_portofolio}`);
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
        await axios.delete(`http://localhost:5000/portofolio/${id_portofolio}`);
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
          <div className="bg-gray-200 h-screen box-border p-4 pt-0">
            <div className="flex justify-center items-center">
              <h1>
                <b>Portofolio</b>
              </h1>
            </div>
            
            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                <div className="flex justify-end items-center p-2 mb-4">
                  <button onClick={redirectToAddPortofolio} className="btn btn-success">
                    Tambah Portofolio
                  </button>
                </div>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 w-1/6">No</th>
                      <th className="border px-4 py-2 w-1/6">Nama Portofolio</th>
                      <th className="border px-4 py-2 w-2/6">Deskripsi Portofolio</th>
                      <th className="border px-4 py-2 w-2/6">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portofolios.map((portofolio) => (
                      <tr key={portofolio.id_portofolio}>
                        <td className="border px-4 py-2 text-center w-1/6">{portofolio.index}</td>
                        <td className="border px-4 py-2 w-1/6">{portofolio.nama_portofolio}</td>
                        <td className="border px-4 py-2 w-2/6">{portofolio.deskripsi_portofolio}</td>
                        <td className="border px-4 py-2 text-center w-2/6">
                          <button
                            className="btn btn-sm btn-info inline-block" style={{ backgroundColor: '#3876BF', color: '#fff' }}
                            onClick={() => redirectToPortofolioDetails(portofolio.id_portofolio)}
                          >
                            Show Details
                          </button>
                          <button
                            className="btn btn-sm btn-success ml-3"
                            onClick={() => redirectToEditPortofolio(portofolio.id_portofolio)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-danger ml-3"
                            onClick={() => deletePortoHandler(portofolio.id_portofolio)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortofolioList;
