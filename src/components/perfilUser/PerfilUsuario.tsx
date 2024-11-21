// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./PerfilUsuario.css";

// const BASE_URL = "http://localhost:3000/Usuario"; // Assumindo que o ID do usuário é 1

// interface Usuario {
//   id?: string;
//   nome: string;
//   emailInstitucional: string;
//   emailSecundario: string;
//   dataNascimento: string;
//   senha: string;
// }

// const userId = "d6bc";

// const PerfilUsuario: React.FC = () => {
//   const [usuario, setUsuario] = useState<Usuario | null>(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState<Usuario>({
//     nome: "",
//     emailInstitucional: "",
//     emailSecundario: "",
//     dataNascimento: "",
//     senha: "",
//   });

//   const loadUserData = async () => {
//     try {
//       const response = await axios.get(BASE_URL);
//       const user = response.data.filter((usuario: Usuario) => usuario.id === userId);
//       console.log(user);
      
//       setUsuario(user);
//       setEditForm(user);
//     } catch (error) {
//       console.error("Erro ao carregar dados do usuário:", error);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setEditForm({ ...editForm, [name]: value });
//   };

//   const saveUserData = async () => {
//     try {
//       await axios.put(BASE_URL, editForm);
//       setUsuario(editForm);
//       setIsEditing(false);
//       alert("Dados salvos com sucesso!");
//     } catch (error) {
//       console.error("Erro ao salvar dados do usuário:", error);
//     }
//   };

//   useEffect(() => {
//     loadUserData();
//   }, []);

//   console.log(editForm);
  

//   return (
//     <div className="userConteudo">
//       <h2>Perfil do Usuário</h2>
//       {usuario ? (
//         <div>
//           {isEditing ? (
//             <div>
//               <label>
//                 Nome:
//                 <input
//                   type="text"
//                   name="nome"
//                   value={editForm.nome}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Email Institucional:
//                 <input
//                   type="email"
//                   name="emailInstitucional"
//                   value={editForm.emailInstitucional}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Email Secundário:
//                 <input
//                   type="email"
//                   name="emailSecundario"
//                   value={editForm.emailSecundario}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Data de Nascimento:
//                 <input
//                   type="date"
//                   name="dataNascimento"
//                   value={editForm.dataNascimento}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Senha:
//                 <input
//                   type="password"
//                   name="senha"
//                   value={editForm.senha}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <button onClick={saveUserData}>Salvar</button>
//               <button onClick={() => setIsEditing(false)}>Cancelar</button>
//             </div>
//           ) : (
//             <div>
//               <p><strong>Nome:</strong> {usuario.nome}</p>
//               <p><strong>Email Institucional:</strong> {usuario.emailInstitucional}</p>
//               <p><strong>Email Secundário:</strong> {usuario.emailSecundario}</p>
//               <p><strong>Data de Nascimento:</strong> {usuario.dataNascimento}</p>
//               <p><strong>Senha:</strong> ******</p>
//               <button onClick={() => setIsEditing(true)}>Editar</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>Carregando dados do usuário...</p>
//       )}
//     </div>
//   );
// };

// export default PerfilUsuario;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, Typography, TextField, Button } from "@mui/material";
// import { height } from "@mui/system";
// import './PerfilUsuario.css';

// const BASE_URL = "http://localhost:3000/Usuario"; // Use a URL de usuários corretos (ajuste se necessário)

// interface Usuario {
//   id: string;
//   nome: string;
//   emailInstitucional: string;
//   emailSecundario: string;
//   dataNascimento: string;
//   senha: string;
//   fotoPerfil?: string;
// }

// const userId = "d6bc"; // Substitua pelo ID correto do usuário

// const PerfilUsuario: React.FC = () => {
//   const [usuario, setUsuario] = useState<Usuario | null>(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState<Usuario>({
//     id: "",
//     nome: "",
//     emailInstitucional: "",
//     emailSecundario: "",
//     dataNascimento: "",
//     senha: "",
//     fotoPerfil:""
//   });

//   // Carregar dados do usuário
//   const loadUserData = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/${userId}`); // Alterado para buscar por ID
//       setUsuario(response.data); // Assume que o usuário é retornado diretamente
//       setEditForm(response.data); // Preenche o formulário de edição com os dados carregados
//     } catch (error) {
//       console.error("Erro ao carregar dados do usuário:", error);
//     }
//   };

//   // Alterar os valores do formulário de edição
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setEditForm({ ...editForm, [name]: value });
//   };

