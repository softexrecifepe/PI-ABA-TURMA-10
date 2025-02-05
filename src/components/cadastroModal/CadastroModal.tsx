import React, { useState } from 'react';
import { Box, Modal, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

interface NovoProjeto {
  titulo: string;
  descricao: string;
  autores: string;
  categoria: string;
  dataPostagem: string;
  imagem: string;
}

interface CadastroModalProps {
  open: boolean;
  onClose: () => void;
  onProjetoAdicionado: () => void; // função para atualizar a lista de projetos após adicionar
}

const BASE_URL = 'https://api-aba.vercel.app/projetos-pendentes';

const CadastroModal: React.FC<CadastroModalProps> = ({ open, onClose, onProjetoAdicionado }) => {
  const [novoProjeto, setNovoProjeto] = useState<NovoProjeto>({
    titulo: '',
    descricao: '',
    autores: '',
    categoria: '',
    dataPostagem: '',
    imagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNovoProjeto({
      ...novoProjeto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(BASE_URL, novoProjeto);
      onProjetoAdicionado(); // Chama a função para atualizar a lista
      onClose(); // Fecha o modal após salvar
    } catch (error) {
      console.error('Erro ao salvar o projeto:', error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          Cadastrar Novo Projeto
        </Typography>
        <TextField
          fullWidth
          label="Título"
          name="titulo"
          value={novoProjeto.titulo}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Descrição"
          name="descricao"
          value={novoProjeto.descricao}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Autores"
          name="autores"
          value={novoProjeto.autores}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Categoria (separadas por vírgula)"
          name="categoria"
          value={novoProjeto.categoria}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Data de Postagem"
          name="dataPostagem"
          type="date"
          value={novoProjeto.dataPostagem}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Imagem (URL)"
          name="imagem"
          value={novoProjeto.imagem}
          onChange={handleChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
          Salvar
        </Button>
      </Box>
    </Modal>
  );
};

export default CadastroModal;
