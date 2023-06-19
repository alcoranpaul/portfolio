/*
 * File: platforms.styles.jsx
 * Project: portfolio
 * File Created: Monday, 19th June 2023 3:20:38 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 5:55:48 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    width:  80%;
    .oneSet{
        width: 400px;
    }
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

`

export const Label = styled.label`
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 24px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Line = styled.div`
    width: 100%;
    height: 5px;
    opacity: 0.5;
    background-color: var(--color-primary);
`
