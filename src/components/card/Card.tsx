// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import imagemPerfil from '../../assets/images/icone-profile.png';
// import imagemProjeto from '../../assets/images/cultura-maker.jpg';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
//   ...(props => ({
//     transform: props.expand ? 'rotate(180deg)' : 'rotate(0deg)',
//   })),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ width: '800px', borderRadius: '16px', boxShadow: 3 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             <img src={imagemPerfil} alt="" />
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="800"
//         image={imagemProjeto}
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
//           <Typography sx={{ marginBottom: 2 }}>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//           </Typography>
//           <Typography sx={{ marginBottom: 2 }}>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography sx={{ marginBottom: 2 }}>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is absorbed,
//             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//             mussels, tucking them down into the rice, and cook again without
//             stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don't open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import imagemPerfil from '../../assets/images/icone-profile.png';
// import imagemProjeto from '../../assets/images/cultura-maker.jpg';

// interface ExpandMoreProps {
//   expand: boolean;
// }

// const ExpandMore = styled(IconButton, {
//     shouldForwardProp: (prop) => prop !== 'expand', // Evita passar a prop 'expand' para o DOM
//   })<{ expand: boolean }>(({ theme, expand }) => ({
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//     transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
//   }));

// export default function ProjectCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ width: '800px', borderRadius: '16px', boxShadow: 3, marginBottom: '20px' }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="user-profile">
//             <img src={imagemPerfil} alt="User" />
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Nome do Usuário"
//         subheader="Data da Postagem"
//       />
//       <CardMedia
//         component="img"
//         height="400"
//         image={imagemProjeto}
//         alt="Imagem do Projeto"
//       />
//       <CardContent>
//         <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
//           Descrição do Projeto
//         </Typography>
//         <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
//           Descrição breve do projeto. Este campo pode conter um resumo do que o projeto aborda.
//         </Typography>

//         <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//           Autores:
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Nome dos autores do projeto.
//         </Typography>

//         <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 2 }}>
//           Categorias:
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           - Cortadora a laser <br />
//           - Arquivo 2D <br />
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//             Licença Creative Commons:
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
//             Tipo de licença Creative Commons utilizada no projeto.
//           </Typography>

//           <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//             URL do Drive:
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
//             Link para o drive contendo os arquivos do projeto.
//           </Typography>

//           <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//             Identificadores do projeto (Hashtags):
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
//             #hashtag1 #hashtag2 #hashtag3
//           </Typography>

//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import imagemPerfil from '../../assets/images/icone-profile.png';
// import imagemProjeto from '../../assets/images/cultura-maker.jpg';

// interface ExpandMoreProps {
//   expand: boolean;
// }

// const ExpandMore = styled(IconButton, {
//     shouldForwardProp: (prop) => prop !== 'expand', // Evita passar a prop 'expand' para o DOM
//   })<{ expand: boolean }>(({ theme, expand }) => ({
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//     transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
//   }));

// export default function ProjectCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ width: '800px', borderRadius: '16px', boxShadow: 3, marginBottom: '20px' }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="user-profile">
//             <img src={imagemPerfil} alt="User" />
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Nome do Usuário"
//         subheader="Data da Postagem"
//       />
//       <CardMedia
//         component="img"
//         height="400"
//         image={imagemProjeto}
//         alt="Imagem do Projeto"
//       />
//       <CardContent>
//         <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
//           Descrição do Projeto
//         </Typography>
//         <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
//           Descrição breve do projeto. Este campo pode conter um resumo do que o projeto aborda.
//         </Typography>

//         <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//           Autores:
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Nome dos autores do projeto.
//         </Typography>

//         <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 2 }}>
//           Categorias:
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           - Cortadora a laser <br />
//           - Arquivo 2D <br />
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//             Licença Creative Commons:
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
//             Tipo de licença Creative Commons utilizada no projeto.
//           </Typography>

//           <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//             URL do Drive:
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
//             Link para o drive contendo os arquivos do projeto.
//           </Typography>

//           <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//             Identificadores do projeto (Hashtags):
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
//             #hashtag1 #hashtag2 #hashtag3
//           </Typography>

//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

/////////////////////////////////////////// funcionando 03/11 ///////////////////////////////////////////////////////

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
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const BASE_URL = "http://localhost:3000/projetos";

// interface Project {
//   id: number;
//   titulo: string;
//   descricao: string;
//   autores: string;
//   categoria: string[];
//   dataPostagem: string;
//   imagem: string;
// }

// interface ExpandMoreProps {
//   expand: boolean;
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

