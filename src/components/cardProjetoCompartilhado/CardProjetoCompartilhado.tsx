// import * as React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { grey } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { useParams } from "react-router-dom";


// const BASE_URL = "http://localhost:3000/projetos";

// interface Project {
//   id: number;
//   titulo: string;
//   descricao: string;
//   autores: string;
//   categoria: string[];
//   dataPostagem: string;
//   imagem: string;
//   fotoPerfil?: string;
//   linkDrive: string;
//   likes: number;
//   usersLiked: string[]; // Lista de IDs de usuários que curtiram
// }

// interface ProjectCardProps {
//   buscarProjeto: string;
// }

// const ExpandMore = styled(IconButton, {
//   shouldForwardProp: (prop) => prop !== "expand",
// })<{ expand: boolean }>(({ theme, expand }) => ({
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
//   transform: expand ? "rotate(180deg)" : "rotate(0deg)",
// }));

// export default function ProjectCard({ buscarProjeto }: ProjectCardProps) {
//   const [expanded, setExpanded] = useState(false);
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [user, setUser] = useState<any>(null); // Estado para armazenar o usuário logado
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Controle do menu de opções
//   const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null); // ID do projeto para exclusão
//   const {id} = useParams();


//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const loadProjects = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/${id}`);
//       const sortedProjects = response.data.sort(
//         (a: Project, b: Project) =>
//           new Date(b.dataPostagem).getTime() -
//           new Date(a.dataPostagem).getTime()
//       );
//       setProjects(sortedProjects);
//     } catch (error) {
//       console.error("Erro ao carregar projetos:", error);
//     }
//   };

//   const projetosFiltrados = projects.filter((project) =>
//     project.autores.toLowerCase().includes(buscarProjeto.toLowerCase())
//   );

//   // Carregar o usuário logado do localStorage
//   useEffect(() => {
//     const loggedUser = localStorage.getItem("user"); // Pega o objeto de usuário armazenado
//     if (loggedUser) {
//       setUser(JSON.parse(loggedUser)); // Armazena o usuário no estado
//     }
//     loadProjects();
//   }, []);

//   // Função para compartilhar o projeto
//   const handleShareClick = (project: Project) => {
//     if (navigator.share) {
//       navigator
//         .share({
//           title: project.titulo,
//           text: project.descricao,
//           url: window.location.href + `/projeto/${project.id}`,
//         })
//         .then(() => {
//           console.log("Projeto compartilhado com sucesso!");
//         })
//         .catch((error) => {
//           console.error("Erro ao compartilhar:", error);
//         });
//     } else {
//       alert("Compartilhamento não é suportado neste navegador.");
//     }
//   };

//   // Função para curtir o projeto
//   const handleLikeClick = async (project: Project) => {
//     if (!user) {
//       alert("Você precisa estar logado para curtir o projeto!"); // Se o usuário não estiver logado, mostramos um alerta
//       return;
//     }

//     const userId = user.id; // Pega o ID do usuário logado

//     // Verifica se o usuário já deu like
//     const hasLiked = project.usersLiked.includes(userId);

//     // Atualiza a lista de usuários que curtiram e o número de likes
//     const updatedProject = {
//       ...project,
//       likes: hasLiked ? project.likes - 1 : project.likes + 1,
//       usersLiked: hasLiked
//         ? project.usersLiked.filter((id) => id !== userId) // Remove o like do usuário
//         : [...project.usersLiked, userId], // Adiciona o like do usuário
//     };

//     try {
//       // Atualiza o projeto no backend
//       await axios.put(`${BASE_URL}/${project.id}`, updatedProject);
//       // Atualiza o estado local com os novos dados
//       setProjects((prevProjects) =>
//         prevProjects.map((p) => (p.id === project.id ? updatedProject : p))
//       );
//     } catch (error) {
//       console.error("Erro ao atualizar like:", error);
//     }
//   };

//   const handleDeleteClick = async () => {
//     if (selectedProjectId !== null) {
//       const confirmDelete = window.confirm(
//         "Tem certeza que deseja excluir este projeto?"
//       );
//       if (confirmDelete) {
//       try {
//         await axios.delete(`${BASE_URL}/${selectedProjectId}`);
//         setProjects((prevProjects) =>
//           prevProjects.filter((project) => project.id !== selectedProjectId)
//         );
//         setAnchorEl(null); // Fecha o menu após a exclusão
//         setSelectedProjectId(null); // Limpar o ID do projeto selecionado
//         console.log("Projeto excluído com sucesso!");
//       } catch (error) {
//         console.error("Erro ao excluir projeto:", error);
//       }
//     }
//     }
//   };

//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, projectId: number) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedProjectId(projectId); // Define o ID do projeto que será excluído
//   };

//   // Função para fechar o menu
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setSelectedProjectId(null); // Limpar o ID do projeto selecionado
//   };

//   const isAdmin = user && user.email === "admin"; // Aqui você verifica o e-mail institucional do admin
  


