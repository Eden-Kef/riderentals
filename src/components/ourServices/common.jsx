import styled from "styled-components";
import { deviceSize } from "../../components/responsive";

export const ContentContainer = styled.div` //contents for service page 
margin: auto;
margin: 3%;
width: 95%;
display: flex;
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
  width: 410px;
`;

export const ImgWrapper = styled.div` //wraps the image in service page
width: 50%;
height: 9%;
margin-bottom: 3%;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 50%;
  height: 60%;
  margin-top: 5%;
`;
export const ServImage = styled.div` //this are the icons for service page
margin:auto;
width: 20%;
height: 20%;
img{
  width: 40%;
  height: 70%;
}
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 20%;
    height: 20%;
  
`;

export const DesWrapper = styled.div` //wraps the image in service page
margin: auto;
width: 65%;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 85%;
`;

export const ServiceDes = styled.p` //these are the description of services 
font-weight: 100;
font-size: 19px;
line-height: 1.4;
color:#000;
font-family: "Montserrat", sans-serif;
text-align: justify;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 10px;
    }
`;