/*
 * File: websitePlan.styles.scss
 * Project: portfolio
 * File Created: Friday, 7th July 2023 10:43:25 pm
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
import { motion } from "framer-motion";

export const WebsitePlanContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    max-width: 1200px;
    justify-content: center;
    margin: 0 auto;
    padding: 0 10px;
    height: 95vh;


`

export const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    align-items: center;
    padding: 0 10px;
    text-align: left;





`
