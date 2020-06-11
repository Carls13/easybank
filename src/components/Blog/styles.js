import styled from 'styled-components';

export const Container = styled.div`
	padding: 35px;
	display: flex;
	flex-direction: column;
	background-color: hsl(0, 0%, 98%);

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
	background-color: white;


	@media screen and (max-width: 600px) {
		margin-bottom: 10vh;
	}
`;

export const Picture = styled.img`
	display: block;
	margin: 10px auto;
	width: 100%;
	height: 30vh;
`;

export const Author = styled.h6`
	margin: 10px 0;
	padding: 0 10px;
`;

export const Name = styled.h3`
	margin: 10px 0;
	padding: 0 10px;
`;

export const Description = styled.p`
	padding: 5px 10px;
`;
