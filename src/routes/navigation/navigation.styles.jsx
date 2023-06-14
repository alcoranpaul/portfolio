/*
 * File: navigation.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:18:33 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 13th June 2023 8:03:59 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';


export const SidebarContainer = styled.div`

  height: 100vh;
  display: flex;

`;

export const Sidebar = styled(Navbar)`
  background-color: var(--color-accent);
  padding: 10px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .nav-link {
    padding: 20px;
  }
`;

export const ContentContainer = styled.div`
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