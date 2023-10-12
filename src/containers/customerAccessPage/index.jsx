import React from "react";
import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { Marginer } from "../../components/marginer";
import { InnerPageContainer,PageContainer} from "../../components/pageContainer";
import { useParams } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export function CustomerAccessPage(props) {
  const { action } = useParams();

  return (
    <PageContainer>
        <NavBar />
      <StyledInnerContainer>
        <AccountBox initialActive={action} />
      </StyledInnerContainer>
      <Marginer direction = "vertical" margin= "5em"/>
      <Footer />
      <Marginer direction = "vertical" margin= "3em" />
    </PageContainer>
  );
}