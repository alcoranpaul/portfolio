/*
 * File: textArea.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 5th July 2023 12:06:47 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 12:41:00 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { TextAreaContainer, Button } from "./textArea.styles.jsx";
const TextArea = ({ value, onChange, onSubmit, collectionType }) => {
    return (
        <>
            <TextAreaContainer
                value={value}
                onChange={onChange}
                rows={5}
            />
            <Button onClick={() => onSubmit(value, collectionType)} >Save</Button>
        </>
    )
}

export default TextArea;