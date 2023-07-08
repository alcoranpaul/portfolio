/*
 * File: textArea.styles.jsx
 * Project: portfolio
 * File Created: Wednesday, 5th July 2023 12:16:48 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 11:27:40 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";

export const TextAreaContainer = styled.textarea`
    display: block;
    margin: 0 auto;
    
    width: 70%;
    height: 80%;
    font-family: monospace;
    font-size: 18px;
    background-color: var(--color-accent);
    color: var(--color-background);
    overflow: auto;

               
    ::-webkit-scrollbar {
        width: 10px;
    }

`

export const Button = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    width: 70%;
    height: 50px;
    font-family: monospace;
    font-size: 18px;
    background-color: var(--color-accent);
    color: var(--color-background);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: var(--color-primary);
        color: var(--color-accent);
    }

    &:focus {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
    }
    
`