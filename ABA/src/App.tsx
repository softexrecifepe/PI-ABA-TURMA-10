import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Instituicao from './components/Instituiçoes';
import Menu from './components/Menu';
import GridComplexExample from './components/CadastrarInstituicoes';
import CadastroUsuario from './components/CadastroUsuario';
import Navbar from './components/Header';
import BarraLateral from './components/BarraLateral';
import Graficos from './components/Graficos';
import Sidebar from './components/SidebarCadastro';
import Instituicoes from './pages/InstituiçõesCadastro';
import PerfilAdm from './pages/PerfilAdm';


const App: React.FC = () => {
  
  return (
    <>
    <Instituicoes/>
    </>
  );
};

export default App;
