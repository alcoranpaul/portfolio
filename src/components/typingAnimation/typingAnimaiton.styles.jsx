/*
 * File: typingAnimaiton.styles.jsx
 * Project: portfolio
 * File Created: Wednesday, 21st June 2023 5:02:34 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 22nd June 2023 12:16:26 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledParagraph = styled(motion.p)`
position: relative;
  color: var(--color-accent);
  cursor: default;
  .bolded{
    font-weight: 600;
    color: var(--color-text);;
    text-shadow: 0px 0px 10px var(--color-primary);
    text-transform: capitalize;
    ${'' /* background-color: var(--color-primary); */}
  }

&::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 50px;
  background-color: ${({ $showVerticalCursor, ...props }) => ($showVerticalCursor ? 'white' : 'black')};

  animation: ${({ $showVerticalCursor }) => ($showVerticalCursor ? 'cursorAnimation 1s infinite' : 'none')};
}

@keyframes cursorAnimation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`
export const StyledSpan = styled(motion.span)`
  font-weight: 600;
  color: var(--color-text);;
  text-shadow: 0px 0px 10px var(--color-primary);
  text-transform: capitalize;

`
