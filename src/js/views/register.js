import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/formStyle.css";
import Button from "@material-ui/core/Button";

function Register() {
	const registerUrl = "http://localhost:5000/api/register";
	const history = useHistory();
	const [userData, setUserData] = useState({
		name: "",
		lastname1: "",
		lastname2: "",
		email: "",
		password: ""
	});

	const registerFetch = e => {
		e.preventDefault();
		fetch(registerUrl, {
			method: "POST",
			body: JSON.stringify(userData),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log("success: User registered", data);
				if (!data.msg) {
					setUserData({ ...userData });
					history.push("/login");
					localStorage.setItem("userData", JSON.stringify(data));
					alert("Procede a logearte");
				} else {
					alert(data.msg);
				}
			})
			.catch(error => console.error("error:", error));
	};

	return (
		<div className="formParent">
			<form onSubmit={registerFetch}>
				<h2>Registrate aquí</h2>
				<label htmlFor="name">Nombre</label>
				<input
					onChange={event => setUserData({ ...userData, name: event.target.value })}
					name="name"
					type="text"
					placeholder="Juan"
				/>
				<br />
				<label htmlFor="lastname1">Apellido paterno </label>
				<input
					onChange={event => setUserData({ ...userData, lastname1: event.target.value })}
					name="lastname1"
					type="text"
					placeholder="Bodoque"
				/>
				<br />
				<label htmlFor="lastname2">Apellido materno</label>
				<input
					onChange={event => setUserData({ ...userData, lastname2: event.target.value })}
					name="lastname2"
					type="text"
					placeholder="Lara"
				/>
				<br />
				<label htmlFor="email">Email</label>
				<input
					onChange={event => setUserData({ ...userData, email: event.target.value })}
					name="email"
					type="email"
					placeholder="jbodoque@gmail.com"
				/>
				<br />
				<label htmlFor="password">Contraseña</label>
				<input
					onChange={event => setUserData({ ...userData, password: event.target.value })}
					name="password"
					type="password"
					placeholder="Contraseña"
				/>
				<br />
				<button>Registrar</button>
			</form>
		</div>
	);
}

export default Register;