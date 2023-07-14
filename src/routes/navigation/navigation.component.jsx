/*
 * File: navigation.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:49:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 8:55:29 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { SidebarContainer, Sidebar, ContentContainer, NavItem } from './navigation.styles.jsx';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AdminButton from '../../components/adminButton/adminButton.component';

const sidebarVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0%' },
    hide: { opacity: 0.5 },
    show: { opacity: 1 },
    exitOut: { opacity: 0 }
};

const Navigation = ({ location }) => {

    const closeUpIMG = process.env.PUBLIC_URL + '/data/closeUp.jpg';
    return (
        <AnimatePresence mode='wait'>
            <div style={{ display: 'flex' }}>
                {location.pathname !== '/' && (
                    <SidebarContainer>

                        <div className="close-up-icon">
                            <img src={closeUpIMG} alt="close-up" className='close-up-img' />
                        </div>
                        <Sidebar id="sidebar">
                            <NavItem to="/">Home</NavItem>
                            <NavItem to="/projects">Projects</NavItem>
                            <NavItem to="/skills">Skills</NavItem>
                            <NavItem to="/work">Work</NavItem>
                            <NavItem to="/education">Education</NavItem>
                            <NavItem to="/contact">Contact</NavItem>
                            <NavItem to="/about">About</NavItem>
                            <NavItem to="/websitePlan">Website Plans</NavItem>
                        </Sidebar>
                        <AdminButton />
                    </SidebarContainer>

                )}
                <ContentContainer
                    id="content-container"
                    key="content-container"
                    variants={sidebarVariants}
                    initial="hide"
                    animate="show"
                    exit="hide"
                    transition={{ duration: 0.7, type: "tween" }}>
                    <Outlet />
                </ContentContainer>
            </div>
        </AnimatePresence>
    );
};

export default Navigation;