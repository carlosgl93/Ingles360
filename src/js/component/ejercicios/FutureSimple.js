import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/conjugaciones.css";

function futureSimple() {
	const { store, actions } = useContext(Context);

	return (
		<div className="mainComponent">
			<h3 className="title">
				Conjuga correctamente el verbo <span className="yellow-highlight">{store.infinitivo}</span> en futuro
				simple.
			</h3>
			<h5>Future Simple</h5>

			<form onSubmit={e => actions.compareFutureConjugations(e)}>
				<div id="formWrapper">
					<div id="leftColumn">
						<label htmlFor="futureI" className="pronoun">
							I
						</label>
						<label htmlFor="futureYou" className="pronoun">
							You
						</label>
						<label htmlFor="futureWe" className="pronoun">
							We
						</label>
						<label htmlFor="futureThey" className="pronoun">
							They
						</label>
						<label htmlFor="futureHe" className="pronoun">
							He
						</label>
						<label htmlFor="futureShe" className="pronoun">
							She
						</label>
						<label htmlFor="futureIt" className="pronoun">
							It
						</label>
					</div>

					<div id="rightColumn" className="userInput">
						<input onChange={actions.handleChange} name="futureI" type="text" />

						<input onChange={actions.handleChange} name="futureYou" type="text" />
						<input onChange={actions.handleChange} name="futureWe" type="text" />
						<input onChange={actions.handleChange} name="futureThey" type="text" />
						<input onChange={actions.handleChange} name="futureHe" type="text" />
						<input onChange={actions.handleChange} name="futureShe" type="text" />
						<input onChange={actions.handleChange} name="futureIt" type="text" />
					</div>
				</div>

				<button>Revisar</button>
			</form>
		</div>
	);
}

export default futureSimple;
