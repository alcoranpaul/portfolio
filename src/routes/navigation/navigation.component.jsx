/*
 * File: navigation.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:49:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 28th June 2023 11:29:56 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { SidebarContainer, Sidebar, ContentContainer, NavItem, AdminSignIn } from './navigation.styles.jsx';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const sidebarVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0%' },
    hide: { opacity: 0.5 },
    show: { opacity: 1 },
    exitOut: { opacity: 0 }
};

const Navigation = ({ location }) => {


    return (
        <AnimatePresence mode='wait'>
            <div style={{ display: 'flex' }}>
                {location.pathname !== '/' && (
                    <SidebarContainer
                        id="sidebar-container"
                        key="sidebar-container"
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, type: "tween", ease: [0.17, 0.67, 0.83, 0.67] }}
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
                <ContentContainer
                    id="content-container"
                    key="content-container"
                    variants={sidebarVariants}
                    initial="hide"
                    animate="show"
                    exit="hide"
                    transition={{ duration: 1, type: 'spring' }}>
                    <Outlet />
                </ContentContainer>
            </div>
        </AnimatePresence>
    );
};

export default Navigation;