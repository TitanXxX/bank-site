import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import lodash from 'lodash';

import {
	MainWindow,
	PhotoContainer,
	Photo,
	BtnContainer,
	Button,
	ArrowBtn,
} from "./HomeElements";



function MakeFetch(url) {
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

function GetPhoto(url){
	const data = MakeFetch(url);
	return data;
}
function MoveScroll(scroller, side, changeActive) {
	const position = Math.floor(scroller.current.scrollLeft);
	const move = 100;
	const pos_range = [0, 500];

	if(side === -1){
		changeActive(Math.max(pos_range[0], position - move) === pos_range[0] ? -1 : 0);
		scroller.current.scrollTo(Math.max(pos_range[0], position - move), 0);
	} else{
		changeActive(Math.min(pos_range[1], position + move) === pos_range[1] ? 1 : 0);
		scroller.current.scrollTo(Math.min(pos_range[1], position + move), 0);
	}
}

function ButtonGroup({scroller}) {
	const [active, setActive] = useState(-1);
	return (
		<BtnContainer>
			{[-1, 1].map((side, key) => (
				<Button
					key={key}
					className = {
						(side === -1 ? 'left' : '') + ' ' +
						(active !== side ? 'active' : '')
					}
					onClick = {() => MoveScroll(scroller, side, setActive)}
				>
					<ArrowBtn />
				</Button>
			))}
		</BtnContainer>
	);
}

function Home(){
	const photos_ref = useRef(null);
	const from = Math.floor(Math.random() * 5000);
	const data = lodash.range(from, from + 20).map((i) => {
		return GetPhoto('https://jsonplaceholder.typicode.com/photos/' + i);
	});

	return (
		<MainWindow>
			<h1>Slider</h1>
			<h1>Не забудь адаптировать</h1>
			<PhotoContainer ref={photos_ref}>
				{data.map((d, key) => (
					<Photo key={key}>
						<img alt="" src={d.url} />
						<p>{d.title}</p>
					</Photo>
				))}
			</PhotoContainer>
			<ButtonGroup scroller={photos_ref} />
		</MainWindow>
	);
};
export default Home;