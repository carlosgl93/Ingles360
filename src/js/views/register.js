import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../../styles/formStyle.css";

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

	const useStyles = makeStyles(theme => ({
		paper: {
			marginTop: theme.spacing(8),
			display: "flex",
			flexDirection: "column",
			alignItems: "center"
		},
		avatar: {
			margin: theme.spacing(1),
			backgroundColor: theme.palette.secondary.main
		},
		form: {
			width: "100%", // Fix IE 11 issue.
			marginTop: theme.spacing(3)
		},
		submit: {
			margin: theme.spacing(3, 0, 2)
		}
	}));

	const classes = useStyles();
	return (
		<>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar id="makeStyles-avatar-14" className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Registrate
					</Typography>
					<form onSubmit={registerFetch} className={classes.form}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="fname"
									name="name"
									variant="outlined"
									required
									fullWidth
									id="name"
									label="Nombre"
									autoFocus
									onChange={event => setUserData({ ...userData, name: event.target.value })}
									type="text"
									placeholder="Juan"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="lastName1"
									label="Apellido Paterno"
									name="lastname1"
									autoComplete="lname"
									onChange={event => setUserData({ ...userData, lastname1: event.target.value })}
									type="text"
									placeholder="Bodoque"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="lastName2"
									label="Apellido Materno"
									name="lastname2"
									autoComplete="lname"
									onChange={event => setUserData({ ...userData, lastname2: event.target.value })}
									type="text"
									placeholder="Lara"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									onChange={event => setUserData({ ...userData, email: event.target.value })}
									type="email"
									placeholder="jbodoque@gmail.com"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
									onChange={event => setUserData({ ...userData, password: event.target.value })}
									placeholder="Contraseña"
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={<Checkbox value="allowExtraEmails" color="primary" />}
									label="Check box anti bots"
								/>
							</Grid>
						</Grid>
						<Button
							id="MuiButton-containedPrimary"
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}>
							Sign Up
						</Button>
						<Grid container>
							<Grid item>
								<Link className="letraChica" href="/login" variant="body2">
									¿Ya tienes una cuenta? Inicia sesión
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		</>
	);
}

export default Register;
