import React from "react";
import styled from "styled-components";
import abtImg from "../../images/thumbnails/abt1.jpg";
import {ContentContainer, InnerContainer, ImgWrapper, AbtImage, DesWrapper, AboutDes}
from "./common";
import { deviceSize } from "../../components/responsive";


const Title = styled.h1` //contains the description title for about page
font-weight: 400;
<<<<<<< HEAD
margin-left: 19%;
=======
margin-left: 22%;
>>>>>>> 1e8e1c5005ebc21d9c590f77ad307302e09cadf5
color:rgb(38, 70, 83);
@media screen and (max-width: ${deviceSize.mobile}px){
	font-size: 1.0em;
	margin-left: 27%;
`;
const Separator = styled.div`
width:6%;
<<<<<<< HEAD
margin-left: 51.7%;
=======
margin-left: 51.4%;
>>>>>>> 1e8e1c5005ebc21d9c590f77ad307302e09cadf5
border-bottom: solid rgb(38, 70, 83, 0.9);
@media screen and (max-width: ${deviceSize.mobile}px){
    margin-left: 49.3%;
    }
`;

 
export function AboutUs(props) {
return (
	<ContentContainer> 
	<Title>Background Info</Title>
	<Separator/>
<InnerContainer>
	<ImgWrapper>
			<AbtImage>
					<img src={abtImg} alt="about us page" /> 
				</AbtImage>   </ImgWrapper>
<DesWrapper><AboutDes>Ride Rentals was incorporated in Nigeria as a Limited liability Company on the 16th of June, 2017 to meet the needs of corporate bodies, multinational organizations, and individuals who desire efficiency 
	and flexibility in transportation as in most areas of operation today. Ride Rentals is majorly into meeting specific needs of organizations with our expanded car rental business to include online and off line ordering, 
	while maintaining quality fleets of cars, buses and SUV with manpower support for customized services. 
</AboutDes></DesWrapper>	
</InnerContainer>
 </ContentContainer>
	);
}