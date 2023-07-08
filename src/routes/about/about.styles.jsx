/*
 * File: about.styles.jsx
 * Project: portfolio
 * File Created: Friday, 7th July 2023 7:34:14 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 7:50:22 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`

    
    width: 100%;
    overflow-y: scroll;
    height: 95vh;

    ::-webkit-scrollbar {
        width: 5px;
        
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