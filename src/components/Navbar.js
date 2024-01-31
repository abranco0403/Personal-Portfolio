import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div>
            {isDesktop ? (
                <nav className="hidden lg:flex lg:justify-between lg:items-center lg:py-4 lg:pl-4 lg:transform lg:transition lg:duration-300">
                    <NavLink className='p-2' to="/" end>Home</NavLink>
                    <NavLink className='p-2 mx-2' to="products">Products</NavLink>
                    <NavLink className='p-2' to="contact">Contact</NavLink>
                </nav>
            ) : (
                <>
                <nav className={`flex items-center lg:hidden ${showMenu ? 'block' : 'hidden'}`}>
                    <NavLink className='p-2' to="/" end>Home</NavLink>
                    <NavLink className='p-2 mx-2' to="products">Products</NavLink>
                    <NavLink className='p-2' to="contact">Contact</NavLink>
                </nav>
                <button className="lg:hidden" onClick={toggleMenu}>
                    {showMenu ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    )}
                </button>
                </>
            )}
        </div>
    )
}