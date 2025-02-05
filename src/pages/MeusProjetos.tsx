import React, { useState } from "react";
import ProjectCardUser from "../components/cardMeusProjetos/CardUserProjeto";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import FloatingActionButton from "../components/buttonAdd/buttonAdd";




const MeusProjetosPage: React.FC = () => {
    const [, setBuscarProjeto] = useState("");
  
  return (
    <>
    <Navbar setBuscarProjeto={setBuscarProjeto}/>
    <div className="conteudo">
        <Sidebar/>
        <div className="projetos"><ProjectCardUser buscarProjeto={""}/></div>
        <FloatingActionButton/>
    
      
    </div>
    </>
  );
};

export default MeusProjetosPage;
