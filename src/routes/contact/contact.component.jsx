/*
 * File: contact.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 31st May 2023 5:41:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 4:02:43 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState } from "react";
import { motion } from "framer-motion";

import Platforms from "../../components/platforms/platforms.component";
import SimpleMap from "../../data/components/googleMap/googleMap.component";

import { Container, MapAndEmailContainer, Box1, Box2, PlatformContainer, EmailButton, ResumeButton } from "./contact.styles";

const EMAIL = "paulreyes74@yahoo.com"
const RESUME_TYPE = {
    ONE_PAGE: 'one-page',
    TWO_PAGE: 'two-page'
}
const Contact = () => {
    const [isOpeningEmailApp, setIsOpeningEmailApp] = useState(false);

    const handleEmailClick = () => {
        setIsOpeningEmailApp(true);
        setTimeout(() => {
            setIsOpeningEmailApp(false);
        }, 2000);
        window.location.href = `mailto:${EMAIL}`;
    };

    const handleResumeClick = (resumeType) => {
        switch (resumeType) {
            case RESUME_TYPE.ONE_PAGE:
                {
                    const pdfUrl = process.env.PUBLIC_URL + '/data/Paul_Reyes_Resume.pdf';
                    window.open(pdfUrl, '_blank');
                }
                break;
            case RESUME_TYPE.TWO_PAGE:
                {
                    const pdfUrl = process.env.PUBLIC_URL + '/data/Paul_Reyes_Resume_2P.pdf';
                    window.open(pdfUrl, '_blank');
                }
                break;
            default:
                break;
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
                overflow: 'hidden',
                width: '100%'
            }}>

            <Container>
                <MapAndEmailContainer>
                    <Box1>
                        <SimpleMap />
                    </Box1>
                    <Box2>
                        <div className="opening-text">
                            <span>Reach out today and let's start a conversation!</span>
                            <p>Stay connected and engaged with me on various social media platforms. Connect with me on the follsowing popular social media apps below to explore my world as a developer.</p>
                            <p>Your support and interaction mean a lot to me as I continue to grow and evolve in my journey.</p>
                            <p>Feel free to reach out for inquiries, collaborations, or meaningful professional connections. And if you're up for some fun, let's play games together too!</p>
                        </div>
                        <div className="location">
                            <p>Based on Winnipeg, MB</p>
                        </div>
                        <div className="email-container">
                            <div className='email'>
                                <strong>EMAIL:</strong> paulreyes74@yahoo.com
                            </div>
                            <EmailButton
                                onClick={handleEmailClick}>
                                {isOpeningEmailApp ? (
                                    <>
                                        Opening email app...
                                        {/* Place your loading icon component here */}
                                    </>
                                ) : (
                                    <>
                                        Send me an email
                                    </>
                                )}
                            </EmailButton>
                        </div>
                        <div className="resume-btns" style={{ display: 'flex', gap: '10px' }}>
                            <ResumeButton
                                onClick={() => handleResumeClick(RESUME_TYPE.ONE_PAGE)}>
                                CV / Resume 1-Page
                            </ResumeButton>
                            <ResumeButton
                                onClick={() => handleResumeClick(RESUME_TYPE.TWO_PAGE)}>
                                CV / Resume 2-Page
                            </ResumeButton>
                        </div>
                    </Box2>
                </MapAndEmailContainer>
                <PlatformContainer>
                    <Platforms />
                </PlatformContainer>
            </Container>
        </motion.div>
    );
}

export default Contact;
