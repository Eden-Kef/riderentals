import React from "react";
import styled from "styled-components";
import carImg from "../../images/logo/car.png";
import hireImg from "../../images/logo/hire.png";
import carserviceImg from "../../images/logo/dollar.png";
import visionImg from "../../images/logo/vision.png";
import {ContentContainer, InnerContainer, ImgWrapper, DesWrapper, ServImage, ServiceDes}
from "./common";
import { deviceSize } from "../../components/responsive";

const Title = styled.h1` //contains the title for service page
font-weight: 500;
text-align: left;
color:rgb(38, 70, 83);
@media screen and (max-width: ${deviceSize.mobile}px){
	font-size: 1.3em;
    }
`;
const Separator = styled.div` // separets the title from the descriptions
width:6%;
border-bottom: solid rgb(38, 70, 83, 0.9);
`;

const Text = styled.h2`
margin-right: 50%;
font-size: 23px;
font-weight: 600;
@media screen and (max-width: ${deviceSize.mobile}px){
	font-size: 15px;
	  }
`;

export function OurServices(props) {
return (
	<ContentContainer> 
	<Title>Our Services Includes</Title>
	<Separator/>
<InnerContainer>
<ImgWrapper>
	<ServImage>
		<img src={carImg} alt="service page" /> 
	</ServImage>  <Text>Rent and Drive (Self-Drive)</Text>
<DesWrapper>
	<ServiceDes>We provide effective and convenient car hire services for customers in need of vehicle movement for their personal and corporate needs.</ServiceDes>
</DesWrapper> </ImgWrapper>

<ImgWrapper>
	<ServImage>
		<img src={hireImg} alt="service page" /> 
	</ServImage> <Text>Car Hire Service</Text>
<DesWrapper>
	<ServiceDes> Our car hire service comes with competent drivers who have a vast knowledge of the
		 roads, traffic rules and as well as experience to make your ride as hitch-free as possible. </ServiceDes>
</DesWrapper> </ImgWrapper>

<ImgWrapper>
<ServImage>
	<img src={carserviceImg} alt="service page" /> 
</ServImage>   <Text>Vehicle Management</Text>
<DesWrapper>
	<ServiceDes>Our fleet preventive maintenance policy
		 constrains us to ensure that vehicles are checked at proper intervals thereby identifying and eliminating possible causes for vehicle breakdown ahead of time.  
</ServiceDes>
</DesWrapper></ImgWrapper>

<ImgWrapper>
<ServImage>
	<img src={visionImg} alt="service page" /> 
</ServImage>   <Text>No hidden fees
</Text>
<DesWrapper>
	<ServiceDes>Know exactly what you’re paying!</ServiceDes>
</DesWrapper></ImgWrapper>
</InnerContainer>
 </ContentContainer>
	);
}