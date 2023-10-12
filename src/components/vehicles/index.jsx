import React from 'react';
import { 
  CardWrapper,
  CarHeading,
  CarType,
  CarTitle,
  CarCard,
  CarImg,
  CarInfo,
  CarPrice,
  CarButton,
} from "./card";
import { carData } from './cars';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deviceSize } from '../responsive';

const CardContainer = styled.div`
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
  height: 5700px; 
`;
export function Cars(props) {
  return (
    <CardContainer>
      <CarHeading>Choose Your Ride</CarHeading>
      <CardWrapper>
        {carData.map((car, index) => {
          return (
            <CarCard key={index}>
              <CarImg src={car.img} alt={car.alt} />
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
                <CarButton>Book Now</CarButton>    </Link>
              </CarInfo>
            </CarCard>
          );
        })}
      </CardWrapper>
    </CardContainer>
  );
};


