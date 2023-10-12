import React, { useContext, useState} from "react";
import { Marginer } from "../marginer";
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton,} from "./common";
import { AccountContext } from "./context";
import { getAuth, createUserWithEmailAndPassword, updateProfile} from "@firebase/auth";



export function SignupForm(props) {
  const {switchToSignin} = useContext(AccountContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const onSignup = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
    } else if (password.length < 6) {
      alert("Pasword must have at least 6 characters");
    }
    else {
    const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
    {
           updateProfile(auth.currentUser, {displayName: name });
            alert("Welcome " + "" + name + "" + ", your have registered successfully!");
            setName("");
            setEmail("");
            setPassword("");
  }
    }
     ) }};

  return (
  
    <BoxContainer>
      <FormContainer>
        <Input type = "text" placeholder="Full Name" value={name}
        onChange = {(event) => { 
     setName(event.target.value);
    }}/>
        <Input type="email" placeholder="Email" value={email}
        onChange = {(event) => { 
        setEmail(event.target.value); 
     }}/>
         <Input type="password" placeholder="Password" value={password} onChange = {(event) => { 
          setPassword(event.target.value)  }}/>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton  onClick={() => { onSignup();}}> Sign up</SubmitButton>
    
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin  
        </BoldLink>
      </MutedLink>  
    </BoxContainer>
  );
  }