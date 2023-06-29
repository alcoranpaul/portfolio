/*
 * File: navigation.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:49:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 28th June 2023 10:31:08 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { SidebarContainer, Sidebar, ContentContainer, NavItem, AdminSignIn } from './navigation.styles.jsx';
import { onHomeLinksClick } from '../../components/openingLinks/openingLinks.component.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const sidebarVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0%' },
    hide: { opacity: 0.7 },
    show: { opacity: 1 },
    exitOut: { opacity: 0 }
};


const Navigation = () => {
    const location = useLocation().pathname;
    const showSidebar = location !== "/";

    return (
        <div style={{ display: 'flex' }}>
            {showSidebar && (
                <SidebarContainer
                    id="sidebar-container"
                    initial="hide"
                    animate="show"
                    exit="hide"
                    variants={sidebarVariants}
                    transition={{ duration: 0.33, type: "tween", ease: [0.17, 0.67, 0.83, 0.67] }}
                >
                    <Sidebar id="sidebar">
                        <NavItem to="/">Home</NavItem>
                        <NavItem to="/projects">Projects</NavItem>
                        <NavItem to="/skills">Skills</NavItem>
                        <NavItem to="/work">Work</NavItem>
                        <NavItem to="/education">Education</NavItem>
                        <NavItem to="/contact">Contact</NavItem>
                        <NavItem to="/about">About</NavItem>
                    </Sidebar>
                    <AdminSignIn to="admin">Admin Sign In</AdminSignIn>
                </SidebarContainer>

            )}
            <ContentContainer>
                <Outlet />
            </ContentContainer>
        </div>
    );
};

export default Navigation;