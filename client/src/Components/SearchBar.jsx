'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita el envío del formulario
        router.push(`/searchResult?query=${searchTerm}`);
        setSearchTerm('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for type or name"
                onChange={handleSearch}
                className='rounded-md text-center'
                value={searchTerm}
            />
            <button className="text-white text-xl text-center relative left-2" type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
