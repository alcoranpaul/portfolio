/*
 * File: databasePage.styles.jsx
 * Project: portfolio
 * File Created: Wednesday, 5th July 2023 12:14:04 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 12:21:05 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";

export const DatabasePageContainer = styled.div`
    width: 80%;
    height: 100%;
    overflow: auto;
    padding: 20px 0;
    margin: 20px auto;
           
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--color-accent);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }
    
 
`