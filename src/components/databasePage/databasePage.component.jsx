/*
 * File: databasePage.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 28th June 2023 3:59:11 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 28th June 2023 6:10:43 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState } from "react";
import { COLLECTION_TYPE, getCollection } from "../../utils/firebase/firebase.utils";

const DatabasePage = () => {
    const [showCollectionFlag, setShowCollectionFlag] = useState(false);
    const [collection, setCollection] = useState([]);

    const showCollection = async () => {
        await getCollection(COLLECTION_TYPE.projects);

    };

    return (
        <div>
            <h1>Database</h1>
            <button onClick={showCollection}>Show Project</button>
            {showCollectionFlag && (
                <div>
                    {collection.map((item) => (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DatabasePage;
