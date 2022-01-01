import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState} from "react";
import { ServiceCard } from "../serviceCard";
import { deviceSize } from "../../components/responsive";

const ServicesContainer = styled.div`
width: 100%;
height: 40%;
display: flex;
flex-direction: column;
align-items: flex-start;
`;
const Title = styled.h1`
margin-left: 3%;
margin-top: 4%;
font-weight: 500;
color: #264653;
@media screen and (max-width: ${deviceSize.mobile}px){
	font-size: 1.0em;
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

export function Vehicles(props){
    const [offeredServices, setServices] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const isServicesEmpty = 
        !offeredServices || (offeredServices && offeredServices.length === 0);

    const fetchServices = async () => {
        setLoading(true);
        const response = await axios.get("http://localhost:9000/services").catch(
            (err) => {
            console.log("Error:", err);
        });

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
    <Title>Choose Your Ride</Title>
    <ServicesWrapper> 
        {isServicesEmpty && !isLoading && (<WarningText> No services are published yet! </WarningText>)}
        {isLoading && (<WarningText> Loading... </WarningText>)}
        {!isServicesEmpty && !isLoading && offeredServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />  
        ))}
    </ServicesWrapper>
   
</ServicesContainer>
);
}