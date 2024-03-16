'use client'
import React, { useState } from 'react';

import { useRouter } from 'next/navigation'

const SearchBar = () => {
   
    const [searchTerm, setSearchTerm] = useState(null);

    const router = useRouter()
    
    // Función para guardar el valor de la searchBar
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
            {/*Se pasa como query a la ruta del componente searchTerm, responsable de renderizar los resultados*/}
            <button type="button" onClick={() => router.push(`/searchResult?query=${searchTerm}`)}>Search</button>
            </div>
    );
};

export default SearchBar;
