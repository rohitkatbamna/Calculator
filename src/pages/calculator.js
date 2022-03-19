import React from "react";
import Numbers from "../components/numbers";
import Operators from "../components/operators";
import "../scss/cal.scss";
function Calculatorpage() {
	return (
		<div className="container-fluid cal_all_of_it">
			<div className="row card cal_card col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-12 shadow">
				<div className="card-body cal_card_body">
					<Operators />
					<Numbers />
				</div>
			</div>
		</div>
	);
}
export default Calculatorpage;
