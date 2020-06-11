import styled from 'styled-components';

export const Container = styled.div`
	padding: 35px;
	display: flex;
	flex-direction: column;
	background-color: hsl(220, 16%, 96%);
`;

export const Title = styled.h1`
	font-weight: bold;
	text-align: left;
	margin: 10px 0;
	padding-left: 45px;

	@media screen and (max-width: 600px) {
		text-align: center;
		padding-left: unset;
	}
`;

export const Subtitle = styled.h4`
	text-align: left;
	font-weight: 200;
	padding-left: 45px;
	margin: 0;

	@media screen and (max-width: 600px) {
		text-align: center;
		padding-left: unset;
	}
`;

export const Slider = styled.div`
	display: flex;
	flex-direction: row;
	padding: 10px;
	margin: 10px 25px;
	width: 100%;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		margin: unset;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	height: auto;
	margin: 5px;

	@media screen and (max-width: 600px) {
		margin-bottom: 10vh;
	}
`;

export const Picture = styled.img`
	margin: 10px 0;
	width: 25%;
	height: auto;

	@media screen and (max-width: 600px) {
		display: block;
		margin: 10px auto;
	}
`;

export const Name = styled.h3`
	margin: 10px 0;
	padding: 0 10px;

	@media screen and (max-width: 600px) {
		text-align: center;
		padding-left: unset;
	}
`;

export const Description = styled.p`
	padding: 5px 10px;

	@media screen and (max-width: 600px) {
		text-align: center;
		padding-left: unset;
	}
`;
