import React from "react";
import styled from "styled-components";
import { InnerPageContainer } from "../../components/pageContainer";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { NavBar } from "../../components/navbar";
import { Services } from "./services";
import { Marginer } from "../../components/marginer";
import { Advertisement } from "../../components/advertisement";
import { Footer } from "../../components/footer";

const ContentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

export function HomePage(props) {
    const { useTransparent } = props;
    return ( 
    <PageContainer> 
        <TopSection>
        <NavBar useTransparent/>
            </TopSection>
            <InnerPageContainer>
                <ContentContainer>  
                    < Services /> 
                    < Advertisement />
                    <Footer/>
                </ContentContainer>
                <Marginer direction = "vertical" margin= "4em" />
            </InnerPageContainer>
        </PageContainer>
    );
} 