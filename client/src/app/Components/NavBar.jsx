import React from 'react'
import Link from 'next/link';

export const NavBar = () => {
    return (
        <nav className="bg-blue-500 p-6">
            
                <h2 className="text-white text-xl text-center">
                    <Link href={'/'} className=' hover:text-gray-200 cursor-pointer'>Inicio</Link>
                    </h2>
            
        </nav>
    )
}
