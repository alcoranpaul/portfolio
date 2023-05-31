/*
 * File: navigation.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:18:33 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 31st May 2023 4:49:30 pm
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
${'' /* background-color: gray; */}
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

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 20px;
  &.active {
    background-color: #FF5E5B;
    color: white;
  }
`

export const NavItem = styled.div`
  padding: 10px 5px;
  margin-bottom: 5px;
`