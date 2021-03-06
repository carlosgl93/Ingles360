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
import Calendar from "./views/Calendar";
import Profile from "./views/Profile";
import PresentSimple from "./component/ejercicios/presentSimple";
import PastSimple from "./component/ejercicios/pastSimple";
import FutureSimple from "./component/ejercicios/FutureSimple";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
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
					<Route exact path="/calendarizar">
						<Calendar />
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Route exact path="/presentSimple">
						<PresentSimple />
					</Route>
					<Route exact path="/pastSimple">
						<PastSimple />
					</Route>
					<Route exact path="/futureSimple">
						<FutureSimple />
					</Route>
					<Route />
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</ScrollToTop>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
