import React from "react";
import styled from "styled-components";
import { deviceSize } from "../responsive";
const PageWrapper = styled.div`
width: 100%;
height: auto;
display: auto;
align-items: center;
@media screen and (max-width: ${deviceSize.mobile}px){
  width: 430px;
  height: auto; 
`;

export function PageContainer(props) {
    return <PageWrapper>{props.children}</PageWrapper>;
  
  }
  export const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${deviceSize.mobile}px){
    width: 430px;
    height: auto; 
`;

