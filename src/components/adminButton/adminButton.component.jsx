/*
 * File: adminButton.component.jsx
 * Project: portfolio
 * File Created: Thursday, 29th June 2023 2:31:16 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Sunday, 2nd July 2023 10:05:50 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { AdminSignIn } from "./adminButton.styles";

const AdminButton = () => {


    return (
        <div className="admin-button">
            <AdminSignIn to='/admin' >Admin SignIn</AdminSignIn>
        </div>
    )
}

export default AdminButton