/*
 * File: navigation.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:49:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 31st May 2023 4:48:58 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { SidebarContainer, Sidebar, ContentContainer, NavLink, NavItem } from './navigation.styles.jsx';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <SidebarContainer>
            <Sidebar>

                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink eventkey="2" to='/projects'>Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink eventkey="3" to='/about'>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink eventkey="4" to='/contact'>Contact</NavLink>
                </NavItem>

            </Sidebar>
            <ContentContainer>
                <Outlet />
            </ContentContainer>
        </SidebarContainer >
    );
}

export default Navigation;
