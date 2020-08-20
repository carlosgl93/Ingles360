import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/navStyle.css";

export const MyNav = () => {
	const { store } = useContext(Context);
	console.log(store);
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/">
				<h2>Inglés 360</h2>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
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
			</div>
		</nav>
	);
};
