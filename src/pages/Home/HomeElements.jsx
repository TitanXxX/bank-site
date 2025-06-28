import styled from "styled-components";

import {ReactComponent as RightArrowBtn} from "../../media/arrow-button.svg";

export const MainWindow = styled.div`
	padding: 0 2%;
`;


export const PhotoContainer = styled.div`
	display: flex;
	
	align-items: flex-start;
	flex-wrap: nowrap;

	width: 92vw;
	height: 200px;
	
	margin: 20px auto;
	padding: 10px;
	border: 2px solid black;
	border-radius: 20px;
	overflow: hidden;
	scroll-behavior: smooth;
`;


export const Photo = styled.div`
	width: 16%;
	min-width: 100px;
	height: 180px;
	display: block;
	margin: 0 1%;
	flex-shrink: 0;
	border-radius: 20px;
	background-color: color-mix(in srgb, rgb(87, 69, 80) 20%, transparent);
	justify-content: space-between;
	overflow: hidden;
	& img {
		width: 100%;
		height: 40%;
		background-color: color-mix(in srgb, rgb(57, 39, 50) 20%, transparent);
	}
	& p {
		width: auto;
		height: auto;
		margin: 0;
		padding: 2% 4%;
	}
`;


export const BtnContainer = styled.div`
	display: flex;
	
	align-items: flex-start;
	flex-wrap: nowrap;

	width: 92vw;
	height: 100px;
	
	margin: 20px auto;
	padding: 10px;
	/*border: 2px solid black;*/
	border-radius: 20px;
	justify-content: center;
	overflow: hidden;
`;

export const ArrowBtn = styled(RightArrowBtn)`
	width: 100px;
	height 100px;
	&.active {
		color: #4d4dff;
	}
	border-radius: 50%;
`;




export const Button = styled.button`
	//padding: 10px 30px;
	height: 100px;
	cursor: default;
	opacity: 0.6;
	background: white;
	outline: 0;
	padding: 0 10px;
	border: 0;
	border-radius: 50%;
	transform-origin: 50% 50%;
	&.left{
		transform: rotate(180deg);
	}
	&.active{
		opacity: 1;
		cursor: pointer;
	}
`;

