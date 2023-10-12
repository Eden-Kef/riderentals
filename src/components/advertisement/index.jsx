import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import FarmingImg from "../../images/thumbnails/Electric-Car.png";
import { deviceSize } from "../responsive";

const AdContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 3%;
  display: flex;
  background-color: #264653;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${deviceSize.mobile}px){
    background-position: -10px 0px;
    width: 400px;
    height: 330px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${deviceSize.mobile}px){
    justify-content: center;
    width: 100%;
    margin-top: 1%;
    margin-right: 1%;
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 4em;
  @media screen and (max-width: ${deviceSize.mobile}px){
    justify-content: center;
    width: 100%;
  
    margin-left: 2%;
    margin-right: 1%;
`;

const SloganTitle = styled.h1`
  margin-bottom: 3%;
  font-size: 32px;
  color: #fff;
  font-weight: 600;
  line-height: 1.4;
  text-align: start;
  @media screen and (max-width: ${deviceSize.mobile}px){
    font-size: 1.5em;
    }
`;
const SloganDes = styled.h2`
margin: 0;
font-size: 22px;
color: #fff;
font-weight: 200;
line-height: 1.8;
text-align: start;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 1em;

  }
`;

const Image = styled.div`
  width: 39em;
  height: 20em;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 15em;
    height: 5em;
    margin-right: 4%;
    }
`;

export function Advertisement(props) {
  return (
    <AdContainer>
      <ContentContainer>
        <SloganContainer>
     <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <SloganTitle> Why Use Ride Rentals?</SloganTitle>
            <SloganDes>&#128504; Customer Support</SloganDes>
            <SloganDes>&#128504; Free cancellation on most bookings</SloganDes>
            <SloganDes>&#128504; Dependable Cars</SloganDes>
            <SloganDes>&#128504; Affordable Prices</SloganDes>
            <SloganDes>&#128504; Provides Drivers</SloganDes>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.8em" />
        </SloganContainer>
        <Image>
          <img src={FarmingImg} alt="join-as-specialist" />
        </Image>
      </ContentContainer>
    </AdContainer>
  );
}