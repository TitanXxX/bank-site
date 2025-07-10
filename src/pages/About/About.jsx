import React from "react";

import styles from './About.module.css';
//import classNames from 'classnames';

import {
	AndroidFilled,
} from '@ant-design/icons';

import { ReactComponent as PC } from '../../media/computer.svg';
import { ReactComponent as IOS } from '../../media/ios.svg';

class IconPlace extends React.Component {
	render() {
		return (
			<div className={styles.iconc}>
				<this.props.icon className={styles.icon} />
			</div>
		);
	}
};

const About = () => {
	return (
		<div className={styles.main}>
			<h1>
				О нас
			</h1>
			<div className={styles.line} />
			<h2>
				Функционал сайта
			</h2>
			<h3>
				Актуальные курсы валют, новости банка, контакты и адреса отделений.
			</h3>

			<div>
				<h2>
					Наш сайт адаптирован для использования на различных устройствах:
				</h2>
				<div className={styles.icons}>
					<IconPlace icon={PC} />
					<IconPlace icon={AndroidFilled} />
					<IconPlace icon={IOS} />
				</div>
			</div>
		</div>
	);
};

export default About;