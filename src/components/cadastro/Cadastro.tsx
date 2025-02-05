import React from 'react';
import './cadastro.css';
import imagem from '../../assets/images/section esquerda.png';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from 'react-router-dom'

const BASE_URL = "https://api-aba.vercel.app/Usuario";

interface Usuario {
  nome: string;
  emailInstitucional: string;
  emailSecundario: string;
  dataNascimento: string;
  senha: string;
}

const Cadastro: React.FC = () => {

  const navigate = useNavigate();

  const [novoUsuario, setNovoUsuario] = useState<Usuario>({
    nome: "",
    emailInstitucional: "",
    emailSecundario: "",
    dataNascimento: "",
    senha: ""
  });

  const criarUsuario = async () => {
    try {
      const response = await axios.post(`${BASE_URL}`, novoUsuario);
      console.log('Usuario criado:', response.data);
      setNovoUsuario({ nome: "", emailInstitucional: "", emailSecundario: "", dataNascimento: "", senha: "" });
      alert("Cadastro bem-sucedido!");
      navigate('/login');
    } catch (error) {
      console.error("Erro ao criar usuario:", error);
    }
  };


  return (
    <main className='container'>
      <section>
        <img src={imagem} alt="" />
      </section>
      <section className='form'>
        <h2>Cadastro</h2>
        <div className='form-conteudo'>
          <label>Nome:</label>
          <input type="text" value={novoUsuario.nome}
            onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })} />
          <label>E-mail institucional:</label>
          <input type="email" value={novoUsuario.emailInstitucional}
            onChange={(e) => setNovoUsuario({ ...novoUsuario, emailInstitucional: e.target.value })} />
          <label>E-mail secundário:</label>
          <input type="email" value={novoUsuario.emailSecundario}
            onChange={(e) => setNovoUsuario({ ...novoUsuario, emailSecundario: e.target.value })} />
          <label>Data de nascimento:</label>
          <input type="date" value={novoUsuario.dataNascimento}
            onChange={(e) => setNovoUsuario({ ...novoUsuario, dataNascimento: e.target.value })} />
          <label>Senha:</label>
          <input type="password" value={novoUsuario.senha}
            onChange={(e) => setNovoUsuario({ ...novoUsuario, senha: e.target.value })} />
        </div>
        <div className='form-cta-cadastro'>
          <button className='btn-cadastro' onClick={criarUsuario}>Cadastrar</button>
          <Link to='/login'> <HiOutlineArrowLeft style={{ fontSize: '18px' }} /> desejo fazer login </Link>
        </div>
      </section>
    </main>
  );
};


export default Cadastro;