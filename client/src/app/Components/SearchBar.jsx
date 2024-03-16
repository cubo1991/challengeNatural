'use client'
import React, { useState } from 'react';

import { useRouter } from 'next/navigation'

const SearchBar = () => {
   
    const [searchTerm, setSearchTerm] = useState('');

    const router = useRouter()
    
    // Función para guardar el valor de la searchBar
    const handleSearch = (event) => {
  
      setSearchTerm(event.target.value);
    };

     const handleOnclick = () => {
        router.push(`/searchResult?query=${searchTerm}`)
        setSearchTerm('')

     }   

    return (
        <div >
            <input
                type="text"
                placeholder="Search for type or name"
                onChange={handleSearch}
                className='rounded-md text-center'
                value={searchTerm}
            />
            {/*Se pasa como query a la ruta del componente searchTerm, responsable de renderizar los resultados*/}
            <button type="button" onClick={handleOnclick}>Search</button>
            </div>
    );
};

export default SearchBar;
