import React from 'react'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// import Indexjs from './index'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import Logo from './assests/images/avatar.png'
export default function header() {
  let width='100px'
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <img src={Logo}
    width = {width}
    />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink className="nav-link active" to= "/Home">Home</NavLink>
       <NavLink className="nav-link active" to='/About'>About</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>  )


}




