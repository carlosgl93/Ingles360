import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => (
	<>
		<header className="container-fluid">
			<div className="landing-container">
				<h2>Aprende conversando sin profesores</h2>
				<p>
					TeacherLess es la primera aplicación web para aprender inglés a través de conversaciones sin
					profesores.
				</p>
				<Link to="#">¿Cómo funciona?</Link>
				<div>
					<button className="button">
						<Link to="/register">Registrate para comenzar</Link>
					</button>
				</div>
			</div>
		</header>

		<main>
			<div id="grid">
				<div>
					<h3>
						<Link>Inglés básico</Link>
					</h3>
				</div>
				<div>
					<h3>
						<Link>Inglés intermedio</Link>
					</h3>
				</div>
				<div>
					<h3>
						<Link>Inglés avanzado</Link>
					</h3>
				</div>
				<div>
					<h3>
						<Link>Inglés de negocios</Link>
					</h3>
				</div>
				<div>
					<h3>
						<Link>Inglés para desarrolladores</Link>
					</h3>
				</div>
				<div>
					<h3>
						<Link>Clases privadas</Link>
					</h3>
				</div>
			</div>
			<div id="why">
				<h2>¿Por qué Inglés 360 sí resulta?</h2>
				<div id="explanationWhy">
					<div>Metodología cognitiva que maximiza el aprendizaje</div>
					<div>Te enseñamos todo lo necesario para maximizar la neuroplasticidad</div>
					<div>
						Clases basadas en el libro
						<a href="https://www.amazon.es/Practice-Perfect-Rules-Getting-Better-ebook/dp/B007ZQ34V4">
							{" "}
							&quot;Practica Perfectamente&quot;
						</a>
					</div>
					<div>
						Nuestros profesores
						<a href="https://www.amazon.com/-/es/Doug-Lemov-ebook/dp/B072LQNRMD"> enseñan como campeones</a>
					</div>
					<div>Horario flexible</div>
					<div>Practicas todos los días</div>
				</div>
				<button>
					<Link to="/Cursos">Cursos</Link>
				</button>
			</div>
		</main>
	</>
);
