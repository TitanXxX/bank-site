// Filename - pages/index.js

import React, { useEffect, useState } from "react";

import axios from 'axios';

import lodash from 'lodash';

function MakeFetch(url) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return data;
}

function GetPhoto(url){
	const data = MakeFetch(url);
	return data;
}

function Home(){
	const from = Math.floor(Math.random() * 5000);
	const data = lodash.range(from, from + 10).map((i) => {
		return GetPhoto('https://jsonplaceholder.typicode.com/photos/' + i);
	});

	return (
		<div>
			{data.map((d, index) => (
				<img alt={d.title} key={index} src={d.url} />
			))}
			<h1>Welcome to GeeksforGeeks</h1>
		</div>
	);
};

export default Home;