/*
 * File: skills.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 8:09:59 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 10:10:44 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';

export const SkillsContainer = styled.div`
    height: 95vh;
    max-width: 90vw;
    display: flex;
    flex-direction: row;
`



export const SkillContentContainer = styled.div`
    height: 100%;
    margin: 0 0 0 5px;
    @media (min-width: 1280px) {
        width: 63vw;
    }
    @media (min-width: 1840px) {
        width: 68vw;
    }

    
`
export const SkillTriangleContainer = styled.div`
    height: 100%;
`