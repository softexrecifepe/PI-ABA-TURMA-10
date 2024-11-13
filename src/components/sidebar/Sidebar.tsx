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


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleSetActive = (path: string) => {
    setActivePath(path);
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <Link
            to="/"
            className={`sidebar-item ${activePath === "/" ? "active" : ""}`}
            onClick={() => handleSetActive("/")}
          >
            <li>🏠 Home</li>
          </Link>
          <Link
            to="/meusprojetos"
            className={`sidebar-item ${activePath === "/meusprojetos" ? "active" : ""}`}
            onClick={() => handleSetActive("/meusprojetos")}
          >
            <li>📂 Meus Projetos</li>
          </Link>
          <Link
            to="/perfil"
            className={`sidebar-item ${activePath === "/perfil" ? "active" : ""}`}
            onClick={() => handleSetActive("/perfil")}
          >
            <li>👤 Perfil</li>
          </Link>
          <Link
            to="/ajustes"
            className={`sidebar-item ${activePath === "/ajustes" ? "active" : ""}`}
            onClick={() => handleSetActive("/ajustes")}
          >
            <li>⚙️ Configuração</li>
          </Link>
          <Link
            to="/logout"
            className={`sidebar-item ${activePath === "/logout" ? "active" : ""}`}
            onClick={() => handleSetActive("/logout")}
          >
            <li>🚪 Logout</li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
