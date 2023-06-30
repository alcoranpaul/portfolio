/*
 * File: admin.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 4:12:45 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 10:19:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useSelector } from "react-redux";
import { signInWithGooglePopup, signInAdmin } from "../../utils/firebase/firebase.utils"
import DatabasePage from "../../components/databasePage/databasePage.component";
import { selectAdminUser } from "../../store/adminUser/adminUser.selector.js";
import { signOutAdmin } from "../../utils/firebase/firebase.utils";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAdminUser } from '../../store/adminUser/adminUser.action';
import { onAuthStateChangeListener } from '../../utils/firebase/firebase.utils';


const Admin = () => {
    const adminUser = useSelector(selectAdminUser);
    const dispatch = useDispatch();

    const signinWithGoogle = async () => {
        try {
            await signOutAdmin();
            await signInWithGooglePopup();
        }
        catch (error) {
            console.log(`Error in Admin/signinWithGoogle: ${error}`);
        };
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener(async (user) => {
            try {
                if (user) {
                    await signInAdmin(user);
                    dispatch(setAdminUser(user))
                }
                else {
                    dispatch(setAdminUser(null))
                }
            }
            catch (error) {
                console.log(`Error in App.js: ${error}`)
                dispatch(setAdminUser(null))
            }
        })
        return unsubscribe;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSignOut = async () => {
        try {
            await signOutAdmin();
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <div
        >
            <h1>Admin</h1>
            {adminUser !== null && (
                <div className='sign-out-container' style={{
                    width: '150px',
                    height: '50px',
                    border: '1px double var(--color-primary)',
                    borderRadius: '10px',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',

                }}
                    onClick={handleSignOut}
                >
                    <span>Sign Out</span>
                </div>
            )}
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
                {adminUser === null ? <button type='button' onClick={signinWithGoogle}
                    style={{
                        height: '150px',
                        width: '200px',
                        borderRadius: '30%',
                        textTransform: 'uppercase',
                        fontSize: '20px',
                        backgroundColor: 'var(--color-accent)'
                    }}
                >Admin Login</button> : (<DatabasePage />)}

                {/* {adminLogIn === false && <h1>Unauthorized user</h1>} */}
            </div>


        </div>
    )
}

export default Admin
