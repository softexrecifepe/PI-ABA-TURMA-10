import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import FloatingActionButton from "../components/buttonAdd/buttonAdd";
import SidebarAdmin from "../components/sidebarAdmin/SidebarAdmin";
import ProjectCardPendentes from "../components/cardProjetosPendentes/CardUserProjeto";




const ProjetosPendentesPage: React.FC = () => {
    const [, setBuscarProjeto] = useState("");
  
  return (
    <>
    <Navbar setBuscarProjeto={setBuscarProjeto}/>
    <div className="conteudo">
        <SidebarAdmin/>

        <div className="projetos"><ProjectCardPendentes buscarProjeto={""}/></div>
        <FloatingActionButton/>
    
      
    </div>
    </>
  );
};

export default ProjetosPendentesPage;
