// Filename - "./components/index.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/news" activeStyle>
						News
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;