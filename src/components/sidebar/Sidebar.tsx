// import React from "react";
// import "./Sidebar.css";
// import { Link } from "react-router-dom";

// const Sidebar: React.FC = () => {
//   return (
//     <aside className="sidebar">
//       <nav>
//         <ul>
//           <Link to="/" className="sidebar-item active">
//             <li>🏠 Home</li>
//           </Link>
//           <Link to="/meusprojetos" className="sidebar-item">
//             <li>📂 Meus Projetos</li>
//           </Link>
//           <Link to="/perfil" className="sidebar-item">
//             <li>👤 Perfil</li>
//           </Link>
//           <Link to="/ajustes" className="sidebar-item">
//             <li>⚙️ Configuração</li>
//           </Link>
//           <Link to="" className="sidebar-item">
//             <li>🚪 Logout</li>
//           </Link>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

/////////////////////////////////////// funcioando 16/11 //////////////////////////////////

// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar: React.FC = () => {
//   const location = useLocation();
//   const [activePath, setActivePath] = useState(location.pathname);
//   const navigate = useNavigate();

//   const handleSetActive = (path: string) => {
//     setActivePath(path);
//   };

//   const handleLogout = () => {
//     // Exibe o prompt de confirmação para o logout
//     const confirmLogout = window.confirm(
//       "Você tem certeza que deseja sair da aplicação?"
//     );

//     if (confirmLogout) {
//       // Limpa o localStorage
//       localStorage.removeItem("user"); // Remove as informações do usuário

//       // Redireciona o usuário para a página de login ou a página inicial
//       navigate("/");
//     }
//   };

//   return (
//     <aside className="sidebar">
//       <nav>
//         <ul>
//           <Link
//             to="/"
//             className={`sidebar-item ${activePath === "/" ? "active" : ""}`}
//             onClick={() => handleSetActive("/")}
//           >
//             <li>🏠 Home</li>
//           </Link>
//           <Link
//             to="/meusprojetos"
//             className={`sidebar-item ${
//               activePath === "/meusprojetos" ? "active" : ""
//             }`}
//             onClick={() => handleSetActive("/meusprojetos")}
//           >
//             <li>📂 Meus Projetos</li>
//           </Link>
//           <Link
//             to="/perfil"
//             className={`sidebar-item ${
//               activePath === "/perfil" ? "active" : ""
//             }`}
//             onClick={() => handleSetActive("/perfil")}
//           >
//             <li>👤 Perfil</li>
//           </Link>
//           <Link
//             to="/ajustes"
//             className={`sidebar-item ${
//               activePath === "/ajustes" ? "active" : ""
//             }`}
//             onClick={() => handleSetActive("/ajustes")}
//           >
//             <li>⚙️ Configuração</li>
//           </Link>
//           <Link
//             to="/"
//             className={`sidebar-item ${
//               activePath === "/logout" ? "active" : ""
//             }`}
//             onClick={handleLogout}
//           >
//             <li>🚪 Logout</li>
//           </Link>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;



import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar se o usuário está logado
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o usuário está logado ao carregar o componente
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true); // Se o usuário estiver no localStorage, está logado
    } else {
      setIsLoggedIn(false); // Caso contrário, não está logado
    }
  }, []);

  const handleSetActive = (path: string) => {
    setActivePath(path);
  };

  const handleLogout = () => {
    // Exibe o prompt de confirmação para o logout
    const confirmLogout = window.confirm(
      "Você tem certeza que deseja sair da aplicação?"
    );

    if (confirmLogout) {
      // Limpa o localStorage
      localStorage.removeItem("user"); // Remove as informações do usuário

      // Redireciona o usuário para a página de login ou a página inicial
      navigate("/");
      setIsLoggedIn(false); // Atualiza o estado para refletir que o usuário saiu
      window.location.reload();
    }
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {/* Link Home sempre estará disponível */}
          <Link
            to="/"
            className={`sidebar-item ${activePath === "/" ? "active" : ""}`}
            onClick={() => handleSetActive("/")}
          >
            <li>🏠 Home</li>
          </Link>

          {/* Links desabilitados caso o usuário não esteja logado */}
          <Link
            to="/meusprojetos"
            className={`sidebar-item ${activePath === "/meusprojetos" ? "active" : ""}`}
            onClick={() => handleSetActive("/meusprojetos")}
            style={{ pointerEvents: isLoggedIn ? 'auto' : 'none', opacity: isLoggedIn ? 1 : 0.5 }}
          >
            <li>📂 Meus Projetos</li>
          </Link>

          <Link
            to="/perfil"
            className={`sidebar-item ${activePath === "/perfil" ? "active" : ""}`}
            onClick={() => handleSetActive("/perfil")}
            style={{ pointerEvents: isLoggedIn ? 'auto' : 'none', opacity: isLoggedIn ? 1 : 0.5 }}
          >
            <li>👤 Perfil</li>
          </Link>

          <Link
            to="/ajustes"
            className={`sidebar-item ${activePath === "/ajustes" ? "active" : ""}`}
            onClick={() => handleSetActive("/ajustes")}
            style={{ pointerEvents: isLoggedIn ? 'auto' : 'none', opacity: isLoggedIn ? 1 : 0.5 }}
          >
            <li>⚙️ Configuração</li>
          </Link>

          {/* Link de Logout somente aparece se o usuário estiver logado */}
          {isLoggedIn && (
            <Link
              to="/"
              className={`sidebar-item ${activePath === "/logout" ? "active" : ""}`}
              onClick={handleLogout}
            >
              <li>🚪 Logout</li>
            </Link>
          )}
        </ul>
      </nav>
      <footer className="sidebar-footer">
        <p>ABA © 2024</p>
        <p>Todos os direitos reservados</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
