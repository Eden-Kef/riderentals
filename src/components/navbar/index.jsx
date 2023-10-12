import React, { useState }  from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { Modal } from "../modal";
import LogoImg from "../../images/logo/ride.png";

const NavBarContainer = styled.div`
margin-bottom: 1%;
width: 100%;
height: 40px;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 1.3em;
background-color: ${({ useTransparent }) => useTransparent ? "transparent" : "#264653"};
`;

const LogoImage = styled.div`
margin-bottom: 11%;
width: ${({ size }) => (size ? size + "px" : "5.4em")};
height: ${({ size }) => (size ? size + "px" : "2.4em")};
img {
  width: 160%;
  height: 150%;
}
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 1.1em;
  height:1.0em;
`;
const AccessibilityContainer = styled.div`
margin-top: 1.5%;
height: 80%;
display: flex;
`;

const AnchorLink = styled.a`
font-size: 15px;
color: #fff;
cursor: pointer;
text-decoration: none;
outline:none;
transition: all 200ms ease-in-out;
text-decoration: none;
&:hover {
    filter: contrast(0.6);
}
@media screen and (max-width: ${deviceSize.mobile}px){
    font-size: 7px;
    font-weight: 100;
}
`;
const Separator = styled.div` 
margin-top: 0.3%;
height: 35%;
width: 0.2px;
background-color: #fff;

`;
const ButtonWrapper = styled.button`
width: 60px;
height: 20px;
display: flex;
justify-content: center;
border: none;
outline: none;
color: #fff;
background-color: rgba(15, 15, 15, 0);
cursor: pointer;
transition: all 200ms ease-in-out;
&:hover {
    background-color:rgba(15, 15, 15, 0.2);
}
&:focus{
    outline: none;
}
padding: 1px 1em;
font-size: 15px;
border-radius: 4px;
@media screen and (max-width: ${deviceSize.mobile}px){
    width: 20px;
    font-size: 7px;
    font-weight: 500;
    margin-top: 38%;
}
`;

export function NavBar(props){

    const { logoSize } = props;
    const { useTransparent } = props;
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});
    const [openModal, setOpenModal] = useState(false);

return (
<NavBarContainer useTransparent = {useTransparent}> 
<Link to =  "/" style={{ textDecoration: 'none' }}>
    <LogoImage size={logoSize}> <img src={LogoImg} alt="Rental logo" />
    </LogoImage>
</Link>
<AccessibilityContainer>
<Link to ="/" style={{ textDecoration: 'none' }} > 
<AnchorLink> Home </AnchorLink> </Link>
<Marginer direction="horizontal" margin={9}/>
{!isMobile &&<Separator/>}
{!isMobile &&<Marginer direction="horizontal" margin={9}/>}
<Link to =  "/booknow" style={{ textDecoration: 'none' }}>
<AnchorLink> Booking </AnchorLink></Link>
<Marginer direction="horizontal" margin={9}/>
{!isMobile &&<Separator/>}
{!isMobile &&<Marginer direction="horizontal" margin={9}/>}
<Link to =  "/about" style={{ textDecoration: 'none' }}>
<AnchorLink> About Us </AnchorLink></Link>
<Marginer direction="horizontal" margin={9}/>
{!isMobile &&<Separator/>}
{!isMobile &&<Marginer direction="horizontal" margin={9}/>}
<Link to =  "/vehicle" style={{ textDecoration: 'none' }}>
<AnchorLink>Our Vehicles</AnchorLink></Link>
{!isMobile &&<Marginer direction="horizontal" margin={9}/>}
{!isMobile &&<Separator/>}
<Marginer direction="horizontal" margin={9}/>
<Link to =  "/service" style={{ textDecoration: 'none' }}>
<AnchorLink>Our Services</AnchorLink></Link>
<Marginer direction="horizontal" margin={9}/>
{!isMobile &&<Separator/>}
{!isMobile &&<Marginer direction="horizontal" margin={9}/>}
<Link to =  "/contact" style={{ textDecoration: 'none' }}>
<AnchorLink>Contact Us</AnchorLink></Link>

<Marginer direction="horizontal" margin={9}/>
{!isMobile &&<Separator/>}
{!isMobile &&<Marginer direction="horizontal" margin={9}/>}
<Link to =  "/modal" style={{ textDecoration: 'none' }}>
<ButtonWrapper> Account </ButtonWrapper></Link>
        {openModal && <Modal closeModal = {setOpenModal} />}
</AccessibilityContainer>
</NavBarContainer>
);
}