import React from "react";
import styled from "styled-components";
import { InnerPageContainer } from "../../components/pageContainer";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { NavBar } from "../../components/navbar";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
import { Cars } from "../../components/vehicles";


const ContentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

export function VehiclePage(props){
    return ( 
        <PageContainer> 
            <TopSection>
            <NavBar useTransparent/>
                </TopSection>
                <InnerPageContainer>
                    <ContentContainer>  
                        <Cars/>
                    </ContentContainer>
                    <Marginer direction = "vertical" margin= "3em" />
                    <Footer/>
                    <Marginer direction = "vertical" margin= "3em" />
                </InnerPageContainer>
            </PageContainer>
        );
    } 
