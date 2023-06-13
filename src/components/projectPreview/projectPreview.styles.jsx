/*
 * File: projectPreview.styles.scss
 * Project: portfolio
 * File Created: Friday, 9th June 2023 4:17:27 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 12th June 2023 11:22:20 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export const ProjectPreviewWrapper = styled(Container)`
    padding-top: 20px;
    max-width: 85vw;

`

export const LeftArrowContainer = styled.div`
    display: block;
    position: absolute; /* Position the left arrow relative to the container */
    width: 100px;
    height: 100px;
    top: 45%; /* Position it vertically at the center */
    left: 15%; /* Position it horizontally at the center */
    transform: translate(-50%, -50%); /* Center the left arrow precisely */
    z-index: 1; /* Place the left arrow on top of other elements */

`

export const RightArrowContainer = styled.div`
    display: block;
    position: absolute; /* Position the left arrow relative to the container */
    width: 100px;
    height: 100px;
    top: 39%; /* Position it vertically at the center */
    left: 91%; /* Position it horizontally at the center */
    transform: translate(-50%, -50%); /* Center the left arrow precisely */
    z-index: 1; /* Place the left arrow on top of other elements */
    transform: rotate(180deg);

`

export const Arrow = styled.svg`
    display: block;
    width: 100px;
    height: 100px;
    line-height: 0;
    fill: white;

    transition: transform 0.3s ease; /* Add a smooth transition effect */
    &:hover {
        cursor: pointer;
        fill: red;
        transform: translateX(-10px); /* Move the arrow 10 pixels to the left on hover */
    }

    &:active {
        transform: translateX(10px); /* Move the arrow 10 pixels to the right when clicked */
    }
  
`

export const ProjectsPreviewContainer = styled(Row)`
    height: 85vh;

    padding-left: 0px;
    padding-right: 0px;
`

export const ProjectContainer = styled(Col)`

    height: 100%; /* Adjust the height to fill the entire column */
    display: flex;
    
    padding-left: 0px;
    padding-right: 0px;

    transition: width 0.5s ease-in-out, opacity 0.5s ease-in-out; // Add transition for width and opacity


`