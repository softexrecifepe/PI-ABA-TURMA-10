import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Insti1 from '../imagem/aba-logo.png'

function Instituicao() {
  return (
    <>
    <div className='pesquisa'>
   <label htmlFor="pesquisa">
    <input type="text" placeholder='Pesquisar...' />
   </label>
   </div>
    <div className='institui'>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={Insti1} roundedCircle />
          <p className='nomes'>ABA - Global Education</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={Insti1} roundedCircle />
          <p className='nomes2'>ABA - Global Education</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={Insti1} roundedCircle />
          <p className='nomes3'>ABA - Global Education</p>
        </Col>
        </Row>
    </Container>
    </div>
    <div className='institui2'>
        <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={Insti1} roundedCircle />
          <p className='nomes'>ABA - Global Education</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={Insti1} roundedCircle />
          <p className='nomes2'>ABA - Global Education</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={Insti1} roundedCircle />
          <p className='nomes3'>ABA - Global Education</p>
        </Col>
        </Row>
    </Container>
    </div>
    </>
  );
}

export default Instituicao;