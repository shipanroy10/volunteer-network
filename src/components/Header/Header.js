import React from 'react';
import './Header.css'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../volunteer-network-main/logos/Group 1329.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
             <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"> <img style={{width:'150px',height:'50px'}}
             src={logo} alt=""/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav className="mr-auto">
              <Link to="/login">
              <Button variant="outline-success">Register</Button> </Link>
              <Link to="/home">  <Nav.Link href="#home">Home</Nav.Link>    </Link>
                <Nav.Link href="#link">Donation</Nav.Link>
              <Nav.Link href="#link">Event</Nav.Link>
                <Nav.Link href="#link">Block</Nav.Link> 
              </Nav> 
              <Form inline>      
              <Link to="/update"> <Button variant="dark">Admin</Button></Link>
              </Form>
            </Navbar.Collapse>
          </Navbar>

        </div>
    );
};

export default Header;