//   // Salvar dados do usuário no servidor
//   const saveUserData = async () => {
//     try {
//       await axios.put(`${BASE_URL}/${userId}`, editForm); // Enviar os dados alterados de volta
//       setUsuario(editForm); // Atualizar o estado com os dados editados
//       setIsEditing(false); // Desativar o modo de edição
//       alert("Dados salvos com sucesso!");
//     } catch (error) {
//       console.error("Erro ao salvar dados do usuário:", error);
//     }
//   };

//   useEffect(() => {
//     loadUserData(); // Carregar dados ao montar o componente
//   }, []);

//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
//       <Card sx={{display:"flex", flexDirection:"column", width: "800px", height:"600px", borderRadius: "16px", boxShadow: 3, padding: "20px", gap:"25px" }}>
//         <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//           Perfil
//         </Typography>
//         <div style={{display:"flex", flexDirection:"column", justifyContent:"center", gap:"30px", alignItems:"center"}}>

//         <img src={usuario?.fotoPerfil} alt="" style={{width:"200px", height:"200px", borderRadius:"100%"}}/>
//         {usuario ? (
//           <div style={{display: "flex", justifyContent: "space-between", height:"800px"}}>
//             {isEditing ? (
//               <div>
//                 <TextField
//                   label="Nome"
//                   variant="outlined"
//                   fullWidth
//                   name="nome"
//                   value={editForm.nome}
//                   onChange={handleInputChange}
//                   sx={{ marginBottom: 2 }}
//                 />
//                 <TextField
//                   label="Email Institucional"
//                   variant="outlined"
//                   fullWidth
//                   name="emailInstitucional"
//                   value={editForm.emailInstitucional}
//                   onChange={handleInputChange}
//                   sx={{ marginBottom: 2 }}
//                 />
//                 <TextField
//                   label="Email Secundário"
//                   variant="outlined"
//                   fullWidth
//                   name="emailSecundario"
//                   value={editForm.emailSecundario}
//                   onChange={handleInputChange}
//                   sx={{ marginBottom: 2 }}
//                 />
//                 <TextField
//                   label="Data de Nascimento"
//                   variant="outlined"
//                   type="date"
//                   fullWidth
//                   name="dataNascimento"
//                   value={editForm.dataNascimento}
//                   onChange={handleInputChange}
//                   sx={{ marginBottom: 2 }}
//                 />
//                 <TextField
//                   label="Senha"
//                   variant="outlined"
//                   type="password"
//                   fullWidth
//                   name="senha"
//                   value={editForm.senha}
//                   onChange={handleInputChange}
//                   sx={{ marginBottom: 2 }}
//                 />
//                 <div style={{ display: "flex", gap: "10px" }}>
//                   <Button variant="contained" onClick={saveUserData} sx={{ flexGrow: 1 }}>
//                     Salvar
//                   </Button>
//                   <Button variant="outlined" onClick={() => setIsEditing(false)} sx={{ flexGrow: 1 }}>
//                     Cancelar
//                   </Button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//                   Nome: {usuario.nome}
//                 </Typography>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//                   Email Institucional: {usuario.emailInstitucional}
//                 </Typography>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//                   Email Secundário: {usuario.emailSecundario}
//                 </Typography>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//                   Data de Nascimento: {usuario.dataNascimento}
//                 </Typography>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//                   Senha: ******
//                 </Typography>
//                 <Button variant="outlined" onClick={() => setIsEditing(true)}>
//                   Editar
//                 </Button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Typography>Carregando dados do usuário...</Typography>
//         )}
//         </div>

//       </Card>
//     </div>
//   );
// };

// export default PerfilUsuario;

///////////////////////////////////////////// funcionando 20/11 ///////////////////////////////////////////////////


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, Typography, TextField, Button, Box } from "@mui/material";
// import './PerfilUsuario.css'; // Arquivo CSS para customizações adicionais
// import { display } from "@mui/system";

// const BASE_URL = "http://localhost:3000/Usuario"; // Use a URL de usuários corretos (ajuste se necessário)

// interface Usuario {
//   id: string;
//   nome: string;
//   emailInstitucional: string;
//   emailSecundario: string;
//   dataNascimento: string;
//   senha: string;
//   fotoPerfil?: string;
// }

// const userId = "d6bc"; // Substitua pelo ID correto do usuário

// const PerfilUsuario: React.FC = () => {
//   const [usuario, setUsuario] = useState<Usuario | null>(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState<Usuario>({
//     id: "",
//     nome: "",
//     emailInstitucional: "",
//     emailSecundario: "",
//     dataNascimento: "",
//     senha: "",
//     fotoPerfil: "",
//   });

