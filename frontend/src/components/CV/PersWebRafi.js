import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Carousel } from "react-bootstrap";

const PersWebRafi = () => {
  const [data, setData] = useState(null);
  const { username } = useParams();
  const baseUrl = "http://localhost:5000/";

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/convert-web/${username}`
      );
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [username]);

  return (
    <div className="container mx-auto p-6">
      {data && data.data_diri ? (
        <div>
          <h1 className="text-4xl font-bold mb-8 text-center">
            Personal Web Rafi
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div>
              <img
                src={`${baseUrl}${data.data_diri.foto}`}
                alt=""
                className="mask mask-squircle mx-auto mb-4 w-80 h-auto"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p>
                  <th>Nama:</th> {data.data_diri.nama}
                </p>
                <p>
                  <th>Tempat Lahir:</th> {data.data_diri.tempat_lahir}
                </p>
                <p>
                  <th>Tanggal Lahir:</th> {data.data_diri.tanggal_lahir}
                </p>
                <p>
                  <th>Usia:</th> {data.data_diri.usia}
                </p>
                <p>
                  <th>Tinggi Badan:</th> {data.data_diri.tinggi_badan}
                </p>
                <p>
                  <th>Berat Badan:</th> {data.data_diri.berat_badan}
                </p>
              </div>
              <div>
                <p>
                  <th>Alamat:</th> {data.data_diri.alamat}
                </p>
                <p>
                  <th>Agama:</th> {data.data_diri.agama}
                </p>
                <p>
                  <th>Jenis Kelamin:</th> {data.data_diri.jenis_kelamin}
                </p>
                <p>
                  <th>Telp:</th> {data.data_diri.telp}
                </p>
                <p>
                  <th>Email:</th> {data.data_diri.email}
                </p>
              </div>
            </div>
            <p>
              <th>Status:</th> {data.data_diri.status}
            </p>
            <p>
              <th>Instagram:</th> {data.data_diri.instagram}
            </p>
            <p>
              <th>Linkedin:</th> {data.data_diri.linkedin}
            </p>
            <p>
              <th>Github:</th> {data.data_diri.github}
            </p>
            <p>
              <th>Deskripsi:</th> {data.data_diri.deskripsi}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>Institution</th>
                  <th>Major</th>
                  <th>Academic Years</th>
                </tr>
              </thead>
              <tbody>
                {data.data_diri.pendidikans.map((pendidikan, index) => (
                  <tr key={index}>
                    <td>{pendidikan.instansi_pendidikan}</td>
                    <td>{pendidikan.jurusan}</td>
                    <td>{`${pendidikan.tahun_mulai_ajaran} - ${pendidikan.tahun_akhir_ajaran}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Capability</th>
                </tr>
              </thead>
              <tbody>
                {data.data_diri.skills.map((skill, index) => (
                  <tr key={index}>
                    <td>{skill.nama_skill}</td>
                    <td>
                      <div className="bg-gray-200 h-6 rounded-lg">
                        <div
                          className="bg-pink-500 h-full rounded-lg"
                          style={{ width: `${skill.capability}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Organizations</h2>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>Organization</th>
                  <th>Position</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {data.data_diri.organisasis.map((organisasi, index) => (
                  <tr key={index}>
                    <td>{organisasi.nama_organisasi}</td>
                    <td>{organisasi.posisi}</td>
                    <td>{`${organisasi.tanggal_mulai_menjabat} - ${organisasi.tanggal_akhir_menjabat}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
            <Carousel>
              {data.data_diri.portofolios.map((portofolio, index) => (
                <Carousel.Item key={index}>
                  <div style={{ position: "relative" }}>
                    <img
                      className="d-block w-100"
                      src={`${baseUrl}${portofolio.file_portofolio}`}
                      alt={`Portfolio ${index + 1}`}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.7)",
                        padding: "10px",
                      }}
                    >
                      <h3 style={{ color: "black" }}>
                        {portofolio.nama_portofolio}
                      </h3>
                      <p style={{ color: "black" }}>
                        {portofolio.deskripsi_portofolio}
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default PersWebRafi;
