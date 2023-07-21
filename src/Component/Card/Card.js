import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Card = ({ productData }) => {

    const { name, price, images } = productData.product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className='bg-primary relative z-0 group'>
                <img src={images[0]} alt="product-img" className='w-full h-80 p-1' />
                <div className='bg-black h-80 rounded-t-xl absolute top-0 inset-0 z-10 opacity-60 hidden group-hover:flex justify-center items-center gap-8'>
                    <FontAwesomeIcon icon={faHeart} className='w-8 h-8 text-white' />
                    <FontAwesomeIcon icon={faCartShopping} className='w-8 h-8 text-white' />
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p>Price: <strong className='text-primary'>{price}</strong></p>
                <div className="card-actions justify-center gap-5 mt-5">
                    <button className="btn btn-primary">Buy Now</button>
                    <button className="btn btn-outline btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;