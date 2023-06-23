/*
 * File: openingLinks.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 22nd June 2023 1:53:52 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 23rd June 2023 5:25:37 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";
import { Link } from "react-router-dom";

export const OpeningLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  text-align: center;

  ${'' /* background-color: tomato; */}
   
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