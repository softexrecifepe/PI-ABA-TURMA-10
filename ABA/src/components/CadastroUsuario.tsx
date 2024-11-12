import React from 'react';
import Form from 'react-bootstrap/Form';

const CadastroUsuario: React.FC = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
    </Form>
  );
}

export default CadastroUsuario;
