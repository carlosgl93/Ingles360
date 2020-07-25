import React, { useState, useEffect, useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const myNav = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/">Nomad English</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<LinkContainer to="/register">
						<Nav.Link>Registrate</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/login">
						<Nav.Link>Iniciar Sesión</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/profile">
						<Nav.Link>Metodología</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/cursos">
						<Nav.Link>Cursos</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
