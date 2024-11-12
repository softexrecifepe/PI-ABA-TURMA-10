import React from 'react';
import { useMask } from '@react-input/mask';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

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
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>CNPJ</Form.Label>
          <Form.Control ref={ref} type="text" placeholder="CNPJ" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Nome Fantasia</Form.Label>
        <Form.Control placeholder="Nome da empresa" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Contato Representante</Form.Label>
        <Form.Control ref={foneref} placeholder="Contato Representante" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress3">
        <Form.Label>Dominio</Form.Label>
        <Form.Control placeholder="Dominio" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
  );
};

export default GridComplexExample;
