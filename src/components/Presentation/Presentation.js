import React from 'react';

import { Container, FirstColumn, Title, Subtitle, Anchor, SecondColumn, Image } from './styles';

import illustration from './image-mockups.png';

export const Presentation = () => {
	return (
		<Container>
			<FirstColumn>
				<Title>Next generation digital banking</Title>
				<Subtitle>Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more. </Subtitle>
				<Anchor href="#contact">Request Invite</Anchor>
			</FirstColumn>
			<SecondColumn>
				<Image src={illustration} alt="Manage"/>
			</SecondColumn>
		</Container>
	)
};	