/*
 * File: adminButton.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 29th June 2023 2:35:03 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 2:40:16 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';
import { Link } from "react-router-dom";

export const AdminSignIn = styled(Link)`
    position: absolute; 
    right: 7px;
    bottom: 50px;
    background-color: var(--color-background);
    border: 2px double var(--color-accent);
    color: var(--color-text);
    opacity: 0.4;
    padding: 10px;
    text-decoration: none;
    width: 90%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
`