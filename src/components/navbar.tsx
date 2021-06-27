import React from 'react'
import {Link} from "react-router-dom";
export const Navbar: React.FC = () => {
	return (
		<nav>
			<div className="nav-wrapper purple darken-4">
				<Link to="/" className="brand-logo">Logo</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/dnd">To Do DnD</Link></li>
			
				</ul>
			</div>
		</nav>

	)
}