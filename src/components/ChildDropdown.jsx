import React, { useState } from 'react';
import '../Stylesheets/Dropdown.css'

const ChildDropdown = ({ DropdownGrouping, DropdownOrdering }) => {
    const [Grouping, setGrouping] = useState(null);
    const [Ordering, setOrdering] = useState(null);

    const handleDropdown1Select = (item) => {
        setGrouping(item);
        DropdownGrouping(item); // Pass selected item1 to the parent
    };

    const handleDropdown2Select = (item) => {
        setOrdering(item);
        DropdownOrdering(item); // Pass selected item2 to the parent
    };

    return (
        <div className="nested-dropdown">
            <div className="nested-dropdown-item">
                <label>Grouping</label>
                <select onChange={(e) => handleDropdown1Select(e.target.value)}>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <div className="nested-dropdown-item">
                <label>Ordering</label>
                <select onChange={(e) => handleDropdown2Select(e.target.value)}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
    );
};

export default ChildDropdown;
