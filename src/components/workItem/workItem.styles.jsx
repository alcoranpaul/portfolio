/*
 * File: workItem.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 4th July 2023 1:45:56 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 1:56:27 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";
import { Card, Row, Col } from 'react-bootstrap';

export const WorkItemContainer = styled(Card)`
margin: 1rem auto;
                overflow: hidden;
                background: var(--color-workCard);
                color: var(--color-text);
                borderLeft: 5px double var(--color-accent);
                boxShadow: 0 0 2px 0 var(--color-accent);
                `