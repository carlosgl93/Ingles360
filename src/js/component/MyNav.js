import React, { useState, useEffect, useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/navStyle.css";

export const MyNav = () => {
	const { store } = useContext(Context);
	console.log(store);
	return (
		<Navbar id="navbar" collapseOnSelect expand="lg">
			<Navbar.Brand href="/">Inglés 360</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					{store.currentUser !== null ? (
						<>
							<LinkContainer to="/profile">
								<Nav.Link>Perfil</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/calendarizar">
								<Nav.Link>Calendarizar Clases</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/ejercicios">
								<Nav.Link>Ejercicios</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/matchmaking">
								<Nav.Link>Practica conversando</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/metodologia">
								<Nav.Link>Metodología</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/cursos">
								<Nav.Link>Cursos</Nav.Link>
							</LinkContainer>
						</>
					) : (
						<>
							<LinkContainer to="/register">
								<Nav.Link>Registrate</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link>Login</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/matchmaking">
								<Nav.Link>Practica conversando</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/metodologia">
								<Nav.Link>Metodología</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/cursos">
								<Nav.Link>Cursos</Nav.Link>
							</LinkContainer>
						</>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
