/*
 * File: home.styles.scss
 * Project: portfolio
 * File Created: Sunday, 4th June 2023 10:51:23 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 9th June 2023 4:44:02 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';

export const MainContent = styled(Container)`
    max-width: 100vw;
`
export const TopRow = styled(Row)`
    height: 25vh;
`

export const NameContainer = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FactsContainer = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BotRow = styled(Row)`
    height: 70vh;
`

export const ProjectsContainer = styled(Col)`
    display: flex;
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
    padding: 10px;
    height: 100%;
    .video {
        height: 100%;
        width: 80%;
    }
`
