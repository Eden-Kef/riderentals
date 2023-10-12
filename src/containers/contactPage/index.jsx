import React from "react";
import styled from "styled-components";
import { InnerPageContainer } from "../../components/pageContainer";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { ContactUs } from "../../components/contactUs/contact";
import { Marginer } from "../../components/marginer";

const ContentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export function ContactPage(props){
    return ( 
        <PageContainer> 
            <TopSection>
            <NavBar useTransparent/>
                </TopSection>
                <InnerPageContainer>
                    <ContentContainer>  
                        <ContactUs/>
                    </ContentContainer>
                    <Marginer direction = "vertical" margin= "5em" />
                    < Footer/>
                </InnerPageContainer>
                <Marginer direction = "vertical" margin= "3em"/>
            </PageContainer>
        );
    } 