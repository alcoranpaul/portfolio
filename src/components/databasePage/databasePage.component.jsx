/*
 * File: databasePage.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 28th June 2023 3:59:11 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 7:03:36 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useSelector } from "react-redux";

import { selectProjects } from "../../store/projects/projects.selector";
const DatabasePage = () => {
    const projects = useSelector(selectProjects);

    const showProjects = () => {

        console.log(projects)
    }


    return (
        <div>
            <h1>Database</h1>
            <div>
                <button onClick={showProjects}>Show Projects</button>
            </div>


        </div>
    );
};

export default DatabasePage;
