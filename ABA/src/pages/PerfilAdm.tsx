import React from "react";
import BarraLateral from "../components/BarraLateral";
import Sidebar from "../components/SidebarCadastro";
import Graficos from "../components/Graficos";

const PerfilAdm  =()=> {
    return(
        <>
        <Graficos/>
        <BarraLateral/>
        <Sidebar/>
        </>
    )
};

export default PerfilAdm;