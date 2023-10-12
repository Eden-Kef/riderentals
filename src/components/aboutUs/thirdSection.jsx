import React from "react";
import styled from "styled-components";
import abtImg from "../../images/thumbnails/abt3.jpg";
import {ContentContainer, InnerContainer, ImgWrapper, AbtImage, DesWrapper, AboutDes}
from "./common";
import { deviceSize } from "../../components/responsive";

const Title = styled.h1`  //contains the first title of the about page
<<<<<<< HEAD
margin-left: 14%;
=======
margin-left: 17%;
>>>>>>> 1e8e1c5005ebc21d9c590f77ad307302e09cadf5
font-weight: 400;
color:rgb(38, 70, 83);
@media screen and (max-width: ${deviceSize.mobile}px){
	font-size: 1.0em;
    margin-left: 20%;
`;
const Separator = styled.div`
margin-left: 51.4%;
width:6%;
border-bottom: solid rgb(38, 70, 83, 0.9);
@media screen and (max-width: ${deviceSize.mobile}px){
    margin-left: 49.99%;
}
`;

export function ThirdSection(props){
return (
<ContentContainer>
    <Title>What We Do</Title>
    <Separator/> 
    <InnerContainer><ImgWrapper>
<AbtImage>
          <img src={abtImg} alt="about us page" /> 
        </AbtImage>     
    </ImgWrapper>
<DesWrapper>
<AboutDes>We are committed to exceeding your expectations at all times as we  operate a robust platform that gives our esteemed
     customers the right to customized services while we provide Pick–up and Drop- off Services, Airport transfers, Short term and 
     Medium term Car Rental Services such as Staff bus Services, 
    School bus shuttles, etc.</AboutDes>
</DesWrapper></InnerContainer>
</ContentContainer>
);

}