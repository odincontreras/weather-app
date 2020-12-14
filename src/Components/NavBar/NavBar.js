import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  
  const topFunction = () => {
    document.documentElement.scrollTop = 0; 
  }

  return (
		<nav className="navbar">
			<header className="title">
				<h1>Clima de Caracas</h1>
			</header>
			<div className="buttons">
				<Link to="/">
					<button onClick={topFunction} className="button">
						General
					</button>
				</Link>
				<Link to="/detailed">
					<button onClick={topFunction} className="button">
						Detallado
					</button>
				</Link>
			</div>
		</nav>
	);
}

export default NavBar
