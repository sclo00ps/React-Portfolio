import React from "react";
import "./style.css";
//import {Navbar, NavbarCollapse, NavbarToggle, NavbarBrand, NavLink, Nav} from "react-bootstrap/Navbar";
import {Navbar, Nav, Container} from 'react-bootstrap';

//include React-bootstrap - ref pupster
function HeaderNav() {
  return (
    <div>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
        <Container> 
          {/*<Navbar.Brand className="brand" href="#home">Lougine Scott</Navbar.Brand>*/}
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id ='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About Me">About Me</Nav.Link>
              <Nav.Link href="/Projects">Project</Nav.Link>
              <Nav.Link href="/Contact Me">Contact Me</Nav.Link>
              <Nav.Link href="/Resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
       </Container> 
      </Navbar>
     
    </div>

  );};

export default HeaderNav;