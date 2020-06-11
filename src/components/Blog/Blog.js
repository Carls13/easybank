import React from 'react';

import { Container, Title, Slider, CardContainer, Picture, Author, Name, Description } from './styles';

import confetti from './image-confetti.jpg';
import currency from './image-currency.jpg';
import plane from './image-plane.jpg';
import restaurant from './image-restaurant.jpg';

export const Blog = () => {
	return (
		<Container>
			<Title>Latest Articles</Title>
			<Slider>
				<CardContainer>
					<Picture src={currency} alt="Easybank Blog"/>
					<Author>By Claire Robinson</Author>
					<Name>Receive money in any currency with no fee</Name>
					<Description> 
					    The world is getting smaller and we’re becoming more mobile. So why should you be 
  						forced to only receive money in a single …
					</Description>
				</CardContainer>
				<CardContainer>
					<Picture src={restaurant} alt="Easybank Blog"/>
					<Author>By Wilson Hutton</Author>
					<Name>Treat yourself without worrying about money</Name>
					<Description> 
						Our simple budgeting feature allows you to separate out your spending and set 
  						realistic limits each month. That means you …
					</Description>
				</CardContainer>
				<CardContainer>
					<Picture src={plane} alt="Easybank Blog"/>
					<Author>By Wilson Hutton</Author>
					<Name>Take your Easybank card wherever you go</Name>
					<Description> 
						We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  						while you’re abroad. We’ll even show you …
					</Description>
				</CardContainer>
				<CardContainer>
					<Picture src={confetti} alt="Easybank Blog"/>
					<Author>By Claire Robinson</Author>
					<Name>Our invite-only Beta accounts are now live!</Name>
					<Description> 
						After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  						It’s easy to request an invite through the site …
					</Description>
				</CardContainer>
			</Slider>
		</Container>
	)
};