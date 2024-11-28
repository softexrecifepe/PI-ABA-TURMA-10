import React from "react";
import BarraLateral from "../components/BarraLateral";
import Sidebar from "../components/SidebarCadastro";
import Graficos from "../components/Graficos";
import MyBarChart from "../components/Graficos";


const PerfilAdm  =()=> {
    return(
        <>
        <BarraLateral/>
        <MyBarChart/>
        <Sidebar/>
        </>
    )
};

export default PerfilAdm;