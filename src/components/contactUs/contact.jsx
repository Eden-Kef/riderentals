import styled from "styled-components";
import React, { useState } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc,  } from "@firebase/firestore";
import { deviceSize } from "../responsive";
import { getAuth } from "@firebase/auth";

const BoxContainer = styled.div`
  display: flex;
  width: 70%;
  min-height: 600px;
  margin-top:5%;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(18, 18, 18, 0.30);
  overflow: hidden;
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 420px;
    height: 1px;
    padding: 10px 10px;
`;
const Text = styled.p`
font-size: 1.9em;
font-weight: 500;
color:#264653;
margin-right: 30%;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 1.2em;
  width: 250px;
 `;
const InWrapper = styled.div`

  min-height: 40%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: ${deviceSize.mobile}px){
    height: 70%;
    width: 100%;
   `;

const ContWrapper = styled.div`
 width:60%;
 height: 29%;
 display: flex;
 flex-wrap: wrap;
 margin-right: 5%;
 margin-top: 23%;
 font-size: 30px;
 @media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 16px;
  height: 4%;
  margin-top: 110%;
 width:60%;
 `;
const ContInfo = styled.h2`
color: #264653;
text-align: left;
font-weight: 500;
line-height: 1.6;
font-size: 20px ;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size:12px ;
  text-align: left;
 `;
const TextWrapper = styled.div`
  width: 14%;
  justify-content: space-between;
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 30%;
`;
const Title = styled.h2`
margin: auto;
color: #264653;
text-align: left;
font-weight: 100;
font-size: 21px ;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 16px ;
 `;
const InputWrapper = styled.div`
  width: 87%;
  height: 8%;
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 100%;
    height: 10%;
`;
const InfoWrapper = styled.div`
  width: 24%;
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 40%;
`;
const IInputWrapper = styled.div`
  width: 87%;
  height: 25%;
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 100%;
    height: 10%;
`;
const Input = styled.input`
  margin-right: 10%;
  width: 90%;
  height: 80%;
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
    width: 140%;
    height: 60%;
   `;

const SubmitButton = styled.button`
  width: 50%;
  padding: 10px 10%;
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
      padding: 7px 30px;
`;

export function ContactUs(props) {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [message] = useState("");
 
  const auth = getAuth();
  const user = auth.currentUser;

  const questionsCollectionRef = collection(db, "questions");
  const createQuestion = async () => {
    // check if email is valid regex expression
  const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (newName === "" || newEmail === "" || newMessage === "") {
      alert("Please fill in all fields");
    } else if (!emailRegex.test(newEmail)) {
      alert("Please enter a valid email");
    } else {
    const newQuestion = {
        name: newName,
        email: newEmail,
        message: newMessage,
      };
    await addDoc(questionsCollectionRef, newQuestion)
      alert("Hello " + "" + newName + "" + ", your message is successfully sent!") 
      setNewName("");
      setNewEmail("");
      setNewMessage("");
    }
  }; 
  
  return (
    <BoxContainer>
      <InWrapper>
        <h1>{message && <Text>{message}</Text>}</h1>
        <Text>Have Questions or Need Help? Send Us!</Text>
        <TextWrapper>
          <Title>Name &#42;</Title>
        </TextWrapper>
        <InputWrapper>
          <Input type="text" value={newName} onChange={(event) => {
              setNewName(event.target.value); 
            }}
          />
        </InputWrapper>
        <TextWrapper>
          <Title>Email &#42;</Title>
        </TextWrapper>
        <InputWrapper>
          <Input
            type="email" value={newEmail}
            onChange={(event) => {
              setNewEmail(event.target.value);
            }}
          />
        </InputWrapper>
        <br></br>
        <InfoWrapper>
          <Title>Message &#42;</Title>
        </InfoWrapper>
        <IInputWrapper>
          <Input
            type="textarea" value={newMessage}
            onChange={(event) => {
              setNewMessage(event.target.value);
            }}
          />
        </IInputWrapper>
        <InputWrapper>
          <SubmitButton type="submit" onClick={() => { createQuestion();}}> Submit </SubmitButton>
        </InputWrapper>
      </InWrapper>
      <ContWrapper>
        Contact Us
        <ContInfo>
          Telephone/Whatsapp 07031605032<br></br>
          Email<br></br>
          riderentals21@gmail.com, info@riderentals.ng
        </ContInfo>
      </ContWrapper>
    </BoxContainer>
  );
}
