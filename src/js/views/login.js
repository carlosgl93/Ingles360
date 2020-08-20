import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/formStyle.css";
import { Context } from "../store/appContext";
import Button from "@material-ui/core/Button";

function Login(props) {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	// 	const loginUrl = "http://localhost:5000/api/login";
	// 	const history = useHistory();
	// 	const [userData, setUserData] = useState([
	// 		{
	// 			email: "",
	// 			password: "",
	// 			isLoggedIn: false
	// 		}
	// 	]);

	// 	const loginFetch = e => {
	// 		e.preventDefault();
	// 		fetch(loginUrl, {
	// 			method: "POST",
	// 			body: JSON.stringify(userData),
	// 			headers: {
	// 				"Content-type": "application/json"
	// 			}
	// 		})
	// 			.then(res => res.json())
	// 			.then(data => {
	// 				console.log("success: User logged in", data);
	// 				if (!data.msg) {
	// 					setUserData({ ...userData });
	// 					history.push("/");
	// 					localStorage.setItem("userData", JSON.stringify(data));
	// 					alert("Login exitoso, serás redireccionado a home");
	// 				} else {
	// 					alert(data.msg);
	// 				}
	// 			})
	// 			.catch(error => console.error("error:", error));
	// 	};

	return (
		<div className="formParent">
			<form onSubmit={e => actions.login(e, history)}>
				<h2>Inicia sesión aquí</h2>
				<label htmlFor="userEmail">Email</label>
				<input onChange={actions.handleChange} id="email" name="userEmail" type="email" placeholder="email" />
				<br />
				<label htmlFor="password">Contraseña</label>
				<input
					onChange={actions.handleChange}
					id="password"
					name="password"
					type="password"
					placeholder="Contraseña"
				/>
				<br />
				<button>Iniciar sesión</button>
			</form>
		</div>
	);
}

export default Login;
