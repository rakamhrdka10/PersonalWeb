import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-modal-video/css/modal-video.min.css';
import '../../styles/style.css';
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import 'animate.css';
import { useNavigate, useParams } from "react-router-dom";

const ConvertToWeb = () => {
  const [data, setData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const id_akun = localStorage.getItem('id');
  const username = localStorage.getItem('username_akun');

  const baseUrl = "http://localhost:5000/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5000/convert-web/`,
          { username: username, id_akun: id_akun }
        );
        console.log("Data : ", response.data);
        setData(response.data);
        setDataLoaded(true);
      } catch (error) {
        console.log(error.message);
        setNotFound(true);
      }
    };

    fetchData();
  }, [username, id_akun]);

  if (notFound) {
    return <div>Data not found</div>;
  }

  if (!dataLoaded) {
    return <div>Loading...</div>;
  }

  // Rest of your ConvertToWeb component
};

export default ConvertToWeb;
