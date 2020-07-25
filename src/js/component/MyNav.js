import React, { useState, useEffect, useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const MyNav = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/">Inglés 360</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<LinkContainer to="/register">
						<Nav.Link>Regístrate</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/login">
						<Nav.Link>Iniciar Sesión</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/practice">
						<Nav.Link>Repasar</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/matchmaking">
						<Nav.Link>Practica conversando</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/how">
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
