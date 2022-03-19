import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculatorpage from "./pages/calculator";
import Login from "./pages/login";
import Signup from "./pages/signup";
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} exact />
					<Route path="/signup" element={<Signup />} />
					<Route path="/calculator" element={<Calculatorpage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
