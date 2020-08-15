import React from "react";

function Valor() {
	return (
		<div>
			<div id="explicacion">
				<h2>Calcula el valor de tu curso</h2>
				<p>En Inglés 360, tu determinas el valor de tu curso:</p>
				<ol>
					<li>Selecciona el curso que quieres tomar</li>
					<li>Escoge cuantas clases a la semana quieres tomar</li>
				</ol>
			</div>
			<form id="calculator">
				<label htmlFor="cursos">Selecciona tu curso</label>
				<select id="cursos">
					<option value="basico">Básico</option>
					<option value="intermedio">Intermedio</option>
					<option value="avanzado">Avanzado</option>
					<option value="negocios">Negocios</option>
					<option value="programacion">programacion</option>
				</select>
				<br />
				<label htmlFor="cursos">¿Cuantas clases a la semana quieres?</label>
				<select id="cursos">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<p>(Recomendamos un minimo de 3 veces a la semana)</p>
				<h3>{}</h3>
			</form>
		</div>
	);
}

export default Valor;
