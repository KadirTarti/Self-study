import { Container, Nav, Navbar, Button} from 'react-bootstrap';
import './Navbar.scss'
import logo from './logo.png'




const Navbar1 = () => {
  return (
    <div className='first-div'>
      <Navbar fluid expand="lg" className="container">
        <Container className='navbar' fluid>
          <Navbar.Brand fluid href="#home">
          <img src={logo} width="100" height="100" className="d-inline-block align-top"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
             
              <Button className='link-button' variant="dark">HOROSCOPE</Button>
              <Button className='link-button' variant="dark">DAILY</Button>
              <Button className='link-button' variant="dark">TAROT</Button>
              <Button className='link-button' variant="dark">ARTICLE</Button>
              <Button className='link-button' variant="dark">CONTACT</Button>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
