/*
 * File: indeedIcon.jsx
 * Project: portfolio
 * File Created: Monday, 19th June 2023 11:11:26 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 2:09:36 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

function IndeedIcon({ fill }) {
    const DEFAULT_FILL = 'white';
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width="50"
            height="50"
            fill={fill ? DEFAULT_FILL : 'white'}
        >
            <path d="M11.566 21.563v-8.762c.255.023.5.035.758.035 1.223 0 2.374-.32 3.35-.893v9.618c0 .822-.195 1.429-.575 1.834-.378.403-.88.605-1.491.605-.6 0-1.077-.202-1.468-.618-.378-.403-.574-1.01-.574-1.819zM11.589.566c2.545-.893 5.442-.845 7.619.987.405.369.867.833 1.051 1.38.22.692-.77-.073-.906-.167-.71-.453-1.418-.833-2.212-1.094C12.86.387 8.812 2.709 6.295 6.315c-1.052 1.594-1.737 3.272-2.3 5.117-.06.202-.109.465-.22.642-.112.203-.048-.546-.048-.57.084-.763.244-1.5.441-2.237C5.33 5.337 7.897 2.066 11.59.566zm4.928 7.059a3.02 3.02 0 11-6.04 0 3.02 3.02 0 116.04 0z"></path>
        </svg>
    );
}

export default IndeedIcon;