/*
 * File: admin.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 4:12:45 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 1st July 2023 9:32:09 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useSelector } from "react-redux";
import DatabasePage from "../../components/databasePage/databasePage.component";
import { selectAdminUser } from "../../store/adminUser/adminUser.selector.js";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from '../../store/adminUser/adminUser.action';
import { signInStart, signOutStart } from '../../store/adminUser/adminUser.action';

const Admin = () => {
    const adminUser = useSelector(selectAdminUser);
    const dispatch = useDispatch();

    const signinWithGoogle = async () => dispatch(signInStart());
    const handleSignOut = async () => dispatch(signOutStart())

    useEffect(() => {
        dispatch(checkUserSession())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



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
                height: '80vh',
                width: '80vw',
                position: 'absolute',
                top: '15%',
                left: '15%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
                {adminUser === null ? <button type='button' onClick={signinWithGoogle}
                    style={{
                        position: 'absolute',
                        top: '35%',
                        left: '40%',
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
