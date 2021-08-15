import React from "react";
import "./style.css";
import {Navbar, Nav, Container} from 'react-bootstrap';

//include React-bootstrap - ref pupster
function HeaderNav() {
  return (
    <div>
      <Navbar className="navStyle" bg="light" expand="lg">
        <Container className="flex">
          <Navbar.Brand className="brand" href="#home">Lougine Scott</Navbar.Brand>
          <Navbar.Toggle aria-controls />
          <Navbar.Collapse>
            <Nav className="flex">
              <Nav.Link href="./About Me">AboutMe</Nav.Link>
              <Nav.Link href="./Projects">Project</Nav.Link>
              <Nav.Link href="./Contact Me">JContact Me</Nav.Link>
              <Nav.Link href="./Resume">Resume</Nav.Link>
              
              {/* <Button type="submit">Logout</Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );};

export default HeaderNav;