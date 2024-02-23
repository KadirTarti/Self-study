import { Container, Nav, Navbar, NavDropdown,} from 'react-bootstrap';
import './Navbar.scss'


const Navbar1 = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary container">
        <Container className='konteynir' fluid>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <a href="#home"><img src="" alt="" /></a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links ms-auto">
              <Nav.Link href="#home">HOROSCOPE</Nav.Link>
              <Nav.Link href="#link">DAILY</Nav.Link>
              <Nav.Link href="#link">TAROT</Nav.Link>
              <Nav.Link href="#link">ARTICLE</Nav.Link>
              <Nav.Link href="#link">CONTACT</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
