/*
 * File: skillTriangle.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 8:08:40 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 14th June 2023 1:13:17 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';


export const SkillTriangleContainer = styled.div`
    ${'' /* background-color: var(--color-skillVerse); */}
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${'' /* background: pink; */}
    ${'' /* justify-content: flex-start; */}
`

export const VisualContainer = styled.div`

    width: 100%;
    ${'' /* background: green; */}
`
export const SorterContainer = styled.div`
${'' /* background: red; */}
`

export const Title = styled.h2`
    padding-top: 20px;
    ${'' /* background: yellow; */}
    margin-bottom: 20px;
    text-align: center;
`