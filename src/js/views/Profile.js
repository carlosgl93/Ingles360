import React, { useEffect, useState, useContext } from "react";
import "../../styles/profile.css";
import { Context } from "../store/appContext";

function Profile() {
	const updateUserDataURL = "http://localhost:5000/api/profile";
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log("probando useEFfect para cargar informacion del usuario");
		actions.getUserData(store.currentUser.user.email);
	}, []);

	const [userData, setUserData] = useState({
		name: "",
		lastname1: "",
		lastname2: "",
		email: "",
		password: ""
	});

	const updateUserData = e => {
		e.preventDefault();
		fetch(updateUserDataURL, {
			method: "PUT"
		});
	};

	return (
		<div className="formParent">
			<form onSubmit="updateUserData">
				<h2>Información de la cuenta</h2>
				<label htmlFor="name">Nombre</label>
				<input
					onChange={event => setUserData({ ...userData, name: event.target.value })}
					name="name"
					type="text"
					placeholder={userData.name}
				/>
				<br />
				<label htmlFor="lastname1">Apellido paterno </label>
				<input
					onChange={event => setUserData({ ...userData, lastname1: event.target.value })}
					name="lastname1"
					type="text"
					placeholder={userData.lastname1}
				/>
				<br />
				<label htmlFor="lastname2">Apellido materno</label>
				<input
					onChange={event => setUserData({ ...userData, lastname2: event.target.value })}
					name="lastname2"
					type="text"
					placeholder={userData.lastname2}
				/>
				<br />
				<label htmlFor="email">Email</label>
				<input
					onChange={event => setUserData({ ...userData, email: event.target.value })}
					name="email"
					type="email"
					placeholder={userData.email}
				/>
				<br />
				<label htmlFor="password">Contraseña</label>
				<input
					onChange={event => setUserData({ ...userData, password: event.target.value })}
					name="password"
					type="password"
					placeholder={userData.password}
				/>
				<br />
				<button>Actualizar Información</button>
			</form>
		</div>
	);
}

export default Profile;
