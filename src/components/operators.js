import React from "react";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import mul from "../assets/multiplication.png";
import divide from "../assets/divide.png";

import "../scss/operator.scss";
function Operators({ number, setNumber }) {
	function ops(prev, op) {
		let arr = prev.split("");
		if (
			arr[arr.length - 1] === "/" ||
			arr[arr.length - 1] === "+" ||
			arr[arr.length - 1] === "-" ||
			arr[arr.length - 1] === "*"
		) {
			arr[arr.length - 1] = op;
			let neww = arr.join("");
			return neww;
		}
		return prev + op;
	}
	return (
		<div className="container-fluid operator_all_of_it">
			<div className="row operator_row">
				<div className="col-3 operator_row_col_one">
					<button
						className="btn btn-primary"
						onClick={() => setNumber((prev) => ops(prev, "+"))}
						value="plus">
						<img src={plus} alt="+" height={50} width={50} />
					</button>
					<button
						className="btn btn-primary mt-3"
						value="-"
						onClick={() =>
							setNumber((prev) => setNumber((prev) => ops(prev, "-")))
						}>
						<img src={minus} alt="-" height={50} width={50} />
					</button>
					<button
						className="btn btn-primary mt-3"
						value="*"
						onClick={() =>
							setNumber((prev) => {
								let arr = prev.split("");
								if (
									arr[arr.length - 1] === "/" ||
									arr[arr.length - 1] === "+" ||
									arr[arr.length - 1] === "-" ||
									arr[arr.length - 1] === "*"
								) {
									arr[arr.length - 1] = "*";
									let neww = arr.join("");
									return neww;
								}
								return prev + "*";
							})
						}>
						<img src={mul} alt="*" height={50} width={50} />
					</button>
					<button
						className="btn btn-primary mt-3"
						value="/"
						onClick={() =>
							setNumber((prev) => {
								let arr = prev.split("");
								if (
									arr[arr.length - 1] === "/" ||
									arr[arr.length - 1] === "+" ||
									arr[arr.length - 1] === "-" ||
									arr[arr.length - 1] === "*"
								) {
									arr[arr.length - 1] = "/";
									let neww = arr.join("");
									return neww;
								}
								return prev + "/";
							})
						}>
						<img src={divide} alt="/" height={50} width={50} />
					</button>
				</div>
			</div>
		</div>
	);
}
export default Operators;
