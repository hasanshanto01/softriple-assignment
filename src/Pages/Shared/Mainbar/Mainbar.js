import React from 'react';
import logo from '../../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Mainbar = () => {
    return (
        <div className="navbar gap-5 bg-base-100 shadow-lg px-10">
            <div className="navbar-start w-1/5">
                <img src={logo} alt="" className='w-24 p-1 border border-primary rounded-full' />
            </div>
            <form className="navbar-center w-3/5">
                <input type="text" placeholder="Search by category" className="w-3/4 mx-auto p-3 border-2 border-primary rounded-lg" />
            </form>
            <div className="navbar-end justify-between items-center w-1/5">
                <div>
                    <FontAwesomeIcon icon={faHeart} className='w-8 h-8 mr-5' />
                    <FontAwesomeIcon icon={faCartShopping} className='w-8 h-8' />
                </div>
                <button className='btn btn-outline btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Mainbar;