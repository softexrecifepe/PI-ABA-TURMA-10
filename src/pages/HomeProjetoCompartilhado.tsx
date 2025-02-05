import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import FloatingActionButton from "../components/buttonAdd/buttonAdd";
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import CardProjectCompartilhado from "../components/cardProjetoCompartilhado/CardProjetoCompartilhado";

const HomeProjetoCompartilhado = () => {
  const [, setBuscarProjeto] = useState("");
  return (
    <>
      <Navbar setBuscarProjeto={setBuscarProjeto}/>
      <div className="conteudo">
        <Sidebar />
        <div className="projetos-compartilhados"><CardProjectCompartilhado/></div>
        <FloatingActionButton/>
      </div>
    </>
  );
};

export default HomeProjetoCompartilhado;