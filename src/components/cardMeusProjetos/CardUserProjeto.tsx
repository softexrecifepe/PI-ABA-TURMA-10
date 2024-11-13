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

const BASE_URL = "http://localhost:3000/projetos";

interface Project {
  id: number;
  titulo: string;
  descricao: string;
  autores: string;
  categoria: string[];
  dataPostagem: string;
  imagem: string;
  criadorId : string;
}

const userId = "d6bc"; 

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

export default function ProjectCardUser({ buscarProjeto }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const loadProjects = async () => {
    try {
      const response = await axios.get(BASE_URL);
      console.log(response.data);
      
      // Filtrar os projetos para incluir apenas aqueles com criadorId igual ao userId
      const userProjects = response.data.filter((project: Project) => project.criadorId === userId);
      
      // Ordenar os projetos filtrados por data de postagem
      const sortedProjects = userProjects.sort(
        (a: Project, b: Project) =>
          new Date(b.dataPostagem).getTime() - new Date(a.dataPostagem).getTime()
      );

      setProjects(sortedProjects);
    } catch (error) {
      console.error("Erro ao carregar projetos:", error);
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
      {Array.isArray(projetosFiltrados) && projetosFiltrados.map((project) => (
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
                <img src={project.imagem} alt={project.titulo} />
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
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: 2 }}
              >
                Detalhes adicionais sobre o projeto. <br />
                <br />
                {project.descricao}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}
