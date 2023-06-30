/*
 * File: databasePage.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 28th June 2023 3:59:11 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 10:58:58 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProjects } from "../../store/projects/projects.selector";

const DatabasePage = () => {
    const projects = useSelector(selectProjects);

    const [projectsString, setProjectsString] = useState(
        JSON.stringify(projects, null, 2)
    );

    const handleProjectsChange = (event) => {
        setProjectsString(event.target.value);
    };

    return (
        <div style={{
            width: '100%',
            height: '100%',
        }}>
            <h1>Database</h1>
            <textarea
                value={projectsString}
                onChange={handleProjectsChange}
                rows={10}
                style={{
                    width: "100%",
                    height: '80%',
                    fontFamily: "monospace",
                    fontSize: "18px",
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-background)",
                }}
            />
        </div>
    );
};

export default DatabasePage;
