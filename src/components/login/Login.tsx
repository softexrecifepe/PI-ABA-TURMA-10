// import React, {useState} from 'react';
// // import styles from '../styles/Login.module.css';
// import imagem from '../../assets/images/section_direita.png';
// import { HiOutlineArrowRight } from "react-icons/hi";
// import './login.css';
// import axios from 'axios';
// import {Link} from 'react-router-dom'

// const BASE_URL = "http://localhost:3000/Usuario";


// const Login: React.FC = () => {

//     const [email, setEmail] = useState("");
//     const [senha, setSenha] = useState("");

//     const loginUsuario = async () => {
//         try {
//             const response = await axios.post(`${BASE_URL}/login`, { emailInstitucional: email, senha });
//             console.log('Login bem-sucedido:', response.data);
//             alert("Login bem-sucedido!");
//         } catch (error) {
//             console.error("Erro ao realizar login:", error);
            
//         }
//     }

//     return (
//         <main className='container'>
//             <section className="form">
//                 <h2>Login</h2>
//                 <div className="form-conteudo">
//                     <label id="label-login">E-mail institucional:</label>
//                     <input type="email" value={email} 
//                         onChange={(e) => setEmail(e.target.value)}/>
//                     <label id="label-login">Senha:</label>
//                     <input type="password" value={senha} 
//                         onChange={(e) => setSenha(e.target.value)}/>
//                 </div>
//                 <div className="form-opcoes">
//                     <div className='checkbox-remember'>
//                         <input id="imput-remenber" type="checkbox" />
//                         <label id="label-login-remember">Lembrar de mim</label>
//                     </div>
//                     <a id="a-esqueceu-senha" href="">Esqueceu a senha?</a>
//                 </div>
//                 <div className="form-cta">
//                     <button className="btn-login" type="button" onClick={loginUsuario} >Login</button>
//                     <a className="a-login"> <Link to='/cadastro'> desejo fazer cadastro <HiOutlineArrowRight style={{ fontSize: '18px'}} /></Link>
//                     </a>
//                 </div>
//             </section>
//             <section>
//                 <img src={imagem} alt="" />
//             </section>
//         </main>
//     );
// };

// export default Login;



//////////////////////////////////////// funcionando 20/11 //////////////////////////////////


// import React, { useState } from 'react';
// import imagem from '../../assets/images/section_direita.png';
// import { HiOutlineArrowRight } from "react-icons/hi";
// import './login.css';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// // Definindo o tipo para o usuário
// interface Usuario {
//     id: number;
//     emailInstitucional: string;
//     senha: string;
//     fotoPerfil: string;
// }

// const BASE_URL = "http://localhost:3000/Usuario";

// const Login: React.FC = () => {
//     const [email, setEmail] = useState<string>("");
//     const [senha, setSenha] = useState<string>("");
//     const [erro, setErro] = useState<string>("");
//     const navigate = useNavigate();

//     const loginUsuario = async () => {
//         try {
//             // Busca todos os usuários para verificar credenciais
//             const response = await axios.get<Usuario[]>(BASE_URL);
//             const usuarios = response.data;

//             // Verifica se o email e a senha estão corretos
//             const usuario = usuarios.find(user => user.emailInstitucional === email && user.senha === senha);
            
//             if (usuario) {
//                 console.log('Login bem-sucedido:', usuario);
//                 alert("Login bem-sucedido!");
//                 localStorage.setItem("user", JSON.stringify({
//                     id: usuario.id,
//                     email: usuario.emailInstitucional,
//                     fotoPerfil: usuario.fotoPerfil || "",
//                 }));
//                 // Redirecionar para a página principal ou outra página desejada
//                 navigate('/'); // ajuste o caminho conforme necessário
//             } else {
//                 setErro("E-mail ou senha incorretos.");
//             }
//         } catch (error) {
//             console.error("Erro ao realizar login:", error);
//             setErro("Erro ao realizar login. Tente novamente.");
//         }
//     }

//     return (
//         <main className='container'>
//             <section className="form">
//                 <h2>Login</h2>
//                 {erro && <p className="error">{erro}</p>} {/* Exibe mensagem de erro */}
//                 <div className="form-conteudo">
//                     <label id="label-login">E-mail institucional:</label>
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                     <label id="label-login">Senha:</label>
//                     <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
//                 </div>
//                 <div className="form-opcoes">
//                     <div className='checkbox-remember'>
//                         <input id="imput-remenber" type="checkbox" />
//                         <label id="label-login-remember">Lembrar de mim</label>
//                     </div>
//                     <a id="a-esqueceu-senha" href="">Esqueceu a senha?</a>
//                 </div>
//                 <div className="form-cta">
//                     <button className="btn-login" type="button" onClick={loginUsuario}>Login</button>
//                     <a className="a-login">
//                         <Link to='/cadastro'> desejo fazer cadastro <HiOutlineArrowRight style={{ fontSize: '18px'}} /></Link>
//                     </a>
//                 </div>
//             </section>
//             <section>
//                 <img src={imagem} alt="" />
//             </section>
//         </main>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import imagem from '../../assets/images/section_direita.png';
import { HiOutlineArrowRight } from "react-icons/hi";
import './login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Definindo o tipo para o usuário
interface Usuario {
    id: number;
    emailInstitucional: string;
    senha: string;
    fotoPerfil: string;
}

const BASE_URL = "http://localhost:3000/Usuario";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [erro, setErro] = useState<string>("");
    const navigate = useNavigate();

    const loginUsuario = async () => {
        try {
            // Busca todos os usuários para verificar credenciais
            const response = await axios.get<Usuario[]>(BASE_URL);
            const usuarios = response.data;

            // Verifica se o email e a senha estão corretos
            const usuario = usuarios.find(user => user.emailInstitucional === email && user.senha === senha);
            
            if (usuario) {
                console.log('Login bem-sucedido:', usuario);
                alert("Login bem-sucedido!");

                // Salva as informações do usuário no localStorage
                localStorage.setItem("user", JSON.stringify({
                    id: usuario.id,
                    email: usuario.emailInstitucional,
                    fotoPerfil: usuario.fotoPerfil || "",
                }));

                // Verifica se o usuário é um admin
                if (usuario.emailInstitucional === "admin" && usuario.senha === "admin") {
                    // Redireciona para a HomeAdmin se for admin
                    navigate('/home-admin');
                } else {
                    // Caso contrário, redireciona para a Home normal
                    navigate('/');
                }
            } else {
                setErro("E-mail ou senha incorretos.");
            }
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            setErro("Erro ao realizar login. Tente novamente.");
        }
    };

    return (
        <main className='container'>
            <section className="form">
                <h2>Login</h2>
                {erro && <p className="error">{erro}</p>} {/* Exibe mensagem de erro */}
                <div className="form-conteudo">
                    <label id="label-login">E-mail institucional:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label id="label-login">Senha:</label>
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div className="form-opcoes">
                    <div className='checkbox-remember'>
                        <input id="imput-remenber" type="checkbox" />
                        <label id="label-login-remember">Lembrar de mim</label>
                    </div>
                    <a id="a-esqueceu-senha" href="">Esqueceu a senha?</a>
                </div>
                <div className="form-cta">
                    <button className="btn-login" type="button" onClick={loginUsuario}>Login</button>
                    <a className="a-login">
                        <Link to='/cadastro'> desejo fazer cadastro <HiOutlineArrowRight style={{ fontSize: '18px'}} /></Link>
                    </a>
                </div>
            </section>
            <section>
                <img src={imagem} alt="" />
            </section>
        </main>
    );
};

export default Login;
