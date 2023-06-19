/*
 * File: platforms.component.jsx
 * Project: portfolio
 * File Created: Monday, 19th June 2023 3:20:33 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 3:22:06 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import Icon from "../../components/icon/icon.component";
import LinkedinIcon from "../../data/components/contact/linkedInIcon";
import FacebookIcon from "../../data/components/contact/facebookIcon";
import InstagramIcon from "../../data/components/contact/instagramIcon";
import TiktokIcon from "../../data/components/contact/tiktokIcon";
import IndeedIcon from "../../data/components/contact/indeedIcon";
import GithubIcon from "../../data/components/contact/githubIcon";
import DiscordIcon from "../../data/components/contact/discordIcon";
import SteamIcon from "../../data/components/contact/steamIcon";
import RiotGamesIcon from "../../data/components/contact/riotGamesIcon";


import { ContactContainer, IconContainer, Label, Line } from "./platforms.styles";
const Platforms = () => {
    return (
        <ContactContainer>
            <div className="social-media oneSet">
                <IconContainer >
                    <Icon IconComponent={FacebookIcon} iconColor={'linear-gradient(135deg, #3B5998, #4C70BA, #5D89DC, #657BC2, #192F5D)'} />
                    <Icon IconComponent={InstagramIcon} iconColor={'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)'} />
                    <Icon IconComponent={TiktokIcon} iconColor={'linear-gradient(45deg, #ff0050, #000000, #00f2ea)'} />
                </IconContainer>
                <Line />
                <Label>Social</Label>
            </div>

            <div className="professional-career oneSet">
                <IconContainer >
                    <Icon IconComponent={LinkedinIcon} iconColor={'linear-gradient(135deg, #0077B5, #04A5D9, #00B5DE, #0077B5, #013D69)'} />
                    <Icon IconComponent={IndeedIcon} iconColor={'linear-gradient(5deg, #1767B7, #3C8DD5, #64B4F2, #1767B7, #003366)'} />
                    <Icon IconComponent={GithubIcon} iconColor={'linear-gradient(135deg, #272D36, #363D47, #464F5D, #272D36, #1B2029)'} />
                </IconContainer>
                <Line />
                <Label>Professional</Label>
            </div>

            <div className="gaming-platforms oneSet">
                <IconContainer >
                    <Icon IconComponent={DiscordIcon} iconColor={'linear-gradient(160deg, #7289DA, #7289DA, #7289DA, #4E5D94, #36393E)'} />
                    <Icon IconComponent={SteamIcon} iconColor={'linear-gradient(135deg, #1B2838, #385B8A, #6382BF, #1B2838, #0F1622)'} />
                    <Icon IconComponent={RiotGamesIcon} iconColor={'linear-gradient(105deg, #D32929, #FF3636, #FF5D5D, #D32929, #8C1C1C)'} />
                </IconContainer>
                <Line />
                <Label>Gaming</Label>

            </div>
        </ContactContainer>
    )
}

export default Platforms;