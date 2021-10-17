import React from 'react'
import './Styles.css';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
     <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
       <Container className = "container">
         <LinkContainer to='/'>
           <Navbar.Brand>ProShop</Navbar.Brand>
         </LinkContainer>
         <Navbar.Toggle aria-controls='basic-navbar-nav' />
         <Navbar.Collapse id='basic-navbar-nav'>

           <Nav className ="Navbar">
           <div className = "Navbar-item" >
             <LinkContainer to='/cart'>
               <Nav.Link>
                 Cart
               </Nav.Link>
             </LinkContainer>
             </div>


               <div className = "Navbar-item" >
               <LinkContainer to='/login'>
                 <Nav.Link>
                    Sign In
                 </Nav.Link>
               </LinkContainer>
</div>

               <div className = "Navbar-item" >
               <LinkContainer to='/login'>
                 <Nav.Link>
                    Sign In
                 </Nav.Link>
               </LinkContainer>
               </div>

               <div className = "Navbar-item" >
               <LinkContainer to='/login'>
                 <Nav.Link>
                    Sign In
                 </Nav.Link>
               </LinkContainer>
               </div>

               <div className = "Navbar-item" >
               <LinkContainer to='/login'>
                 <Nav.Link>
                    Sign In
                 </Nav.Link>
               </LinkContainer>
               </div>



           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
   </header>
  )
}

export default Header
