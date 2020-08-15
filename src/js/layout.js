import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../styles/layoutStyle.css";

import { Home } from "./views/home";
import Login from "./views/login";
import Register from "./views/register";
import Matchmaking from "./views/matchmaking";
import Metodologia from "./views/metodologia";
import Cursos from "./views/cursos";
import Contact from "./views/contact";
import injectContext from "./store/appContext";
import { MyNav } from "./component/MyNav";
import { Footer } from "./component/footer";
import Valor from "./views/valor";
import Ejercicios from "./views/ejercicios";
import Conjugaciones from "./component/ejercicios/conjugaciones";
import Vocabulario from "./component/ejercicios/vocabulario";
import TestingVerbix from "./component/ejercicios/testingVerbix";
import Calendar from "./views/Calendar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100 w-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MyNav />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/ejercicios">
							<Ejercicios />
						</Route>
						<Route exact path="/matchmaking">
							<Matchmaking />
						</Route>
						<Route exact path="/metodologia">
							<Metodologia />
						</Route>
						<Route exact path="/cursos">
							<Cursos />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/valor">
							<Valor />
						</Route>
						<Route exact path="/ejercicios/conjugaciones">
							<Conjugaciones />
						</Route>
						<Route exact path="/ejercicios/vocabulario">
							<Vocabulario />
						</Route>
						<Route exact path="/calendarizar">
							<Calendar />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
