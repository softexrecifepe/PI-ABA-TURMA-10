import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Teste from "../imagem/koromaru.png";

const Home: React.FC = () => {
  return (
    <>
      <div className='pesquisa'>
        <label htmlFor="pesquisa">
          <input type="text" placeholder='Pesquisar...' />
        </label>
      </div>

      <div className='container'>
        <div className='card1'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Teste} />
            <Card.Body>
              <Card.Title>Projeto 1</Card.Title>
              <Card.Text>
                Projeto sobre projeto sobre projeto sobre projeto sobre projeto sobre aaaaaa
              </Card.Text>
              <Button variant="primary">Veja mais!</Button>
            </Card.Body>
          </Card>
        </div>
        
        <div className='card2'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Teste} />
            <Card.Body>
              <Card.Title>Projeto 2</Card.Title>
              <Card.Text>
                Projeto sobre projeto sobre projeto sobre projeto sobre projeto sobre aaaaaa
              </Card.Text>
              <Button variant="primary">Veja mais!</Button>
            </Card.Body>
          </Card>
        </div>
        
        <div className='card3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Teste} />
            <Card.Body>
              <Card.Title>Projeto 3</Card.Title>
              <Card.Text>
                Projeto sobre projeto sobre projeto sobre projeto sobre projeto sobre aaaaaa
              </Card.Text>
              <Button variant="primary">Veja mais!</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='container'>
        <div className='card1'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Teste} />
            <Card.Body>
              <Card.Title>Projeto 1</Card.Title>
              <Card.Text>
                Projeto sobre projeto sobre projeto sobre projeto sobre projeto sobre aaaaaa
              </Card.Text>
              <Button variant="primary">Veja mais!</Button>
            </Card.Body>
          </Card>
        </div>
        
        <div className='card2'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Teste} />
            <Card.Body>
              <Card.Title>Projeto 2</Card.Title>
              <Card.Text>
                Projeto sobre projeto sobre projeto sobre projeto sobre projeto sobre aaaaaa
              </Card.Text>
              <Button variant="primary">Veja mais!</Button>
            </Card.Body>
          </Card>
        </div>
        
        <div className='card3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Teste} />
            <Card.Body>
              <Card.Title>Projeto 3</Card.Title>
              <Card.Text>
                Projeto sobre projeto sobre projeto sobre projeto sobre projeto sobre aaaaaa
              </Card.Text>
              <Button variant="primary">Veja mais!</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
