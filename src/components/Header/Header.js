import React from 'react';
import './Header.css'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Volunteer-Network</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     
    
     
    </Nav>
    
    <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Donation</Nav.Link>
    <Nav.Link href="#link">Event</Nav.Link>
      <Nav.Link href="#link">Block</Nav.Link>
      <Button variant="outline-success">Register</Button>
    </Nav>
    <Form inline>
    
     
     
      <Button variant="dark">Admin</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;