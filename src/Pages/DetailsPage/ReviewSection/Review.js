import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {

    const { username, rating, comment } = review

    return (
        <div className='flex p-2 border-b-2 border-dashed border-primary'>
            <div className='w-1/12'>
                <FontAwesomeIcon icon={faUser} className='w-10 h-10 p-2 border border-primary rounded-full' />
                <h3 className='ml-1 text-lg font-semibold'>{username}</h3>
            </div>
            <div className='w-11/12 flex flex-col justify-around'>
                <p className='flex items-center'>
                    <FontAwesomeIcon icon={faStar} className='w-6 h-6 mr-1 text-primary' />
                    <strong className='text-2xl'>{rating}</strong>
                </p>
                <p className='text-lg'>{comment}</p>
            </div>
        </div>
    );
};

export default Review;