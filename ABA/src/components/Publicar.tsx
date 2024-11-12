import './Publicar.css';
import Button from 'react-bootstrap/Button';
import React from 'react';

const Publicar: React.FC = () => {
  return (
    <div className="container-total">
      <div className='containerdigita'>
        <p>Sobre o que você deseja discutir?</p>
      </div>
      <Button className='botao' variant="primary">Publicar</Button>
    </div>
  );
}

export default Publicar;
