import React from 'react';
import { useMask } from '@react-input/mask';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Cadastro.css';


const GridComplexExample: React.FC = () => {
  const reg = /\d/;
  const ref = useMask({
    mask: '__.___.___/000_-__',
    replacement: { _: reg },
  });
  const foneref = useMask({
    mask: '(__)_____-____',
    replacement: { _: reg },
  });

  return (
<>
<div className='titulo'>
  <h1 className='titulo2'>Cadastro</h1>
</div>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>CNPJ</Form.Label>
          <Form.Control id='input' ref={ref} type="text" placeholder="00.000.000/0000-00" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Nome</Form.Label>
          <Form.Control id='input' type="text" placeholder="Nome" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Nome Fantasia</Form.Label>
        <Form.Control id='input' placeholder="Nome da empresa" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Contato Representante</Form.Label>
        <Form.Control id='input' ref={foneref} placeholder="(99)99999-9999" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress3">
        <Form.Label>Dominio</Form.Label>
        <Form.Control id='input' type="email"  placeholder="Ex: email@suaempresa.com" />
      </Form.Group>
      <div className='botao'> 
      <Button style={{backgroundColor:'#0A3161'}} type="submit">
        Cadastrar
      </Button>
      </div>
    </Form> 
    </>
  );
};

export default GridComplexExample;
