/*
 * File: techTitle.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:06:41 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 15th June 2023 4:07:05 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components"

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    ${'' /* background: red; */}
    padding-top: 5px;
`

export const LeftCircle = styled.div`
    width: 5px;
    height: 5px;
    background-color: var(--color-text);
    border-radius: 50%;
`

export const RightCircle = styled.div`
    width: 5px;
    height: 5px;
    background-color: var(--color-text);
    border-radius: 50%;
`

export const LeftLine = styled.div`
    border-bottom: 1px solid white;
    width: 25%;
`

export const RightLine = styled.div`
    border-bottom: 1px solid white;
    flex: 1;
`

export const TitleText = styled.h4`
    margin: 0 10px;
`