// export default function ProjectCard() {
//   const [expanded, setExpanded] = useState(false);
//   const [projects, setProjects] = useState<Project[]>([]);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const loadProjects = async () => {
//     try {
//       const response = await axios.get(BASE_URL);
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

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   return (
//     <div>
//       {projects.map((project) => (
//         <Card
//           key={project.id}
//           sx={{
//             width: "800px",
//             borderRadius: "16px",
//             boxShadow: 3,
//             marginBottom: "20px",
//           }}
//         >
//           <CardHeader
//             avatar={
//               <Avatar sx={{ bgcolor: red[500] }} aria-label="user-profile">
//                 <img src={project.imagem} alt={project.titulo} />
//               </Avatar>
//             }
//             action={
//               <IconButton aria-label="settings">
//                 <MoreVertIcon />
//               </IconButton>
//             }
//             title={project.autores}
//             subheader={project.dataPostagem}
//           />
//           <CardMedia
//             component="img"
//             height="400"
//             image={project.imagem || "caminho/para/imagem/default.jpg"}
//             alt={project.titulo}
//           />
//           <CardContent>
//             <Typography
//               variant="h6"
//               sx={{ fontWeight: "bold", marginBottom: 1 }}
//             >
//               {project.titulo}
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               sx={{ fontWeight: "bold", marginTop: 2 }}
//             >
//               Autores:
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {project.autores}
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               sx={{ fontWeight: "bold", marginTop: 2 }}
//             >
//               Categorias:
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {project.categoria.join(", ")}
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites">
//               <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="share">
//               <ShareIcon />
//             </IconButton>
//             <ExpandMore
//               expand={expanded}
//               onClick={handleExpandClick}
//               aria-expanded={expanded}
//               aria-label="show more"
//             >
//               <ExpandMoreIcon />
//             </ExpandMore>
//           </CardActions>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{ marginBottom: 2 }}
//               >
//                 Detalhes adicionais sobre o projeto. <br />
//                 <br />
//                 {project.descricao}
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Card>
//       ))}
//     </div>
//   );
// }

/////////////////////////////// filtro fincionando 05/11 /////////////////////////////////

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
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const BASE_URL = "http://localhost:3000/projetos";

// interface Project {
//   id: number;
//   titulo: string;
//   descricao: string;
//   autores: string;
//   categoria: string[];
//   dataPostagem: string;
//   imagem: string;
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

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const loadProjects = async () => {
//     try {
//       const response = await axios.get(BASE_URL);
//       const sortedProjects = response.data.sort(
//         (a: Project, b: Project) =>
//           new Date(b.dataPostagem).getTime() - new Date(a.dataPostagem).getTime()
//       );
//       setProjects(sortedProjects);
//     } catch (error) {
//       console.error("Erro ao carregar projetos:", error);
//     }
//   };

//   const projetosFiltrados = projects.filter((project) =>
//     project.autores.toLowerCase().includes(buscarProjeto.toLowerCase())
//   );

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   return (
//     <div>
//       {Array.isArray(projetosFiltrados) && projetosFiltrados.map((project) => (
//         <Card
//           key={project.id}
//           sx={{
//             width: "800px",
//             borderRadius: "16px",
//             boxShadow: 3,
//             marginBottom: "20px",
//           }}
//         >
//           <CardHeader
//             avatar={
//               <Avatar sx={{ bgcolor: red[500] }} aria-label="user-profile">
//                 <img src={project.imagem} alt={project.titulo} />
//               </Avatar>
//             }
//             action={
//               <IconButton aria-label="settings">
//                 <MoreVertIcon />
//               </IconButton>
//             }
//             title={project.autores}
//             subheader={project.dataPostagem}
//           />
//           <CardMedia
//             component="img"
//             height="400"
//             image={project.imagem || "caminho/para/imagem/default.jpg"}
//             alt={project.titulo}
//           />
//           <CardContent>
//             <Typography
//               variant="h6"
//               sx={{ fontWeight: "bold", marginBottom: 1 }}
//             >
//               {project.titulo}
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               sx={{ fontWeight: "bold", marginTop: 2 }}
//             >
//               Autores:
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {project.autores}
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               sx={{ fontWeight: "bold", marginTop: 2 }}
//             >
//               Categorias:
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {project.categoria.join(", ")}
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites">
//               <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="share">
//               <ShareIcon />
//             </IconButton>
//             <ExpandMore
//               expand={expanded}
//               onClick={handleExpandClick}
//               aria-expanded={expanded}
//               aria-label="show more"
//             >
//               <ExpandMoreIcon />
//             </ExpandMore>
//           </CardActions>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{ marginBottom: 2 }}
//               >
//                 Detalhes adicionais sobre o projeto. <br />
//                 <br />
//                 {project.descricao}
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Card>
//       ))}
//     </div>
//   );
// }

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

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const loadProjects = async () => {
//     try {
//       const response = await axios.get(BASE_URL);
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

//   useEffect(() => {
//     loadProjects();
//   }, []);

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
//                     src={
//                       project.fotoPerfil || "caminho/para/imagem/default.jpg"
//                     }
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
//                 <IconButton aria-label="settings">
//                   <MoreVertIcon />
//                 </IconButton>
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
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton aria-label="share">
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
//                   sx={{ fontWeight: "bold", marginBottom: 2}}
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
//           </Card>
//         ))}
//     </div>
//   );
// }


////////////////////////////////// compartilhar /////////////////////////////////////
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

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const loadProjects = async () => {
//     try {
//       const response = await axios.get(BASE_URL);
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

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   // Função para compartilhar o projeto
//   const handleShareClick = (project: Project) => {
//     if (navigator.share) {
//       navigator
//         .share({
//           title: project.titulo,
//           text: project.descricao,
//           url: window.location.href + `/projeto/${project.id}`, // URL do projeto (ajustar conforme sua aplicação)
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
//                 <IconButton aria-label="settings">
//                   <MoreVertIcon />
//                 </IconButton>
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
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton
//                 aria-label="share"
//                 onClick={() => handleShareClick(project)} // Chama a função de compartilhamento
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
//           </Card>
//         ))}
//     </div>
//   );
// }


import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const BASE_URL = "http://localhost:3000/projetos";

interface Project {
  id: number;
  titulo: string;
  descricao: string;
  autores: string;
  categoria: string[];
  dataPostagem: string;
  imagem: string;
  fotoPerfil?: string;
  linkDrive: string;
  likes: number;
  usersLiked: string[]; // Lista de IDs de usuários que curtiram
}

interface ProjectCardProps {
  buscarProjeto: string;
}

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand",
})<{ expand: boolean }>(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
}));

export default function ProjectCard({ buscarProjeto }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [user, setUser] = useState<any>(null); // Estado para armazenar o usuário logado

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const loadProjects = async () => {
    try {
      const response = await axios.get(BASE_URL);
      const sortedProjects = response.data.sort(
        (a: Project, b: Project) =>
          new Date(b.dataPostagem).getTime() -
          new Date(a.dataPostagem).getTime()
      );
      setProjects(sortedProjects);
    } catch (error) {
      console.error("Erro ao carregar projetos:", error);
    }
  };

  const projetosFiltrados = projects.filter((project) =>
    project.autores.toLowerCase().includes(buscarProjeto.toLowerCase())
  );

  // Carregar o usuário logado do localStorage
  useEffect(() => {
    const loggedUser = localStorage.getItem("user"); // Pega o objeto de usuário armazenado
    if (loggedUser) {
      setUser(JSON.parse(loggedUser)); // Armazena o usuário no estado
    }
    loadProjects();
  }, []);

  // Função para compartilhar o projeto
  const handleShareClick = (project: Project) => {
    if (navigator.share) {
      navigator
        .share({
          title: project.titulo,
          text: project.descricao,
          url: window.location.href + `/projeto/${project.id}`,
        })
        .then(() => {
          console.log("Projeto compartilhado com sucesso!");
        })
        .catch((error) => {
          console.error("Erro ao compartilhar:", error);
        });
    } else {
      alert("Compartilhamento não é suportado neste navegador.");
    }
  };

  // Função para curtir o projeto
  const handleLikeClick = async (project: Project) => {
    if (!user) {
      alert("Você precisa estar logado para curtir o projeto!"); // Se o usuário não estiver logado, mostramos um alerta
      return;
    }

    const userId = user.id; // Pega o ID do usuário logado

    // Verifica se o usuário já deu like
    const hasLiked = project.usersLiked.includes(userId);

    // Atualiza a lista de usuários que curtiram e o número de likes
    const updatedProject = {
      ...project,
      likes: hasLiked ? project.likes - 1 : project.likes + 1,
      usersLiked: hasLiked
        ? project.usersLiked.filter((id) => id !== userId) // Remove o like do usuário
        : [...project.usersLiked, userId], // Adiciona o like do usuário
    };

    try {
      // Atualiza o projeto no backend
      await axios.put(`${BASE_URL}/${project.id}`, updatedProject);
      // Atualiza o estado local com os novos dados
      setProjects((prevProjects) =>
        prevProjects.map((p) => (p.id === project.id ? updatedProject : p))
      );
    } catch (error) {
      console.error("Erro ao atualizar like:", error);
    }
  };

  return (
    <div>
      {Array.isArray(projetosFiltrados) &&
        projetosFiltrados.map((project) => (
          <Card
            key={project.id}
            sx={{
              width: "800px",
              borderRadius: "16px",
              boxShadow: 3,
              marginBottom: "20px",
            }}
          >
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
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
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
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                {project.titulo}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", marginTop: 2 }}
              >
                Autores:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.autores}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", marginTop: 2 }}
              >
                Categorias:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.categoria.join(", ")}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleLikeClick(project)}
                disabled={!user} // Desabilita o botão de like para usuários não logados
              >
                <FavoriteIcon
                  color={project.usersLiked.includes(user?.id) ? "error" : "inherit"} 
                />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  {project.likes}
                </Typography>
              </IconButton>
              <IconButton
                aria-label="share"
                onClick={() => handleShareClick(project)}
              >
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: "bold", marginBottom: 2 }}
                >
                  Descrição do projeto: <br />
                  <br />
                  {project.descricao}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    marginTop: 2,
                    color: "text.secondary",
                  }}
                >
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
            </Collapse>
          </Card>
        ))}
    </div>
  );
}
