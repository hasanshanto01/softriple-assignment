import React from 'react';
import errorImg from "../../../Assets/error.jpg";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-3/5 mx-auto mt-16 flex flex-col items-center gap-5'>
            <div>
                <img src={errorImg} alt="" className='rounded-md' />
            </div>
            <Link to='/'>
                <button className='btn btn-outline btn-primary'>Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;