import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => (
	<>
		<header>
			<div id="stampWrapper">
				<div id="initialStamp">
					<h2>Aprende inglés</h2>
				</div>
				<div>
					<p>Si quieres aprender inglés, estas en el lugar correcto</p>
				</div>
				<div id="stampCTA">
					<Link to="/planes">¡Mira nuestros planes!</Link>
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
						<Link to="https://www.amazon.es/Practice-Perfect-Rules-Getting-Better-ebook/dp/B007ZQ34V4">
							{" "}
							&quot;Practica Perfectamente&quot;
						</Link>
					</div>
					<div>
						Nuestros profesores
						<Link to="https://www.amazon.com/-/es/Doug-Lemov-ebook/dp/B072LQNRMD">
							{" "}
							enseñan como campeones
						</Link>
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
