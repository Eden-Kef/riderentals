import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
margin-bottom: 2%;
margin-left:40%;
width: 215px;
height: 40px;
display: flex; 
justify-content: flex-end;
border: none;
outline: none;
color: #fff;
background-color: #2A9D8F;
cursor: pointer;
transition: all 200ms ease-in-out;
&:hover {
    background-color:#2A8b7a;
}
&:focus{
    outline: none;
}
padding: 5px 2em;
font-size: 25px;
font-weight: 500;
border-radius: 4px;
`;

export function Button(props){
    return <ButtonWrapper>{props.children}</ButtonWrapper>

}