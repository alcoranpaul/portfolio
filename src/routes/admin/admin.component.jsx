/*
 * File: admin.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 4:12:45 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 28th June 2023 1:49:49 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

const Admin = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
    }
    return (
        <div>
            <h1>Admin</h1>
            <button onClick={logGoogleUser}>Log Google User</button>
        </div>
    )
}

export default Admin
