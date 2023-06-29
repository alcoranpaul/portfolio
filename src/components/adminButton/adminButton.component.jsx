/*
 * File: adminButton.component.jsx
 * Project: portfolio
 * File Created: Thursday, 29th June 2023 2:31:16 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 2:42:14 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { useSelector } from "react-redux";
import { signOutAdmin } from "../../utils/firebase/firebase.utils"

import { AdminSignIn } from "./adminButton.styles";

const AdminButton = () => {
    const adminUser = useSelector(state => state.user.adminUser);

    const handleSignOut = async () => {
        try {
            await signOutAdmin();
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="admin-button">
            {adminUser !== null ?
                <AdminSignIn type='button' onClick={handleSignOut}
                    style={{
                        backgroundColor: "var(--color-primary)",
                    }}
                >Admin SignOut</AdminSignIn>
                :
                <AdminSignIn to='/admin' >Admin SignIn</AdminSignIn>}
        </div>
    )
}

export default AdminButton