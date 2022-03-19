import React from "react";
import { Link } from "react-router-dom";
import "../scss/signup.scss";
function Signup() {
	return (
		<div className="container-fluid signup_all_of_it">
			<div className="row signup_row_one">
				<div className="col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-5  mx-auto signup_row_col_one">
					<label htmlFor="Name" className="fw-bold mb-2 fs-3">
						Name
					</label>
					<br />
					<input
						className="form-control form-control-lg"
						type="text"
						placeholder="John Doe"
						aria-label="John Doe"
					/>
					<br />
					<label htmlFor="Email" className="fw-bold mb-2 fs-3">
						Email
					</label>
					<br />
					<input
						className="form-control form-control-lg"
						type="text"
						placeholder="email@example.com"
						aria-label="email@example.com"
					/>
					<br />
					<label htmlFor="password" className="fw-bold mb-2 fs-3">
						Password
					</label>
					<br />
					<input
						className="form-control form-control-lg"
						type="password"
						placeholder="Password"
						aria-label="password"
					/>
				</div>
			</div>
			<div className="row login_row_two">
				<div className="mx-auto col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-5">
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary  mt-4 fs-3 fw-bold">
							Sign Up
						</button>
					</Link>
					<p className="text-center fw-bold fs-4 mt-3">
						Already Have Account <Link to="/">Sign In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
export default Signup;
