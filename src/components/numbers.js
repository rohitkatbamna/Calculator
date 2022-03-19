import React, { useState } from "react";
import "../scss/numbers.scss";

function Numbers({ number, setNumber }) {
	let numarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const [acc, setAcc] = useState("");
	setNumber(acc);
	console.log(number);
	return (
		<>
			<div className="container-fluid numbers_all_of_it">
				<div className="row numbers_row_one">
					{numarr.map((num) => {
						return (
							<button
								className="btn col-5 btn-primary btn-lg mx-2 my-2"
								value={num}
								onClick={() => setAcc((prev) => prev + num)}>
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