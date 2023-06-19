/*
 * File: facebookIcon.jsx
 * Project: portfolio
 * File Created: Monday, 19th June 2023 11:11:16 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 2:09:36 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

function FacebookIcon({ fill }) {
    const DEFAULT_FILL = 'white';

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width="50"
            height="50"
            fill={fill ? DEFAULT_FILL : 'white'}
        >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            ></path>
        </svg >
    );
}

export default FacebookIcon;
