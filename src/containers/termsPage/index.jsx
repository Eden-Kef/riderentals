import React from "react";
import styled from "styled-components";
import { InnerPageContainer } from "../../components/pageContainer";
import { PageContainer } from "../../components/pageContainer";
import { NavBar } from "../../components/navbar";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
import { Terms } from "../../components/terms/termsandcond";


const ContentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

export function TermsPage(props){
    return ( 
        <PageContainer> 
            <NavBar/>
                <InnerPageContainer>
                    <ContentContainer>  
                        <Terms/>
                    </ContentContainer>
                    <Marginer direction = "vertical" margin= "3em" />
                    <Footer/>
                    <Marginer direction = "vertical" margin= "3em"/>
                </InnerPageContainer>
            </PageContainer>
        );
    } 
