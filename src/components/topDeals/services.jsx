import React from 'react';
import { 
  CardContainer,
  CardWrapper,
  CarHeading,
  CarType,
  CarTitle,
  CarCard,
  CarImg,
  CarInfo,
  CarPrice,
  CarButton,
} from "../vehicles/card";
import { carData } from "../vehicles/cars";
import styled from 'styled-components';
import { deviceSize } from '../responsive';
import { Link } from 'react-router-dom';

const ViewButton = styled.button`
width: 135px;
height: 30px;
display: flex;
justify-content: center;
margin: auto;
border: none;
outline: none;
color: #fff;
background-color: rgba(15, 15, 15, 0.30);
cursor: pointer;
transition: all 200ms ease-in-out;
&:hover {
    background-color:#2A8b9a;
}
&:focus{
    outline: none;
}
padding: 6px 2em;
font-size: 15px;
font-weight: 200;
border-radius: 4px;
`;

export function Services(props) {
  return (
    <CardContainer>
      <CarHeading>Top Car Rental Deals</CarHeading>
      <CardWrapper>
      {carData.slice(0, 3).map((car, index) => {
          return (
            <CarCard key={index}>
              <CarImg src={car.img} alt={carData.alt} />
              <CarInfo>
              <CarType>{car.title}</CarType>
                <CarTitle>{car.name}</CarTitle>
                <CarInfo>{car.seats}</CarInfo>
                <CarInfo>{car.gear}</CarInfo>  
                
                <CarInfo>{car.color}</CarInfo>
                <CarInfo>{car.luggage}</CarInfo>
                <CarInfo>{car.availability}</CarInfo>
                <CarPrice>{car.price}</CarPrice>
                <Link to =  "/booknow" style={{ textDecoration: 'none' }}>
                <CarButton>Book Now</CarButton> </Link>
              </CarInfo>
            </CarCard>
          );
        })}
      </CardWrapper>
      <Link to =  "/vehicle" style={{ textDecoration: 'none' }}>
        <ViewButton>View More </ViewButton>
    </Link>
    </CardContainer>
  );
};

