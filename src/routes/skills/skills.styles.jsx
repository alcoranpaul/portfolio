/*
 * File: skills.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 8:09:59 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 13th June 2023 8:29:51 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';
export const SkillsContainer = styled(Container)`
    ${'' /* background-color: green; */}
    max-width: 100vw;
    max-height: 95vh;
    height: 95vh;
`

export const ChildrenContainer = styled(Col)`
    padding-left: 5px;
    padding-right: 5px;
`

export const ChildrenRow = styled(Row)`
    ${'' /* background-color: blue; */}
    height: 100%;
`