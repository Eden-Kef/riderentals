import styled from "styled-components";
import { deviceSize } from "../../components/responsive";

export const ContentContainer = styled.div` //contains the middle part of the about page 
margin-top: 3%;
margin-left: 3%;
width: 95%;
height: 100%;
display: flex;
flex-direction: column;
<<<<<<< HEAD

=======
>>>>>>> 1e8e1c5005ebc21d9c590f77ad307302e09cadf5
`;
export const InnerContainer= styled.div`
display: flex;
flex-wrap: wrap;
width: 95%;
height: 60%;
justify-content: space-between;
@media screen and (max-width: ${deviceSize.mobile}px){
  background-position: -10px 0px;
  width: 400px;
  height: 130px;
`;
export const ImgWrapper = styled.div` //contains the image and the description in about page
width: 50%;
margin: 0;
<<<<<<< HEAD
background-color: black;
=======
>>>>>>> 1e8e1c5005ebc21d9c590f77ad307302e09cadf5
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 46%;
  height: 90%;
    }
`;
export const AbtImage = styled.div` //this is the image
width: 100%;
height: 100%;
img{
  width: 100%;
  height: 100%;
}`;

export const DesWrapper = styled.div`
width: 46%;
margin-top: 3%;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 50%;
  height: 20%;
    }
`;
export const AboutDes = styled.p` //contains the description about the car rental in about page
font-size: 19px;
line-height: 1.4;
color:#000;
font-family: "Montserrat", sans-serif;
text-align: left;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 9.2px;
    }
`;