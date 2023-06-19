/*
 * File: contact.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 31st May 2023 5:41:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 3:25:06 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import Platforms from "../../components/platforms/platforms.component";

const Contact = () => {
    return (
        <div>
            <div className="platform-container"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Platforms />
            </div>
        </div>
    );
}

export default Contact;
