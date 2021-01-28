import React , { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Jumbotron,
  
  
} from 'reactstrap';

const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

const CustomNavBar = () => {
    return(
         <Navbar  dark expand="md" className='pg-nav'>
            <style>
          {`.pg-nav{
              background-color: #141414;
              
         }`}
      </style>
            
            <Container>
        <NavbarBrand  href="/">
           <img src="/logomodificada.jpg" />
        </NavbarBrand>
       
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/orcamento">Orçamento</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/henri-miche">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    )
}

export default CustomNavBar;