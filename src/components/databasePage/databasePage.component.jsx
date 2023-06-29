/*
 * File: databasePage.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 28th June 2023 3:59:11 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 12:56:12 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState } from "react";
import { COLLECTION_TYPE, getCollection } from "../../utils/firebase/firebase.utils";

const DatabasePage = () => {
    const [collection, setCollection] = useState({});

    const showCollection = async (collectionType) => {
        try {
            const resp = await getCollection(collectionType);
            setCollection(resp);
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <div>
            <h1>Database</h1>
            <button onClick={() => showCollection(COLLECTION_TYPE.projects)}>Show Project</button>
            <button onClick={() => showCollection(COLLECTION_TYPE.skills)}>Show Skills</button>
            <button onClick={() => showCollection(COLLECTION_TYPE.works)}>Show Works</button>

            <div>
                {Object.keys(collection).map((key) => (
                    <p key={key}>{key}</p>
                ))}
            </div>
        </div>
    );
};

export default DatabasePage;
