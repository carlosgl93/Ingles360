import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/conjugaciones.css";

function conjugaciones(props) {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h3>Conjuga correctamente el verbo {store.infinitivo}</h3>

			<div id="conjugationGrid">
				<div>
					<h5>Present Simple</h5>
					<form onSubmit={e => actions.comparePresentConjugations(e)}>
						<label htmlFor="presentI">I</label>
						<input onChange={actions.handleChange} name="presentI" type="text" />
						<br />
						<label htmlFor="presentYou">You</label>
						<input onChange={actions.handleChange} name="presentYou" type="text" />
						<br />
						<label htmlFor="presentWe">We</label>
						<input onChange={actions.handleChange} name="presentWe" type="text" />
						<br />
						<label htmlFor="presentThey">They</label>
						<input onChange={actions.handleChange} name="presentThey" type="text" />
						<br />
						<label htmlFor="presentHe">He</label>
						<input onChange={actions.handleChange} name="presentHe" type="text" />
						<br />
						<label htmlFor="presentShe">She</label>
						<input onChange={actions.handleChange} name="presentShe" type="text" />
						<br />
						<label htmlFor="presentIt">It</label>
						<input onChange={actions.handleChange} name="presentIt" type="text" />
						<br />
						<button>Revisar</button>
					</form>
				</div>
				<div>
					<h5>Past Simple</h5>
					<form onSubmit={e => actions.comparePastConjugations(e)}>
						<label htmlFor="pastI">I</label>
						<input onChange={actions.handleChange} name="pastI" type="text" />
						<br />
						<label htmlFor="pastYou">You</label>
						<input onChange={actions.handleChange} name="pastYou" type="text" />
						<br />
						<label htmlFor="pastWe">We</label>
						<input onChange={actions.handleChange} name="pastWe" type="text" />
						<br />
						<label htmlFor="pastThey">They</label>
						<input onChange={actions.handleChange} name="pastThey" type="text" />
						<br />
						<label htmlFor="pastHe">He</label>
						<input onChange={actions.handleChange} name="pastHe" type="text" />
						<br />
						<label htmlFor="pastShe">She</label>
						<input onChange={actions.handleChange} name="pastShe" type="text" />
						<br />
						<label htmlFor="pastIt">It</label>
						<input onChange={actions.handleChange} name="pastIt" type="text" />
						<br />
						<button>Revisar</button>
					</form>
				</div>
				<div>
					<h5>Future Simple</h5>
					<form onSubmit={e => actions.compareFutureConjugations(e)}>
						<label htmlFor="futureI">I</label>
						<input onChange={actions.handleChange} name="futureI" type="text" />
						<br />
						<label htmlFor="futureYou">You</label>
						<input onChange={actions.handleChange} name="futureYou" type="text" />
						<br />
						<label htmlFor="futureWe">We</label>
						<input onChange={actions.handleChange} name="futureWe" type="text" />
						<br />
						<label htmlFor="futureThey">They</label>
						<input onChange={actions.handleChange} name="futureThey" type="text" />
						<br />
						<label htmlFor="futureHe">He</label>
						<input onChange={actions.handleChange} name="futureHe" type="text" />
						<br />
						<label htmlFor="futureShe">She</label>
						<input onChange={actions.handleChange} name="futureShe" type="text" />
						<br />
						<label htmlFor="futureIt">It</label>
						<input onChange={actions.handleChange} name="futureIt" type="text" />
						<br />
						<button>Revisar</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default conjugaciones;
