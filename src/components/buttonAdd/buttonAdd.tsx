// import React from 'react';
// import { IconButton } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

// const StyledButton = styled(IconButton)(({ theme }) => ({
//   position: 'fixed',
//   bottom: theme.spacing(2), // Espaçamento do fundo
//   right: theme.spacing(2), // Espaçamento da direita
//   width: '60px', // Defina a largura que você deseja
//   height: '60px', // Defina a altura que você deseja
//   transition: 'transform 0.5s', // Transição suave para o efeito de hover
//   '&:hover': {
//     transform: 'scale(2)', // Aumenta o tamanho em 10% ao passar o mouse
//   },
// }));

// const FloatingActionButton: React.FC = () => {
//   const handleClick = () => {
//     // Adicione sua lógica aqui
//     console.log('Botão clicado!');
//   };

//   return (
//     <StyledButton color="primary" onClick={handleClick}>
//       <AddCircleIcon fontSize="large" />
//     </StyledButton >
//   );
// };

// export default FloatingActionButton;


////////////////////////////////////////////////////////////////////////////////////////////////////


// import React from 'react';
// import { IconButton, Tooltip } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

// const StyledButton = styled(IconButton)(({ theme }) => ({
//   position: 'fixed',
//   bottom: theme.spacing(2), // Espaçamento do fundo
//   right: theme.spacing(2), // Espaçamento da direita
//   width: '60px', // Defina a largura que você deseja
//   height: '60px', // Defina a altura que você deseja
//   transition: 'transform 0.5s', // Transição suave para o efeito de hover
//   '&:hover': {
//     transform: 'scale(2)', // Aumenta o tamanho em 10% ao passar o mouse
//   },
// }));

// const FloatingActionButton: React.FC = () => {
//   const handleClick = () => {
//     // Adicione sua lógica aqui
//     console.log('Botão clicado!');
//   };

//   return (
//     <Tooltip title="Nova Publicação" arrow>
//       <StyledButton color="primary" onClick={handleClick}>
//         <AddCircleIcon fontSize="large" />
//       </StyledButton>
//     </Tooltip>
//   );
// };

// export default FloatingActionButton;



// import React, { useState } from 'react';
// import { IconButton, Tooltip } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CadastroModal from '../cadastroModal/CadastroModal';

// const StyledButton = styled(IconButton)(({ theme }) => ({
//   position: 'fixed',
//   bottom: theme.spacing(2),
//   right: theme.spacing(2),
//   width: '60px',
//   height: '60px',
//   transition: 'transform 0.5s',
//   '&:hover': {
//     transform: 'scale(2)',
//   },
// }));

// interface FloatingActionButtonProps {
//   onProjetoAdicionado: () => void; // Passa a função de atualização de projetos
// }

// const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onProjetoAdicionado }) => {
//   const [openModal, setOpenModal] = useState(false);

//   const handleClick = () => {
//     setOpenModal(true); // Abre o modal
//   };

//   const handleClose = () => {
//     setOpenModal(false); // Fecha o modal
//   };

//   return (
//     <>
//       <Tooltip title="Nova Publicação" arrow>
//         <StyledButton color="primary" onClick={handleClick}>
//           <AddCircleIcon fontSize="large" />
//         </StyledButton>
//       </Tooltip>
//       <CadastroModal open={openModal} onClose={handleClose} onProjetoAdicionado={onProjetoAdicionado} />
//     </>
//   );
// };

// export default FloatingActionButton;


////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import { IconButton, Dialog, DialogContent, DialogTitle, TextField, Button, Typography, IconButtonProps } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CloseIcon from '@mui/icons-material/Close';
// import axios from 'axios';

// const BASE_URL = 'http://localhost:3000/projetos';

// const StyledButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
//   position: 'fixed',
//   bottom: theme.spacing(2),
//   right: theme.spacing(2),
//   width: '60px',
//   height: '60px',
//   transition: 'transform 0.5s',
//   '&:hover': {
//     transform: 'scale(1.2)',
//   },
// }));


