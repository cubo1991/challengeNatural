'use client'
import React, { useState } from 'react';
import { useSearchPokemonQuery } from '../api/apiSlice';
import { useRouter } from 'next/navigation'

const SearchBar = () => {
    const [query, setQuery] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);


    const router = useRouter()
    const handleSearch = (event) => {
  
      setSearchTerm(event.target.value);
    };


    return (
        <div >
            <input
                type="text"
                placeholder="Search for type or name"
                onChange={handleSearch}
                className='rounded-md text-center'
            />
            <button type="button" onClick={() => router.push(`/searchResult?query=${searchTerm}`)}>Search</button>
            </div>
    );
};

export default SearchBar;
