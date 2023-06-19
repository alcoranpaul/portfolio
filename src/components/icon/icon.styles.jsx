/*
 * File: icon.styles.jsx
 * Project: portfolio
 * File Created: Monday, 19th June 2023 5:58:23 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 6:32:51 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';


export const IconContainer = styled.div`
    width: ${({ isHovered }) => (isHovered ? '85px' : '75px')};
    height: ${({ isHovered }) => (isHovered ? '85px' : '75px')};
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, border-color 0.3s ease;
    margin: 0 20px;
`;

export const IconBackground = styled.div`
    width: ${({ isHovered }) => (isHovered ? '75px' : '100%')};
    height: ${({ isHovered }) => (isHovered ? '75px' : '100%')};
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, border-color 0.3s ease;
`;

export const Component = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(${({ tilt }) => tilt}deg);
    transition: transform 0.3s ease;
    cursor: pointer;
    `