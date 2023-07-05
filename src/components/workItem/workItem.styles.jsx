/*
 * File: workItem.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 4th July 2023 1:45:56 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 4:55:58 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";
import { Card, Row, Col } from 'react-bootstrap';

export const WorkItemContainer = styled(Card)`
    margin: 1rem auto;
    overflow: hidden;
    background-color: var(--color-workCard);
    color: var(--color-text);
    border-left: 5px double var(--color-accent);
    box-shadow: 0 0 2px 0 var(--color-accent);
`

export const LeftContainer = styled(Col)`
    display: flex;
    flex-direction: column;
    height: 80%;
`

export const ImageContainer = styled.div`
    flex: 1 0 auto; 
`

export const TechContainer = styled(Card.Text)`
    display: flex;
    flex-direction: column;
    padding-top: 10px;

    .work-full-page-btn{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        border-radius: 5px;
        background-color: var(--color-primary);
        border: 1px solid var(--color-accent);
        color: var(--color-text);
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover{
            background-color: var(--color-buttonHover);
            color: var(--color-text);
            border: 1px solid var(--color-text);
        }
    }
`

export const RightContainer = styled(Col)`
`
