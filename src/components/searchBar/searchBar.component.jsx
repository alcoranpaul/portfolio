/*
 * File: searchBar.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 14th June 2023 12:18:05 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 14th June 2023 1:05:32 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { InputGroup } from 'react-bootstrap';
import SearchIcon from '../../data/components/searchBar/searchIcon';
import { SearchBarContainer, InputGroupContainer } from './searchBar.styles';
const SearchBar = () => {

    return (
        <InputGroupContainer >
            <SearchBarContainer type="text" placeholder="Look up my tech" />
            <InputGroup.Text id="basic-addon1" style={{ background: 'var(--color-background)' }}>
                <SearchIcon />
            </InputGroup.Text>
        </InputGroupContainer>

    );
};

export default SearchBar;
