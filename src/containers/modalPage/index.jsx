import React from "react";
import styled from "styled-components";
import { Modal } from "../../components/modal";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { Marginer } from "../../components/marginer";
import { InnerPageContainer,PageContainer} from "../../components/pageContainer";


const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export function ModalPage(props) {
  return (
    <PageContainer>
        <NavBar />
      <StyledInnerContainer>
        <Modal/>
      </StyledInnerContainer>
      <Marginer direction = "vertical" margin= "1em" />
      <Footer />
      <Marginer direction = "vertical" margin= "3em" />
    </PageContainer>
  );
}