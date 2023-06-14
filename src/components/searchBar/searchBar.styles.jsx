/*
 * File: searchBar.styles.jsx
 * Project: portfolio
 * File Created: Wednesday, 14th June 2023 12:32:23 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 14th June 2023 12:41:22 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';

import { Form } from 'react-bootstrap';

export const SearchBarContainer = styled(Form.Control)`
  width: 250px;
  height: 50px;
  font-size: 20px;
  background: var(--color-background);
  color: var(--color-text);

  ::placeholder {
    color: var(--color-text);
    opacity: 0.5;
  }

  :focus {
    background: var(--color-background);
    color: var(--color-text);
  }
`