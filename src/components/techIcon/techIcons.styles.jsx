/*
 * File: techSkill.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:16:50 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 5:27:47 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled, { css } from "styled-components";

export const IconsContainer = styled.div`
  margin: 10px;
  height: 180px;
  width: 95%;
  cursor: default;
  user-select: none;

  ${(props) =>
        props.numOfName === 1
            ? css`
            white-space: pre-wrap;
         

        `
            : css`
            overflow-x: scroll;
            overflow-y: hidden;
        `}

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-scroll);
    border-radius: 5px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  ${(props) =>
        props.numOfName === 1
            ? css`
          flex-wrap: wrap;
        `
            : css`
          flex-wrap: nowrap;
       
          
        `}
  justify-content: flex-start;
`;



export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 20px 20px 15px;  
`;

export const SquareOverlay = styled.div`
  width: 130px;
  height: 100px;
  background-color: rgba(132, 132, 132, 0.4);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 10px 50px 10px 50px;

`;

export const IconName = styled.span`
  font-size: 18px;
  margin: 10px 0;
  color: var(--color-text);
`

export const IconImage = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
`;