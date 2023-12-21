import React, { useState } from 'react';
import './SearchBar.scss'

export default function ({ onSearch }) {

    const [searchValue, setSearchValue] = useState('');

    return (

        <div className="search-bar">
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={() => onSearch(searchValue)}>Cerca</button>
        </div>

    );

};
