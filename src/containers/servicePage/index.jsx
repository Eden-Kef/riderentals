import React from "react";
import styled from "styled-components";
import { InnerPageContainer } from "../../components/pageContainer";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { OurServices } from "../../components/ourServices";
import { Marginer } from "../../components/marginer";

const ContentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

export function ServicePage(props){
    return ( 
        <PageContainer> 
            <TopSection>
            <NavBar useTransparent/>
                </TopSection>
                <InnerPageContainer>
                    <ContentContainer>  
                        <OurServices/>
                    </ContentContainer>
                    <Marginer direction = "vertical" margin= "3em" />
                     < Footer/>
                     <Marginer direction = "vertical" margin= "3em" />

                </InnerPageContainer>
                
            </PageContainer>
        );
    } 