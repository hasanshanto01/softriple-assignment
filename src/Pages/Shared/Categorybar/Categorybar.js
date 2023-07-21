import React from 'react';
import { NavLink } from 'react-router-dom';

const Categorybar = () => {

    return (
        <div className='w-2/4 mx-auto mt-6 py-5 flex justify-between items-center'>
            <NavLink to='/'
                className='w-32 py-2 rounded-md text-center text-lg font-semibold hover:bg-primary hover:text-white'
                style={({ isActive }) => {
                    return {
                        background: isActive ? "#EC7E08" : "",
                        color: isActive ? "white" : "",
                        border: isActive ? "none" : "",
                    };
                }}
            >All</NavLink>
            <NavLink to='/men'
                className='w-32 py-2 rounded-md text-center text-lg font-semibold hover:bg-primary hover:text-white'
                style={({ isActive }) => {
                    return {
                        background: isActive ? "#EC7E08" : "",
                        color: isActive ? "white" : "",
                        border: isActive ? "none" : "",
                    };
                }}
            >Men</NavLink>
            <NavLink to='/women'
                className='w-32 py-2 rounded-md text-center text-lg font-semibold hover:bg-primary hover:text-white'
                style={({ isActive }) => {
                    return {
                        background: isActive ? "#EC7E08" : "",
                        color: isActive ? "white" : "",
                        border: isActive ? "none" : "",
                    };
                }}
            >Women</NavLink>
            <NavLink to='/baby'
                className='w-32 py-2 rounded-md text-center text-lg font-semibold hover:bg-primary hover:text-white'
                style={({ isActive }) => {
                    return {
                        background: isActive ? "#EC7E08" : "",
                        color: isActive ? "white" : "",
                        border: isActive ? "none" : "",
                    };
                }}
            >Baby</NavLink>
        </div>
    );
};

export default Categorybar;