import React from 'react'
import Book from './Book';
import SearchBar from './SearchBar';

function Home() {

    const firstSix = [
        "Harry Potter",
        "Lord of the Rings",
        "Pride and Prejudice",
        "The Hobbit",
        "To Kill a Mockingbird",
        "1984",
    ];

    const lastFour =[
        "The Great Gatsby",
        "The Catcher in the Rye",
        "Jane Eyre",
        "Moby Dick"
    ];

    return (
        <div className='w-full bg-[#FAF3E0] flex-1 flex flex-col justify-center gap-5 items-center dark:bg-gray-900'>
            <SearchBar/>

            <div className='flex flex-col items-center'>
                <div className='flex flex-wrap gap-2 mb-3'>
                {firstSix.map((name)=>(<Book name={name}/>))}
                </div>

                <div className='flex flex-wrap gap-2 mb-4'>
                {lastFour.map((name)=>(<Book name={name}/>))}
                </div>
            </div>
            
        </div>
    )
}

export default Home

