import React from 'react'
import SearchBar from './SearchBar';
import Card from './Card';

function BooksPage() {
    return (
        <div className='w-full flex-1 bg-[#FAF3E0] flex flex-col items-center'>
            <div className='mt-4 w-full flex items-center justify-center'><SearchBar/></div>
            <Card/>
        </div>
    )
}

export default BooksPage
