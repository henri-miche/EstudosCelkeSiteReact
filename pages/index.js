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


function Home() {


   

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

  return (
        <div>
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

      <Jumbotron fluid  className='pg-home '>
      <style>
          {`.pg-home{
              background-color: #1C1C1C;
              color:  #Fff;
              padding-top:50px;
              padding-bottom:50px;
              margin-bottom:0rem !important;
              border-radius:0px;
              height:400px;
              display:flex;
              align-items: center;
              justify-content: center;
         }`}
      </style>
        
        <style>
             {`.rodape{
                 color:#fff;
                 background-color: #000;
                 padding-top:10px;
                 padding-bottom:10px;
                 margin-bottom:0rem !important;
             }.img{
                 width:200px;
                 height:200px;
                 border-radius:100px;
                 margin-right:50px;
                 
                 
             }.divFora{
                 display:flex;
                 flex-direction: row;
                 justify-content:center;
                 align-items:center;
                
                 
             }.fullStack{
                 
                 border-radius: 5px;
                 width:160px;
                 display:flex;
                 justify-content: center;
                 text-align:center;
                 background-color:#FF8C00;
                 font-weight: bold;
                 line-height: 20px;
                 text-align: center;
                 height:25px;
                 color:#000;
                 margin-bottom:10px;
             }.divTextos{
                 
                
                 
             }.textoTecn{
                 color:#FF8C00;
                
                 
             }`}
         </style>
         <Container>
             <div class="divFora">

            <div>
                <img src="/IMG_20200710_124645.jpg" className="img" />
            </div>

           <div className='divTextos'>  
           <div className="fullStack">
               <p>FullStack Developer</p>
           </div>           
          <h2 className="cor">Desenvolvimento de aplicações performáticas, Mobile e Web, com foco na experiência de usuário.</h2>
          <p className="textoTecn">Tecnologias que já utilizei: Node, Firebase, React, React-Native,Bootstrap e Next.</p>
        </div>

        </div>
        </Container>
       
      </Jumbotron>

         <Jumbotron fluid className="rodape">
         <style>
             {`.rodape{
                 color:#fff;
                 background-color: #000;
                 padding-top:10px;
                 padding-bottom:10px;
                 margin-bottom:0rem !important;
                 display:flex;
                 align-items: center;
                 justify-content: center;
                 height:119px;

             }`}
         </style>
             <Container>
                <h1 className="lead text-center">Rodapé</h1>
             </Container>
         </Jumbotron>
     
        </div>
  
  );
}

export default Home;