import React from 'react';

import { Container, Column, Logo, SocialMediaContainer, Icon, Option, Button, Copyright } from './styles';

import facebook from './icon-facebook.svg';
import pinterest from './icon-pinterest.svg';
import instagram from './icon-instagram.svg';
import twitter from './icon-twitter.svg';
import youtube from './icon-youtube.svg';
import logo from './logo.svg';

export const Footer = () => {
	return (
		<Container>
			<Column>
				<Logo src={logo} alt="Manage"/>
				<SocialMediaContainer>
					<Icon src={facebook} alt="Manage"/>
					<Icon src={youtube} alt="Manage"/>
					<Icon src={twitter} alt="Manage"/>
					<Icon src={pinterest} alt="Manage"/>
					<Icon src={instagram} alt="Manage"/>
				</SocialMediaContainer>
			</Column>
			<Column>
				<Option>About Us</Option>
				<Option>Contact</Option>
				<Option>Blog</Option>
			</Column>
			<Column>
				<Option>Careers</Option>
				<Option>Support</Option>
				<Option>Privacy Policy</Option>
			</Column>
			<Column id="contact">
				<Button>Request Invite</Button>
				<Copyright>© Easybank. All Rights Reserved</Copyright>
			</Column>
		</Container>
	)
};	