import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <>
    <div className='navbar'>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link eventKey="link-1">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Home</Nav.Link>
      </Nav.Item>
     </Nav>
    </div>
    </>
  );
}

export default Header;