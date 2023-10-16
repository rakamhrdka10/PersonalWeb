import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Navigation/sidebar";
import '../../styles/style.css';
import Navbar2 from "../Navigation/navbar2";

const PendidikanCreate = () => {
  const navigate = useNavigate(); 
  const token = localStorage.getItem('access_token');

  if (!token){
    navigate('/login')
  }

  const [formData, setFormData] = useState({
    instansi_pendidikan: "",
    jurusan: "",
    tahun_mulai_ajaran: "",
    tahun_akhir_ajaran: "",
  });

  const [id_person, setIdPerson] = useState("");

  const [msg, setMsg] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    setIdPerson(localStorage.getItem('id'))
  }, [])

  const redirectCancelButton = () => {
    navigate(`/pendidikan/${id_person}`)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      id_person
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/pendidikan",
        formData, id_person
      );

      navigate(`/pendidikan/${id_person}`);
      console.log("Pendidikan record created successfully:");
      console.log("Response:", response.data);
    } catch (error) {
      setMsg(error.response.data.error);
      console.error("Error creating Pendidikan record:", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <Navbar2 toggleSidebar={toggleSidebar}/>
      <div className={`bg-gray-200 ${isSidebarVisible ? "" : "h-screen"} flex`}>
        {isSidebarVisible && <Sidebar />}
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          <div className="bg-gray-200 h-screen box-border p-4">
            <div className="flex justify-center items-center mt-5">
              <h1>
                <b>Tambah Pendidikan</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2 mt-5">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Instansi Pendidikan</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="instansi_pendidikan"
                      value={formData.instansi_pendidikan}
                      onChange={handleChange}
                      placeholder="Nama Instansi Pendidikan"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Jurusan</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="jurusan"
                      value={formData.jurusan}
                      onChange={handleChange}
                      placeholder="Jurusan"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Tahun Mulai Ajaran</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="tahun_mulai_ajaran"
                        value={formData.tahun_mulai_ajaran}
                        onChange={handleChange}
                        className="bg-gray-300 input input-bordered input-sm w-1/2"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Tahun Akhir Ajaran</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="tahun_akhir_ajaran"
                        value={formData.tahun_akhir_ajaran}
                        onChange={handleChange}
                        className="bg-gray-300 input input-bordered input-sm w-1/2"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 flex items-center hide-element">
                    <label className="w-1/3 mr-1">
                      <span className="label-text">ID Person</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="id_person"
                      value={id_person}
                      disabled
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                    />
                  </div>

                  <div className="mt-10 flex justify-center items-center">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mr-2 w-1/3"
                      onClick={redirectCancelButton}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success btn-sm w-1/3"
                    >
                      Save
                    </button>
                  </div>
                </form>
                <p>{msg}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PendidikanCreate;
