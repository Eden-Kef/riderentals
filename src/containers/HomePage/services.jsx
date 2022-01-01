import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState} from "react";
import { ServiceCard } from "../../components/serviceCard";
import { Link } from "react-router-dom";
import { deviceSize } from "../../components/responsive";

const ServicesContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`;
const Title = styled.h1`
margin-left: 4%;
margin-top:7%;
font-weight: 900;
color:#000;
@media screen and (max-width: ${deviceSize.mobile}px){
    font-size: 1.0em;
    }
`;
const ViewButton = styled.button`
width: 135px;
height: 30px;
display: flex;
margin-left: 430%;
margin-top: 8%;
border: none;
outline: none;
color: #fff;
background-color: rgba(15, 15, 15, 0.30);;
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
font-weight: 200;
border-radius: 4px;
@media screen and (max-width: ${deviceSize.mobile}px){
    margin-left: 75%;
    }
`;

const ServicesWrapper = styled.div`
 display: flex;
 flex-wrap: wrap;
 `;
const WarningText = styled.h3`
color: rgba(100, 100, 100);
font-weight: 500; 

`;

export function Services(props){
    const [offeredServices, setServices] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const isServicesEmpty = 
        !offeredServices || (offeredServices && offeredServices.length === 0);

    const fetchServices = async () => {
        setLoading(true);
        const response = await axios.get("http://localhost:9000/services",{
    params: {
        _limit: 3
    }
        }
        );

        if(response) {
           setServices(response.data);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchServices();
    }, []);

return (
<ServicesContainer>
    <Title>Top Car Rental Deals</Title>
    <ServicesWrapper> 
        
        {isServicesEmpty && !isLoading && (<WarningText> No services are published yet! </WarningText>)}
        {isLoading && (<WarningText> Loading... </WarningText>)}
        {!isServicesEmpty && !isLoading && offeredServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
            
        ))}
    </ServicesWrapper>
    <Link to =  "/vehicle" style={{ textDecoration: 'none' }}>
        <ViewButton>View More </ViewButton>
        </Link>
   
</ServicesContainer>
);
}