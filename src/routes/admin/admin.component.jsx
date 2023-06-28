/*
 * File: admin.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 4:12:45 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 28th June 2023 4:00:09 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState } from "react"
import { signInWithGooglePopup, signInAdminFromAuth } from "../../utils/firebase/firebase.utils"
import DatabasePage from "../../components/databasePage/databasePage.component";


const Admin = () => {
    const [adminLogIn, setAdminLogIn] = useState(null);

    const signinWithGoogle = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            await signInAdminFromAuth(user);
            setAdminLogIn(true)
        }
        catch (error) {
            setAdminLogIn(false)
            setTimeout(() => {
                setAdminLogIn(null)
            }, 3000)
        };
    }


    return (
        <div
        >
            <h1>Admin</h1>
            <div style={{
                position: 'absolute',
                top: '35%',
                left: '40%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '200px',
                width: '400px',
            }}
            >
                {adminLogIn === null && <button type='button' onClick={signinWithGoogle}
                    style={{
                        height: '150px',
                        width: '200px',
                        borderRadius: '30%',
                        textTransform: 'uppercase',
                        fontSize: '20px',
                        backgroundColor: 'var(--color-accent)'
                    }}
                >Admin Login</button>}
                {adminLogIn === true && <DatabasePage />}
                {adminLogIn === false && <h1>Unauthorized user</h1>}
            </div>

        </div>
    )
}

export default Admin
