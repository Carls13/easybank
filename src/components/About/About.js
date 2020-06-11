import React from 'react';

import { Container, Title, Subtitle, Slider, CardContainer, Picture, Name, Description } from './styles';

import api from './icon-api.svg';
import budgeting from './icon-budgeting.svg';
import onboarding from './icon-onboarding.svg';
import online from './icon-online.svg';

export const About = () => {
	return (
		<Container>
			<Title>Why choose Easybank?</Title>
			<Subtitle>We leverage Open Banking to turn your bank account into your financial hub.</Subtitle>
			<Subtitle>Control your finances like never before.</Subtitle>
			<Slider>
				<CardContainer>
					<Picture src={online} alt="Easybank"/>
					<Name>Online Banking</Name>
					<Description> 
					    Our modern web and mobile applications allow you to keep track of your finances 
  						wherever you are in the world.
					</Description>
				</CardContainer>
				<CardContainer>
					<Picture src={budgeting} alt="Easybank"/>
					<Name>Simple Budgeting</Name>
					<Description> 
						See exactly where your money goes each month. Receive notifications when you’re 
 						close to hitting your limits.
					</Description>
				</CardContainer>
				<CardContainer>
					<Picture src={onboarding} alt="Easybank"/>
					<Name>Fast Onboarding</Name>
					<Description> 
						We don’t do branches. Open your account in minutes online and start taking control 
  						of your finances right away.
					</Description>
				</CardContainer>
				<CardContainer>
					<Picture src={api} alt="Easybank"/>
					<Name>Open API</Name>
					<Description> 
						Manage your savings, investments, pension, and much more from one account. Tracking 
  						your money has never been easier.
					</Description>
				</CardContainer>
			</Slider>
		</Container>
	)
};