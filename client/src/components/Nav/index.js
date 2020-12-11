import React from "react";
import * as ReactBootstrap from "react-bootstrap";

function Navigation() {
  return (
<ReactBootstrap.Navbar expand="lg" className="navbar">
  <ReactBootstrap.Navbar.Brand href="#home">TERESA PIERCE</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="/">home</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="/portfolio">portfolio</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="/aboutme">about me</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="/contact">contact</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
  );
}

export default Navigation;
