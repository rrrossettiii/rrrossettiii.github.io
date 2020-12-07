import React from "react";
import "./style.css";

// Components;
// =============:
import { Col, Card } from "react-bootstrap";

function Project({ project: { title, src, desc, repo, active } }) {
	const repoName = repo.split("/").pop();
	return (
		<Col md={3}>
			<Card>
				<Card.Body>
					<Card.Img variant="top" src={src} />
					<Card.Title>
						<a href={active}>{title}</a>
					</Card.Title>
					<Card.Text>{desc}</Card.Text>
					<hr />
					<Card.Text>
						Repo:
						<a href={repo}> {repoName}</a>
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default Project;
