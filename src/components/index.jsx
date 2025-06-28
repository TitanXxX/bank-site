import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = (props) => {
	return (
		<Nav>
			<NavMenu>
				{props.links.map((l, key) =>
					<NavLink key={key} to={l.path}>
						{l.title}
					</NavLink>
				)}
			</NavMenu>
		</Nav>
	);
};

export default Navbar;