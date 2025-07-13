import React, { useState, useEffect } from "react";
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';

import { Tooltip } from '../../ui';

import styles from './Home.module.css';

const Grid = () => {
	return (
		<div>
			<h1>Депозитные услуги</h1>
			<div className={ styles.grid_container }>
				{["Срочные вклады", "Сберегательные счета", "Процентные вклады"].map((text) => (
					<div key={ uuid() } className={ styles.grid_card }>
						<h2>{ text }</h2>
					</div>
				))}
			</div>
		</div>
	);
};

const Flex = () => {
	return (
		<div>
			<h1>Дополнительные услуги</h1>
			<div className={ styles.flex_container }>
				{["Обмен валюты", "Эмиссия банковских карт", "Клиентский сервис и поддержка"].map((text) => (
					<div key={ uuid() } className={ styles.flex_card }>
						<h2>{ text }</h2>
					</div>
				))}
			</div>
		</div>
	);
};

function GetRates(all){
	const [date, setDate] = useState(new Date());
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		axios
			.get('https://www.cbr-xml-daily.ru/latest.js')
			.then((response) => {
				setTimeout(() => setDate(new Date()), 15 * 60000);
				setData(response.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, [date]);

	if(loading) return <div>Loading...</div>;
	if(error) return <div>Error: {error}</div>;

	const rates = [
		'USD', 'EUR', 'CAD',
		'CNY', 'CHF', 'SGD'
	].concat(all ? Object.keys(data.rates) : []).filter( (el, idx, input) => input.indexOf(el) === idx );
	
	return (
		<div className={ styles.insides }>
			<div className={ styles.info }>
				Обновляется каждые 15 минут, {new Date(data.timestamp * 1000).toLocaleString()}
				<br />
				Последнее обновление: {date.toLocaleString()}
			</div>
			<div className={ styles.rates }>
				{rates.map((title) => (
					<div key={ uuid() } className={ styles.rate }>
						<span className={ styles.rate_title }>{title}:</span>
						<span>{(1 / data.rates[title]).toFixed(2)}</span>
					</div>
				))}
			</div>
		</div>
	);
}

function ExchangeRate(){
	const [all, setAll] = useState(false);
	return (
		<div className={ classNames(styles.rates_container, {[styles.all]: all}) }>
			<h1>Курс обмена валют</h1>
			<h3>Валюта</h3>
			{ GetRates(all) }
			<Tooltip text={ (all ? 'Скрыть' : 'Показать') + ' все валюты' }>
				<button
					onClick={() => setAll(!all)}
				>{ all ? 'Скрыть' : 'Все валюты' }</button>
			</Tooltip>
		</div>
	);
}

const Home = () => {
	return (
		<div className={ styles.main }>
			{ ExchangeRate() }
			{ Grid() }
			{ Flex() }
		</div>
	);
};

export default Home;