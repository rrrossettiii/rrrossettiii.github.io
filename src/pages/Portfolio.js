import React from "react";
import "../App.css";

// Components;
// =============:
import { Container, Row } from "react-bootstrap";
import Project from "../components/Project";

const Portfolio = () => {
	const projectList = [
		{
			title: "Remember Dat",
			src: "/assets/images/rememberDat.gif",
			desc:
				"RememberDat is a Nostalgia engine that generates sweet, sweet dopamine through memories and media. Users will get a “blast from the past” through music, news articles, photos/memes, games, and aesthetic UI.RememberDat is a Nostalgia engine that generates sweet, sweet dopamine through memories and media. Users will get a “blast from the past” through music, news articles, photos/memes, games, and aesthetic UI.",
			repo: "https://github.com/mikevitelli/rememberDat",
			active: "https://remember-dat.herokuapp.com"
		},
		{
			title: "Get Me Out of Here",
			src: "/assets/images/get-me-out-of-here.png",
			desc:
				"Position locator that utilizes three server side APIs to cross-reference live Covid-19 data in your area with Google Map routes to airports. Also references flight tracker data for once you arrive at the airport.",
			repo: "https://github.com/kylegold/get-me-out-of-here",
			active: "https://kylegold.github.io/get-me-out-of-here/"
		},
		{
			title: "Weather Dashboard",
			src: "/assets/images/weatherDashboard.png",
			desc:
				"This is app allows the user to track the Current Weather along with a 5-Day Forecast at their current location along with any place of their choosing. Simply load the page to get the Current Weather and a 5-Day Forecast. Then navigate to the search bar to add a place, city, address, Wherever!",
			repo: "https://github.com/rrrossettiii/hw6-weather-dashboard",
			active: "https://rrrossettiii.github.io/hw6-weather-dashboard/"
		},
		{
			title: "Password Generator",
			src: "/assets/images/PasswordGenerator.png",
			desc:
				"This website uses Javascript to generate a secure password using case-sensitive characters, symbols, and numbers.",
			repo: "https://github.com/rrrossettiii/hw3-password-generator",
			active: "https://rrrossettiii.github.io/hw3-password-generator/"
		},
		{
			title: "Note Taker",
			src: "/assets/images/Note_Taker.png",
			desc:
				"This app can be used to write, save, and delete notes. This application also uses an express backend and saves and retrieves note data from a JSON file. This app is deployed on Heroku.",
			repo: "https://github.com/rrrossettiii/hw9-Note-Taker",
			active: ""
		},
		{
			title: "Staff Index",
			src: "/assets/images/Staff_Index.jpg",
			desc:
				"This is an Employee Directory, built using React. It allows the user to view their Employees' data all at once when the user loads the page. Employees can be sorted by Age and Location.",
			repo: "https://github.com/rrrossettiii/HW19-Employee-Directory",
			active: "https://hw19-staff-index.herokuapp.com/home"
		}
	];

	const ProjectGroup = projectList.map((project, index) => (
		<Project key={index} project={project} />
	));

	return (
		<Container>
			<Row>{ProjectGroup}</Row>
		</Container>
	);
};

export default Portfolio;
