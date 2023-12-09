import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const Sidebar = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    setId(localStorage.getItem('id'))
    setRole(localStorage.getItem('role_akun'));

    if(role === 'Admin'){
      setAdmin(true)
    }
  }, [role])

  

  const logoutHandler = async() => {
    try {
      localStorage.removeItem('id');
      localStorage.removeItem('access_token');
      localStorage.removeItem('username_akun');
      localStorage.removeItem('role_akun');
      axios.delete('http://194.233.93.124:4201/logout');
      navigate('/');
      console.log("berhasil logout")
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <aside className="w-64 h-auto text-white p-4 flex flex-col justify-between justify-center" style={{ backgroundColor: '#4D4C7D' }}>
      <Link to={`/dashboard`}>
        <div className="mb-8 text-2xl font-semibold text-center pt-2" style={{ color: '#fff' }}>
          CV Maker
          <div className="mt-2 border-b border-white"></div>
        </div>
      </Link>

      {admin ? (
        <ul className="space-y-2 flex-1 overflow-y-auto ml-0 pl-0">
        <li>
          <Link to={`/datadiri`} className="flex items-center p-2  text-white rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Manage User
          </Link>
        </li>
      </ul>
      ): (
        <ul className="space-y-2 flex-1 overflow-y-auto ml-0 pl-0">
        <li>
          <Link to={`/datadiri/${id}`} className="flex items-center p-2  text-white rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Data Diri
          </Link>
        </li>
        <li>
          <Link to={`/pendidikan/${id}`} className="flex items-center p-2 text-white space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Pendidikan
          </Link>
        </li>
        <li>
          <Link to={`/organisasi/${id}`} className="flex items-center p-2 text-white space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Organisasi
          </Link>
        </li>
        <li>
          <Link to={`/portofolio/${id}`} className="flex items-center p-2 text-white space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Portofolio
          </Link>
        </li>
        <li>
          <Link to={`/skill/${id}`} className="flex items-center p-2 text-white space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Skill
          </Link>
        </li>
      </ul>
      )}
      
      
      <div>
        <button className="p-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
