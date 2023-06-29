/*
 * File: databasePage.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 28th June 2023 3:59:11 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 1:04:21 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import React, { useState } from 'react';
import { COLLECTION_TYPE, getCollection } from '../../utils/firebase/firebase.utils';

const DatabasePage = () => {
    const [collection, setCollection] = useState({});
    const [editedData, setEditedData] = useState({});

    const showCollection = async (collectionType) => {
        try {
            const resp = await getCollection(collectionType);
            setCollection(resp);
            setEditedData(resp);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (event, key) => {
        const { value } = event.target;
        setEditedData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const saveChanges = async (collectionType) => {
        try {
            // Save the edited data to Firebase
            // Implement your own logic here

            console.log('Saved data:', editedData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Database</h1>
            <button onClick={() => showCollection(COLLECTION_TYPE.projects)}>Show Projects</button>
            <button onClick={() => showCollection(COLLECTION_TYPE.skills)}>Show Skills</button>
            <button onClick={() => showCollection(COLLECTION_TYPE.works)}>Show Works</button>

            <div>
                {Object.keys(collection).map((key) => (
                    <div key={key}>
                        <h3>{key}</h3>
                        <textarea
                            value={editedData[key] || ''}
                            onChange={(event) => handleInputChange(event, key)}
                        ></textarea>
                    </div>
                ))}
            </div>

            <button onClick={saveChanges}>Save Changes</button>
        </div>
    );
};

export default DatabasePage;
