import React, { useEffect, useState } from "react";
import axios from 'axios';
import General from "../General/General";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Detailed from "../Detailed/Detailed";
import NavBar from "../NavBar/NavBar";
import {config} from '../../config';


function App() {
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(true);
	const [sortedDays, setSortedDays] = useState([]);
	const currentDay = new Date().getDay();
	const lon = -66.902;
	const lat = 10.491;
	const apiKey = config.apiKey;
	const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=${apiKey}`;
	
	useEffect(() => {
		getWeather();
		sortDays();
		// eslint-disable-next-line
	}, []);

	//Fetch api
	const getWeather = () => {
		axios.get(api).then((res) => {
			setWeather(res);
			setLoading(false);
		})
		.catch((error) => {
			console.log(error);
			alert('There is a conexion problem, please reload.');
		})
	};

	const sortDays = () => {
		switch (currentDay) {
			case 0:
				setSortedDays([
					"Domingo",
					"Lunes",
					"Martes",
					"Miércoles",
					"Jueves",
					"Viernes",
					"Sábado",
				]);
				break;
			case 1:
				setSortedDays([
					"Lunes",
					"Martes",
					"Miércoles",
					"Jueves",
					"Viernes",
					"Sábado",
					"Domingo",
				]);
				break;
			case 2:
				setSortedDays([
					"Martes",
					"Miércoles",
					"Jueves",
					"Viernes",
					"Sábado",
					"Domingo",
					"Lunes",
				]);
				break;
			case 3:
				setSortedDays([
					"Miércoles",
					"Jueves",
					"Viernes",
					"Sábado",
					"Domingo",
					"Lunes",
					"Martes",
				]);
				break;
			case 4:
				setSortedDays([
					"Jueves",
					"Viernes",
					"Sábado",
					"Domingo",
					"Lunes",
					"Martes",
					"Miércoles",
				]);
				break;
			case 5:
				setSortedDays([
					"Viernes",
					"Sábado",
					"Domingo",
					"Lunes",
					"Martes",
					"Miércoles",
					"Jueves",
				]);
				break;
			default:
				setSortedDays([
					"Sábado",
					"Domingo",
					"Lunes",
					"Martes",
					"Miércoles",
					"Jueves",
					"Viernes",
				]);
		}
	};

	return (
		<div className="App">
			<Router>
				<div className="nav">
					<NavBar />
				</div>
				<Switch>
					<Route
						path="/"
						exact
						component={() => (
							<General days={sortedDays} weather={weather} loading={loading} />
						)}
					/>
					<Route
						path="/detailed"
						component={() => (
							<Detailed days={sortedDays} weather={weather} loading={loading} />
						)}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
