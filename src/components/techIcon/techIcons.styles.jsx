/*
 * File: techSkill.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:16:50 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 11:59:15 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";

export const IconsContainer = styled.div`
    margin: 10px 10px 10px 10px;
    height: 150px; 
    width: 95%;
    cursor: default;
    user-select: none;

    overflow-x: scroll;
    overflow-y: hidden;
  

    /* Custom scrollbar styles */
    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-scroll);
        border-radius: 5px;
    }

`;
export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap; /* Prevents wrapping to next line */
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
  background-color: rgba(255, 255, 255, 0.1);
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