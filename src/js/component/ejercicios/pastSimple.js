import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/conjugaciones.css";

function PastSimple() {
	const { store, actions } = useContext(Context);

	return (
		<div className="mainComponent">
			<h3 className="title">
				Conjuga correctamente el verbo <span className="yellow-highlight">{store.infinitivo}</span> en pasado
				simple.
			</h3>
			<h5>Past Simple</h5>

			<form onSubmit={e => actions.comparePastConjugations(e)}>
				<div id="formWrapper">
					<div id="leftColumn">
						<label htmlFor="pastI" className="pronoun">
							I
						</label>
						<label htmlFor="pastYou" className="pronoun">
							You
						</label>
						<label htmlFor="pastWe" className="pronoun">
							We
						</label>
						<label htmlFor="pastThey" className="pronoun">
							They
						</label>
						<label htmlFor="pastHe" className="pronoun">
							He
						</label>
						<label htmlFor="pastShe" className="pronoun">
							She
						</label>
						<label htmlFor="pastIt" className="pronoun">
							It
						</label>
					</div>

					<div id="rightColumn" className="userInput">
						<input onChange={actions.handleChange} name="pastI" type="text" />

						<input onChange={actions.handleChange} name="pastYou" type="text" />
						<input onChange={actions.handleChange} name="pastWe" type="text" />
						<input onChange={actions.handleChange} name="pastThey" type="text" />
						<input onChange={actions.handleChange} name="pastHe" type="text" />
						<input onChange={actions.handleChange} name="pastShe" type="text" />
						<input onChange={actions.handleChange} name="pastIt" type="text" />
					</div>
				</div>

				<button>Revisar</button>
			</form>
		</div>
	);
}

export default PastSimple;
