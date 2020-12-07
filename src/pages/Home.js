import React from "react";
import "../App.css";

// Components;
// =============:
import { Container, Card, Row, Col } from "react-bootstrap";

const Home = () => {
	return (
		<Container>
			<Card>
				<Card.Body>
					<Row>
						<Col>
							<Container>
								<h1>About Me</h1>
							</Container>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col>
							<Container>
								<img
									src="assets/images/ProfilePicture.jpg"
									alt="Profile"
									class="img-fluid"
								/>
							</Container>
						</Col>
						<Col>
							<p>
								I moved to NYC nearly 4 years ago to pursue a job as a bartender
								at a hight end cocktail bar and leave my hometown of San
								Clemente, CA. After 3 years of honing my craft at a "speakeasy"
								bar in the lower east side called Fig 19, Corona Virus struck
								NYC leaving me jobless. I then decided to use my newfound free
								time to go back to school and further elevate my substantial
								tech knowledge.
							</p>
							<hr />
							<p>
								<a
									href="https://drive.google.com/file/d/1exErtkeEOKzh6j2TGUFubjIhDmiB9TO-/view?usp=sharing"
									target="_blank"
									rel="noreferrer"
								>
									Resume
								</a>
							</p>
							<hr />
							<p>
								<a
									href="https://github.com/rrrossettiii"
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</a>
							</p>
							<p>
								<a
									href="https://www.linkedin.com/in/dante-ivec-93a6111b4/"
									target="_blank"
									rel="noreferrer"
								>
									Linkedin
								</a>
							</p>
							<p>
								<a
									href="https://www.instagram.com/thestretchh/"
									target="_blank"
									rel="noreferrer"
								>
									Instagram
								</a>
							</p>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Home;
