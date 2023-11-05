import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
            <h2 className="text-xl font-semibold mb-4 text-center">
              Personal Information
            </h2>

            <div>
              <img
                src={`${baseUrl}${data.data_diri.foto}`}
                alt=""
                className="mask mask-squircle mx-auto mb-4 w-40 h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p>Nama: {data.data_diri.nama}</p>
                <p>Tempat Lahir: {data.data_diri.tempat_lahir}</p>
                <p>Tanggal Lahir: {data.data_diri.tanggal_lahir}</p>
                <p>Usia: {data.data_diri.usia}</p>
                <p>Tinggi Badan: {data.data_diri.tinggi_badan}</p>
                <p>Berat Badan: {data.data_diri.berat_badan}</p>
              </div>
              <div>
                <p>Alamat: {data.data_diri.alamat}</p>
                <p>Agama: {data.data_diri.agama}</p>
                <p>Jenis Kelamin: {data.data_diri.jenis_kelamin}</p>
                <p>Telp: {data.data_diri.telp}</p>
                <p>Email: {data.data_diri.email}</p>
              </div>
            </div>
            <p>Status: {data.data_diri.status}</p>
            <p>Instagram: {data.data_diri.instagram}</p>
            <p>Linkedin: {data.data_diri.linkedin}</p>
            <p>Github: {data.data_diri.github}</p>
            <p>Deskripsi: {data.data_diri.deskripsi}</p>
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

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
            <table className="table-auto w-full">
              <tbody>
                {data.data_diri.portofolios.map((portofolio, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`${baseUrl}${portofolio.file_portofolio}`}
                        alt={`Portfolio ${index + 1}`}
                        className="rounded-lg w-full"
                      />
                      <p className="font-semibold mt-2">
                        {portofolio.nama_portofolio}
                      </p>
                      <p className="text-sm mt-1">
                        {portofolio.deskripsi_portofolio}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default PersWebRafi;
