import React, { useState, useEffect } from "react";
import { Bar, Chart } from "react-chartjs-2";
import './Graph.css'

function Graph({ days, loading, data, title }) {
	Chart.defaults.global.legend.display = false;
	Chart.defaults.global.defaultFontColor = "black";
	Chart.defaults.global.defaultFontFamily =
		"'Kaushan Script', 'Helvetica Neue', 'Helvetica' ";

  const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});
	const [fontSize, setFontSize] = useState(22);
	Chart.defaults.global.defaultFontSize = fontSize;
	useEffect(() => {
		if (window.screen.width < 795 && window.screen.width > 525) {
			setFontSize(18);
		} else if (window.screen.width > 795) {
			setFontSize(22);
		} else if(window.screen.width < 526) {
			setFontSize(12)
		}
	}, [])

	window.addEventListener("resize", function (event) {
		let screenSize = document.body.clientWidth;
		if (screenSize < 795 && window.screen.width > 525) {
			setFontSize(18);
		} else if (screenSize > 795) {
			setFontSize(22);
		} else if (screenSize < 526) {
			setFontSize(12);
		}
	});


	const chart = () => {
		setChartData({
			labels: days,
			datasets: [
				{
					data: loading
						? ["...", "...", "...", "...", "...", "...", "..."]
						: data,
					backgroundColor: [
						"#ffb452",
						"#ffb452",
						"#ffb452",
						"#ffb452",
						"#ffb452",
						"#ffb452",
						"#ffb452",
					],
					borderWidth: 1,
				},
			],
		});
    
    setChartOptions({
			responsive: true,
			title: {
				display: true,
				text: title,
				fontStyle: "bold",
				fontSize: 30,
				fontColor: "black",
				fontFamily: "Kaushan Script",
			},
			scales: {
				yAxes: [
					{
						gridLines: {
							color: [
								"black",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
							],
						},
					},
				],
				xAxes: [
					{
						gridLines: {
							color: [
								"black",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
								"rgba(0,0,0,0)",
							],
						},
					},
				],
			},
		});
	};

	useEffect(() => {
		chart();
		// eslint-disable-next-line
	}, []);

	return (
    <div className="graph-container">
      <Bar data={chartData} options={chartOptions} />
    </div>
	);
}

export default Graph;
