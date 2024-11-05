import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleMenu} className="hamburger-icon">
          ☰
        </button>
        {isOpen && (
          <div className="menu-overlay" onClick={closeMenu}>
            <nav className="menu" onClick={(e) => e.stopPropagation()}>
              <ul>
                <li><a href="#home" onClick={closeMenu}>Home</a></li>
                <li><a href="#projeto" onClick={closeMenu}>Projetos</a></li>
                <li><a href="#instituicoes" onClick={closeMenu}>Ver Instituições</a></li>
                <li><a href="#cadastrar" onClick={closeMenu}>Cadastrar</a></li>
                <li><a href="#graficos" onClick={closeMenu}>Ver Graficos</a></li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Menu;
