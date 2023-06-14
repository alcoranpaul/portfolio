/*
 * File: searchBar.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 14th June 2023 12:18:05 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 14th June 2023 12:39:40 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { Form } from 'react-bootstrap';
import ArrowUpDown from '../../data/components/dropdown/arrowUpDown';
import { SearchBarContainer } from './searchBar.styles';
const SearchBar = () => {


    return (

        <Form>
            <SearchBarContainer type="text" placeholder="Look up my tech" />
        </Form>


    );
};

export default SearchBar;
