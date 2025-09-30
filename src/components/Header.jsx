import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Header() {
    return (
        <div className='w-full py-3 px-5 top-0 bg-[#fbf0d2] drop-shadow-black/5 drop-shadow-xl flex justify-between dark:bg-gray-800'>

            {/* Logo */}
            <div id="logo" className='w-30 bg-gray-200 h-10'>LOGO</div>


            {/* Links */}
            <div id="links" className='h-full flex-1 flex justify-between items-center mx-100'>

                <NavLink to='/'
                className={({isActive})=>`${isActive ? "text-[#FFB347] dark:text-gray-400" : "text-gray-600"}
                font-semibold tracking-wide 
                hover:text-[#FFB347] hover:drop-shadow-sm
                transition-all duration-200 ease-in-out`}
                >Home</NavLink>


                <NavLink to='books'
                className={({isActive})=>`${isActive ? "text-[#FFB347] dark:text-gray-400" : "text-gray-600"}
                font-semibold tracking-wide 
                hover:text-[#FFB347] hover:drop-shadow-sm
                dark:hover:text-gray-400
                transition-all duration-200 ease-in-out`}
                >Books</NavLink>


                <NavLink to='fav'
                className={({isActive})=>`${isActive ? "text-[#FFB347] dark:text-gray-400" : "text-gray-600"}
                font-semibold tracking-wide 
                hover:text-[#FFB347] hover:drop-shadow-sm
                dark:hover:text-gray-400
                transition-all duration-200 ease-in-out`}
                >Favorites</NavLink>


                <NavLink to='aboutus'
                className={({isActive})=>`${isActive ? "text-[#FFB347] dark:text-gray-400" : "text-gray-600"}
                font-semibold tracking-wide 
                hover:text-[#FFB347] hover:drop-shadow-sm
                dark:hover:text-gray-400
                transition-all duration-200 ease-in-out`}
                >About Us</NavLink>
                

            </div>

            {/* Side Links */}
            <Link to=''
            target=''
            className='py-1.5 px-2 bg-[#FFB347] rounded-lg text-white text-center'>
                Contact Us
            </Link>
        </div>
    )
}

export default Header
