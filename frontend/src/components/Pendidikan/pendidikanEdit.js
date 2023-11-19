import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Navigation/sidebar";
import "../../styles/style.css";
import Navbar2 from "../Navigation/navbar2";

const PendidikanEdit = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const { id_pendidikan, id_person } = useParams();

  if (!token) {
    navigate("/login");
  }

  const [instansi_pendidikan, setInstansiPendidikan] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [tahun_mulai_ajaran, setTahunMulaiAjaran] = useState("");
  const [tahun_akhir_ajaran, setTahunAkhirAjaran] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPendidikan();
  }, []);

  const redirectCancelButton = () => {
    navigate(`/pendidikan/${id_person}`);
  };

  const PendidikanEditHandler = async (e) => {
    e.preventDefault();

    if (tahun_mulai_ajaran >= tahun_akhir_ajaran) {
      setError("Tahun mulai ajaran harus lebih awal dari tahun akhir ajaran.");
      return;
    }

    if (!/[A-Za-z]/.test(instansi_pendidikan)) {
      setError("Isikan dengan Huruf");
      return;
    }

    if (!/[A-Za-z]/.test(jurusan)) {
      setError("Isikan dengan Huruf");
      return;
    }

    setError("");

    try {
      const response = await axios.patch(`http://localhost:5000/pendidikan/${id_pendidikan}`, {
        instansi_pendidikan,
        jurusan,
        tahun_mulai_ajaran,
        tahun_akhir_ajaran,
      });

      navigate(`/pendidikan/${id_person}`);
      console.log("Pendidikan berhasil diubah");
      console.log("Data setelah diupdate: ", response);
    } catch (error) {
      setError("Terjadi kesalahan saat menyimpan data.");
      console.log(error);
    }
  };

  const getPendidikan = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/pendidikan/${id_person}/${id_pendidikan}`);
      console.log("Data : ", response.data);
      setInstansiPendidikan(response.data.instansi_pendidikan);
      setJurusan(response.data.jurusan);
      setTahunMulaiAjaran(response.data.tahun_mulai_ajaran);
      setTahunAkhirAjaran(response.data.tahun_akhir_ajaran);
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data.");
      console.log(error.message);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <Navbar2 toggleSidebar={toggleSidebar} />
      <div className={`bg-gray-200 ${isSidebarVisible ? "" : "h-screen"} flex`}>
        {isSidebarVisible && <Sidebar />}
        {/* Main Content */}
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            style={{ backgroundColor: "#4D4C7D" }}
          >
            <FaBars size={24} />
          </button>
          {/* Tombol hamburger untuk menampilkan/sembunyikan sidebar */}
          <div className="bg-gray-200 h-screen box-border p-4 pt-0">
            <div className="flex justify-center items-center">
              <h1>
                <b>Edit Pendidikan</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                {error && (
                  <div className="text-red-500 text-sm mb-4">{error}</div>
                )}
                <form onSubmit={PendidikanEditHandler}>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Instansi Pendidikan</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Instansi Pendidikan"
                      className="bg-gray-300 input input-bordered input-sm"
                      style={{ width: "50%" }}
                      value={instansi_pendidikan}
                      onChange={(e) => setInstansiPendidikan(e.target.value)}
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
                      placeholder="Jurusan"
                      className="bg-gray-300 input input-bordered input-sm"
                      style={{ width: "50%" }}
                      value={jurusan}
                      onChange={(e) => setJurusan(e.target.value)}
                      required
                    />
                  </div>
                  {/* Tahun Mulai Ajaran */}
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Tahun Mulai Ajaran</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Tahun Mulai Ajaran"
                      className="bg-gray-300 input input-bordered input-sm"
                      style={{ width: "50%" }}
                      value={tahun_mulai_ajaran}
                      onChange={(e) => setTahunMulaiAjaran(e.target.value)}
                      required
                    />
                  </div>
                  {/* Tahun Akhir Ajaran */}
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Tahun Akhir Ajaran</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Tahun Akhir Ajaran"
                      className="bg-gray-300 input input-bordered input-sm"
                      style={{ width: "50%" }}
                      value={tahun_akhir_ajaran}
                      onChange={(e) => setTahunAkhirAjaran(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-10 flex justify-center items-center">
                    <button
                      className="btn btn-danger btn-sm mr-2 w-1/3"
                      onClick={redirectCancelButton}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-success btn-sm w-1/3"
                      onClick={PendidikanEditHandler}
                    >
                      Save
                    </button>
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

export default PendidikanEdit;