//   // Carregar dados do usuário
//   const loadUserData = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/${userId}`); // Alterado para buscar por ID
//       setUsuario(response.data); // Assume que o usuário é retornado diretamente
//       setEditForm(response.data); // Preenche o formulário de edição com os dados carregados
//     } catch (error) {
//       console.error("Erro ao carregar dados do usuário:", error);
//     }
//   };

//   // Alterar os valores do formulário de edição
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setEditForm({ ...editForm, [name]: value });
//   };

//   // Alterar a foto do perfil
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const file = e.target.files[0];
//       setEditForm({ ...editForm, fotoPerfil: URL.createObjectURL(file) });
//     }
//   };

//   // Salvar dados do usuário no servidor
//   const saveUserData = async () => {
//     try {
//       await axios.put(`${BASE_URL}/${userId}`, editForm); // Enviar os dados alterados de volta
//       setUsuario(editForm); // Atualizar o estado com os dados editados
//       setIsEditing(false); // Desativar o modo de edição
//       alert("Dados salvos com sucesso!");
//     } catch (error) {
//       console.error("Erro ao salvar dados do usuário:", error);
//     }
//   };

//   useEffect(() => {
//     loadUserData(); // Carregar dados ao montar o componente
//   }, []);

//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
//       <Card sx={{ display: "flex", flexDirection: "column", width: "800px", maxHeight: "800px", borderRadius: "16px", boxShadow: 3, padding: "20px", gap: "25px", overflowY: "auto" }}>
//         <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2, textAlign:"center" }}>
//           Perfil do Usuário
//         </Typography>

//         <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", alignItems: "center" }}>
//           {/* Exibindo a foto do perfil */}
//           <img 
//             src={usuario?.fotoPerfil || "default-profile.png"} 
//             alt="Foto de perfil" 
//             style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", border: "3px solid #0077ff" }} 
//           />
          
//           {/* Input para alterar a foto */}
//           {isEditing && (
//             <TextField
//               type="file"
//               variant="outlined"
//               fullWidth
//               onChange={handleFileChange}
//               sx={{ marginBottom: 2 }}
//             />
//           )}

//           {usuario ? (
//             <div style={{ display: "flex", flexDirection: "column", gap: "15px", width: "100%" }}>
//               {isEditing ? (
//                 <div>
//                   <TextField
//                     label="Nome"
//                     variant="outlined"
//                     fullWidth
//                     name="nome"
//                     value={editForm.nome}
//                     onChange={handleInputChange}
//                     sx={{ marginBottom: 2 }}
//                   />
//                   <TextField
//                     label="Email Institucional"
//                     variant="outlined"
//                     fullWidth
//                     name="emailInstitucional"
//                     value={editForm.emailInstitucional}
//                     onChange={handleInputChange}
//                     sx={{ marginBottom: 2 }}
//                   />
//                   <TextField
//                     label="Email Secundário"
//                     variant="outlined"
//                     fullWidth
//                     name="emailSecundario"
//                     value={editForm.emailSecundario}
//                     onChange={handleInputChange}
//                     sx={{ marginBottom: 2 }}
//                   />
//                   <TextField
//                     label="Data de Nascimento"
//                     variant="outlined"
//                     type="date"
//                     fullWidth
//                     name="dataNascimento"
//                     value={editForm.dataNascimento}
//                     onChange={handleInputChange}
//                     sx={{ marginBottom: 2 }}
//                   />
//                   <TextField
//                     label="Senha"
//                     variant="outlined"
//                     type="password"
//                     fullWidth
//                     name="senha"
//                     value={editForm.senha}
//                     onChange={handleInputChange}
//                     sx={{ marginBottom: 2 }}
//                   />
//                   <div style={{ display: "flex", gap: "10px" }}>
//                     <Button variant="contained" onClick={saveUserData} sx={{ flexGrow: 1 }}>
//                       Salvar
//                     </Button>
//                     <Button variant="outlined" onClick={() => setIsEditing(false)} sx={{ flexGrow: 1 }}>
//                       Cancelar
//                     </Button>
//                   </div>
//                 </div>
//               ) : (
//                 <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//                     Nome: {usuario.nome}
//                   </Typography>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//                     Email Institucional: {usuario.emailInstitucional}
//                   </Typography>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//                     Email Secundário: {usuario.emailSecundario}
//                   </Typography>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//                     Data de Nascimento: {usuario.dataNascimento}
//                   </Typography>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//                     Senha: ******
//                   </Typography>
//                   <Button variant="outlined" onClick={() => setIsEditing(true)}>
//                     Editar
//                   </Button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Typography>Carregando dados do usuário...</Typography>
//           )}
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default PerfilUsuario;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Typography, TextField, Button, Box } from "@mui/material";
import './PerfilUsuario.css'; // Arquivo CSS para customizações adicionais

