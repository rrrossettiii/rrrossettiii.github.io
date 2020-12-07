import React from "react";
import "./style.css";

// Components;
// =============:
import { Form, Button } from "react-bootstrap";

function ContactForm() {
	return (
		<Form>
			<h1>Contact Me</h1>
			<Form.Group>
				<Form.Control type="text" placeholder="Name" />
			</Form.Group>

			<Form.Group>
				<Form.Label>Please select one.</Form.Label>
				<Form.Control as="select">
					<option>Email</option>
					<option>Mobile Phone Number</option>
				</Form.Control>
			</Form.Group>

			<Form.Group>
				<Form.Control type="text" placeholder="" />
				<Form.Text className="text-muted">
					We'll never share your Information with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group>
				<Form.Label>Message</Form.Label>
				<Form.Control as="textarea" rows={3} />
			</Form.Group>
			<Button variant="secondary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default ContactForm;
