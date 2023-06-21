/*
 * File: home.styles.scss
 * Project: portfolio
 * File Created: Sunday, 4th June 2023 10:51:23 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 20th June 2023 9:52:37 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';

export const MainContent = styled(Container)`
    width: 90%;
    height: 90%;
    
    max-width: 90vw;
`
export const TopRow = styled(Row)`
    height: 25vh;
`

export const NameContainer = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: red;

    .name-container{
        font-size: 55px;
    }
    .name{
        font-size: 65px;
    }

    .short-description{
        padding: 10px 20px 0px 20px;
        font-size: 20px;
        line-height: 1.5;
        font-weight: 500;
        letter-spacing: 1px;
        height: 100px;
        
    }

    .carousel {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const FactsContainer = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: blue;
`

export const BotRow = styled(Row)`
    height: 70vh;
`

export const ProjectsContainer = styled(Col)`
    display: flex;
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
    background-color: green;
    padding: 10px;
    margin-top: 20px;
    height: 90%;
    .video {
        height: 100%;
        width: 80%;
    }
`
