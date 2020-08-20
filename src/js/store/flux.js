import { useHistory } from "react-router-dom";
import moment from "moment";

const getState = ({ getStore, getActions, setStore }) => {
	const loginUrl = "http://localhost:5000/api/login";
	const history = useHistory();
	const scheduleClassURL = "http://localhost:5000/api/schedule";
	const getEventsURL = "http://localhost:5000/api/events";
	const getUserDataURL = "http://localhost:5000/api/profile";
	return {
		store: {
			title: "",
			date: "",
			hour: "",
			level: "",
			slots: "",
			teacher: "",
			presentI: "",
			presentYou: "",
			presentWe: "",
			presentThey: "",
			presentHe: "",
			presentShe: "",
			presentIt: "",
			pastI: "",
			pastYou: "",
			pastWe: "",
			pastThey: "",
			pastHe: "",
			pastShe: "",
			pastIt: "",
			futureI: "",
			futureYou: "",
			futureWe: "",
			futureThey: "",
			futureHe: "",
			futureShe: "",
			futureIt: "",
			userEmail: "",
			password: "",
			currentUser: null,
			infinitivo: "",
			conjugatedVerb: [],
			present3rdPerson: "",
			basicVerbs: [
				"to be",
				"have",
				"eat",
				"cook",
				"drink",
				"go",
				"ask",
				"call",
				"can",
				"come",
				"do",
				"make",
				"drive",
				"feel",
				"find",
				"get",
				"give",
				"hear",
				"help",
				"keep",
				"know",
				"learn",
				"leave",
				"let",
				"like",
				"vivir",
				"see",
				"watch",
				"mean",
				"move",
				"need",
				"pay",
				"put",
				"read",
				"run",
				"say",
				"tell",
				"look",
				"seem",
				"show",
				"speak",
				"talk",
				"start",
				"take",
				"think",
				"try",
				"understand",
				"use",
				"want",
				"work",
				"write"
			],
			intermediateVerbs: [
				"accept",
				"act",
				"agree",
				"answer",
				"arrive",
				"ask for",
				"attend",
				"become",
				"begin",
				"believe",
				"break",
				"bring",
				"brush",
				"buy",
				"carry",
				"change",
				"check",
				"choose",
				"pick",
				"clean",
				"close",
				"comment",
				"communicate",
				"contact",
				"continue",
				"cost",
				"count",
				"create",
				"cross",
				"cry",
				"cut",
				"dance",
				"decide",
				"define",
				"die",
				"dry",
				"enjoy",
				"expect",
				"explain",
				"fall",
				"fill",
				"finish",
				"fix",
				"fly",
				"follow",
				"forget",
				"get up",
				"return",
				"go out",
				"happen",
				"hate",
				"hide",
				"hit",
				"hope"
			],
			advancedVerbs: [
				"hurt",
				"include",
				"introduce",
				"invite",
				"kiss",
				"lie",
				"listen to",
				"lose",
				"love",
				"meet",
				"miss",
				"open",
				"pass",
				"plan",
				"play",
				"practice",
				"rain",
				"recommend",
				"remember",
				"rent",
				"repeat",
				"sell",
				"send",
				"sing",
				"sit",
				"sleep",
				"sound",
				"spell",
				"stay",
				"stop",
				"study",
				"swim",
				"teach",
				"touch",
				"travel",
				"visit",
				"wait",
				"wake up",
				"walk",
				"wash",
				"wear",
				"win",
				"wish"
			],
			events: {}
		},
		actions: {
			handleChange: e => {
				setStore({
					[e.target.name]: e.target.value
				});
			},
			login: (e, history) => {
				e.preventDefault();
				const store = getStore();
				fetch(loginUrl, {
					method: "POST",
					body: JSON.stringify({
						email: store.userEmail,
						password: store.password
					}),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						if (data.msg) {
							setStore({
								errors: data
							});
						} else {
							console.log(data);
							const aut = {
								currentUser: data,
								userEmail: "",
								password: "",
								errors: null
							};
							sessionStorage.setItem("auth", JSON.stringify(aut));
							console.log(aut);
							setStore({ ...aut });
							history.push("/");
						}
					});
			},
			basicVerbConsult: url => {
				const store = getStore();
				let randomN = Math.floor(Math.random() * store.basicVerbs.length);
				console.log(store.basicVerbs[randomN]);
				fetch(url + store.basicVerbs[randomN])
					.then(resp => resp.json())
					.then(data => {
						console.log("api response", data);
						setStore({
							infinitivo: store.basicVerbs[randomN],
							conjugatedVerb: data
						});
					});
			},
			corregirPresentConjugation: e => {
				e.preventDefault();
				const store = getStore();
				if (
					store.presentI ||
					store.presentYou ||
					store.presentWe ||
					(store.presentThey !== store.infinitivo && store.presentHe) ||
					store.presentShe ||
					store.presentIt !== store.present3rdPerson
				) {
					alert("oops, revisa otra vez la conjugacion del presente.");
				} else {
					alert("Present simple is correctly conjugated");
				}
			},
			comparePresentConjugations: e => {
				e.preventDefault();
				const store = getStore();
				let error = false;
				let mensaje = "";
				let correctPresentI = store.conjugatedVerb.conjugation_tables.indicative[0].forms[0][1];
				console.log(correctPresentI);
				let correctPresentYou = store.conjugatedVerb.conjugation_tables.indicative[0].forms[1][1];
				console.log(correctPresentYou);
				let correctPresent3rdPerson = store.conjugatedVerb.conjugation_tables.indicative[0].forms[2][1];
				console.log(correctPresent3rdPerson);
				let correctPresentWe = store.conjugatedVerb.conjugation_tables.indicative[0].forms[3][1];
				console.log(correctPresentWe);
				let correctPresentThey = store.conjugatedVerb.conjugation_tables.indicative[0].forms[4][1];
				console.log(correctPresentThey);
				if (correctPresentI === store.presentI) {
					mensaje += "Answer I is correct \n";
				} else {
					mensaje += "Answer I is incorrect \n";
				}
				if (correctPresentYou === store.presentYou) {
					mensaje += "Answer You is correct \n";
				} else {
					mensaje += "Answer You is incorrect \n";
				}
				if (
					correctPresent3rdPerson === store.presentHe &&
					correctPresent3rdPerson === store.presentShe &&
					correctPresent3rdPerson === store.presentIt
				) {
					mensaje += "Answer He/She/It is correct \n";
				} else {
					mensaje += "Answer He/She/it is incorrect \n";
				}
				if (correctPresentWe === store.presentWe) {
					mensaje += "Answer We is correct \n";
				} else {
					mensaje += "Answer We is incorrect \n";
				}
				if (correctPresentThey === store.presentThey) {
					mensaje += "Answer They is correct \n";
				} else {
					mensaje += "Answer They is incorrect \n";
				}
				alert(mensaje);
			},
			corregirPastConjugation: e => {
				e.preventDefault();
				const store = getStore();
				if (
					store.pastI ||
					store.pastYou ||
					store.pastWe ||
					store.pastThey ||
					store.pastHe ||
					store.pastShe ||
					store.pastIt !== store.conjugatedVerb.conjugation_tables.indicative[5].forms[0][1]
				) {
					alert("oops, revisa otra vez la conjugacion del pasado.");
				} else {
					alert("Past simple is correctly conjugated");
				}
			},
			comparePastConjugations: e => {
				e.preventDefault();
				const store = getStore();
				let error = false;
				let mensaje = "";
				let correctPastI = store.conjugatedVerb.conjugation_tables.indicative[4].forms[0][1];
				console.log("I ", correctPastI);
				let correctPastYou = store.conjugatedVerb.conjugation_tables.indicative[4].forms[1][1];
				console.log("you ", correctPastYou);
				let correctPast3rdPerson = store.conjugatedVerb.conjugation_tables.indicative[4].forms[2][1];
				console.log("He/She/It ", correctPast3rdPerson);
				let correctPastWe = store.conjugatedVerb.conjugation_tables.indicative[4].forms[3][1];
				console.log("We ", correctPastWe);
				let correctPastThey = store.conjugatedVerb.conjugation_tables.indicative[4].forms[4][1];
				console.log("They ", correctPastThey);
				if (correctPastI === store.pastI) {
					mensaje += "Answer I is correct \n";
				} else {
					mensaje += "Answer I is incorrect \n";
				}
				if (correctPastYou === store.pastYou) {
					mensaje += "Answer You is correct \n";
				} else {
					mensaje += "Answer You is incorrect \n";
				}
				if (
					correctPast3rdPerson === store.pastHe &&
					correctPast3rdPerson === store.pastShe &&
					correctPast3rdPerson === store.pastIt
				) {
					mensaje += "Answer He/She/It is correct \n";
				} else {
					mensaje += "Answer He/She/it is incorrect \n";
				}
				if (correctPastWe === store.pastWe) {
					mensaje += "Answer We is correct \n";
				} else {
					mensaje += "Answer We is incorrect \n";
				}
				if (correctPastThey === store.pastThey) {
					mensaje += "Answer They is correct \n";
				} else {
					mensaje += "Answer They is incorrect \n";
				}
				alert(mensaje);
			},
			compareFutureConjugations: e => {
				e.preventDefault();
				const store = getStore();
				let error = false;
				let mensaje = "";
				let correctFutureI = store.conjugatedVerb.conjugation_tables.indicative[8].forms[0][1];
				console.log("I ", correctFutureI);
				let correctFutureYou = store.conjugatedVerb.conjugation_tables.indicative[8].forms[1][1];
				console.log("you ", correctFutureYou);
				let correctFuture3rdPerson = store.conjugatedVerb.conjugation_tables.indicative[8].forms[2][1];
				console.log("He/She/It ", correctFuture3rdPerson);
				let correctFutureWe = store.conjugatedVerb.conjugation_tables.indicative[8].forms[3][1];
				console.log("We ", correctFutureWe);
				let correctFutureThey = store.conjugatedVerb.conjugation_tables.indicative[8].forms[4][1];
				console.log("They ", correctFutureThey);
				if (correctFutureI === store.futureI) {
					mensaje += "Answer I is correct \n";
				} else {
					mensaje += "Answer I is incorrect \n";
				}
				if (correctFutureYou === store.futureYou) {
					mensaje += "Answer You is correct \n";
				} else {
					mensaje += "Answer You is incorrect \n";
				}
				if (
					correctFuture3rdPerson === store.futureHe &&
					correctFuture3rdPerson === store.futureShe &&
					correctFuture3rdPerson === store.futureIt
				) {
					mensaje += "Answer He/She/It is correct \n";
				} else {
					mensaje += "Answer He/She/it is incorrect \n";
				}
				if (correctFutureWe === store.futureWe) {
					mensaje += "Answer We is correct \n";
				} else {
					mensaje += "Answer We is incorrect \n";
				}
				if (correctFutureThey === store.futureThey) {
					mensaje += "Answer They is correct \n";
				} else {
					mensaje += "Answer They is incorrect \n";
				}
				alert(mensaje);
			},

			registerToClass: () => {},
			getEvents: (setEventos = () => {}) => {
				const store = getStore();
				fetch(getEventsURL)
					.then(res => {
						if (!res.ok) {
							throw Error(res.statusText);
						}
						console.log("this are the registered events", res);
						return res.json();
					})
					.then(resAsJson => {
						console.log("respuesta JSON - Eventos?", resAsJson);
						let formatedEvents = resAsJson.map(function(evento) {
							return {
								id: evento.id,
								daysOfWeek: evento.daysOfWeek,
								title: evento.title,
								date: moment(evento.date).format("YYYY-MM-DD"),
								backgroundColor: evento.backgroundColor,
								textColor: evento.textColor
							};
						});
						console.log("FormatedEvents = ", formatedEvents);
						setEventos(formatedEvents);
					})
					.catch(error => {
						console.log("parece que hay un error", error);
					});
			},
			scheduleClass: (e, history) => {
				e.preventDefault();
				const store = getStore();
				fetch(scheduleClassURL, {
					method: "POST",
					body: JSON.stringify({
						title: store.title,
						date: store.date,
						hour: store.hour,
						level: store.level,
						slots: store.slots
						//teacher: store.teacher
					}),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						console.log("this is the schedule class response data", data);
						if (data.msg) {
							setStore({
								errors: data
							});
						} else {
							console.log("no errors, data = ", data);
							const newClass = {
								scheduledClass: data,
								title: "",
								date: "",
								hour: "",
								level: "",
								slots: "",
								errors: null
							};
							localStorage.setItem("new Class:", JSON.stringify(data));
							console.log("new Class = ", data);
							setStore({ ...data });
							alert("Tu clase ha sido calendarizada con exito");
							history.push("/");
						}
					});
			},
			getUserData: () => {
				const store = getStore();
				fetch(getUserDataURL, {
					method: "GET",
					body: JSON.stringify({
						email: store.userEmail
					}),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(res => {
						if (!res.ok) {
							throw Error(res.statusText);
						}
						console.log("This is the user data", res);
						return res.json();
					})
					.then(resAsJson => {
						console.log("Respuesta userData as JSON", resAsJson);
						setUserData(resAsJson);
					})
					.catch(error => {
						console.log("parece que hay un error recibiendo el userData", error);
					});
			}
		}
	};
};

export default getState;
