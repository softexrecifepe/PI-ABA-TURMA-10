// import React from "react";
// import "./Navbar.css";
// import imagem from "../../assets/images/aba.svg";
// import iconeProfile from "../../assets/images/icone-profile.png";
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';

// const Navbar: React.FC = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar-logo">
//         <img src={imagem} alt="" />
//         <span>Connection Labs</span>
//       </div>

//       <div className="navbar-right">
//         <div className="navbar-search">
//           <input type="text" placeholder="Pesquisar" />
//           <button>
//             <span role="img" aria-label="search-icon">
//               <SearchIcon style={{display:'flex', alignItems: 'center'}}/>
//             </span>
//           </button>
//         </div>

//         <div className="navbar-icons">
//           <span role="img" aria-label="notifications">
//             <NotificationsIcon/>
//           </span>
//         </div>

//         <div className="navbar-profile">
//           <img src={iconeProfile} alt="User Profile"/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import imagem from "../../assets/images/aba.svg";
// import iconeProfile from "../../assets/images/icone-profile.png";
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';

// interface NavbarProps {
//   onSearch: (searchText: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
//   const [searchText, setSearchText] = useState("");

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const text = event.target.value;
//     setSearchText(text);
//     onSearch(text); // Envia o texto ao componente de card para filtro
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-logo">
//         <img src={imagem} alt="" />
//         <span>Connection Labs</span>
//       </div>

//       <div className="navbar-right">
//         <div className="navbar-search">
//           <input
//             type="text"
//             placeholder="Pesquisar"
//             value={searchText}
//             onChange={handleSearchChange}
//           />
//           <button>
//             <SearchIcon style={{display: 'flex', alignItems: 'center'}}/>
//           </button>
//         </div>

//         <div className="navbar-icons">
//           <NotificationsIcon />
//         </div>

//         <div className="navbar-profile">
//           <img src={iconeProfile} alt="User Profile"/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import imagem from "../../assets/images/aba.svg";
// import iconeProfile from "../../assets/images/icone-profile.png";
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';

// interface NavbarProps {
//   onSearch: (searchText: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
//   const [searchText, setSearchText] = useState("");

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const text = event.target.value;
//     setSearchText(text);
//     onSearch(text); // Envia o texto ao componente de card para filtro
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-logo">
//         <img src={imagem} alt="" />
//         <span>Connection Labs</span>
//       </div>

//       <div className="navbar-right">
//         <div className="navbar-search">
//           <input
//             type="text"
//             placeholder="Pesquisar"
//             value={searchText}
//             onChange={handleSearchChange}
//           />
//           <button>
//             <SearchIcon style={{display: 'flex', alignItems: 'center'}}/>
//           </button>
//         </div>

//         <div className="navbar-icons">
//           <NotificationsIcon />
//         </div>

//         <div className="navbar-profile">
//           <img src={iconeProfile} alt="User Profile"/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

//////////////////////////////////////// filtro funcionando 13/11 ////////////////////////////////////

// import React from "react";
// import "./Navbar.css";
// import imagem from "../../assets/images/aba.svg";
// import iconeProfile from "../../assets/images/icone-profile.png";
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { Link } from "react-router-dom";
// import { Avatar } from "@mui/material";

// interface NavbarProps {
//   setBuscarProjeto: React.Dispatch<React.SetStateAction<string>>;
// }

// const Navbar: React.FC<NavbarProps> = ({ setBuscarProjeto }) => {
//   return (
//     <div className="navbar">
//       <Link to='/' className="navbar-logo">
//       <div className="navbar-logo">
//         <img src={imagem} alt="" />
//         <span>Connection Labs</span>
//       </div>
//       </Link>

//       <div className="navbar-right">
//         <div className="navbar-search">
//           <input
//             type="text"
//             placeholder="Pesquisar"
//             onChange={(e) => setBuscarProjeto(e.target.value)}
//           />
//           <button>
//             <span role="img" aria-label="search-icon">
//               <SearchIcon style={{ display: 'flex', alignItems: 'center' }} />
//             </span>
//           </button>
//         </div>

//         <div className="navbar-icons">
//           <span role="img" aria-label="notifications">
//             <NotificationsIcon />
//           </span>
//         </div>

//         <div className="navbar-profile">
//           {/* <img src={iconeProfile} alt="User Profile" /> */}
//           <Avatar alt="Avatar user" src={iconeProfile} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import imagem from "../../assets/images/aba.svg";
import iconeProfile from "../../assets/images/icone-profile.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

interface NavbarProps {
  setBuscarProjeto: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ setBuscarProjeto }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Recuperar os dados do usuário do localStorage
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    setUser(storedUser);
  }, []);

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <div className="navbar-logo">
          <img src={imagem} alt="" />
          <span>Connection Labs</span>
        </div>
      </Link>

      <div className="navbar-right">
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Pesquisar"
            onChange={(e) => setBuscarProjeto(e.target.value)}
          />
          <button>
            <span role="img" aria-label="search-icon">
              <SearchIcon style={{ display: "flex", alignItems: "center" }} />
            </span>
          </button>
        </div>

        <div className="navbar-icons">
          {user && (
            <span role="img" aria-label="notifications">
              <NotificationsIcon />
            </span>
          )}
        </div>

        <div className="navbar-profile">
          {user ? (
            <Avatar
              className="avatarUser"
              alt="Avatar do usuário"
              src={user.fotoPerfil || iconeProfile}
            />
          ) : (
            <div className="navbar-auth-buttons">
              <Link to="/login">
                <button className="navbar-btn-login">Login</button>
              </Link>
              <Link to="/cadastro">
                <button className="navbar-btn-cadastro">Cadastrar</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
