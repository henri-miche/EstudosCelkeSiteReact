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
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from 'reactstrap';


function Orcamento() {


    const [orcamento,setOrcamento] = useState({
        name:'',
        email:'',
        phone:'',
        whats:'',
        msg:''
    });

    const [response,setResponse] = useState({
        formSave:false,
        type:'',
        message:''
    })

    const onChangeInput = e => setOrcamento({...orcamento,[e.target.name]: e.target.value });
   
    const sendOrcamento = async e => {
        e.preventDefault();
        setResponse({formSave:true});
        try {
            const res = await fetch('http://localhost:8080/orcamento' , {
                method:'POST',
                body:JSON.stringify(orcamento),
                headers:{'Content-Type':'application/json'}
            });
            const responseEnv = await res.json();
           // console.log(responseEnv); 
           if (responseEnv.error) {
               setResponse({
                   formSave:false,
                   type:'error',
                   message:responseEnv.message
               })
           }else{
               setResponse({
                   formSave:false,
                   type:'success',
                   message:responseEnv.message
               })
           }
        } catch (error) {
            setResponse({
                formSave:false,
                   type:'error',
                   message:"ERRO: Solicitação de orçamento não enviada com sucesso,tente novamente mais tarde!"
               })
        }
    }

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

      <Jumbotron className='pg-orcamento'>
      <style>
          {`.pg-orcamento{
              background-color: #1C1C1C;
              color: #FFf;
              padding-top:50px;
              padding-bottom:50px;
              margin-bottom:0rem !important;
              border-radius:0px;
         }.txtSub{
           color: #FF8C00;
         }
         
         `}
      </style>
        <Container >
          <h1 className="display-4 text-center mb-4 txtSub">Estou a disposição para lhe ajudar!</h1>
          <p className="lead text-center mb-4 ">Deixe seus contatos abaixo que retornarei com a proposta específica para sua necessidade.</p>
        
        {response.type === 'error'? <Alert color="danger">{response.message}</Alert>:"" }
        {response.type === 'success'? <Alert color="success">{response.message}</Alert>:"" }
        <Form onSubmit={sendOrcamento}>
        <FormGroup>
        <Label for="nome">Nome</Label>
        <Input type="text" name="name" id="name" placeholder="Preencha com o nome completo." 
        onChange={onChangeInput} />
         
      </FormGroup>
      

      
        <FormGroup>
        <Label for="email">E-mail</Label>
        <Input type="email" name="email" id="email" placeholder="Preencha com o seu melhor e-mail." 
            onChange={onChangeInput}
        />
      </FormGroup>
      

      
        <FormGroup>
        <Label for="phone">Telefone</Label>
        <Input type="text" name="phone" id="phone" placeholder="(xx) xxxx-xxxx"
        onChange={onChangeInput} />
      </FormGroup>
      

      
        <FormGroup>
        <Label for="whats">Whatsapp</Label>
        <Input type="text" name="whats" id="whats" placeholder="(xx) xxxx-xxxx" 
            onChange={onChangeInput}
        />
      </FormGroup>
      

      
        <FormGroup>
        <Label for="msg">Conteúdo</Label>
        <Input type="textarea" name="msg" id="msg" placeholder="Fale um pouco do seu projeto."
        onChange={onChangeInput} />
      </FormGroup>
      
      {response.formSave ? <Button type="submit" outline color="light" disabled >Enviando...</Button> 
      : <Button type="submit" outline color="light" >Enviar</Button> }   
      
        </Form>
        
        </Container>
      </Jumbotron>

         <Jumbotron fluid className="rodape ">
         <style>
             {`.rodape{
                 color:#fff;
                 padding-top:10px;
                 padding-bottom:10px;
                 margin-bottom:0rem !important;
                 background-color:#000;
             }`}
         </style>
             <Container>
                <h1 className="lead text-center">Rodapé</h1>
             </Container>
         </Jumbotron>
      
        </div>
  
  );
}

export default Orcamento;