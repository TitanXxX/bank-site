import React from "react";

import { v4 as uuid } from 'uuid';

import styles from './Home.module.css';

const Grid = () => {
	return (
		<div>
			<h1>Grid</h1>
			<div className={ styles.grid_container }>
				{["test0", "test1", "test2", "test3", "test4"].map((text) => (
					<div key={ uuid() } className={ styles.grid_card }>
						<h2>{ text  + "asdsadsadsassadsssssssssss" }</h2>
					</div>
				))}
			</div>
		</div>
	);
};

const Flex = () => {
	return (
		<div>
			<h1>Flex</h1>
			<div className={ styles.flex_container }>
				{["test0", "test1", "test2", "test3", "test4"].map((text) => (
					<div key={ uuid() } className={ styles.flex_card }>
						<h2>{ text  + "asdsadsadsassadsssssssssss" }</h2>
					</div>
				))}
			</div>
		</div>
	);
};

const Home = () => {
	return (
		<div className={ styles.main }>
			{ Grid() }
			{ Flex() }
		</div>
	);
};

export default Home;