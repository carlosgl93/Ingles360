import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cursos.css";

function Cursos() {
	return (
		<div id="cursosWrapper">
			<h2>Cursos disponibles</h2>
			<div id="cursosGrid">
				<div>
					<h3>Básico</h3>
					<ul>
						<li>Máximo 4 personas por clase</li>
						<li>
							<Link to="/Temario">Temario</Link>
						</li>
						<li>
							<Link to="/Fechas">Fechas de inicio</Link>
						</li>
						<li>
							<Link to="/valor">Calcular valor mensual</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3>Intermedio</h3>
					<ul>
						<li>Máximo 4 personas por clase</li>
						<li>
							<Link to="/Temario">Temario</Link>
						</li>
						<li>
							<Link to="/Fechas">Fechas de inicio</Link>
						</li>
						<li>
							<Link to="/valor">Calcular valor mensual</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3>Avanzado</h3>
					<ul>
						<li>Máximo 4 personas por clase</li>
						<li>
							<Link to="/Temario">Temario</Link>
						</li>
						<li>
							<Link to="/Fechas">Fechas de inicio</Link>
						</li>
						<li>
							<Link to="/valor">Calcular valor mensual</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3>Para negocios</h3>
					<ul>
						<li>Máximo 4 personas por clase</li>
						<li>
							<Link to="/Temario">Temario</Link>
						</li>
						<li>
							<Link to="/Fechas">Fechas de inicio</Link>
						</li>
						<li>
							<Link to="/valor">Calcular valor mensual</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3>Para programación</h3>
					<ul>
						<li>Máximo 4 personas por clase</li>
						<li>
							<Link to="/Temario">Temario</Link>
						</li>
						<li>
							<Link to="/Fechas">Fechas de inicio</Link>
						</li>
						<li>
							<Link to="/valor">Calcular valor mensual</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cursos;
