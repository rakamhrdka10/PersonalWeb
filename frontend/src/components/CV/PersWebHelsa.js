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
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center">
                <h1 className="text-5xl font-bold">
                  Halo, I am {data.data_diri.nama}
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
                    <li className="step" key={index}>
                      <i>{pendidikan.tahun_mulai_ajaran}</i> <br></br>
                      {pendidikan.instansi_pendidikan}
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
              <div className="">
                {data.data_diri.organisasis.map((organisasi, index) => (
                  <p>
                    <b>
                      <i>
                        {organisasi.tanggal_mulai_menjabat} -
                        {organisasi.tanggal_akhir_menjabat}
                      </i>
                    </b>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="mt-5 min-h-screen">
              <div className="text-center">
                <h1 className="text-3xl font-bold">Check Out My Skills !</h1>
              </div>
              {data.data_diri.skills.map((skill, index) => (
                <div className="flex-col">
                  <div className="text-center p-3">
                    <div
                      className="radial-progress mr-5"
                      style={{ "--value": skill.capability, "--size": "9rem" }}
                      role="progressbar"
                    >
                      {skill.capability}%
                    </div>
                    <div className="">
                      <p>{skill.nama_skill}</p>
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
