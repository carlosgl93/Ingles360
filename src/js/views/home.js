import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Steps } from "antd";
import "../../styles/home.scss";

const { Step } = Steps;

export const Home = () => (
	<div id="wrapper" className="container-fluid">
		<header className="container-fluid">
			<div className="landing-container">
				<h2>Aprende conversando sin profesores</h2>
				<p>
					TeacherLess es la primera aplicación web para aprender inglés a través de conversaciones sin
					profesores.
				</p>

				<div>
					<button className="button">
						<Link to="/register">Registrate para comenzar</Link>
					</button>
				</div>
			</div>
		</header>

		<div className="container-fluid" id="steps">
			<Steps direction="vertical" size="big">
				<Step
					title="Registrate"
					description="Crea una cuenta para guardar tu progreso y amigos de conversacion"
					status="process"
				/>
				<Step
					title="Aprende o repasa"
					description="Accede a nuestro material de aprendizaje y practica hasta que te sientas comodo para hablar."
					status="process"
				/>
				<Step
					title="Conectate a hablar"
					description="Te emparejaremos con alguien de un nivel similar al tuyo para que puedan aprender conversando juntos"
					status="process"
				/>
			</Steps>
		</div>

		<div id="firstCardOuter">
			<div id="firstCardInner">
				<h2>Estas en buenas manos</h2>
				<p>
					Inglés 360 diseña su material con la experiencia de miles de clases dadas junto con la teoria
					cognitiva y estadistica necesaria para aprender de manera funcional, osea que puedas hablar lo más
					rápido posible.
				</p>
				<h3>Tenemos distintas maneras para que practiques:</h3>
				<p>Vocabulario</p>
				<p>Conjugaciones en distintos tiempos verbales</p>
				<p>Conversaciones en vivo</p>
			</div>
		</div>
	</div>
);
