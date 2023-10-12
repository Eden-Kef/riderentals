import React from "react";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../images/thumbnails/front.jpg";
import { deviceSize } from "../../components/responsive";
import { Link } from "react-router-dom";


const TopSectionContainer = styled.div`
width: 100%;
height: 570px; 
background: url(${TopSectionBackgroundImg});
background-position: 0px -50px;
background-size: cover;
@media screen and (max-width: ${deviceSize.mobile}px){
  background-position: -55px 0px;
  width: 430px;
  height: 380px; 
`;


const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(38, 70, 83, 0.9);
display: flex;
flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
margin-top: 5.3%;
width: 100%;
height: 60%;
display: flex;
flex-direction: column;
`;

const Name = styled.h1`
margin: auto;
font-size: 5em;
color: #fff;
text-align: center;
font-weight: 600;

@media screen and (max-width: ${deviceSize.mobile}px){
  margin-top: 6%;
  font-size: 1.9em;

`;
const Title = styled.h2`
height: 140%;
width: 100%;
font-size: 2.0em;
color: #fff;
line-height: 1.5;
text-align: center;
font-weight: 500;

@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 1.2em;
  line-height: 1.9;
  }
`;
const Button = styled.button`
width: 200px;
min-height: 45px;
border: none;
outline: none;
color: #000;
background-color: #fff;
cursor: pointer;
transition: all 100ms ease-in-out;
&:hover {
  background-color:#2A8b9a;
}
&:focus{
    outline: none;
}
padding: 5px 1em;
font-size: 18px;
font-weight: 500;
border-radius: 25px;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 120px;
  min-height: 14px;
  font-size: 13px;
  margin-bottom: 5%;
  padding: 5px 0px;
`;
export function TopSection(props) {
    const { children } = props;
    return <TopSectionContainer>
         <BackgroundFilter>
             {children}
             <TopSectionInnerContainer>
                <Name>Ride Rentals</Name>
                <Title>Find the best car rentals in Lagos, Nigeria. 
                <br></br>  Daily Or Weekly Car Rentals For Business Or Visiting Travelers.
                </Title>
                <Link to =  "/booknow" style={{ textDecoration: 'none' }}>
                  <Button>Book Now</Button>
                  </Link>
             </TopSectionInnerContainer>   
         </BackgroundFilter>
    </TopSectionContainer>
    ;
}