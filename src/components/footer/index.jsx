import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";

const FooterContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 3em;
  border-top: 0.3px solid rgb(0, 0, 0, 0.3);
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 430px;
    height: 180px;
  `;

const TopContainer = styled.div`
  align-items: center;
  width: 100%
  height: 100%;
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-right: 6%;
  }

`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 1px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;
`;

const RightBottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;


const Title = styled.h2`
  color: rgba(15, 15, 15, 0.7);
  font-weight: 600;
  font-size: 20px;
  @media screen and (max-width: ${deviceSize.mobile}px){
    font-size: 0.7em;
    }
`;
const Des = styled.h3`
  padding: 2em 0;
  text-align: left;
  color: #6f6f6f;
  font-weight: 400;
  font-size: 13px;
  @media screen and (max-width: ${deviceSize.mobile}px){
    font-size: 0.5em;
    }
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
  @media screen and (max-width: ${deviceSize.mobile}px){
    font-size: 0.6em;
   
    }
`;
const Terms = styled.a`
color: #a3a3a3;
font-size: 11px;
display: flex;
margin-top: 8px;
align-items: left;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 6.5px;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 11px;
  display: flex;
  margin-top: 8px;
  align-items: left;
  @media screen and (max-width: ${deviceSize.mobile}px){
    font-size: 7px;
    }
`;

export function Footer(props) {
  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Who We Are</Title>
          <Des>We are a vehicle chartering services that meets the specific needs <br></br> of customers
          while maintaining quality fleets of cars, and <br></br>SUVs with efficient manpower support for customized services.</Des>
        </ContentContainer>
        <ContentContainer>
          <Title>Contact Us</Title>
          <Des>1, Familoni Street, Off Lekki – Epe Expressway, Igbo – Efon , Lekki, Lagos<br></br>Telephone/Whatsapp: 07031605032<br></br>
          riderentals@gmail.com, info@riderentals.ng
          </Des>
        </ContentContainer>
   
        <ContentContainer>
          <Title>Navigation</Title>
          <Link to =  "/" style={{ textDecoration: 'none' }}><FLink>Home</FLink></Link>
          <Link to =  "/booknow" style={{ textDecoration: 'none' }}><FLink>Booking</FLink></Link>
          <Link to =  "/about" style={{ textDecoration: 'none' }}><FLink>About Us</FLink></Link>
          <Link to =  "/vehicle" style={{ textDecoration: 'none' }}><FLink>Our Vehicles</FLink></Link>
          <Link to =  "/service" style={{ textDecoration: 'none' }}><FLink>Our Services</FLink></Link>
          <Link to =  "/contact" style={{ textDecoration: 'none' }}><FLink>Contact Us</FLink></Link>
          <Link to =  "/modal" style={{ textDecoration: 'none' }}><FLink>Account</FLink></Link>
        </ContentContainer>
        </TopContainer>
      <BottomContainer>
        <RightBottomContainer>
          <PrivacyText>&#169; Copyright Ride Rentals.</PrivacyText>
          <Terms> <Link to =  "/terms" style={{ textDecoration: 'none' }}> Terms of Service</Link></Terms>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}