/*
 * File: skills.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 8:09:59 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 8:21:22 pm
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

    @media (max-width: 1999px) {
        width: 67vw;
    }
    @media (min-width: 2000px) {
        width: 90vw;
    }
`



export const SkillContentContainer = styled.div`
    height: 100%;
    margin: 0 0 0 5px;
    width: 100%;
    
`
export const SkillTriangleContainer = styled.div`
    height: 100%;
`