import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const PersWebHelsa = () => {
  const [data, setData] = useState(null);
  const { username } = useParams();
  const baseUrl = "http://localhost:5000/";

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/convert-web/${username}`
      );
      console.log("Data : ", response.data.data);
      setData(response.data.data);
      console.log("Data web 1: ", response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [username]);

  return (
    <div>
      {data && data.data_diri ? (
        <div>
          {/* Tampilan pertama */}
          <div
            className="hero min-h-screen"
            style={{
              background: "linear-gradient(to right, #94B9FF, #FFCDF9)",
            }}
          >
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center">
                <h1 className="text-5xl font-bold">
                  Hello, I am {data.data_diri.nama}
                </h1>
                <p className="py-6">{data.data_diri.deskripsi}</p>
                <button className="btn btn-primary">Download My CV</button>
              </div>
            </div>
          </div>
          <div>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row">
                <div className="mr-6">
                  <img
                    src={`${baseUrl}${data.data_diri.foto}`}
                    alt=""
                    className="max-w-xs max-h-xs mask mask-circle"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div>
                  <h1 className="text-3xl font-bold">
                    Take a look at my Personal Details!
                  </h1>
                  <p className="py-6">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="font-semibold">Full Name</td>
                          <td>{data.data_diri.nama}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Birthplace and Date</td>
                          <td>
                            {data.data_diri.tempat_lahir},
                            {data.data_diri.tanggal_lahir}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Address</td>
                          <td>{data.data_diri.alamat}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Religion</td>
                          <td>{data.data_diri.agama}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Gender</td>
                          <td>{data.data_diri.jenis_kelamin}</td>
                        </tr>
                        {/* Tambahkan baris tambahan untuk data lainnya */}
                      </tbody>
                    </table>
                  </p>
                  <a href="#scrollToHere" className="btn btn-primary">
                    Let's get to know me better
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="scrollToHere"
            className="flex flex-col md:flex-row w-full mt-2"
          >
            <div className="w-full md:w-1/2">
              <div className="text-center">
                <h1 className="text-3xl font-bold">
                  My Educational Background
                </h1>
              </div>
              <div className="text-center">
                <ul className="steps steps-vertical">
                  {data.data_diri.pendidikans.map((pendidikan, index) => (
                    <li className="step step-secondary" key={index}>
                      <div className="my-10 text-left">
                        <i>{pendidikan.tahun_mulai_ajaran}</i>
                        <p>{pendidikan.instansi_pendidikan}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-center">
                <h1 className="text-3xl font-bold">
                  Organizational Experience
                </h1>
              </div>
              <div className="text-center">
                <ul className="steps steps-vertical">
                  {data.data_diri.organisasis.map((organisasi, index) => (
                    <li className="step step-accent" key={index}>
                      <div className="my-10 text-left">
                        <i>{`${organisasi.tanggal_mulai_menjabat} - ${organisasi.tanggal_akhir_menjabat}`}</i>{" "}
                        <p>{`${organisasi.nama_organisasi} (${organisasi.posisi})`}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <div className="text-center">
                <h1 className="text-3xl font-bold">Check Out My Skills !</h1>
              </div>
              <div className="flex w-full justify-evenly my-10 flex-col md:flex-row">
                {data.data_diri.skills.map((skill, index) => (
                  <>
                    <div className="text-center p-3">
                      <div
                        className="radial-progress"
                        style={{
                          "--value": skill.capability,
                          "--size": "9rem",
                          "--thickness": "2px",
                        }}
                        role="progressbar"
                      >
                        {skill.capability}%
                      </div>
                      <div className="mt-3">
                        <p>{skill.nama_skill}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="text-center">
              <h1 className="text-3xl font-bold">
                Take a look at my Portofolios
              </h1>
            </div>
            <div className="flex w-full justify-evenly my-10 flex-col md:flex-row p-2">
              {data.data_diri.portofolios.map((portofolio, index) => (
                <div>
                  <div className="card card-compact w-96 bg-base-100 shadow-xl text-center mb-5">
                    <figure className="w-96 h-64 overflow-hidden">
                      <img
                        src={`${baseUrl}${portofolio.file_portofolio}`}
                        alt={`portofolio ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </figure>
                    <div className="card-body text-left">
                      <h5 className="font-bold">
                        {portofolio.nama_portofolio}
                      </h5>
                      <p>{portofolio.deskripsi_portofolio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PersWebHelsa;
