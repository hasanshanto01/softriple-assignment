import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {

    const { username, rating, comment } = review

    return (
        <div className='flex gap-2 p-2 border-b-2 border-dashed border-primary'>
            <div className='w:3/12md:w-2/12 lg:w-1/12'>
                <FontAwesomeIcon icon={faUser} className='w-10 h-10 p-2 border border-primary rounded-full' />
                <h3 className='ml-1 text-lg font-medium'>{username}</h3>
            </div>
            <div className='w-9/12 md:w-10/12 lg:w-11/12 flex flex-col justify-around'>
                <p className='flex items-center'>
                    <FontAwesomeIcon icon={faStar} className='w-5 h-5 mr-1 text-primary' />
                    <strong className='text-xl'>{rating}</strong>
                </p>
                <p className='text-lg'>{comment}</p>
            </div>
        </div>
    );
};

export default Review;