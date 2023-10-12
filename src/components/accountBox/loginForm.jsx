import React, { useContext, useState} from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";
import {getAuth, signInWithEmailAndPassword} from "@firebase/auth";
import { Link } from "react-router-dom";



export function LoginForm(props) {
  const {switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email === "" || password === "") {
        alert("Please fill in all fields");
      } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email");
      } 
      else if (password.length < 6) {
        alert("Pasword must have at least 6 characters");
      }
    else {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            localStorage.setItem('token', userCredential._tokenResponse.idToken);
            alert("Login Successful!");
            setEmail("");
            setPassword("");
        })
        .catch(e => alert("Incorrect email or Password"))
}}

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" value={email}
         onChange = {(event) => { 
          setEmail(event.target.value) ; }}/>
        <Input type="password" placeholder="Password"  value={password} 
        onChange = {(event) => { 
          setPassword(event.target.value)  }}/>
      </FormContainer>
      <Link to =  "/reset" style={{ textDecoration: 'none' }}>
        <MutedLink href="#">Forgot Password?</MutedLink></Link> 
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton onClick={onLogin}>Sign in</SubmitButton>
     
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
     
    </BoxContainer>
  );
}