import React, { useState, useEffect, useRef } from "react";
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';

import styles from './News.module.css';
import { Tooltip } from '../../ui';

import {
	LeftOutlined,
	RightOutlined,
} from '@ant-design/icons';



function MoveScroll(scroller, side, changeActive) {
	const position = Math.floor(scroller.current.scrollLeft);
	const move = side * Math.floor(scroller.current.clientWidth / 4);
	const pos_range = [0, scroller.current.scrollWidth];
	changeActive([
		Math.max(
			pos_range[0],
			position + move
		) !== pos_range[0],
		Math.min(
			pos_range[1],
			position + move + scroller.current.clientWidth
		) !== pos_range[1]
	]);

	if(side === -1) {
		scroller.current.scrollTo(Math.max(0, position + move), 0);
	} else if(side === 1){
		scroller.current.scrollTo(Math.min(pos_range[1], position + move), 0);
	}
}

function ButtonGroup({scroller}) {
	const [active, setActive] = useState([false, true]);
	useEffect(() => {
		MoveScroll(scroller, 0, setActive);
	}, [scroller]);
	return (
		<div className={ styles.btn_container }>
			{[-1, 1].map((side, i) => (
				<button
					key={uuid()}
					className = {classNames(
						styles.button, { [styles.active]: active[i] }
					)}
					onClick = {() => MoveScroll(scroller, side, setActive)}
				>
					<Tooltip text={ active[i] ? ('Кнопка перелистывания ' + (side === -1 ? 'влево' : 'вправо')) : ''}>
						{side === 1 ? (
							<RightOutlined className={ styles.arrow_btn } />
						) : (
							<LeftOutlined className={ styles.arrow_btn } />
						)}
					</Tooltip>
				</button>
			))
		}
		</div>
	);
}


const News = () => {
	const photos_ref = useRef(null);
	const urls = [
		'https://cdn.finam.ru/images/publications/1659832/image_28_ba12edb9e6.png',
		'https://avatars.mds.yandex.net/i?id=90a4269a6a3955edb3b613df9ee3d58f95ee3b19952feabc-5234908-images-thumbs&n=13',
		'https://avatars.mds.yandex.net/i?id=07b4d3091df12ca702e14f01423a0d0c_l-8187817-images-thumbs&n=13',
	];
	const data = [
		{
			title: 'Газпромбанк снизил ставки по всей линейке вкладов',
			text: 'На фоне смягчения денежно-кредитной политики ЦБ крупнейшие банки продолжают корректировать доходность по сберегательным продуктам. Так, ГПБ снизил ставки по всей линейке вкладов'
		},
		{
			title: 'Почта Банк изменил условия по вкладу «Горячий сезон»',
			text: 'На фоне смягчения денежно-кредитной политики ЦБ крупнейшие банки продолжают корректировать доходность по сберегательным продуктам. Так, Почта Банк изменил условия по вкладу «Горячий сезон», добавив к нему новый срок'
		},
		{
			title: 'Ниже 18% упали ставки по коротким вкладам с начала июля',
			text: 'Снижение ключевой ставки 6 июня и последующие заявления регулятора о возможности ее снижения и далее повлекли за собой волну снижения ставок по вкладам. «РБК Инвестиции» изучили, что произошло на рынке вкладов за месяц'
		},
		{
			title: 'Альфа-банк снизил ставки по всей линейке вкладов',
			text: 'В июне Банк России впервые за три года снизил ключевую ставку с 21% до 20% годовых. Вслед за решением регулятора банки из топ-10 продолжают корректировать доходность по вкладам и накопительным счетам'
		},
		{
			title: 'МКБ снизил ставки по всей линейке вкладов',
			text: 'В начале июля Банк России намекнул на возможное снижение ключевой ставки на грядущем заседании. Вслед за этим банки из топ-10 начали снижать доходность по сберегательным продуктам'
		},
		{
			title: 'Альфа-банк снизил приветственную ставку по накопительному счету до 18%',
			text: 'На фоне смягчения денежно-кредитной политики ЦБ крупнейшие банки продолжают корректировать доходность по сберегательным продуктам. Так, Альфа-банк снизил ставки по накопительным счетам и вкладам'
		},
		{
			title: 'Ставки по вкладам снизились после сигнала ЦБ о возможном смягчении ДКП',
			text: 'Новая волна снижения депозитных ставок началась вслед за комментарием со стороны Банка России о возможном рассмотрении снижения ключевой ставки на июльском заседании, выяснили в «Финуслугах»'
		},
		{
			title: 'Газпромбанк снизил максимальные ставки по вкладам до 18,3% годовых',
			text: 'На фоне смягчения денежно-кредитной политики ЦБ крупнейшие банки продолжают корректировать доходность по сберегательным продуктам. Так, ГПБ снизил ставки по всей линейке вкладов'
		},
		{
			title: 'РСХБ снизил максимальную ставку по вкладам до 18,5%',
			text: 'На фоне смягчения денежно-кредитной политики ЦБ крупнейшие банки продолжают корректировать доходность по сберегательным продуктам. Так, Россельхозбанк снизил ставки по всей линейке вкладов'
		},
		{
			title: 'Что такое социальный вклад и счет для малообеспеченных граждан',
			text: 'С июля 2025 года начал действовать новый финансовый инструмент для малообеспеченных россиян. Как и в каких банках можно открыть социальный вклад или счет — в обзоре «РБК Инвестиций»'
		},
	];
	return (
		<div className={ styles.main }>
			<h1>Новости</h1>
			<div className={ styles.photo_container } ref={photos_ref}>
				{data.map((d) => (
					<div key={uuid()} className={ styles.photo }>
						<img alt="" src={ urls[Math.floor(Math.random() * 3)] } />
						<h4>{ d.title }</h4>
						<p>{ d.text }</p>
					</div>
				))}
			</div>
			<ButtonGroup scroller={photos_ref} />
		</div>
	);
};

export default News;