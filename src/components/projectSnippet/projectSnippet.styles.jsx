/*
 * File: projectSnippet.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 22nd June 2023 10:37:06 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 8:06:44 pm
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
  overflow: hidden;
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
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s, transform 0.2s;
  transform: translateY(${({ show }) => (show ? '0%' : '100%')});
  filter: blur(${({ show }) => (show ? '0' : '8px')});

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

