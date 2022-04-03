import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className="header">
            <nav className="flex justify-center text-xs md:text-lg py-6 md:px-8 md:gap-3 gap-3 font-bold bg-gray-300 ">
                <NavLink className="" to="/">HOME</NavLink>
                <NavLink className="" to="/reviews">REVIEWS</NavLink>
                <NavLink className="" to="/dashboard">DASHBOARD</NavLink>
                <NavLink className="" to="/blogs">BLOGS</NavLink>
                <NavLink className="" to="/about">ABOUT</NavLink>
            </nav>
        </div>
        </>
    );
};

export default Header;