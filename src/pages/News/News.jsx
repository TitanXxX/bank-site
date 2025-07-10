import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import lodash from 'lodash';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';

import styles from './News.module.css';
import { Tooltip } from '../../ui';

import {
	LeftOutlined,
	RightOutlined,
} from '@ant-design/icons';

function GetPhoto(url) {
	const curr_url = useState(url)[0];
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		axios
			.get(curr_url)
			.then((response) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, [curr_url]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return data;
}

function MoveScroll(scroller, side, changeActive) {
	const position = Math.floor(scroller.current.scrollLeft);
	const move = Math.floor(scroller.current.clientWidth / 4);//200;
	const pos_range = [0, scroller.current.scrollWidth];
	
	if(side === -1){
		changeActive(Math.max(pos_range[0], position - move) === pos_range[0] ? -1 : 0);
		scroller.current.scrollTo(Math.max(0, position - move), 0);
	} else{
		changeActive(Math.min(pos_range[1], position + move + scroller.current.clientWidth) === pos_range[1] ? 1 : 0);
		scroller.current.scrollTo(Math.min(pos_range[1], position + move), 0);
	}	
}

function ButtonGroup({scroller}) {
	const [active, setActive] = useState(-1);
	return (
		<div className={ styles.btn_container }>
			{[-1, 1].map((side) => (
				<button
					key={uuid()}
					className = {classNames(styles.button, {[styles.active]: active !== side })}
					onClick = {() => MoveScroll(scroller, side, setActive)}
				>
					<Tooltip text={ 'Кнопка перелистывания ' + (side === -1 ? 'влево' : 'вправо')}>
						{side === 1 ? (
							<RightOutlined className={ styles.arrow_btn } />
						) : (
							<LeftOutlined className={ styles.arrow_btn } />
						)}
					</Tooltip>
				</button>
			))}
		</div>
	);
}



const News = () => {
	const photos_ref = useRef(null);
	const from = Math.floor(Math.random() * 5000);
	const data = lodash.range(from, from + 10).map((i) => {
		return GetPhoto('https://jsonplaceholder.typicode.com/photos/' + i);
	});

	return (
		<div className={ styles.main }>
			<h1>Slider</h1>
			<h1>Не забудь адаптировать</h1>
			<div className={ styles.photo_container } ref={photos_ref}>
				{data.map((d) => (
					<div className={ styles.photo } key={uuid()}>
						<img alt="" src={d.url} />
						<p>{d.title}</p>
					</div>
				))}
			</div>
			<ButtonGroup scroller={photos_ref} />
		</div>
	);
};

export default News;