import React from "react";
import styled from "styled-components";
import { InnerPageContainer } from "../../components/pageContainer";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { NavBar } from "../../components/navbar";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
import { AboutUs } from "../../components/aboutUs";
import { SecondSection } from "../../components/aboutUs/secondSection";
import { ThirdSection } from "../../components/aboutUs/thirdSection";

const ContentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export function AboutPage(props){
    return ( 
        <PageContainer> 
            <TopSection>
            <NavBar useTransparent/>
                </TopSection>
                <InnerPageContainer>
                    <ContentContainer>  
                        <AboutUs/>
                    </ContentContainer>
                   <SecondSection />
                   <ThirdSection/> 
                   <Marginer direction = "vertical" margin= "5em" />
                    < Footer/>
                </InnerPageContainer>
                <Marginer direction = "vertical" margin= "3em" />
            </PageContainer>
        );
    } 