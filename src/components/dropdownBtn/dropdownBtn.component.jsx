/*
 * File: dropdownBtn.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 11:05:37 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 14th June 2023 1:14:53 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { Dropdown } from 'react-bootstrap';
import React, { useState } from 'react';

import { DropdownItem } from './dropdown.styles';
import ArrowUpDown from '../../data/components/dropdown/arrowUpDown';
const DropdownButton = ({ categories, onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[categories.length - 1]);

    const handleSelect = (eventKey) => {
        setSelectedCategory(eventKey); // Update selected category state
        onSelectCategory(eventKey); // Send selected value to parent component
    };

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <div
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            style={{
                width: '300px',
                height: '50px',
                fontSize: '20px',
                backgroundColor: '#474B45',
                border: '1px solid #D6D5C9',
                color: '#fdf0d5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 15px',
            }}
        >
            {children}
            <ArrowUpDown /> {/* Your custom arrow icon component */}
        </div>
    ));

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
                {selectedCategory}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: '#474B45', width: '300px', border: '1px solid #D6D5C9', fontSize: '20px' }}>
                {categories.map((category) => (
                    <DropdownItem
                        key={category}
                        eventKey={category}
                        className="dropdown-item"
                    >
                        {category}
                    </DropdownItem>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownButton;