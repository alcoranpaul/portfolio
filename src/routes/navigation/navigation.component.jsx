/*
 * File: navigation.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:49:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 9th June 2023 4:11:04 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { SidebarContainer, Sidebar, ContentContainer, NavItem } from './navigation.styles.jsx';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <SidebarContainer>
            <Sidebar>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/skills">Skills</NavItem>
                <NavItem to="/work">Work</NavItem>
                <NavItem to="/education">Education</NavItem>
                <NavItem to="/contact">Contact</NavItem>
                <NavItem to="/about">About</NavItem>

            </Sidebar>
            <ContentContainer>
                <Outlet />
            </ContentContainer>
        </SidebarContainer >
    );
}

export default Navigation;