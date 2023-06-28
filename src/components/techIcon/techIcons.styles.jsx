/*
 * File: techSkill.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:16:50 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 28th June 2023 3:54:50 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";

export const IconsContainer = styled.div`
    margin: 15px 20px 0px 20px;
    height: 200px; 
    width: 95%;
`

export const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    
    width: 100%;

`

export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;  
`;

export const SquareOverlay = styled.div`
  width: 130px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

`;

export const IconName = styled.span`
  font-size: 18px;
  margin: 10px 0;
  color: var(--color-text);
`