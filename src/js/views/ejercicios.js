import React from "react";
import { Link } from "react-router-dom";

function Ejercicios() {
	return (
		<div>
			<h2>Aquí puedes repasar los contenidos de clase</h2>
			<p>Haz click en el tema que quieras repasar</p>
			<ul>
				<Link to="/ejercicios/vocabulario">
					<li>Aprender vocabulario</li>
				</Link>
				<Link to="/ejercicios/estructuras">
					<li>Estructuras</li>
				</Link>
				<Link to="/ejercicios/conjugaciones">
					<li>Conjugaciones</li>
				</Link>
				<Link to="/ejercicios/sustantivos">
					<li>Sustantivos</li>
				</Link>
				<Link to="/ejercicios/completar">
					<li>Completa el párrafo (para alumnos avanzados)</li>
				</Link>
			</ul>
		</div>
	);
}

export default Ejercicios;
