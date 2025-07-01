import React from "react";
import { v4 as uuid } from 'uuid';

import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = (props) => {
	return (
		<Nav>
			<NavMenu>
				{props.links.map((l) =>
					<NavLink key={uuid()} to={l.path}>
						{l.title}
					</NavLink>
				)}
			</NavMenu>
		</Nav>
	);
};

export default Navbar;