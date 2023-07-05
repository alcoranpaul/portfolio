/*
 * File: button.styles.scss
 * Project: portfolio
 * File Created: Monday, 12th June 2023 8:29:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 5:28:37 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled, { css } from 'styled-components';
import { BUTTON_TYPES } from './buttonTypes';

export const ButtonText = styled.span`
  padding-bottom: 5px; /* Adjust the padding between the icon and text */
  width: 90px; /* Adjust the width of the icon */
  font-size: 16px;
  text-align: center;
`;

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px; /* Adjust the width of the icon */
  height: 32px; /* Adjust the height of the icon */
  padding: 2px;
`;

export const Button = styled.button`
  /* Common styles for all buttons */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin: 0 8px;
  padding: 16px 32px;
  border: solid 2px;
  border-radius: 4px;

  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  /* Constrain the button size */
  width: 100px;
  height: 70px;

  ${({ type }) => {
    if (type === BUTTON_TYPES.DEMO) {
      return css`
        /* Styles for Demo button */
        background-color: var(--color-accent);
        color: var(--color-background);
        border-color: var(--color-secondary);
        /* Add more styles specific to Demo button */
      `;
    }
    else if (type === BUTTON_TYPES.GITHUB) {
      return css`
        /* Styles for Github button */
        background-color: var(--color-accent);
        color: var(--color-background);
        border-color: var(--color-secondary);
        /* Add more styles specific to Github button */
      `;
    }
    else if (type === BUTTON_TYPES.CASE_STUDY) {
      return css`
        /* Styles for Github button */
        background-color: black;
        color: var(--color-text);
        border-color: var(--color-primary);
        /* Add more styles specific to Github button */
      `;
    }
    // Default button styles
    return css`
      /* Styles for default button */
      background-color: var(--color-background);
      color: var(--color-text);
      /* Add more styles for default button */
    `;
  }}

  ${({ disabled }) => {
    if (!disabled) {
      return css`
        &:hover {
          background-color: var(--color-secondary); /* Change the background color on hover */
          color: var(--color-text); /* Change the text color on hover */
          /* Add more hover styles as desired */
        }
      `;
    }
  }}
`;