// const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: theme.spacing(2),
// }));

// const FloatingActionButton: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [titulo, setTitulo] = useState('');
//   const [descricao, setDescricao] = useState('');
//   const [autores, setAutores] = useState('');
//   const [categoria, setCategoria] = useState('');
//   const [dataPostagem, setDataPostagem] = useState('');
//   const [imagem, setImagem] = useState('');
//   const [linkDrive, setLinkDrive] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

//   useEffect(() => {
//     // Verificar se o usuário está logado ao carregar o componente
//     const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
//     setIsUserLoggedIn(storedUser !== null);
//   }, []);

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleSubmit = async () => {
//     const novoProjeto = {
//       titulo,
//       descricao,
//       autores,
//       categoria: categoria.split(',').map(cat => cat.trim()), // Divide categorias por vírgula
//       dataPostagem,
//       imagem,
//       linkDrive,
//     };

//     try {
//       await axios.post(BASE_URL, novoProjeto);
//       setSuccessMessage('Projeto cadastrado com sucesso!');
//       setTimeout(() => {
//         setSuccessMessage('');
//         handleClose();
//       }, 2000);
//     } catch (error) {
//       console.error('Erro ao cadastrar o projeto:', error);
//     }
//   };

//   if (!isUserLoggedIn) {
//     return null;
//   }

//   return (
//     <>
//       <StyledButton color="primary" onClick={handleClickOpen}>
//         <AddCircleIcon fontSize="large" />
//       </StyledButton>

//       <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//         <StyledDialogTitle>
//           <Typography variant="h6" color="info" style={{color: '#000000' }}>Publicar Novo Projeto</Typography>
//           <IconButton onClick={handleClose} color="error">
//             <CloseIcon />
//           </IconButton>
//         </StyledDialogTitle>

//         <DialogContent dividers>
//           <TextField
//             label="Título"
//             fullWidth
//             margin="normal"
//             value={titulo}
//             onChange={(e) => setTitulo(e.target.value)}
//           />
//           <TextField
//             label="Descrição"
//             fullWidth
//             margin="normal"
//             multiline
//             rows={4}
//             value={descricao}
//             onChange={(e) => setDescricao(e.target.value)}
//           />
//           <TextField
//             label="Autores"
//             fullWidth
//             margin="normal"
//             value={autores}
//             onChange={(e) => setAutores(e.target.value)}
//           />
//           <TextField
//             label="Categoria (separadas por vírgula)"
//             fullWidth
//             margin="normal"
//             value={categoria}
//             onChange={(e) => setCategoria(e.target.value)}
//           />
//           <TextField
//             label="Data de Postagem"
//             type="date"
//             fullWidth
//             margin="normal"
//             value={dataPostagem}
//             onChange={(e) => setDataPostagem(e.target.value)}
//             InputLabelProps={{ shrink: true }}
//           />
//           <TextField
//             label="URL da Imagem"
//             fullWidth
//             margin="normal"
//             value={imagem}
//             onChange={(e) => setImagem(e.target.value)}
//           />
//           <TextField
//             label="Link do drive"
//             fullWidth
//             margin="normal"
//             value={linkDrive}
//             onChange={(e) => setLinkDrive(e.target.value)}
//           />

//           {successMessage && (
//             <Typography color="primary" variant="body2" align="center" style={{ marginTop: '16px' }}>
//               {successMessage}
//             </Typography>
//           )}

//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             style={{ marginTop: '16px' }}
//             onClick={handleSubmit}
//           >
//             Publicar
//           </Button>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default FloatingActionButton;


// import React, { useState, useEffect } from 'react';
// import { IconButton, Dialog, DialogContent, DialogTitle, TextField, Button, Typography, IconButtonProps } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CloseIcon from '@mui/icons-material/Close';
// import axios from 'axios';

// const BASE_URL = 'http://localhost:3000/projetos';

// const StyledButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
//   position: 'fixed',
//   bottom: theme.spacing(2),
//   right: theme.spacing(2),
//   width: '60px',
//   height: '60px',
//   transition: 'transform 0.5s',
//   '&:hover': {
//     transform: 'scale(1.2)',
//   },
// }));

// const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: theme.spacing(2),
// }));

// const FloatingActionButton: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [titulo, setTitulo] = useState('');
//   const [descricao, setDescricao] = useState('');
//   const [autores, setAutores] = useState('');
//   const [categoria, setCategoria] = useState('');
//   const [dataPostagem, setDataPostagem] = useState('');
//   const [imagem, setImagem] = useState('');
//   const [linkDrive, setLinkDrive] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
//   const [fotoPerfil, setFotoPerfil] = useState('');
//   const [criadorId, setCriadorId] = useState('');

//   useEffect(() => {
//     // Verificar se o usuário está logado ao carregar o componente
//     const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
//     if (storedUser) {
//       setIsUserLoggedIn(true);
//       setFotoPerfil(storedUser.fotoPerfil);  // Foto do perfil
//       setCriadorId(storedUser.id);  // ID do usuário logado
//     } else {
//       setIsUserLoggedIn(false);
//     }
//   }, []);

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleSubmit = async () => {
//     // Criar o novo projeto com os dados e incluir fotoPerfil e criadorId
//     const novoProjeto = {
//       titulo,
//       descricao,
//       autores,
//       categoria: categoria.split(',').map(cat => cat.trim()), // Divide categorias por vírgula
//       dataPostagem,
//       imagem,
//       linkDrive,
//       fotoPerfil, // Foto de perfil do usuário logado
//       criadorId,  // ID do usuário logado
//     };

//     try {
//       await axios.post(BASE_URL, novoProjeto);
//       setSuccessMessage('Projeto cadastrado com sucesso!');
//       setTimeout(() => {
//         setSuccessMessage('');
//         handleClose();
//       }, 2000);
//     } catch (error) {
//       console.error('Erro ao cadastrar o projeto:', error);
//     }
//   };

//   if (!isUserLoggedIn) {
//     return null;
//   }

//   return (
//     <>
//       <StyledButton color="primary" onClick={handleClickOpen}>
//         <AddCircleIcon fontSize="large" />
//       </StyledButton>

//       <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//         <StyledDialogTitle>
//           <Typography variant="h6" color="info" style={{color: '#000000' }}>Publicar Novo Projeto</Typography>
//           <IconButton onClick={handleClose} color="error">
//             <CloseIcon />
//           </IconButton>
//         </StyledDialogTitle>

//         <DialogContent dividers>
//           <TextField
//             label="Título"
//             fullWidth
//             margin="normal"
//             value={titulo}
//             onChange={(e) => setTitulo(e.target.value)}
//           />
//           <TextField
//             label="Descrição"
//             fullWidth
//             margin="normal"
//             multiline
//             rows={4}
//             value={descricao}
//             onChange={(e) => setDescricao(e.target.value)}
//           />
//           <TextField
//             label="Autores"
//             fullWidth
//             margin="normal"
//             value={autores}
//             onChange={(e) => setAutores(e.target.value)}
//           />
//           <TextField
//             label="Categoria (separadas por vírgula)"
//             fullWidth
//             margin="normal"
//             value={categoria}
//             onChange={(e) => setCategoria(e.target.value)}
//           />
//           <TextField
//             label="Data de Postagem"
//             type="date"
//             fullWidth
//             margin="normal"
//             value={dataPostagem}
//             onChange={(e) => setDataPostagem(e.target.value)}
//             InputLabelProps={{ shrink: true }}
//           />
//           <TextField
//             label="URL da Imagem"
//             fullWidth
//             margin="normal"
//             value={imagem}
//             onChange={(e) => setImagem(e.target.value)}
//           />
//           <TextField
//             label="Link do drive"
//             fullWidth
//             margin="normal"
//             value={linkDrive}
//             onChange={(e) => setLinkDrive(e.target.value)}
//           />

//           {successMessage && (
//             <Typography color="primary" variant="body2" align="center" style={{ marginTop: '16px' }}>
//               {successMessage}
//             </Typography>
//           )}

//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             style={{ marginTop: '16px' }}
//             onClick={handleSubmit}
//           >
//             Publicar
//           </Button>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default FloatingActionButton;

import React, { useState, useEffect } from 'react';
import { IconButton, Dialog, DialogContent, DialogTitle, TextField, Button, Typography, IconButtonProps, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

// const BASE_URL = 'http://localhost:3000/projetos';
// const BASE_URL = 'http://localhost:3000/projetos-pendentes';
const BASE_URL = 'https://api-aba.vercel.app/projetos-pendentes';

const StyledButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  width: '60px',
  height: '60px',
  transition: 'transform 0.5s',
  '&:hover': {
    transform: 'scale(1.2)',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const FloatingActionButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [autores, setAutores] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dataPostagem, setDataPostagem] = useState('');
  const [imagem, setImagem] = useState('');
  const [linkDrive, setLinkDrive] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [criadorId, setCriadorId] = useState('');
  const [likes, ] = useState('');
  const [usersLiked, ] = useState('');
  const [isChecked, setIsChecked] = useState(false); // Novo estado para o checkbox

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (storedUser) {
      setIsUserLoggedIn(true);
      setFotoPerfil(storedUser.fotoPerfil);
      setCriadorId(storedUser.id);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    // Verificar se todos os campos estão preenchidos e o checkbox marcado
    if (
      !titulo || 
      !descricao || 
      !autores || 
      !categoria || 
      !dataPostagem || 
      !imagem || 
      !linkDrive || 
      !isChecked
    ) {
      alert('Por favor, preencha todos os campos e aceite a Licença Creative Commons.');
      return;
    }

    const novoProjeto = {
      titulo,
      descricao,
      autores,
      categoria: categoria.split(',').map(cat => cat.trim()),
      dataPostagem,
      imagem,
      linkDrive,
      fotoPerfil,
      criadorId,
      likes,
      usersLiked,
    };

    try {
      await axios.post(BASE_URL, novoProjeto);
      setSuccessMessage('Projeto cadastrado com sucesso!');
      alert('Projeto aguardando aprovação pela administração!');
      setTimeout(() => {
        setSuccessMessage('');
        handleClose();
      }, 2000);
    } catch (error) {
      console.error('Erro ao cadastrar o projeto:', error);
    }
  };

  if (!isUserLoggedIn) {
    return null;
  }

  return (
    <>
      <StyledButton color="primary" onClick={handleClickOpen}>
        <AddCircleIcon fontSize="large" />
      </StyledButton>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <StyledDialogTitle>
          <Typography variant="h6" color="info" style={{ color: '#000000' }}>Publicar Novo Projeto</Typography>
          <IconButton onClick={handleClose} color="error">
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>

        <DialogContent dividers>
          <TextField
            label="Título"
            fullWidth
            margin="normal"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <TextField
            label="Descrição"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <TextField
            label="Autores"
            fullWidth
            margin="normal"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          />
          <TextField
            label="Categoria (separadas por vírgula)"
            fullWidth
            margin="normal"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
          <TextField
            label="Data de Postagem"
            type="date"
            fullWidth
            margin="normal"
            value={dataPostagem}
            onChange={(e) => setDataPostagem(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="URL da Imagem"
            fullWidth
            margin="normal"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
          <TextField
            label="Link do drive"
            fullWidth
            margin="normal"
            value={linkDrive}
            onChange={(e) => setLinkDrive(e.target.value)}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                color="primary"
              />
            }
            label={
              <span style={{display:'flex', textDecoration:'underline'}}>
                <a style={{color:'black', fontSize:'16px'}} href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">Licença Creative Commons </a>
              </span>
            }
          />

          {successMessage && (
            <Typography color="primary" variant="body2" align="center" style={{ marginTop: '16px' }}>
              {successMessage}
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
            onClick={handleSubmit}
          >
            Publicar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingActionButton;
