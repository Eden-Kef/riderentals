import React, {useState} from 'react';
import styled from 'styled-components';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { Link } from 'react-router-dom';
import { deviceSize } from '../responsive';

const ModalBackground = styled.div`
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
}

`;
const ModalContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 0 2em;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 410px;
  min-height: 390px;
}
`;
const Title = styled.h4` 
font-size: 26px;
color: #264653;
margin-top: 15%;
  @media screen and (max-width: ${deviceSize.mobile}px){
    font-size: 24px;
    margin-top: 10%;
  }
`;

const Body = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  font-weight: 600;
  height: 10%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 23px;
  color: rgba(15, 15, 15, 0.6);
  @media screen and (max-width: ${deviceSize.mobile}px){
    font-size: 29px;
  }
`;
const Profile = styled.div`
  background-color: #fff;
  margin-bottom: 7%;
  font-weight: 100;
  height: 19%;
  text-size: 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgba(15, 15, 15, 0.8);
`;
const SigninBtn = styled.button`
padding: 4px 90px;
color: #fff;
font-size: 18px;
font-weight: 600%;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
margin-top: 4%;
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
  width: 100%;
  font-size: 15px;
  font-weight: 600%;
  align-content: center;
}
`;
const SignBtn = styled.button`
width: 64%;
padding: 4px 10px;
color: #fff;
font-size: 18px;
font-weight: 600%;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
margin-top: 4%;
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
  width: 66.3%;
  font-size: 15px;
  font-weight: 600%;
  align-content: center;
}
`;
export function Modal(){
  const [user, setUser] = useState([]);
  const auth = getAuth();
  const logout = () =>{
    signOut(auth);
  };

 onAuthStateChanged(auth, (currentUser) => {
   setUser(currentUser);
 });
  return (
            <ModalBackground >
              <ModalContainer>
                <Title>Members can access discounts and special features.
</Title>
                <Body>Welcome! </Body>
                <Profile>{user && user.displayName} <br></br>{user?.email}</Profile>
                       <Link to="/customer/access/signin" style={{ textDecoration: 'none' }}>
               <SigninBtn >Sign up </SigninBtn></Link>
               <SignBtn onClick={logout}> Sign out </SignBtn>
               
         </ModalContainer>
            </ModalBackground>

  );
};