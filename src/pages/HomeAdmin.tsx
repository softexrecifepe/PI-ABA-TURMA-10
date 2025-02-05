import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import RecipeReviewCard from "../components/card/Card";
import FloatingActionButton from "../components/buttonAdd/buttonAdd";
import { useState } from "react";
import SidebarAdmin from "../components/sidebarAdmin/SidebarAdmin";

const HomeAdmin = () => {
  const [buscarProjeto, setBuscarProjeto] = useState("");
  return (
    <>
      <Navbar setBuscarProjeto={setBuscarProjeto}/>
      <div className="conteudo">
        <SidebarAdmin />
        <div className="projetos"><RecipeReviewCard buscarProjeto={buscarProjeto}/></div>
        <FloatingActionButton/>
      </div>
    </>
  );
};

export default HomeAdmin;