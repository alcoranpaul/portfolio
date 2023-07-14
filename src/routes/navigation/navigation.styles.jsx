/*
 * File: navigation.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:18:33 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 10:11:40 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { motion } from 'framer-motion';


export const SidebarContainer = styled.div`

  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;


  .close-up-icon {
    width: 140px;
    height: 140px;
    position: absolute;
    top: 55px;
 

    border-radius: 50%;
    background-color: var(--color-primary);
    z-index: 1000;

    @media (min-width: 1280px) {
      left: 10px;
    }
    @media (min-width: 1840px) {
      left: 8px;
    }
  }

  .close-up-img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid var(--color-primary);
    filter: grayscale(50%);
    transition: border-radius 0.5s ease-in-out, filter 0.5s ease-in-out;
    &:hover {
      filter: grayscale(0%);
      border-radius: 0%;
    }
  }



`;

export const Sidebar = styled(Navbar)`
  display: flex;
  background-color: var(--color-accent);
  padding: 10px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  .nav-link {
    padding: 20px;
  }
  

`;

export const ContentContainer = styled(motion.div)`
  width: 100%;
  padding: 20px;
  
`;


export const NavItem = styled(Link)`
  background-color: var(--color-background);
  text-decoration: none;
  cursor: pointer;

  color: black;
  font-size: 18px;
  width: 100%;
  padding: 15px 50px 15px 10px;
  margin: 2px 0px;

  color: var(--color-text);


  &:hover {
    background-color: var(--color-primary);
  }
`


