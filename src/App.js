import React from "react";
import "./App.css";

import { HashRouter as Router, Route } from "react-router-dom";

// Page;
// =============:
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import Portfolio from "./pages/Portfolio.js";

// Components;
// =============:
import PortfolioNav from "./components/PortfolioNav";
import PortfolioFooter from "./components/PortfolioFooter";

function App() {
	return (
		<Router>
			<div>
				<PortfolioNav />
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/portfolio" component={Portfolio} />
				<PortfolioFooter />
			</div>
		</Router>
	);
}

export default App;
