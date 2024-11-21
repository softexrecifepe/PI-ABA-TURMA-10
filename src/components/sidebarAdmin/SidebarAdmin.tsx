// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./SidebarAdmin.css";

// const Sidebar: React.FC = () => {
//   const location = useLocation();
//   const [activePath, setActivePath] = useState(location.pathname);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar se o usuário está logado
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Verifica se o usuário está logado ao carregar o componente
//     const user = localStorage.getItem("user");
//     if (user) {
//       setIsLoggedIn(true); // Se o usuário estiver no localStorage, está logado
//     } else {
//       setIsLoggedIn(false); // Caso contrário, não está logado
//     }
//   }, []);

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
//       setIsLoggedIn(false); // Atualiza o estado para refletir que o usuário saiu
//       window.location.reload();
//     }
//   };

//   return (
//     <aside className="sidebarAdmin">
//       <nav>
//         <ul>
//           {/* Link Home sempre estará disponível */}
//           <Link
//             to="/"
//             className={`sidebar-item ${activePath === "/home-admin" ? "active" : ""}`}
//             onClick={() => handleSetActive("/home-admin")}
//           >
//             <li>🏠 Home</li>
//           </Link>

//           {/* Links desabilitados caso o usuário não esteja logado */}
//           <Link
//             to="/meusprojetos"
//             className={`sidebar-item ${activePath === "/projetos-pendentes" ? "active" : ""}`}
//             onClick={() => handleSetActive("/projetos-pendentes")}
//             style={{ pointerEvents: isLoggedIn ? 'auto' : 'none', opacity: isLoggedIn ? 1 : 0.5 }}
//           >
//             <li>📂 Projeto Pendente</li>
//           </Link>

//           <Link
//             to="/perfil"
//             className={`sidebar-item ${activePath === "/perfilAdmin" ? "active" : ""}`}
//             onClick={() => handleSetActive("/perfilAdmin")}
//             style={{ pointerEvents: isLoggedIn ? 'auto' : 'none', opacity: isLoggedIn ? 1 : 0.5 }}
//           >
//             <li>👤 Perfil</li>
//           </Link>

//           <Link
//             to="/ajustes"
//             className={`sidebar-item ${activePath === "/ajustes" ? "active" : ""}`}
//             onClick={() => handleSetActive("/ajustes")}
//             style={{ pointerEvents: isLoggedIn ? 'auto' : 'none', opacity: isLoggedIn ? 1 : 0.5 }}
//           >
//             <li>⚙️ Configuração</li>
//           </Link>

//           {/* Link de Logout somente aparece se o usuário estiver logado */}
//           {isLoggedIn && (
//             <Link
//               to="/"
//               className={`sidebar-item ${activePath === "/logout" ? "active" : ""}`}
//               onClick={handleLogout}
//             >
//               <li>🚪 Logout</li>
//             </Link>
//           )}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;


import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SidebarAdmin.css";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar se o usuário está logado
  const navigate = useNavigate();

  // Use location.pathname diretamente no lugar de um estado
  useEffect(() => {
    // Verifica se o usuário está logado ao carregar o componente
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true); // Se o usuário estiver no localStorage, está logado
    } else {
      setIsLoggedIn(false); // Caso contrário, não está logado
    }
  }, []);

  const handleLogout = () => {
    // Exibe o prompt de confirmação para o logout
    const confirmLogout = window.confirm(
      "Você tem certeza que deseja sair da aplicação?"
    );

    if (confirmLogout) {
      // Limpa o localStorage
      localStorage.removeItem("user"); // Remove as informações do usuário

      // Redireciona o usuário para a página de login ou a página inicial
      navigate("/"); // Redireciona para a página inicial após o logout
    }
  };

  return (
    <aside className="sidebarAdmin">
      <nav>
        <ul>
          {/* Link Home sempre estará disponível */}
          <Link
            to="/home-admin"
            className={`sidebar-item ${location.pathname === "/home-admin" ? "active" : ""}`}
          >
            <li>🏠 Home</li>
          </Link>

          {/* Links desabilitados caso o usuário não esteja logado */}
          <Link
            to="/projetos-pendentes"
            className={`sidebar-item ${location.pathname === "/projetos-pendentes" ? "active" : ""}`}
            style={{ pointerEvents: isLoggedIn ? 'auto' : 'none', opacity: isLoggedIn ? 1 : 0.5 }}
          >
            <li>📂 Projeto Pendente</li>
          </Link>

          <Link
            to="/perfil-admin"
            className={`sidebar-item ${location.pathname === "/perfil-admin" ? "active" : ""}`}
            style={{ pointerEvents: isLoggedIn ? 'auto' : 'none', opacity: isLoggedIn ? 1 : 0.5 }}
          >
            <li>👤 Perfil</li>
          </Link>

          <Link
            to="/ajustes"
            className={`sidebar-item ${location.pathname === "/ajustes" ? "active" : ""}`}
            style={{ pointerEvents: isLoggedIn ? 'auto' : 'none', opacity: isLoggedIn ? 1 : 0.5 }}
          >
            <li>⚙️ Configuração</li>
          </Link>

          {/* Link de Logout somente aparece se o usuário estiver logado */}
          {isLoggedIn && (
            <Link
              to="/"
              className={`sidebar-item ${location.pathname === "/logout" ? "active" : ""}`}
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
