import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Card({
    name='Book Name',
    year = '1990',
    author = 'Mr.',
    imgLink = '#',
    bookLink = '#',
    fav = false,
    descriptiom = '',
}) {
    return (
        <div className='aspect-[270/400] bg-[#FFFBF8]'>

            {/* Heart icon */}
            <div className='absolute top-0 right-0 mt-0.5 mr-0.5 w-2 h-2 bg-amber-300'></div>

            {/* Book Cover */}
            <Link to={`${bookLink}`}>
                <img src={`${imgLink}`} alt="Book Cover" />
            </Link>

            {/* Book Name */}
            <p>{name}</p>

            {/* Year */}
            <p>{year}</p>

            {/* Author */}
            <p>{author}</p>

            {/* Description */}
            <p>{descriptiom}</p>

            {/* BookLink */}
            <Link to={`${bookLink}`}>Read Here</Link>
        </div>
    )
}

export default Card
