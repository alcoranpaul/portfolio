/*
 * File: skillsSectionSFX.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 1:36:34 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 8:06:45 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled, { css, keyframes } from 'styled-components';
const wordCloudAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const wordCloudAnimationReverse = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
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
    transform:  translate(${({ show }) => show ? '-30%, -15%' : '10%, 85%'}) rotate(-25deg);
    height: 180%;
    filter: none;
    transition:  transform 1s ease;
  }
  .reverse{
    transform:  translate(${({ show }) => show ? '40%, -105%' : '-10%, -205%'}) rotate(-25deg);
    height: 200%;
    filter: none;
    transition:  transform 1s ease;
  }
  
  opacity: ${({ show }) => (show ? 0.3 : 0)};
  filter: blur(${({ show }) => (show ? '10px' : '20px')});
  transition: opacity 0.5s ease, filter 0.5s ease;
`;

