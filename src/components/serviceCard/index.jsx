import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { deviceSize } from "../../components/responsive";
const CardContainer = styled.div`
display: flex;
flex-direction: column;
overflow: hidden;
width: 300px;
min-height: 150px;
background-color: #fff;
box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
margin: 3.7em;
margin-bottom: 1.3em;
@media screen and (max-width: ${deviceSize.mobile}px){
  margin: 0.6em;
  }
`;
const TopContainer =styled.div`
width: 100%
`;
const ServiceThumbnail = styled.div`
width: 100%;
height: 12em;
img {
    width: 100%;
    height: 100%;
}`;
const ContentContainer = styled.div`
padding: 15px 14px;
`;
const Title = styled.h1`
font-size: 27px;
font-weight: 600;
color: #264653;
`;

const Price = styled.h2`
font-size: 23px;
font-weight: 100;
color: #000;
`;
const Name = styled.h3`
font-size: 22px;
color: #264653;
`;
const Description = styled.div`
align-text: column;
color: rgba(151, 151, 151, 1);
font-size: 15px;
font-weight: 400;
`;
const BottomContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
  padding: 0 10px;
`;
const Button = styled.button`
margin: 50%;
margin-top: 60%;
width: 130px;
height: 30px;
border: none;
outline: none;
color: #fff;
background-color: #264653;
cursor: pointer;
transition: all 200ms ease-in-out;
&:hover {
  background-color:#2A8b9a;
}
&:focus{
    outline: none;
}
padding: 5px 2em;
font-size: 15px;
font-weight: 500;
border-radius: 4px;
`;

export function ServiceCard(props) {
    const {title, thumbnailUrl, price, name, description} = props;
return (
    <CardContainer>
      <TopContainer>
        <ServiceThumbnail>
          <img src={thumbnailUrl} alt={title}/> 
        </ServiceThumbnail>
      </TopContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Price>{price}</Price> 
        <Name>{name}</Name>
        <Description>{description}</Description>
        <BottomContainer>
        <Link to =  "/booknow" style={{ textDecoration: 'none' }}>
          <Button>Book Now </Button>
          </Link>
          </BottomContainer></ContentContainer>
    </CardContainer>
  );
}