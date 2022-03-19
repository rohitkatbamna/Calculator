import React, { useState } from "react";
import Numbers from "../components/numbers";
import Operators from "../components/operators";
import "../scss/cal.scss";
function Calculatorpage() {
	const [number, setNumber] = useState(0);
	const [op, setOp] = useState("");
	const [acc, setAcc] = useState("");
	let vl = number + op;
	return (
		<div className="container-fluid cal_all_of_it">
			<div className="row card cal_card col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-12 shadow">
				<div className="card-body cal_card_body">
					<input type="text" value={vl} />
					<div className="cal_card_body_add_grid_here">
						<Operators op={op} setOp={setOp} setNumber={setNumber} />
						<Numbers number={number} setNumber={setNumber} />
					</div>
					<button
						className="btn btn-primary  btn-lg "
						value="="
						onClick={() => setOp("=")}>
						=
					</button>
				</div>
			</div>
		</div>
	);
}
export default Calculatorpage;
