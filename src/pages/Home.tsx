import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import Sidebar from "../components/sidebar/Sidebar";
import RecipeReviewCard from "../components/card/Card";
import FloatingActionButton from "../components/buttonAdd/buttonAdd";
import { useState } from "react";

const Home = () => {
  const [buscarProjeto, setBuscarProjeto] = useState("");
  return (
    <>
      <Navbar setBuscarProjeto={setBuscarProjeto}/>
      <div className="conteudo">
        <Sidebar />

        <div className="projetos"><RecipeReviewCard buscarProjeto={buscarProjeto}/></div>
        <FloatingActionButton/>
      </div>
    </>
  );
};

export default Home;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import FloatingActionButton from "../components/buttonAdd/buttonAdd";
// import RecipeReviewCard from "../components/card/Card";
// import Sidebar from "../components/sidebar/Sidebar";
// import Navbar from "../components/navbar/Navbar";

// const BASE_URL = "http://localhost:3000/projetos";

// const Home: React.FC = () => {
//   const [projetos, setProjetos] = useState([]);

//   const carregarProjetos = async () => {
//     try {
//       const response = await axios.get(BASE_URL);
//       setProjetos(response.data);
//     } catch (error) {
//       console.error("Erro ao carregar projetos:", error);
//     }
//   };

//   useEffect(() => {
//     carregarProjetos();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="conteudo">
//         <Sidebar />

//         <div className="projetos">
//           <RecipeReviewCard />
//         </div>
//       <FloatingActionButton onProjetoAdicionado={carregarProjetos} />
//       </div>
//     </>
//   );
// };

// export default Home;
