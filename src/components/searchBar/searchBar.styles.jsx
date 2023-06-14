/*
 * File: searchBar.styles.jsx
 * Project: portfolio
 * File Created: Wednesday, 14th June 2023 12:32:23 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 14th June 2023 1:01:22 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';

import { Form, InputGroup } from 'react-bootstrap';

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

export const InputGroupContainer = styled(InputGroup)`
  width: 250px;
  height: 50px;

`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  background-color: var(--color-background);
  color: var(--color-text);
`;