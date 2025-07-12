import React from "react";

import styles from "./Tooltip.module.css";

class Tooltip extends React.Component {
	render(){
		const { text, children } = this.props;
		if(text) {
			return (
				<div className={ styles.tooltip } text={text}>
					{children}
				</div>
			);
		} else {
			return children;
		}
	}
};
export default Tooltip;