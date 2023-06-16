/*
 * File: navigation.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:49:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 15th June 2023 8:19:22 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { SidebarContainer, Sidebar, ContentContainer, NavItem } from './navigation.styles.jsx';
import { Outlet } from 'react-router-dom';

const Navigation = () => {

    return (
        <div style={{ display: 'flex' }}>
            <SidebarContainer id="sidebar-container">
                <Sidebar id="sidebar">
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/projects">Projects</NavItem>
                    <NavItem to="/skills">Skills</NavItem>
                    <NavItem to="/work">Work</NavItem>
                    <NavItem to="/education">Education</NavItem>
                    <NavItem to="/contact">Contact</NavItem>
                    <NavItem to="/about">About</NavItem>
                </Sidebar>
            </SidebarContainer>
            <ContentContainer>
                <Outlet />
            </ContentContainer>
        </div>
    );
}

export default Navigation;
