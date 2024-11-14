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

const App: React.FC = () => {
  
  return (
    <>
    <GridComplexExample/>
    <BarraLateral/>
    </>
  );
};

export default App;
