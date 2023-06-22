/*
 * File: navigation.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:49:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 21st June 2023 11:09:11 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { SidebarContainer, Sidebar, ContentContainer, NavItem } from './navigation.styles.jsx';
import { onHomeLinksClick } from "../home/home.component"
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';


const sidebarVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0%' },
    hide: { opacity: 0.7 },
    show: { opacity: 1 },
    exitOut: { opacity: 0 }
};

let showSidebar = false;

const Navigation = () => {
    useEffect(() => {
        const handleTypingComplete = () => {
            console.log("Changing Boolean");
            showSidebar = true;
        };

        onHomeLinksClick.subscribe(handleTypingComplete);

        return () => {
            onHomeLinksClick.unsubscribe(handleTypingComplete);
        };
    }, []);


    const handleHomeClick = () => {
        showSidebar = false;
        console.log("Showing Home Page");
    };

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
                        <NavItem to="/" onClick={handleHomeClick}>Home</NavItem>
                        <NavItem to="/projects">Projects</NavItem>
                        <NavItem to="/skills">Skills</NavItem>
                        <NavItem to="/work">Work</NavItem>
                        <NavItem to="/education">Education</NavItem>
                        <NavItem to="/contact">Contact</NavItem>
                        <NavItem to="/about">About</NavItem>
                    </Sidebar>
                </SidebarContainer>
            )}
            <ContentContainer>
                <Outlet />
            </ContentContainer>
        </div>
    );
};

export default Navigation;
