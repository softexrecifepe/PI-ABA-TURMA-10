// Sidebar.jsx
import React from "react";
import { FaHome, FaUser, FaAffiliatetheme , FaSignOutAlt } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrCube } from "react-icons/gr";
import "./SideBarCadastro.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon-container">
        <FaHome className="icon" title="Home" />
        <GrCube className="icon" title="Cubo" />
        <FaUser className="icon" title="User" />
        <IoMdAddCircleOutline className="icon" title="Adicionar" />
        <FaSignOutAlt className="icon" title="Graficos" />
      </div>
    </div>
  );
};

export default Sidebar;
