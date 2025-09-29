import React from 'react'
import Book from './Book';

function Home() {

    const topSearches = [
        "Harry Potter",
        "Lord of the Rings",
        "Pride and Prejudice",
        "The Hobbit",
        "To Kill a Mockingbird",
        "1984",
        "The Great Gatsby",
        "The Catcher in the Rye",
        "Jane Eyre",
        "Moby Dick"
    ];

    return (
        <div className='w-full bg-[#FAF3E0] flex-1 '>
            <div className='flex gap-2 mb-4 flex-wrap'>
                {topSearches.map((name)=>(<Book name={name}/>))}
            </div>
        </div>
    )
}

export default Home

