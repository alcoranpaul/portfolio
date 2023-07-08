/*
 * File: worksPage.styles.jsx
 * Project: portfolio
 * File Created: Friday, 7th July 2023 5:23:55 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 7:18:25 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";

export const WorkPageContainer = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    overflow: hidden;
    height: 95vh;
    
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    max-width: 1200px;
    justify-content: center;

    .work-page-details{

    width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
            align-items: center;

        .work-page-details-heading{
            color: var(--color-accent);
        }
        .work-page-date{
    
        }

        .work-page-tech{
            ${'' /* background-color: lime; */}
        }
        .work-page-role{
            ${'' /* background-color: blueviolet; */}
        }
    }   
   
`;

export const TableOfContentsContainer = styled.div`

    flex-shrink:5;
    padding: 20px;
    width: 22%;
    margin: 0 10px 0 0;
    overflow: auto;
    border-radius: 5px;
    border: 1px solid rgba(255,255,255, 0.1);

`
export const BodyContainer = styled.div`
    

padding: 10px;
margin: 20px;
    overflow: auto;
    height: 80vh;
    font-size: 1.2rem;
    cursor: default;
    h2{
        font-size: 2rem;
        color: var(--color-pageContent-h2);
    }

    h3{
        font-size: 1.5rem;
        color: var(--color-pageContent-h3);
    }

    strong{
        color: var(--color-strong);
        font-weight: 600;
      
    }

    img{
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 20px;
        ${'' /* height: 250px; */}
        ${'' /* width: 600px; */}
        border-radius: 10px;
        
    }

    .codeStyle{
        color: var(--color-pageContent-codeStyle);
        padding: 2px;
        border: 1px solid var(--color-pageContent-codeStyle);
        border-radius: 5px;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--color-accent);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }

`

export const GoBackButton = styled.button`
    position: absolute;
    top: 0;
    right: 50px;
    width: 15%;
    margin: 20px 0 0 0;
    padding: 10px 0;
    font-size: 1.2rem;
    letter-spacing: 1px;
    border-radius: 5px;
    border: 1px solid var(--color-accent);
    background-color: transparent;
    outline: none;
    cursor: pointer;
    color: var(--color-text);
    transition: all 0.2s ease-in-out;

    &:hover{
        background-color: var(--color-accent);
        color: var(--color-background);
    }

`;