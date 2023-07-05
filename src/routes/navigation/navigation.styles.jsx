/*
 * File: navigation.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:18:33 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 12:09:26 am
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
  width: 150px;
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
  overflow: hidden;
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


