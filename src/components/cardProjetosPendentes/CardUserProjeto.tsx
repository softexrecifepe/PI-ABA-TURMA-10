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
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// const BASE_URL = "http://localhost:3000/projetos";

const BASE_URL = 'https://api-aba.vercel.app/projetos-pendentes';
const BASE_URL_PROJETOS = 'https://api-aba.vercel.app/projetos';

interface Project {
  id: number;
  titulo: string;
  descricao: string;
  autores: string;
  categoria: string[];
  dataPostagem: string;
  imagem: string;
  criadorId: string;
  fotoPerfil: string;
  linkDrive: string;
  likes: number;
  usersLiked: string[];
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

export default function ProjectCardPendentes({ buscarProjeto }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);

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

  const handleClickMenu = (event: React.MouseEvent<HTMLElement>, project: Project) => {
    setAnchorEl(event.currentTarget);
    setProjectToDelete(project);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setProjectToDelete(null);
  };

  const handleApproveProject = async () => {
    if (projectToDelete) {
      try {
        // Aprovar o projeto movendo-o para a tabela de projetos
        await axios.post(BASE_URL_PROJETOS, projectToDelete);
  
        // Excluir da tabela de pendentes após aprovação
        await axios.delete(`${BASE_URL}/${projectToDelete.id}`);
  
        setProjects(projects.filter((project) => project.id !== projectToDelete.id));
        handleCloseMenu();
      } catch (error) {
        console.error('Erro ao aprovar o projeto:', error);
      }
    }
  };

  const handleDeleteProject = async () => {
    if (projectToDelete) {
      const confirmDelete = window.confirm("Tem certeza que deseja excluir este projeto?");
      if (confirmDelete) {
        try {
          // Excluir o projeto da tabela de pendentes
          await axios.delete(`${BASE_URL}/${projectToDelete.id}`);
          setProjects(projects.filter((project) => project.id !== projectToDelete.id));
          handleCloseMenu();
        } catch (error) {
          console.error("Erro ao excluir o projeto:", error);
        }
      }
    }
  };

  const projetosFiltrados = projects.filter((project) =>
    project.autores.toLowerCase().includes(buscarProjeto.toLowerCase())
  );

  useEffect(() => {
    loadProjects();
  }, []);

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
                <Avatar sx={{ bgcolor: red[500] }} aria-label="user-profile">
                  <img
                    src={project.fotoPerfil || "/default-avatar.png"} // Fallback para imagem padrão
                    alt={project.autores}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Avatar>
              }
              action={
                <IconButton
                  aria-label="settings"
                  onClick={(event) => handleClickMenu(event, project)}
                >
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
                Categorias:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.categoria.join(", ")}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
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
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                  Detalhes adicionais sobre o projeto. <br />
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
                    style={{ textDecoration: "none", color: "#1976d2" }} // Estilo do link
                  >
                    {project.linkDrive}
                  </a>
                </Typography>
              </CardContent>
            </Collapse>

            {/* Menu de opções */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleApproveProject}>Aprovar</MenuItem>
              <MenuItem onClick={handleDeleteProject}>Excluir</MenuItem>
            </Menu>
          </Card>
        ))}
    </div>
  );
}
