import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import CadastroPage from './pages/Cadastro';
import MeusProjetosPage from './pages/MeusProjetos';
import PerfilUserPage from './pages/PerfilUserPage';

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
        </Routes>
      </Router>
    </>
  )
}

export default App
