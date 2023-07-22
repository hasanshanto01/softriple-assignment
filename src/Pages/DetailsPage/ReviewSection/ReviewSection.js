import React from 'react';
import Review from './Review';

const ReviewSection = ({ productData }) => {

    const { reviews } = productData;

    return (
        <div className='mt-16'>
            <h2 className='text-center text-2xl font-medium'>Product Reviews</h2>
            <div className='my-5'>
                {
                    reviews.map((review, i) => <Review
                        key={i}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default ReviewSection;