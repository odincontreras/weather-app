import React from 'react'
import './Card.css'
import { FiSun, FiMoon, FiPlus, FiMinus } from "react-icons/fi";
import { AiOutlineCloud } from "react-icons/ai";
import {BsDropletHalf} from 'react-icons/bs'
import {SiClockify} from 'react-icons/si'


function Card({
	temperatureDay,
	icon,
	day,
	temperatureNight,
	description,
	detailed,
	temperatureMax,
	temperatureMin,
	clouds,
	humidity,
	pressure
}) {
	return (
		<div className="card-container">
			<h2 className="day">{day}</h2>
			<div className="information-container">
				<div className="center">
					<FiSun size="2.2rem" className="icon icon-sun" />
					<h2 className="temperature">{temperatureDay + " °C"}</h2>
				</div>
				<div className="night-temperature center">
					<FiMoon size="2.2rem" className="icon icon-moon" />
					<h2 className="temperature">{temperatureNight + " °C"}</h2>
				</div>
				{detailed && (
					<>
						<div className="max-temperature center">
							<FiPlus size="2.2rem" className="icon icon-plus" />
							<h2 className="temperature">{temperatureMax + " °C"}</h2>
						</div>
						<div className="max-temperature center">
							<FiMinus size="2.2rem" className="icon icon-minus" />
							<h2 className="temperature">{temperatureMin + " °C"}</h2>
						</div>
						<div className="max-temperature center">
							<AiOutlineCloud size="2.2rem" className="icon icon-moon" />
							<h2 className="temperature">{clouds + " %"}</h2>
						</div>
						<div className="max-temperature center">
							<BsDropletHalf size="2.2rem" className="icon icon-moon" />
							<h2 className="temperature">{humidity + " %"}</h2>
						</div>
						<div className="max-temperature center">
							<SiClockify size="2.2rem" className="icon icon-moon" />
							<h2 className="temperature">{pressure + ' HPa'}</h2>
						</div>
					</>
				)}
				<img
					src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
					alt="icon"
				/>
				<p className="description">
					{description.replace(/\b\w/g, (c) => c.toUpperCase())}
				</p>
			</div>
		</div>
	);
}

export default Card
