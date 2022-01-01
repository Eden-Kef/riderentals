import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const NavBarContainer = styled.div`
margin-bottom: 1%;
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 1.3em;
background-color: ${({ useTransparent }) => useTransparent ? "transparent" : "#264653"};
`;
const AccessibilityContainer = styled.div`
margin-top: 1%;
height: 70%;
display: flex;
`;
const AnchorLink = styled.a`
font-size: 15px;
font-weight: 600;
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
    font-size: 8px;
    font-weight: 100;}
`;
const Separator = styled.div` 
margin-top: 0.3%;
height: 45%;
width: 0.2px;
background-color: #fff;

`;

export function NavBar(props){
    const { useTransparent } = props;
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});
return (
<NavBarContainer useTransparent = {useTransparent}> 
<Link to =  "/" style={{ textDecoration: 'none' }}><BrandLogo /> </Link>
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
    </AccessibilityContainer>
</NavBarContainer>
);
}