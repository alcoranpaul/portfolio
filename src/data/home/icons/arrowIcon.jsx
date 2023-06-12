/*
 * File: arrowIcon
 * Project: portfolio
 * File Created: Friday, 9th June 2023 5:12:04 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 9th June 2023 5:47:29 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

function Arrow({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 32 32"
            className={className}
        >
            <path d="M23.505 0a1.073 1.073 0 01.757 1.831L10.004 16.095l14.05 14.05c.417.417.417 1.098 0 1.515s-1.098.417-1.515 0L7.732 16.853a1.074 1.074 0 010-1.515L22.747.316c.208-.208.486-.316.757-.316z"></path>
        </svg>
    );

}

export default Arrow;
