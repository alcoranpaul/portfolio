/*
 * File: projectSectionSFX.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 1:16:46 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 27th June 2023 2:49:57 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled, { css, keyframes } from 'styled-components';


const moveWords = keyframes`
  0% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(-100%);
  }
`;



export const Container = styled.div`
 position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1; /* Set a lower z-index to place it behind everything */
  height: 100%;
  width: 100%;
  ${'' /* overflow: hidden; */}

  cursor: pointer;
  user-select: none;
 
`;

export const WordCloud = styled.div`

  cursor: pointer;
  user-select: none;
  position: absolute;
  height: 100%;
  top: 0;
  left: 50px;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: ${({ show }) => (show ? 0.3 : 0)};
  
  transform: translateY(${({ show }) => (show ? '0%' : '100%')});

  filter: blur(${({ show }) => (show ? '10px' : '20px')});
  transition: opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease;

  span {
    display: block;
    padding-bottom: 0px;
    font-size: 300px;
    text-align: center;
    line-height: 1;
    animation: ${({ show }) =>
    show &&
    css`
        ${moveWords} 5s infinite linear;
      `};
    animation-fill-mode: both;
  }
`;

