/*
 * File: linksTo.js
 * Project: portfolio
 * File Created: Monday, 19th June 2023 6:55:04 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 7:08:13 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

export const links = {
    facebook: { type: 'link', value: 'https://www.facebook.com/PaulReyes30/' },
    instagram: { type: 'link', value: 'https://www.instagram.com/poul_reyes/' },
    tiktok: { type: 'link', value: 'https://www.tiktok.com/@pauladrianreyeshehe' },
    linkedin: { type: 'link', value: 'https://www.linkedin.com/in/paul-adrian-reyes-338139241/' },
    indeed: { type: 'link', value: 'https://profile.indeed.com/p/pauladrianr-ncd231d' },
    github: { type: 'link', value: 'https://github.com/alcoranpaul' },
    discord: {
        type: 'popUp',
        value: `paulalcoran`
        // value: {
        //     username: `Pol`,
        //     id: `paulalcoran`
        // }
    },
    steam: { type: 'link', value: 'https://steamcommunity.com/profiles/76561198200509718/' },
    riotGames: { type: 'link', value: 'https://www.op.gg/summoners/na/Alkoran' }
};

export const ICON_TYPES = {
    link: 'link',
    popUp: 'popUp'
}