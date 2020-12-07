import React from "react";
import "../App.css";

// Components;
// =============:
import { Container, Card, Row, Col } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

const Contact = () => {
	return (
		<Container>
			<Row>
				<Col sm={8}>
					<Card>
						<Card.Body>
							<ContactForm />
						</Card.Body>
					</Card>
				</Col>
				<Col sm={4}>
					<Card>
						<Card.Body>
							<p>
								Email:{" "}
								<a href="mailto:rrrossettiii@gmail.com">
									rrrossettiii@gmail.com
								</a>
							</p>
							<p>
								Mobile: <a href="sms:+19495731345">(949) 573-1345</a>
							</p>
							<p>
								Github:{" "}
								<a href="https://github.com/rrrossettiii">rrrossettiii</a>
							</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
