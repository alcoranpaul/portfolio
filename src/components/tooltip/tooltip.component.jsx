/*
 * File: tooltip.component.jsx
 * Project: portfolio
 * File Created: Monday, 19th June 2023 6:51:38 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 8:37:07 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { Fragment } from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div`
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  position: absolute;
  top: -180px;
  left: -60px;

  justify-content: center;
  align-items: center;

  width: 200px;
  height: 80px;
  max-width: 200px;
  max-height: 80px;
  
  background-color: var(--color-accent);
  color: var(--color-background);
  padding: 8px 8px 0px 8px;
  border-radius: 4px;
  font-size: 18px;
  border: 1px dashed var(--color-background);
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: visibility 0s linear, opacity 0.2s, transform 0.2s;
  z-index: 999;

  &::before {
    content: '';
    position: absolute;
    bottom: -10px; /* Adjust the value as needed */
    left: 50%;
    transform: translate(-70%, 45%) rotate(180deg);
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent var(--color-accent) transparent;
  }

  span{
    padding: 0px;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

const Tooltip = ({ text, isVisible }) => {

  return (
    <TooltipContainer>
      <TooltipContent isVisible={isVisible}>
        <span>Copied to clipboard!</span>
        <p>{text}</p>
      </TooltipContent>
    </TooltipContainer>
  );
};

export default Tooltip;
