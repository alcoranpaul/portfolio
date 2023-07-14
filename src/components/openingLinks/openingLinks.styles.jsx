/*
 * File: openingLinks.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 22nd June 2023 1:53:52 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 11:07:36 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const OpeningLinksContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* width: 100%; */}
  height: 80%;
  text-align: center;

  ${'' /* .card-group{
    @media (min-width: 1280px) {
      width: 85%;
    }
    @media (min-width: 1440px) {
      width: 80%;
    }
    @media (min-width: 1840px) {
      width: 100%;
    }
  } */}
`;

export const CardNavLink = styled(Link)`
    color: var(--color-text);
    text-decoration: none;
    font-size: 20px;  
    width: 100%;
  
    .card {
  
      background-color: var(--color-background);
      border: 2px double var(--color-accent);
      color: var(--color-text);
      height: 100px;
      position: relative;
      overflow: hidden;

      .card-title {
        font-size: 24px;
        font-weight: bold;
        opacity: 0.5;
      }

      .card-text {
        opacity: 0.5;
      }

      /* Hover effect for title and text */
      &:hover .card-title,
      &:hover .card-text {
        opacity: 1;
      }

     

    }

    ${'' /* @media (min-width: 1280px) {
      width: 70%;
    }

    @media (min-width: 1440px) {
      width: 70%;
    }
    @media (min-width: 1840px) {
      width: 100%;
    } */}

`;

export const BackgroundImage = styled.div`
  content: '';
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  background-size: cover;
  background-position: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease, transform 0.3s ease; /* Add transition effects for opacity and transform */
  position: absolute;
  top: 224px;
  left: 20px;
  width: 98vw;
  height: 70vh;
`;

export const CardIndividual = styled(motion.div)`
  width: 300px;
  margin: 0px 30px 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")}; /* Disable pointer events based on disabled state */
  @media (min-width: 910px) and (max-width: 959px){
    width: 300px;
  }
  @media (min-width: 960px) and (max-width: 1200px) {
  width: 170px;
}
@media (min-width: 1201px) and (max-width: 1279px) {
  width: 200px;
}
  @media (min-width: 1280px) {
    width: 250px;
  }

  @media (min-width: 1440px) {
    width: 300px;
  }
  @media (min-width: 1840px) {
    width: 300px;
  }
`;