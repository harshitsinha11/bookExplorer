import React from 'react'
import { Link } from 'react-router-dom'

function Book({ name = "1984"}) {
    return (
        <Link to={`/books?query=${name.replace(/\s+/g, "+")}`}
        className='px-3 py-1.5 
            bg-amber-400 text-gray-100 font-medium rounded-lg
            shadow-[0_3px_6px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.1)]
            hover:shadow-[0_5px_10px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.15)]
            hover:bg-amber-500
            cursor-pointer transition-transform transform hover:scale-105
            
            dark:bg-gray-700 dark:text-gray-200 
            dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)]
            dark:hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)]
            dark:hover:bg-gray-600'>{name}</Link>
    )
}

export default Book
