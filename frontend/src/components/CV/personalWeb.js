import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PersWebAini from "./PersWebAini/PersWebAini.js";
import PersWebDaffa from "./PersWebDaffa";
import PersWebGhessa from "./PersWebGhessa";
import PersWebHelsa from "./PersWebHelsa";
import PersWebRafi from "./PersWebRafi";

const ConvertToWeb = () => {
  const [activeView, setActiveView] = useState(localStorage.getItem('template'));

  // Fungsi untuk mengalihkan antara tampilan pertama dan kedua
  const handleSelect = (eventKey) => {
    setActiveView(eventKey);
    localStorage.setItem('template', eventKey);
  };

  const dropdownStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    zIndex: 1000,
  };

  return (
    <div>
      {/* <button onClick={toggleView}>Toggle View</button> */}
      <div style={dropdownStyle}>
        <DropdownButton id="dropdown-basic-button" title="Switch View" variant="success" onSelect={handleSelect}>
          <Dropdown.Item eventKey="first" style={{ width: '100%', textAlign: 'center' }}>Personal Web Daffa</Dropdown.Item>
          <Dropdown.Item eventKey="second" style={{ width: '100%', textAlign: 'center' }}>Personal Web Aini</Dropdown.Item>
          <Dropdown.Item eventKey="third" style={{ width: '100%', textAlign: 'center' }}>Personal Web Helsa</Dropdown.Item>
          <Dropdown.Item eventKey="fourth" style={{ width: '100%', textAlign: 'center' }}>Personal Web Ghessa</Dropdown.Item>
          <Dropdown.Item eventKey="fifth" style={{ width: '100%', textAlign: 'center' }}>Personal Web Rafi</Dropdown.Item>
        </DropdownButton>
      </div>
      {activeView === 'first' ? (
        <PersWebDaffa/>
      ) : activeView === 'second' ?(
        <PersWebAini/>
      ) : activeView === 'third' ?(
        <PersWebHelsa/>
      ) : activeView === 'fourth' ? (
        <PersWebGhessa/>
      ) : activeView === 'fifth' ? (
        <PersWebRafi/>
      ) : <PersWebDaffa/>}
    </div>
  );
}

export default ConvertToWeb