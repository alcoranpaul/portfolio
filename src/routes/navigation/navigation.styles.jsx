/*
 * File: navigation.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:18:33 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 9th June 2023 4:11:02 pm
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
  background-color: #D6D5C9;
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
  background-color: #B9BAA3;
  text-decoration: none;
  cursor: pointer;

  color: black;
  font-size: 18px;
  width: 100%;
  padding: 15px 50px 15px 10px;


  &:hover {
    background-color: #A22C29;
  }
`