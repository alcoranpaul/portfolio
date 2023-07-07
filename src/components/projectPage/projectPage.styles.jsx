/*
 * File: projectPage.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 6th July 2023 6:41:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 5:09:20 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";

export const ProjectPageContainer = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    overflow: hidden;
    height: 95vh;
    ${'' /* background-color: blue; */}
`;

export const MainContainer = styled.div`
    ${'' /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%); */}

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    max-width: 1200px;


    justify-content: center;

    .project-page-description{
        width: 70%;
        color: var(--color-description);
        font-size: 1.1rem;
        text-align: center;
        
    }
`;

export const TableOfContentsContainer = styled.div`
    flex-shrink:5;
    padding: 20px;
    width: 20%;
    margin: 0 10px 0 0;
    overflow: auto;
    border-radius: 5px;
    border: 1px solid rgba(255,255,255, 0.1);
    ${'' /* background-color: tomato; */}
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
    width: 80%;
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