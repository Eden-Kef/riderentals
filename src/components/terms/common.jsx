import styled from "styled-components";
import { deviceSize } from "../../components/responsive";

export const TermsContainer = styled.div` //contains the middle part of the about page 
margin-top: 3%;
margin-left: 5%;
width: 90%;
height: 100%;
display: flex;
align-content: center;
flex-direction: column;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 400px;
`;
export const InnerContainer= styled.div`
display: flex;
flex-wrap: wrap;
width: 95%;
height: 60%;
justify-content: space-between;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 400px;
`;

export const DesWrapper = styled.div`
width: 100%;
margin-top: 3%;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 90%;
    }
`;
export const AboutDes = styled.p` //contains the description about the car rental in about page
font-size: 15px;
line-height: 1.4;
color: rgba(15, 15, 15, 0.5);
font-family: "Montserrat", sans-serif;
text-align: left;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 9.2px;
    }
`;