//   return (
//     <div>
//       {Array.isArray(projetosFiltrados) &&
//         projetosFiltrados.map((project) => (
//           <Card
//             key={project.id}
//             sx={{
//               width: "800px",
//               borderRadius: "16px",
//               boxShadow: 3,
//               marginBottom: "20px",
//             }}
//           >
//             <CardHeader
//               avatar={
//                 <Avatar sx={{ bgcolor: grey }} aria-label="user-profile">
//                   <img
//                     src={project.fotoPerfil || "caminho/para/imagem/default.jpg"}
//                     alt="foto de perfil do dono da postagem"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </Avatar>
//               }
//               action={
//                 isAdmin && ( // Verifica se é admin
//                   <IconButton
//                     aria-label="settings"
//                     onClick={(e) => handleMenuOpen(e, project.id)} // Abre o menu com o ID do projeto
//                   >
//                     <MoreVertIcon />
//                   </IconButton>
//                 )
//               }
//               title={project.autores}
//               subheader={project.dataPostagem}
//             />
//             <CardMedia
//               component="img"
//               height="400"
//               image={project.imagem || "caminho/para/imagem/default.jpg"}
//               alt={project.titulo}
//             />
//             <CardContent>
//               <Typography
//                 variant="h6"
//                 sx={{ fontWeight: "bold", marginBottom: 1 }}
//               >
//                 {project.titulo}
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 sx={{ fontWeight: "bold", marginTop: 2 }}
//               >
//                 Autores:
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {project.autores}
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 sx={{ fontWeight: "bold", marginTop: 2 }}
//               >
//                 Categorias:
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {project.categoria.join(", ")}
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton
//                 aria-label="add to favorites"
//                 onClick={() => handleLikeClick(project)}
//                 disabled={!user} // Desabilita o botão de like para usuários não logados
//               >
//                 <FavoriteIcon
//                   color={project.usersLiked.includes(user?.id) ? "error" : "inherit"} 
//                 />
//                 <Typography variant="body2" sx={{ marginLeft: 1 }}>
//                   {project.likes}
//                 </Typography>
//               </IconButton>
//               <IconButton
//                 aria-label="share"
//                 onClick={() => handleShareClick(project)}
//               >
//                 <ShareIcon />
//               </IconButton>
//               <ExpandMore
//                 expand={expanded}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ fontWeight: "bold", marginBottom: 2 }}
//                 >
//                   Descrição do projeto: <br />
//                   <br />
//                   {project.descricao}
//                 </Typography>
//                 <Typography
//                   variant="subtitle2"
//                   sx={{
//                     fontWeight: "bold",
//                     marginTop: 2,
//                     color: "text.secondary",
//                   }}
//                 >
//                   Link do drive:
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   <a
//                     href={project.linkDrive}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{ textDecoration: "none", color: "#1976d2" }}
//                   >
//                     {project.linkDrive}
//                   </a>
//                 </Typography>
//               </CardContent>
//             </Collapse>
//             {/* Menu de opções */}
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//             >
//               {isAdmin && (
//                 <MenuItem onClick={handleDeleteClick}>
//                   Excluir
//                 </MenuItem>
//               )}
//             </Menu>
//           </Card>
//         ))}
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Hook para pegar o id da URL
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";

const BASE_URL = "https://api-aba.vercel.app/projetos";

interface Project {
  id: string;
  titulo: string;
  descricao: string;
  autores: string;
  categoria: string[];
  dataPostagem: string;
  imagem: string;
  fotoPerfil?: string;
  linkDrive: string;
  likes: number;
}

const CardProjectCompartilhado = () => {
  const { id } = useParams(); // Pega o id da URL
  const [project, setProject] = useState<Project | null>(null); // Estado para armazenar o projeto

  useEffect(() => {
    const loadProjectDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        setProject(response.data); // Armazena o projeto recuperado
      } catch (error) {
        console.error("Erro ao carregar detalhes do projeto:", error);
      }
    };

    if (id) {
      loadProjectDetails();
    }
  }, [id]); // Carrega os detalhes do projeto sempre que o id mudar

  if (!project) {
    return <div>Carregando...</div>; // Exibe uma mensagem enquanto o projeto está sendo carregado
  }

  return (
    <Card sx={{ width: "800px", margin: "auto", borderRadius: "16px", boxShadow: 3, marginTop: "20px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey }} aria-label="user-profile">
            <img
              src={project.fotoPerfil || "caminho/para/imagem/default.jpg"}
              alt="foto de perfil do dono da postagem"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Avatar>
        }
        title={project.autores}
        subheader={project.dataPostagem}
      />
      <CardMedia
        component="img"
        height="400"
        image={project.imagem || "caminho/para/imagem/default.jpg"}
        alt={project.titulo}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          {project.titulo}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginTop: 2 }}>
          Autores:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.autores}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginTop: 2 }}>
          Descrição:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.descricao}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginTop: 2 }}>
          Categorias:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.categoria.join(", ")}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginTop: 2 }}>
          Link do drive:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <a
            href={project.linkDrive}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            {project.linkDrive}
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardProjectCompartilhado;
