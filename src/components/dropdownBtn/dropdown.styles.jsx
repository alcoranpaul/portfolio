/*
 * File: dropdown.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 11:48:38 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 14th June 2023 1:23:40 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";

import { Dropdown } from 'react-bootstrap';

export const DropdownItem = styled(Dropdown.Item)`
    color: var(--color-text);
    transition: background-color 0.3s;
    border-radius: 0px;
    &:hover {
        background-color: var(--color-text);
        color: var(--color-background);
    }
`