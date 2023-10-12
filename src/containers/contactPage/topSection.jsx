import React from "react";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../images/thumbnails/contact.jpg";
import { deviceSize } from "../../components/responsive";

const TopSectionContainer = styled.div`
width: 100%;
height: 350px; 
background: url(${TopSectionBackgroundImg});
background-position: 0px -50px;
background-size: cover;
@media screen and (max-width: ${deviceSize.mobile}px){
    background-position:0px 0px;
    width: 430px;
    height: 130px;
`;

const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(38, 70, 83, 0.9);
display: flex;
flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: normal;
justify-content: space-evenly;
`;

const Title = styled.h1`
margin: 0;
font-size: 300%;
color: #fff;
line-height: 1.9;
text-align: center;
font-weight: 300;
@media screen and (max-width: ${deviceSize.mobile}px){
    font-size: 130%;
  }
`;

export function TopSection(props) {
    const { children } = props;
    return <TopSectionContainer>
         <BackgroundFilter>
             {children}
             <TopSectionInnerContainer>
 <Title>Contact Us</Title>
 <br></br>
           </TopSectionInnerContainer>
         </BackgroundFilter>
    </TopSectionContainer>
    ;
}
