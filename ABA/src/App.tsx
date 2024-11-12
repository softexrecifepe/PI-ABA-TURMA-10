import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Instituicao from './components/Instituiçoes';
import Menu from './components/Menu';
import GridComplexExample from './components/CadastrarInstituicoes';
import CadastroUsuario from './components/CadastroUsuario';
import Navbar from './components/Header';

const App: React.FC = () => {
  
  return (
    <>
    <GridComplexExample/>
    </>
  );
};

export default App;
