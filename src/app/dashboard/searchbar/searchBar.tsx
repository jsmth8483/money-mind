'use client';

import { SearchIcon } from 'lucide-react';
import './searchBar.scss';
import { useState } from 'react';

const SearchBar = () => {
    const [searchCriteria, setSearchCriteria] = useState('');

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchCriteria(event.target.value);
    };

    return (
        <div className='search-bar'>
            <SearchIcon className='search-icon' />
            <input
                type='text'
                className='search-bar-input'
                value={searchCriteria}
                onChange={onSearch}
                placeholder='Search transactions, budgets, etc.'
            />
        </div>
    );
};

export default SearchBar;
