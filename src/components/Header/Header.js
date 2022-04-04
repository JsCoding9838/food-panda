import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className="sticky top-0 z-50">
            <nav className="flex justify-center text-xs md:text-lg py-4 lg:py-6 md:px-8 md:gap-3 gap-3 font-bold bg-gray-300 mb-8">
                <NavLink className={({isActive} )=> isActive ? "text-red-600 underline decoration-8 underline-offset-8" : "text-black"} to="/home">HOME</NavLink>
                <NavLink className={({isActive} )=> isActive ? "text-red-600" : "text-black"} to="/reviews-details">REVIEWS</NavLink>
                <NavLink className={({isActive} )=> isActive ? "text-red-600" : "text-black"} to="/dashboard">DASHBOARD</NavLink>
                <NavLink className={({isActive} )=> isActive ? "text-red-600" : "text-black"} to="/blogs">BLOGS</NavLink>
                <NavLink className={({isActive} )=> isActive ? "text-red-600" : "text-black"} to="/about">ABOUT</NavLink>
            </nav>
        </div>
        </>
    );
};

export default Header;