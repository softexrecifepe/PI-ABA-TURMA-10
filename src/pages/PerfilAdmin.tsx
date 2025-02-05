import { useState } from "react";
import FloatingActionButton from "../components/buttonAdd/buttonAdd";
import Navbar from "../components/navbar/Navbar";
import PerfilUsuario from "../components/perfilUser/PerfilUsuario";
import SidebarAdmin from "../components/sidebarAdmin/SidebarAdmin";


const PerfilAdminPage: React.FC = () => {
    const [, setBuscarProjeto] = useState("");
  
  return (
    <>
    <Navbar setBuscarProjeto={setBuscarProjeto}/>
    <div className="conteudo">
        <SidebarAdmin/>

        <div className="perfil"><PerfilUsuario/></div>
        <FloatingActionButton/>
    
      
    </div>
    </>
  );
};

export default PerfilAdminPage;
