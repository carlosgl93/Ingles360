import React, { useContext, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css"; // needs additional webpack config!
import { withTheme } from "styled-components";
import esLocale from "@fullcalendar/core/locales/es";
import { Context } from "../store/appContext";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function Calendar() {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [eventos, setEventos] = useState([
		{
			id: "A1AM",
			daysOfWeek: [1, 2, 3, 4, 5],
			title: "A1 Class 10am",
			date: "2020-08-17",
			backgroundColor: "white",
			textColor: "black",
			overlap: true
		},
		{
			id: "A2AM",
			daysOfWeek: [1, 2, 3, 4, 5],
			title: "A2 Class 10am",
			date: "2020-08-17",
			backgroundColor: "amarillo",
			textColor: "black",
			overlap: true
		},
		{
			id: "B1AM",
			setHours: "10:00",
			daysOfWeek: [1, 2, 3, 4, 5],
			title: "B1 Class 10am",
			date: "2020-08-17",
			backgroundColor: "blue",
			textColor: "white",
			overlap: true
		},
		{
			id: "B2AM",
			daysOfWeek: [1, 2, 3, 4, 5],
			title: "B2 Class 10am",
			date: "2020-08-17",
			backgroundColor: "brown",
			textColor: "white",
			overlap: true
		}
	]);
	const [classData, setClassData] = useState({
		title: "",
		date: "",
		hour: "",
		level: "",
		slots: "",
		teacher: ""
	});
	const handleDateClick = arg => {
		$("#modal").modal("show");
		let text = document.getElementById("text");
		text.value = arg.dateStr;
		console.log(arg);
	};

	const handleAddClass = arg => {
		$("#addClassModal").modal("show");
	};

	const handleEventClick = arg => {
		$("#classModal").modal("show");
		let classTitle = document.getElementById("classTitle");
		classTitle.innerHTML = arg.event._def.title;
		let classDate = document.getElementById("classDate");
		classDate.innerHTML = arg.event._instance.range.start;
		console.log(arg);
	};

	useEffect(() => {
		console.log("probando useEFfect para cargar eventos");
		actions.getEvents(setEventos);
	}, []);

	return (
		<>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin, bootstrapPlugin]}
				initialView="dayGridMonth"
				headerToolbar={{
					center: "addEventButton"
				}}
				customButtons={{
					addEventButton: {
						text: "Agregar Clase",
						click: handleAddClass
					}
				}}
				locale={esLocale}
				dateClick={handleDateClick}
				eventClick={handleEventClick}
				handleWindowResize={true}
				timeZone="local"
				footerToolbar={{
					start: "title",
					center: "addEventButton",
					end: "today,prev,next",
					today: "Hoy",
					month: "Mes",
					week: "Semana",
					year: "Año"
				}}
				slotDuration={"01:00:00"}
				nowIndicator={true}
				weekends={true}
				themeSystem="bootstrap"
				navLinks={true}
				weekNumbers={true}
				weekText={"Semana N° "}
				selectable={true}
				unselectAuto={true}
				displayEventTime={true}
				events={eventos}
			/>

			<div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Modal title
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<textarea id="text" />
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				id="addClassModal"
				className="modal fade"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Agrega tu clase
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<label htmlFor="title">Titulo</label>
								<input id="title" name="title" type="text" onChange={actions.handleChange} />
								<br />
								<label htmlFor="date">Fecha de la clase</label>
								<input id="date" name="date" type="date" onChange={actions.handleChange} />
								<br />
								<label htmlFor="hour">Hora a realizarse</label>
								<input id="hour" name="hour" type="time" onChange={actions.handleChange} />
								<br />
								<label htmlFor="level">Nivel de la clase </label>
								<input
									list="levels"
									id="level"
									name="level"
									type="text"
									onChange={actions.handleChange}
								/>
								<datalist id="levels">
									<option value="A1" />
									<option value="A2" />
									<option value="B1" />
									<option value="B2" />
								</datalist>

								<br />
								<label htmlFor="slots">¿Cuántos alumnos pueden asistir?</label>
								<input list="capacidad" id="slots" name="slots" onChange={actions.handleChange} />
								<datalist id="capacidad">
									<option value="1" />
									<option value="2" />
									<option value="3" />
									<option value="4" />
								</datalist>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Cerrar
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={e => actions.scheduleClass(e, history)}
								data-dismiss="modal">
								Crear clase
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="classModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="classTitle" />
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<h3>Fecha a realizar la clase</h3> <h3 id="classDate" />
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Registrarme a esta clase
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Calendar;
