/*
 * File: aboutSectionSFX.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 2:35:06 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 27th June 2023 2:52:03 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled, { css, keyframes } from 'styled-components';
const wordCloudAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const wordCloudAnimationReverse = keyframes`
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
  z-index: -12; /* Set a lower z-index to place it behind everything */
  height: 100%;
  width: 100%;

  cursor: pointer;
  user-select: none;
`;



export const WordCloud = styled.div`
  position: absolute;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  height: 100%;
  width: 100%;
  font-size: 300px;

  display: block;


  
  span {
    display: block;
    text-align: center;
    line-height: 1;
    padding-bottom: 0px;
 
    animation: ${({ show }) =>
        show &&
        css`
        ${wordCloudAnimation} 5s infinite linear;
      `};
    animation-fill-mode: both;
  }
  .reverse span{
    animation: ${({ show }) =>
        show &&
        css`
        ${wordCloudAnimationReverse} 5s infinite linear;
      `};
    animation-fill-mode: both;
    
  }

  .forward{
    transform:  translate(${({ show }) => show ? '35%, -10%' : '65%, -95%'}) rotate(25deg);
    height: 180%;
    filter: none;
    transition:  transform 1s ease;
  }
  .reverse{
    transform:  translate(${({ show }) => show ? '-40%, -100%' : '-105%, 25%'}) rotate(25deg);
    height: 200%;
    filter: none;
    transition:  transform 1s ease;
  }
  
  opacity: ${({ show }) => (show ? 0.3 : 0)};
  filter: blur(${({ show }) => (show ? '10px' : '20px')});
  transition: opacity 0.5s ease, filter 0.5s ease;
`;

