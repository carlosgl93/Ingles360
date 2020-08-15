import React, { useState } from "react";

function Contact() {
	const contactURL = "http://localhost:5000/api/contact";
	const [userMessage, setUserMessage] = useState({
		name: "",
		email: "",
		message: ""
	});

	const contactFetch = e => {
		e.preventDefault();
		fetch(contactURL, {
			method: "POST",
			body: JSON.stringify(userMessage),
			headers: {
				"Content-type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => console.log("Mensaje enviado exitosamente", response), setUserMessage({ ...userMessage }))
			.catch(error => console.error("error:", error));
	};

	return (
		<div>
			<form onSubmit={contactFetch}>
				<label htmlFor="name">Nombre</label>
				<input
					onChange={event => setUserMessage({ ...userMessage, name: event.target.value })}
					name="name"
					required
					type="text"
					placeholder="Juan Gonzalez Parada"
				/>
				<label htmlFor="email">Email</label>
				<input
					onChange={event => setUserMessage({ ...userMessage, email: event.target.value })}
					name="email"
					required
					type="email"
					placeholder="jgonzalezp@gmail.com"
				/>
				<label htmlFor="message">Message</label>
				<br />
				<textarea
					onChange={event => setUserMessage({ ...userMessage, message: event.target.value })}
					cols="30"
					rows="10"
					name="message"
					required
					type="text"
					placeholder="Tu mensaje aquí"
				/>

				<input type="submit" value="Send Message" />
			</form>
		</div>
	);
}

export default Contact;
