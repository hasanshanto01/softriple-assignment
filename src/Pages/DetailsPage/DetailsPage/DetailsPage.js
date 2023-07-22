import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopSection from '../TopSection/TopSection';
import ReviewSection from '../ReviewSection/ReviewSection';

const DetailsPage = () => {

    const productsData = useLoaderData();

    const path = window.location.pathname;
    const pathArray = path.split('');
    let id;

    if (pathArray.length) {
        id = parseInt(pathArray[pathArray.length - 1])
    }
    // console.log(id);

    const detailsProduct = productsData.filter(productData => productData.productId === id);
    // console.log(detailsProduct);

    const [productData] = detailsProduct

    return (
        <div className='w-4/5 mx-auto my-20'>
            <TopSection
                productData={productData}
            ></TopSection>
            <div className='mt-10'>
                <h3 className='text-2xl font-semibold underline'>Description</h3>
                <p className='text-lg text-justify mt-3'>{productData.product.description}</p>
            </div>
            <ReviewSection
                productData={productData}
            ></ReviewSection>
        </div>
    );
};

export default DetailsPage;