import React from "react";
import "./style.css";

// Components;
// =============:
import { Nav } from "react-bootstrap";

function PortfolioFooter() {
	return (
		<Nav className="pageFooter bg-dark justify-content-center">
			<Nav.Item>
				<a className="foot" href="https://github.com/rrrossettiii">
					© rrrossettiii 2020
				</a>
			</Nav.Item>
		</Nav>
	);
}

export default PortfolioFooter;
