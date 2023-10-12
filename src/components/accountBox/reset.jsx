import React, { useState } from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { getAuth, sendPasswordResetEmail } from "@firebase/auth";
import { deviceSize } from "../responsive";

const BoxContainer = styled.div`
width: 450px;
min-height: 390px;
display: flex;
flex-direction: column;
background-color: rgba(15, 15, 15, 0.1);
border-radius: 19px;
margin-top 1.7%;
box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 410px;
`;

const InnerContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 0 2em;
`;
const Title = styled.h4`
font-size: 26px;
color: #264653;
margin-top: 15%;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 24px;
`;
const Text = styled.p`
font-size:17px;
color:#000;
margin-top: 5%;
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 15px;
`;
const Input = styled.input`
  width: 80%;
  height: 40px;
  margin-top: 5%;
  margin-bottom: 3%;
  border-radius: 2px;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;

  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid rgb(38, 70, 83);
  }
`;
 const SubmitButton = styled.button`
padding: 10px 10%;
color: #fff;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
margin-top: 5%;
background: #8360c3; /* fallback for old browsers */
background: -webkit-linear-gradient(
  to right,
  #2ebf91,
  #8360c3
); 
background-color: #264653;

&:focus {
  outline: none;
}

&:hover {
  filter: brightness(1.03);
}
@media screen and (max-width: ${deviceSize.mobile}px){
  font-size: 12px;
`;
export function ResetPassword(props) {
  const [email, setEmail] = useState("");
 

  const forgotPassword = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
    } 
  else {
    const auth = getAuth();
   sendPasswordResetEmail(auth, email)
    .then(() => {
    alert('Your password reset mail has been sent')
  })
}; }
return (
  <BoxContainer>
    <Title>Reset Your Password</Title>
   
    <InnerContainer> <Text>Enter your email, and we’ll send you a link to reset your password.
</Text><Input type="email" placeholder="Email"  
onChange = {(event) => { 
          setEmail(event.target.value) ; }}></Input>
  <SubmitButton onClick={forgotPassword}>Reset Password</SubmitButton></InnerContainer>
    
    <Marginer direction="vertical" margin="1em" />
    
    <Marginer direction="vertical" margin={5} />
  </BoxContainer>
);
}