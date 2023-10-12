import React from "react";
import styled from "styled-components";
import abtImg from "../../images/thumbnails/abt2.jpg";
import {ContentContainer, InnerContainer, ImgWrapper, AbtImage, DesWrapper, AboutDes}
from "./common";
import { deviceSize } from "../../components/responsive";

const Title = styled.h1`  //contains the first title of the about page
text-align: left;
font-weight: 400;
color:rgb(38, 70, 83);
@media screen and (max-width: ${deviceSize.mobile}px){
	font-size: 1.0em;

    }
`;
const Separator = styled.div`
width:6%;
border-bottom: solid rgb(38, 70, 83, 0.9);
`;

export function SecondSection(props){
return (
<ContentContainer>
  <Title>Who We Are</Title>
  <Separator/>
  <InnerContainer>
<DesWrapper><AboutDes>
We effectively create value by being proactive in maintaining quality fleet at reduced costs 
in order to provide efficient services by making sure we are at your service when needed. 
Ride Rentals is managed by a group ofprofessionals with over twenty years core experiences in 
vehicle leasing, car rentals, and fleet management. Our cars comes with professional and courteous drivers
who will make your stay in Nigeria a memorable one.
</AboutDes></DesWrapper><ImgWrapper>
   <AbtImage> 
      <img src={abtImg} alt="about us page" /> 
      </AbtImage> 
      </ImgWrapper>
    </InnerContainer>
</ContentContainer>
);

}