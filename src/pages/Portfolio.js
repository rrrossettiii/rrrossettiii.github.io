import React from "react";
import "../App.css";

// Components;
// =============:
import { Container, Row } from "react-bootstrap";
import Project from "../components/Project";

const Portfolio = () => {
	return (
		<Container>
			<Row>
				<Project />
			</Row>
			<Row>
				<Project />
			</Row>
		</Container>
	);
};

export default Portfolio;
