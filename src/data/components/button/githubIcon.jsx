/*
 * File: github.jsx
 * Project: portfolio
 * File Created: Monday, 12th June 2023 9:22:01 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 2:44:04 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

const GithubIcon = ({ fill }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill={fill ? fill : "#323232"}
                fillRule="evenodd"
                d="M9.293 1.293A1 1 0 0110 1h8a3 3 0 013 3v5a1 1 0 11-2 0V4a1 1 0 00-1-1h-7v5a1 1 0 01-1 1H5v11a1 1 0 001 1h3a1 1 0 110 2H6a3 3 0 01-3-3V8a1 1 0 01.293-.707l6-6zM6.414 7H9V4.414L6.414 7zm12.293 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L20.586 17l-3.293-3.293a1 1 0 011.414-1.414zm-4 1.414a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L11.414 17l3.293-3.293z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default GithubIcon;