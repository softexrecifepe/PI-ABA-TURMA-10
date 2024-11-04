import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className="sidebar-item active">🏠 Home</li>
          <li className="sidebar-item">📂 Meus Projetos</li>
          <li className="sidebar-item">👤 Perfil</li>
          <li className="sidebar-item">⚙️ Configuração</li>
          <li className="sidebar-item">🚪 Logout</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
