import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { Marginer } from "../../components/marginer";
import { InnerPageContainer,PageContainer} from "../../components/pageContainer";
import { ResetPassword } from "../../components/accountBox/reset";


const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export function ResetPage(props) {

  return (
    <PageContainer>
        <NavBar />
      <StyledInnerContainer>
        <ResetPassword/>
      </StyledInnerContainer>
      <Marginer direction = "vertical" margin= "4em" />
      <Footer />
      <Marginer direction = "vertical" margin= "3em" />
    </PageContainer>
  );
}