import styled from "styled-components";
import React, {useState} from "react";
import { db } from "../../firebase-config";
import { collection, addDoc} from "firebase/firestore";
import { deviceSize } from "../responsive";

const BoxContainer = styled.div`
  display: flex;
  width: 85%;
  min-height: 780px;
  margin: auto;
  margin-top:3%;
  padding: 10px 30px;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(18, 18, 18, 0.30);
  overflow: hidden;
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 418px;
    min-height: 800px;
    margin-left: 1.7%;
    margin-top: 5%;
`;
const Text = styled.p`
font-size: 1.9em;
font-weight: 500;
color:#264653;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 20px;
  height: 10%;
 `;
const InWrapper = styled.div`
 width:100%;
 min-height: 80%;
 display: flex;
 flex-wrap: wrap;
 @media screen and (max-width: ${deviceSize.mobile}px){
  width: 109%; 

 `;
const TextWrapper = styled.div`
 width: 14%; 
 justify-content: space-between;
 @media screen and (max-width: ${deviceSize.mobile}px){
  width: 69%; 
  height: 0;
 `;
const Title = styled.h2`
margin: auto;
color: #264653;
text-align: left;
font-weight: 100;
font-size: 25px ;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 18px;
 `;
const InputWrapper = styled.div`
 width: 36%;
 height: 8%;
 @media screen and (max-width: ${deviceSize.mobile}px){
  width: 69%; 
  height: 1%;
 `;
const DesWrapper = styled.div`
width: 22.5%; 
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 69%; 
  height: 0;
`;
const DInputWrapper = styled.div`
width: 60%; 
height: 10%;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 69%; 
  height: 1%;

 `;
const InfoWrapper = styled.div`
width: 22.5%; 
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 69%; 
  height: 0;
`;
const IInputWrapper = styled.div`
width: 70%; 
height: 12%;

@media screen and (max-width: ${deviceSize.mobile}px){
  width: 100%;
  height: 7%;
  
`;
const IInput = styled.input`
  margin-right: 3%;
  width: 90%;
  height: 100%;
  outline: none;
  border: 1px solid rgba(38, 70, 83, 0.9);
  border-radius: 3px;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  font-size: 15px;
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(38, 70, 83,0.9);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(38, 70, 83);
  }
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 100%;
    height: 100%;
  
  `;
 const Input = styled.input`
  margin-right: 3%;
  width: 90%;
  height: 55%;
  outline: none;
  border: 1px solid rgba(38, 70, 83, 0.9);
  border-radius: 3px;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  font-size: 15px;
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(38, 70, 83,0.9);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(38, 70, 83);
  }
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 145%;
    height: 300%;
    
`;
const Choose = styled.select`
  margin-right: 3%;
  width: 90%;
  height: 55%;
  border: 1px solid rgba(38, 70, 83, 0.9);
  border-radius: 3px;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  font-size: 15px;
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(38, 70, 83, 0.9);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(38, 70, 83, 0.9);
  }
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 145%;
    height: 300%;
`;
const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  margin-left: 94%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background-color: #264653;
    &:hover {
      background-color:#2A8b9a; 
    }
    @media screen and (max-width: ${deviceSize.mobile}px){
      font-size: 13px;
      padding: 8px 0px;
      margin-left: 25%;
`;  

 export function BookNow() {
  const [newFName, setNewFName] = useState("");
  const [newLName, setNewLName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newChoice, setNewChoice] = useState("");
  const [newPDate, setNewPDate] = useState("");
  const [newRDate, setNewRDate] = useState("");
  const [newLocation, setLocation] = useState("");
  const [newDriver, setNewDriver] = useState("");
  const [newInfo, setNewInfo] = useState("");
  const [message, setMessage] = useState("");
  const usersCollectionRef = collection(db, "users");
  
   const createUser = async () => {
    const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (newFName === "" || newLName === "" || newEmail === "" || newChoice === "" ||
 newPDate === "" || newRDate === "" || newLocation === "" || newDriver === "" || newInfo === "") {
    alert("Please fill in all fields");
  } else if (!emailRegex.test(newEmail)) {
    alert("Please enter a valid email");
  } else {
   const newUser = {
      Firstname: newFName, 
      Lastname: newLName, 
      Email: newEmail, 
      CarChoice: newChoice,
      PickDate: newPDate,
      ReturnDate: newRDate,
      DestinationLocation: newLocation,
      DriverNeeded: newDriver,
      MoreInfo: newInfo,
     };
     await addDoc(usersCollectionRef, newUser)
    alert("Your message has been sent successfully");
    setNewFName("");
    setNewLName("");
    setNewEmail("");
    setNewChoice("");
    setNewPDate("");
    setNewRDate("");
    setLocation("");
    setNewDriver("");
    setNewInfo("");
  }
   };

  return (
  <BoxContainer> 
    <InWrapper>
    <h1>{message && <Text>{message}</Text>}</h1>
      <Text>To book our services kindly fill in the form below and we will 
        get back to you as soon as possible.</Text>
  <TextWrapper>  <Title>First Name </Title></TextWrapper>
    <InputWrapper>  <Input type="FName" 
   onChange = {(event) => { 
     setNewFName(event.target.value);
    }}
  />
  </InputWrapper>
      <TextWrapper> <Title>Last Name </Title> </TextWrapper> 
  <InputWrapper><Input type="LName"
     onChange = {(event) => {
      setNewLName(event.target.value);
    }}  />
    </InputWrapper>
      <TextWrapper><Title>Email </Title></TextWrapper>
      <InputWrapper> <Input type="email"
      onChange = {(event) => {
        setNewEmail(event.target.value);
      }}  /></InputWrapper>
        <TextWrapper> <Title>Car Choice </Title> </TextWrapper>
  <InputWrapper>
  <Choose onChange = {(event) => {
        setNewChoice(event.target.value);                  
      }} >              <option value = "CarChoice"></option>  
                        <option value = "Economy">Economy</option>
                        <option value = "Standard">Standard</option>
                        <option value = "Medsize SUV">Medsize SUV</option>
                        <option value = "Fullsize SUV">Fullsize SUV</option>
                        <option value = "Minivan">Minivan</option>
                        <option value = "Pickup">Pickup</option>
       </Choose>
                          </InputWrapper>
  <TextWrapper> <Title>Pickup Date </Title> </TextWrapper>
     <InputWrapper> <Input type="Date"
      onChange = {(event) => {
        setNewPDate(event.target.value);
      }} /></InputWrapper>
     <TextWrapper> <Title>Return Date </Title> </TextWrapper>
     <InputWrapper> <Input type="Date"
      onChange = {(event) => {
        setNewRDate(event.target.value);
      }} /></InputWrapper>
        <DesWrapper> <Title>Destination Location</Title> </DesWrapper>
      <DInputWrapper><Input type=" text"  onChange = {(event) => {
        setLocation(event.target.value);
      }} /></DInputWrapper>
      <DesWrapper> <Title>Driver Needed </Title> </DesWrapper>
  <DInputWrapper><Choose onChange = {(event) => {
        setNewDriver(event.target.value);
      }} ><option value = "Yes">Yes</option>
          <option value = "No">No</option>
       </Choose>     </DInputWrapper>
      <InfoWrapper> <Title>For Additional Request</Title> </InfoWrapper>
      <IInputWrapper><IInput type="textarea" 
       onChange = {(event) => {
        setNewInfo(event.target.value);
      }} /></IInputWrapper>
      <InputWrapper><SubmitButton onClick ={createUser}
      >Submit 
      </SubmitButton></InputWrapper>
   </InWrapper>

    </BoxContainer>


  );
};