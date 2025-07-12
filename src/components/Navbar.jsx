import React from "react";
import { v4 as uuid } from 'uuid';

import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<nav className={ styles.nav }>
			<div>
				{props.links.map((l) =>
					<NavLink
						className={
							({ isActive }) => 
								classNames(
									styles.nav_link,
									{[styles.active]: isActive}
								)
						}
						key={ uuid() } to={ l.path }>
						{ l.title }
					</NavLink>
				)}
			</div>
		</nav>
	);
};

export default Navbar;