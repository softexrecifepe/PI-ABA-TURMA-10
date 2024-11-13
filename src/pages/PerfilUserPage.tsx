import { useState } from "react";
import FloatingActionButton from "../components/buttonAdd/buttonAdd";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import PerfilUsuario from "../components/perfilUser/PerfilUsuario";


const PerfilUserPage: React.FC = () => {
    const [buscarProjeto, setBuscarProjeto] = useState("");
  
  return (
    <>
    <Navbar setBuscarProjeto={setBuscarProjeto}/>
    <div className="conteudo">
        <Sidebar/>
        {/* <button> <Link to='/cadastro'> Cadastro</Link></button>
        <button> <Link to='/login'>Login</Link></button> */}

        <div className="perfil"><PerfilUsuario/></div>
        <FloatingActionButton/>
    
      
    </div>
    </>
  );
};

export default PerfilUserPage;
