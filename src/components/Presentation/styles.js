import styled from 'styled-components';

import img from './bg-intro-desktop.svg';
import imgMobile from './bg-intro-mobile.svg';

export const Container = styled.div`
	margin: 10px 0 10px 0;
	padding: 10px 0 10px 10px;
	display: flex;
	flex-direction: row;
	background-color: hsl(0, 0%, 98%);

	@media screen and (max-width: 600px) {
		flex-direction: column-reverse;
		text-align: center;
		padding: 10px 0;
	}
`;

export const FirstColumn = styled.div`
	width: 30%;
	margin: 10px 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 600px) {
		width: 100%;
		margin: unset;
	}
`;

export const Title = styled.h1`
	margin: 10px 0;
`;

export const Subtitle = styled.p`
	text-align: left;
	margin: 20px 0;

	@media screen and (max-width: 600px) {
		text-align: center;
	}
`;

export const SecondColumn = styled.div`
	width: 50%;
	display: flex;
	margin-left: 10%;
	flex-direction: column;
	background-image: url(${img});
	background-size: 70vw 100vh;
    background-repeat: no-repeat;
    background-position: -10px -80px;

	@media screen and (max-width: 600px) {
		width: 100%;
		margin: unset;
		background-image: url(${imgMobile});
		background-size: 100%;
    	background-position: unset;
	}
`;

export const Image = styled.img`
	width: 75%;
	height: auto;
	display: block;
	margin: auto;
	position: relative;
    left: 170px;

    @media screen and (max-width: 600px) {
		position: unset;
		left: unset;
	}

`;

export const Anchor = styled.a`
    margin: 10px 0;
	text-decoration: none;
	background: linear-gradient(90deg, hsl(136, 65%, 51%) 0%, hsl(192, 70%, 51%) 100%);
	padding: 12.5px 10px;
	border-radius: 20px;
    width: 50%;
	display: block;
	text-align: center;
	color: white;
	cursor: pointer;
	@media screen and (max-width: 600px) {
		display: block;
		margin: 15px auto;
	}
`;

