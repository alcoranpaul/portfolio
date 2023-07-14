/*
 * File: about.styles.jsx
 * Project: portfolio
 * File Created: Friday, 7th July 2023 7:34:14 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 9:28:57 pm
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

    .pfp-container{
        z-index: -99;
        .pfp-img{
       
            position: absolute;
            top: 0px;
            right: 20px;
            width: 500px;
            height: 100vh;
            object-fit: cover;
            opacity: 0.5;
            filter: grayscale(50%);
            transition: opacity 0.5s ease-in-out, filter 0.5s ease-in-out;

            &:hover {
                filter: grayscale(0%);
                opacity: 0.7;
            }
        }
    }

`