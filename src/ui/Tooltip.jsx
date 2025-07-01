import React from "react";
/*import axios from 'axios';
import lodash from 'lodash';
import { v4 as uuid } from 'uuid';*/

import styles from "./Tooltip.module.css";


class Tooltip extends React.Component {
	render(){
		const { text, children } = this.props
		return (
			<div className={ styles.tooltip } text={text}>
				{children}
			</div>
		);
	}
};
export default Tooltip;