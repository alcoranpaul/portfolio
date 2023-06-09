/*
 * File: opening.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 22nd June 2023 2:00:51 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 8:03:19 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";
import { motion } from "framer-motion";
import TypingAnimation from "../typingAnimation/typingAnimation.component";

export const OpeningContainer = styled(motion.h2)`
    font-size: 60px;
    text-align: center;
    position: relative;
    top: 300px;
    left: 0px;

    .name {
      font-size: 75px;
    }


`

export const ShortDescription = styled(TypingAnimation)`
    font-size: 30px;
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: 1px;
    width: 80%;
    height: 20%;
    text-align: center;
    position: relative;
    top: 300px;
    left: 200px;
`