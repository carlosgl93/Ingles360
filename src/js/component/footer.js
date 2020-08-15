import React, { Component } from "react";
import "../../styles/footerStyle.css";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div id="footerGrid">
			<div>
				<h3>Inglés 360</h3>
				<hr />
				<p>Donde y cuando tu quieras.</p>
			</div>
			<div>
				<h3>Cuenta</h3>
				<hr />
				<ul>
					<li>
						<Link>Registrate</Link>
					</li>
					<li>
						<Link>Inicia Sesion</Link>
					</li>
					<li>
						<Link>Agenda tus clases</Link>
					</li>
				</ul>
			</div>
			<div>
				<h3>Cursos</h3>
				<hr />
				<ul>
					<li>
						<Link>Programas e índices</Link>
					</li>
					<li>
						<Link>Metodología</Link>
					</li>
					<li>
						<Link>Practica conversando</Link>
					</li>
				</ul>
			</div>

			<div id="sNetworks" className="socialNetworks">
				<h3>Contactanos</h3>
				<hr />
				<ul>
					<li>
						<Link to="/contact">
							<i className="fas fa-envelope" />
						</Link>
					</li>

					<li>
						<Link to="/facebook.com">
							<i className="fab fa-facebook-f" />
						</Link>
					</li>

					<li>
						<Link to="/linkedin.com">
							<i className="fab fa-linkedin" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</footer>
);
