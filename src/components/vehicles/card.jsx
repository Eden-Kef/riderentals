import styled from "styled-components";
import { deviceSize } from "../responsive";

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
overflow: hidden;
width: 1250px;
min-height: 10px;
margin: auto;
margin-top: 2em;
align-items: center;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 400px;
  height: 2010px; 
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
`;

export const CarCard = styled.div`
  margin: 0 2rem;
  margin-bottom:5%;
  background-color: rgba(15, 15, 15, 0.1);
  line-height: 1.3;
  width: 350px;
  height: 600px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
`;

export const CarImg = styled.img`
width: 100%;
height: 14.5em;
img {
  width: 100%;
  height: 100%;
}
`;

export const CarHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: left;
  margin-left: 2%;
  color: #264653;
  margin-bottom: 1rem;
  @media screen and (max-width: ${deviceSize.mobile}px){
    text-align: center;
    margin-right: 9%;
  }
`;

export const CarType = styled.h1`
margin-top: 5%;
color: #264653;
font-size: 30px;
font-weight: 600;
margin-left: 5%;
`;

export const CarTitle = styled.h2`
color: #264653;
font-size: 20px;
font-weight: 600;
margin-left: 5%;
`;


export const CarInfo = styled.div`
  flex-direction: column;
  margin-bottom: 1% ;
  color: rgba(15, 15, 15, 0.7);
  text-align: left;
  margin-left: 5%;
  
`;

export const CarPrice = styled.p`
  margin-bottom: 2rem;
  font-size: 20px;
  color: #264653;
  margin-left: 5%;
  font-weight: 600;
`;

export const CarButton = styled.button`
padding: 8px 100px;
margin-left: 5%;
color: #fff;
font-size: 13px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background-color: #264653;
  &:hover {
    background-color:#2A8b9a; 
  }
`;