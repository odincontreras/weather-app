import React from 'react'
import './Loading.css' 
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

function Loading({detailed}) {
  return (
		<div className="container">
			<div className="day-row-container">
				<ReactPlaceholder
					type="textRow"
					ready={false}
					color="#E0E0E0"
					className="day-row"
					style={{ width: "100px", height: "20px" }}
					showLoadingAnimation={true}
				/>
			</div>
			<div className="placeholder-temperature">
				<ReactPlaceholder
					type="round"
					ready={false}
					color="#E0E0E0"
					className="day-row"
					style={{ width: "40px", height: "37px" }}
					showLoadingAnimation={true}
				/>
				<ReactPlaceholder
					type="textRow"
					ready={false}
					color="#E0E0E0"
					className="day-row"
					style={{ width: "72px", height: "20px" }}
					showLoadingAnimation={true}
				/>
			</div>
			<div className="placeholder-temperature">
				<ReactPlaceholder
					type="round"
					ready={false}
					color="#E0E0E0"
					className="day-row"
					style={{ width: "40px", height: "37px" }}
					showLoadingAnimation={true}
				/>
				<ReactPlaceholder
					type="textRow"
					ready={false}
					color="#E0E0E0"
					className="day-row"
					style={{ width: "72px", height: "20px" }}
					showLoadingAnimation={true}
				/>
			</div>

			{detailed && (
				<>
					<div className="placeholder-temperature">
						<ReactPlaceholder
							type="round"
							ready={false}
							color="#E0E0E0"
							className="day-row"
							style={{ width: "40px", height: "37px" }}
							showLoadingAnimation={true}
						/>
						<ReactPlaceholder
							type="textRow"
							ready={false}
							color="#E0E0E0"
							className="day-row"
							style={{ width: "72px", height: "20px" }}
							showLoadingAnimation={true}
						/>
					</div>
					<div className="placeholder-temperature">
						<ReactPlaceholder
							type="round"
							ready={false}
							color="#E0E0E0"
							className="day-row"
							style={{ width: "40px", height: "37px" }}
							showLoadingAnimation={true}
						/>
						<ReactPlaceholder
							type="textRow"
							ready={false}
							color="#E0E0E0"
							className="day-row"
							style={{ width: "72px", height: "20px" }}
							showLoadingAnimation={true}
						/>
					</div>
					<div className="placeholder-temperature">
						<ReactPlaceholder
							type="round"
							ready={false}
							color="#E0E0E0"
							className="day-row"
							style={{ width: "40px", height: "37px" }}
							showLoadingAnimation={true}
						/>
						<ReactPlaceholder
							type="textRow"
							ready={false}
							color="#E0E0E0"
							className="day-row"
							style={{ width: "72px", height: "20px" }}
							showLoadingAnimation={true}
						/>
					</div>
					<div className="placeholder-temperature">
						<ReactPlaceholder
							type="round"
							ready={false}
							color="#E0E0E0"
							className="day-row"
							style={{ width: "40px", height: "37px" }}
							showLoadingAnimation={true}
						/>
						<ReactPlaceholder
							type="textRow"
							ready={false}
							color="#E0E0E0"
							className="day-row"
							style={{ width: "72px", height: "20px" }}
							showLoadingAnimation={true}
						/>
					</div>
					<div className="placeholder-temperature">
						<ReactPlaceholder
							type="round"
							ready={false}
							color="#E0E0E0"
							className="day-row"
							style={{ width: "40px", height: "37px" }}
							showLoadingAnimation={true}
						/>
						<ReactPlaceholder
							type="textRow"
							ready={false}
							color="#E0E0E0"
							className="day-row"
							style={{ width: "72px", height: "20px" }}
							showLoadingAnimation={true}
						/>
					</div>
				</>
			)}

			<div className="icon-round">
				<ReactPlaceholder
					type="round"
					ready={false}
					color="#E0E0E0"
					style={{ width: "55px", height: "55px" }}
					showLoadingAnimation={true}
				/>
			</div>

			<div className="description-placeholder">
				<ReactPlaceholder
					type="textRow"
					ready={false}
					color="#E0E0E0"
					className="day-row"
					style={{ width: "150px", height: "20px" }}
					showLoadingAnimation={true}
				/>
			</div>
		</div>
	);
}

export default Loading
