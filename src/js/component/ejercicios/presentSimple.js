import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/conjugaciones.css";

function PresentSimple() {
	const { store, actions } = useContext(Context);

	return (
		<div className="mainComponent">
			<h3 className="title">
				Conjuga correctamente el verbo <span className="yellow-highlight">{store.infinitivo}</span> en presente
				simple.
			</h3>
			<div>
				<h5>Present Simple</h5>

				<form onSubmit={e => actions.comparePresentConjugations(e)}>
					<div id="formWrapper">
						<div id="leftColumn">
							<label htmlFor="presentI" className="pronoun">
								I
							</label>
							<label htmlFor="presentYou" className="pronoun">
								You
							</label>
							<label htmlFor="presentWe" className="pronoun">
								We
							</label>
							<label htmlFor="presentThey" className="pronoun">
								They
							</label>
							<label htmlFor="presentHe" className="pronoun">
								He
							</label>
							<label htmlFor="presentShe" className="pronoun">
								She
							</label>
							<label htmlFor="presentIt" className="pronoun">
								It
							</label>
						</div>

						<div id="rightColumn" className="userInput">
							<input onChange={actions.handleChange} name="presentI" type="text" />

							<input onChange={actions.handleChange} name="presentYou" type="text" />
							<input onChange={actions.handleChange} name="presentWe" type="text" />
							<input onChange={actions.handleChange} name="presentThey" type="text" />
							<input onChange={actions.handleChange} name="presentHe" type="text" />
							<input onChange={actions.handleChange} name="presentShe" type="text" />
							<input onChange={actions.handleChange} name="presentIt" type="text" />
						</div>
					</div>

					<button>Revisar</button>
				</form>
			</div>
		</div>
	);
}

export default PresentSimple;
