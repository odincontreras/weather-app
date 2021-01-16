import React, {useState, useEffect} from 'react';
import './General.css';
import Card from '../Card/Card';
import Graph from '../Graph/Graph';
import Loading from '../Loading/Loading';

export default function General({days, weather, loading}) {
	const [dataMaxTemp, setdataMaxTemp] = useState([]);
	const [dataMinTemp, setdataMinTemp] = useState([]);

	useEffect(() => {
		!loading &&
			setdataMaxTemp(() => {
				days.map((day) => {
					let i = days.indexOf(day);
					return dataMaxTemp.push(weather.data.daily[i].temp.day);
				});
			});
		!loading &&
			setdataMinTemp(() => {
				days.map((day) => {
					let i = days.indexOf(day);
					return dataMinTemp.push(weather.data.daily[i].temp.night);
				});
			});
		// eslint-disable-next-line
	}, [])
	
  return (
		<div className="general">
			{loading ? (
				days.map(() => {
					return <Loading detailed={false}/>
				})
			) : (
				days.map((day) => {
					let index = days.indexOf(day);
					return (
						<>
							<Card
								day={day}
								temperatureDay={weather.data.daily[index].temp.day}
								temperatureNight={weather.data.daily[index].temp.night}
								icon={weather.data.daily[index].weather[0].icon}
								description={weather.data.daily[0].weather[0].description}
								key={day}
							/>
						</>
					);
				})
			)}
			<Graph
				days={days}
				weather={weather}
				loading={loading}
				data={dataMaxTemp}
				title="Variación de Temperatura en el Día"
				detailed={false}
			/>
			<Graph
				days={days}
				weather={weather}
				loading={loading}
				data={dataMinTemp}
				title="Variación de Temperatura en la Noche"
				detailed={false}
			/>
		</div>
	);
}
