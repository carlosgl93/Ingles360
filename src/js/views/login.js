import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/formStyle.css";
import { Context } from "../store/appContext";
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

function Login(props) {
	const { store, actions } = useContext(Context);
	const history = useHistory();

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
			marginTop: theme.spacing(1)
		},
		submit: {
			margin: theme.spacing(3, 0, 2)
		}
	}));

	const classes = useStyles();

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
		<>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar id="makeStyles-avatar-14" className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Inicia sesión
					</Typography>
					<form onSubmit={e => actions.login(e, history)} className={classes.form}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							label="Email Address"
							autoComplete="email"
							autoFocus
							onChange={actions.handleChange}
							id="email"
							name="userEmail"
							type="email"
							placeholder="email"
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={actions.handleChange}
							placeholder="Contraseña"
						/>
						<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
						<Button
							id="MuiButton-containedPrimary"
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}>
							Iniciar sesión
						</Button>
						<Grid container>
							<Grid item xs>
								<Link className="letraChica" href="#" variant="body2">
									¿Olvidaste tu contraseña?
								</Link>
							</Grid>
							<Grid item>
								<Link className="letraChica" href="register" variant="body2">
									¿No tienes una cuenta? Registrate
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		</>
	);
}

export default Login;
