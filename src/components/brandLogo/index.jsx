import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logo/carlogo.png";
import { deviceSize } from "../responsive";

const BrandLogoContainer = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 5em;
  height: 0.1em;
  margin-bottom: 9%;
`;

const LogoImage = styled.div`
margin-bottom: 11%;
width: ${({ size }) => (size ? size + "px" : "3.4em")};
height: ${({ size }) => (size ? size + "px" : "2.4em")};
img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 1.1em;
  height:1.0em;
`;

const LogoTitle = styled.h6`
  font-size: ${({ size }) => (size ? size + "px" : "17px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 600;
  margin-left: 6px;
  @media screen and (max-width: ${deviceSize.mobile}px){
    font-size: 9px;
`;

export function BrandLogo(props){
   const { logoSize, textSize, color} = props;
   
return(
<BrandLogoContainer>
<LogoImage size={logoSize}> <img src={LogoImg} alt="Rental logo" /> </LogoImage>
<LogoTitle size={textSize} color={color}> Ride Rentals </LogoTitle>
</BrandLogoContainer>
);
}
