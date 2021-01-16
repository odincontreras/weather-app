import React, {useState} from 'react'
import Card from '../Card/Card';
import Graph from '../Graph/Graph';
import Loading from '../Loading/Loading';
import './Detailed.css'

function Detailed({days, weather, loading}) {
	const [selectedDay, setSelectedDay] = useState(days[0]);
	const [changedDay, setChangedDay] = useState(false);
  let index = days.indexOf(selectedDay);

	const handleChange = (event) => {
		setSelectedDay(event.target.value);
	};
	
	const handleOnClick = () => {
		setChangedDay(!changedDay);
	}

  return (
		<>
			<div className="container-select-bar">
				<select
					className="select-bar"
					value={selectedDay}
					onChange={(event) => {
						handleChange(event);
						handleOnClick();
					}}
				>
					<option className="options" value={days[0]} onClick={handleOnClick}>
						{days[0]}
					</option>
					<option className="options" value={days[1]} onClick={handleOnClick}>
						{days[1]}
					</option>
					<option className="options" value={days[2]} onClick={handleOnClick}>
						{days[2]}
					</option>
					<option className="options" value={days[3]} onClick={handleOnClick}>
						{days[3]}
					</option>
					<option className="options" value={days[4]}>
						{days[4]}
					</option>
					<option className="options" value={days[5]}>
						{days[5]}
					</option>
					<option className="options" value={days[6]}>
						{days[6]}
					</option>
				</select>
			</div>
			{loading ? (
				<>
					<Loading detailed={true} />
					<Graph />
				</>
			) : (
				<>
					<Card
						day={selectedDay}
						temperatureDay={weather.data.daily[index].temp.day /* + " °C" */}
						temperatureNight={
							weather.data.daily[index].temp.night /* + " °C" */
						}
						temperatureMax={weather.data.daily[index].temp.max /* + " °C" */}
						temperatureMin={weather.data.daily[index].temp.min /* + " °C" */}
						clouds={weather.data.daily[index].clouds /* + " %" */}
						humidity={weather.data.daily[index].humidity /* + " %" */}
						pressure={weather.data.daily[index].pressure /* + " HPa" */}
						icon={weather.data.daily[index].weather[0].icon}
						key={selectedDay}
						description={weather.data.daily[index].weather[0].description}
						detailed={true}
					/>
					<Graph
						data={[
							weather.data.daily[index].temp.day,
							weather.data.daily[index].temp.night,
							weather.data.daily[index].temp.max,
							weather.data.daily[index].temp.min,
						]}
						changedDay={changedDay}
						title="Variación de Temperatura"
						days={["Día", "Noche", "Máxima", "Mínima"]}
					/>
				</>
			)}
		</>
	);
}

export default Detailed
