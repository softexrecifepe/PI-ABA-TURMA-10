import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import CadastroPage from './pages/Cadastro';
import MeusProjetosPage from './pages/MeusProjetos';
import PerfilUserPage from './pages/PerfilUserPage';
import HomeAdmin from './pages/HomeAdmin';
import ProjetosPendentesPage from './pages/ProjetosPendentesAdmin';
import HomeProjetoCompartilhado from './pages/HomeProjetoCompartilhado';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/meusprojetos" element={<MeusProjetosPage />} />
          <Route path="/perfil" element={<PerfilUserPage />} />
          <Route path="/home-admin" element={<HomeAdmin />} />
          <Route path="/projetos-pendentes" element={<ProjetosPendentesPage />} />
          <Route path="/perfil-admin" element={<ProjetosPendentesPage />} />
          <Route path="/projeto/:id" element={<HomeProjetoCompartilhado />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
