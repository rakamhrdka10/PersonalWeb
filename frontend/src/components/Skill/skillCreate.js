import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";
import '../../styles/style.css';
import Navbar2 from "../Navigation/navbar2";

const SkillCreate = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  if (!token) {
    navigate('/login');
  }

  const [id_person, setIdPerson] = useState("");
  const [nama_skill, setNamaSkill] = useState("");
  const [capability, setCapability] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setIdPerson(localStorage.getItem('id'));
  }, []);

  const redirectCancelButton = () => {
    navigate(`/skill/${id_person}`);
  };

  const createSkillHandler = async (e) => {
    e.preventDefault();

    if (isNaN(capability) || capability < 0 || capability > 100) {
      setMsg("Capability yang diinputkan tidak sesuai.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/skill", {
        id_person,
        nama_skill,
        capability,
      });

      navigate(`/skill/${id_person}`);
      console.log('Berhasil membuat portofolio baru');
      console.log('Data skill : ', response);
    } catch (error) {
      setMsg("Terjadi kesalahan saat menyimpan data.");
      console.log(error.message);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <Navbar2 toggleSidebar={toggleSidebar} />
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
                <b>Tambah Skill</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                {msg && (
                  <div className="text-red-500 text-sm mb-4">{msg}</div>
                )}
                <form onSubmit={createSkillHandler}>
                  <div className="mb-4 flex items-center hide-element">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Id Person</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Id Person"
                      className="input input-bordered input-sm w-2/3"
                      value={id_person}
                      disabled
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Nama</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Skill"
                      className="input input-bordered input-sm w-2/3"
                      onChange={(e) => setNamaSkill(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Capability</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Capability Percent"
                      className="input input-bordered input-sm w-2/3"
                      onChange={(e) => setCapability(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-10 flex justify-center items-center">
                    <button className="btn btn-danger btn-sm mr-2 w-1/3" onClick={redirectCancelButton}>
                      Cancel
                    </button>
                    <button className="btn btn-success btn-sm w-1/3">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SkillCreate;