const BASE_URL = "http://localhost:3000/Usuario"; // URL do seu servidor

interface Usuario {
  id: string;
  nome: string;
  emailInstitucional: string;
  emailSecundario: string;
  dataNascimento: string;
  senha: string;
  fotoPerfil?: string;
}

const PerfilUsuario: React.FC = () => {
  // Estado do usuário
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [isEditing, setIsEditing] = useState(false); // Controle para o modo de edição
  const [editForm, setEditForm] = useState<Usuario>({
    id: "",
    nome: "",
    emailInstitucional: "",
    emailSecundario: "",
    dataNascimento: "",
    senha: "",
    fotoPerfil: "",
  });

  // Recuperar o ID do usuário logado do localStorage
  const loggedUser = localStorage.getItem("user");
  const userId = loggedUser ? JSON.parse(loggedUser).id : null;
  console.log(userId);
  

  // Carregar dados do usuário
  const loadUserData = async () => {
    if (!userId) return; // Verifica se o ID do usuário está disponível
    try {
      const response = await axios.get(`${BASE_URL}/${userId}`); // Busca o usuário com o ID logado
      setUsuario(response.data); // Define os dados do usuário
      setEditForm(response.data); // Preenche o formulário de edição com os dados do usuário
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
    }
  };

  useEffect(() => {
    loadUserData(); // Carregar dados ao montar o componente
  }, [userId]); // Dependência para recarregar se o ID mudar

  // Alterar os valores do formulário de edição
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  // Alterar a foto do perfil
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setEditForm({ ...editForm, fotoPerfil: URL.createObjectURL(file) });
    }
  };

  // Salvar dados do usuário no servidor
  const saveUserData = async () => {
    if (!userId) return;
    try {
      await axios.put(`${BASE_URL}/${userId}`, editForm); // Atualiza os dados no servidor
      setUsuario(editForm); // Atualiza o estado com os dados editados
      setIsEditing(false); // Desativa o modo de edição
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados do usuário:", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <Card sx={{ display: "flex", flexDirection: "column", width: "800px", maxHeight: "800px", borderRadius: "16px", boxShadow: 3, padding: "20px", gap: "25px", overflowY: "auto" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2, textAlign:"center" }}>
          Perfil do Usuário
        </Typography>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", alignItems: "center" }}>
          {/* Exibindo a foto do perfil */}
          <img 
            src={usuario?.fotoPerfil || "default-profile.png"} 
            alt="Foto de perfil" 
            style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", border: "3px solid #0077ff" }} 
          />
          
          {/* Input para alterar a foto */}
          {isEditing && (
            <TextField
              type="file"
              variant="outlined"
              fullWidth
              onChange={handleFileChange}
              sx={{ marginBottom: 2 }}
            />
          )}

          {usuario ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", width: "100%" }}>
              {isEditing ? (
                <div>
                  <TextField
                    label="Nome"
                    variant="outlined"
                    fullWidth
                    name="nome"
                    value={editForm.nome}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Email Institucional"
                    variant="outlined"
                    fullWidth
                    name="emailInstitucional"
                    value={editForm.emailInstitucional}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Email Secundário"
                    variant="outlined"
                    fullWidth
                    name="emailSecundario"
                    value={editForm.emailSecundario}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Data de Nascimento"
                    variant="outlined"
                    type="date"
                    fullWidth
                    name="dataNascimento"
                    value={editForm.dataNascimento}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Senha"
                    variant="outlined"
                    type="password"
                    fullWidth
                    name="senha"
                    value={editForm.senha}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                  />
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Button variant="contained" onClick={saveUserData} sx={{ flexGrow: 1 }}>
                      Salvar
                    </Button>
                    <Button variant="outlined" onClick={() => setIsEditing(false)} sx={{ flexGrow: 1 }}>
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                    Nome: {usuario.nome}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                    Email Institucional: {usuario.emailInstitucional}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                    Email Secundário: {usuario.emailSecundario}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                    Data de Nascimento: {usuario.dataNascimento}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                    Senha: ****** 
                  </Typography>
                  <Button variant="outlined" onClick={() => setIsEditing(true)}>
                    Editar
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Typography>Carregando dados do usuário...</Typography>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PerfilUsuario;
