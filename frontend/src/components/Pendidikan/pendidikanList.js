import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";

const PendidikanList = () => {
  const navigate = useNavigate(); 
  const token = localStorage.getItem('access_token');

  if (!token) {
    navigate('/login');
  }

  const { id_person } = useParams();
  const [pendidikan, setPendidikan] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    getPendidikan();
  }, []);

  const getPendidikan = async () => {
    try {
      const response = await axios.get(
        `http://194.233.93.124:4201/pendidikan/${id_person}`
      );
      console.log("Berhasil ambil data pendidikan dari id_person =", id_person);
      console.log("Data:", response.data);
      // Tambahkan nomor urut pada data pendidikan
      const pendidikanWithIndex = response.data.map((item, index) => ({ ...item, index: index + 1 }));
      setPendidikan(pendidikanWithIndex);
    } catch (error) {
      console.log(error.message);
    }
  };

  const redirectToEditPendidikan = (id_pendidikan) => {
    navigate(`/pendidikan/${id_person}/edit/${id_pendidikan}`);
  };

  const redirectToAddPendidikan = () => {
    navigate("/pendidikan/create");
  };

  const deletePendidikanHandler = async (id_pendidikan) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://194.233.93.124:4201/pendidikan/${id_pendidikan}`);
        window.location.reload();
        console.log("Data berhasil dihapus");
      } catch (error) {
        console.log(error);
      }
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
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            style={{ backgroundColor: '#4D4C7D' }}
          >
            <FaBars size={24} />
          </button>
          <div className="bg-gray-200 h-screen box-border p-4 pt-0">
            <div className="flex justify-center items-center">
              <h1>
                <b>Pendidikan</b>
              </h1>
            </div>

            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                <div className="flex justify-end items-center p-2 mb-4">
                  <button
                    onClick={redirectToAddPendidikan}
                    className="btn btn-success"
                  >
                    Tambah Pendidikan
                  </button>
                </div>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 w-1/15">No</th>
                      <th className="border px-4 py-2 w-4/15">Instansi Pendidikan</th>
                      <th className="border px-4 py-2 w-3/15">Jurusan</th>
                      <th className="border px-4 py-2 w-2/15">Tanggal Mulai Ajaran</th>
                      <th className="border px-4 py-2 w-2/15">Tanggal Akhir Ajaran</th>
                      <th className="border px-4 py-2 w-4/15">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendidikan.map((pendidikanItem) => (
                      <tr key={pendidikanItem.id_pendidikan}>
                        <td className="border px-4 py-2 text-center">
                          {pendidikanItem.index}
                        </td>
                        <td className="border px-4 py-2">
                          {pendidikanItem.instansi_pendidikan}
                        </td>
                        <td className="border px-4 py-2">
                          {pendidikanItem.jurusan}
                        </td>
                        <td className="border px-4 py-2">
                          {pendidikanItem.tahun_mulai_ajaran}
                        </td>
                        <td className="border px-4 py-2">
                          {pendidikanItem.tahun_akhir_ajaran}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          <button
                            className="btn btn-sm btn-success ml-3"
                            onClick={() => redirectToEditPendidikan(pendidikanItem.id_pendidikan)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-danger ml-3"
                            onClick={() => deletePendidikanHandler(pendidikanItem.id_pendidikan)}
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

export default PendidikanList;
