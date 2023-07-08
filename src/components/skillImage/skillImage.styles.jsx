/*
 * File: skillImage.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 4th July 2023 3:17:20 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 11:49:34 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";

export const IconImage = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    object-position: center;
    transition: transform 0.25s cubic-bezier(.59, 0.75, 0.8, 1);
    &:hover {
        transform: scale(1.2);
    }
`;