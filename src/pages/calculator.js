import React, { useState } from "react";
import Numbers from "../components/numbers";
import Operators from "../components/operators";
import "../scss/cal.scss";
import equal from "../assets/equal.png";
function Calculatorpage() {
	const [number, setNumber] = useState("");
	function onEqual() {
		setNumber(eval(number));
	}
	return (
		<div className="container-fluid cal_all_of_it">
			<div className="row card cal_card col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-12 shadow">
				<div className="card-body cal_card_body">
					<input type="text" value={number} readOnly />
					<div className="cal_card_body_add_grid_here">
						<Operators number={number} setNumber={setNumber} />
						<Numbers number={number} setNumber={setNumber} />
					</div>
					<div className="cal_card_body_one_more_grid">
						<button className="btn btn-primary" value="=" onClick={onEqual}>
							<img src={equal} alt="=" height={50} width={50} />
						</button>
						<button
							className="btn btn-primary fs-2"
							value="C"
							onClick={() => setNumber("")}>
							C
						</button>
						<button
							className="btn btn-primary fs-2"
							value="."
							onClick={() => setNumber(".")}>
							.
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Calculatorpage;
