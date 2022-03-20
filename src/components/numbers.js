import React from "react";
import "../scss/numbers.scss";

function Numbers({ number, setNumber }) {
	let numarr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	return (
		<>
			<div className="container-fluid numbers_all_of_it">
				<div className="row numbers_row_one">
					{numarr.map((num) => {
						return (
							<button
								className="btn col-xxl-5 col-xl-5 col-lg-5 col-md-4 col-sm-6 btn-primary btn-lg mx-2 my-2"
								value={num}
								onClick={() =>
									setNumber((prev) => {
										let newv = prev + num;
										if (newv[0] === "0") {
											let result = newv.replace(0, "");
											return result;
										}
										return prev + num;
									})
								}>
								{num}
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
}
export default Numbers;
