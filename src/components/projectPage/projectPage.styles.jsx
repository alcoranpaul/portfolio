/*
 * File: projectPage.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 6th July 2023 6:41:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 6th July 2023 11:07:50 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";

export const ProjectPageContainer = styled.div` 
    
    overflow: hidden;
    height: 100%;
    ${'' /* background-color: blue; */}
`;

export const MainContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;

    justify-content: center;

    ${'' /* background-color: lime; */}
`;

export const TableOfContentsContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50%, 20%);
    width: 20%;
    padding: 10px;
    margin: 0;
    overflow: auto;

    border-radius: 5px;
    border: 1px solid rgba(255,255,255, 0.1);
    ${'' /* background-color: tomato; */}

`


export const BodyContainer = styled.div`
    width: 70%;
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
  background-color: transparent;
  border: 1px solid var(--color-text);
  outline: none;
  cursor: pointer;
  padding: 5px;
  margin: 0;
  color: var(--color-text);
`;