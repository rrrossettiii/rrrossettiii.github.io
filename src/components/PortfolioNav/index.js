import React from "react";
import "./style.css";

// Components;
// =============:
import { Navbar, Nav } from "react-bootstrap";

function PortfolioNav() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Brand href="/">Dante Ivec</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<hr />
				<Nav>
					<Nav.Link href="/home">Home</Nav.Link>
					<Nav.Link href="/portfolio">Portfolio</Nav.Link>
					<Nav.Link href="/contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default PortfolioNav;
