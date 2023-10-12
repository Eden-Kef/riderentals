import React from "react";
import styled from "styled-components";
import { InnerPageContainer } from "../../components/pageContainer";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { NavBar } from "../../components/navbar";
import { BookNow } from "../../components/bookNow/booknow";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";


const ContentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

export function BookNowPage(props){
    return ( 
        <PageContainer> 
            <TopSection>
            <NavBar useTransparent/>
                </TopSection>
                <InnerPageContainer>
                    <ContentContainer>  
                        <BookNow/>
                    </ContentContainer>
                    <Marginer direction = "vertical" margin= "5em" />
                    < Footer/>
                    <Marginer direction = "vertical" margin= "3em" />
                    </InnerPageContainer>
            </PageContainer>
        );
    } 
