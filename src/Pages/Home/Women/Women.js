import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../../Context/ProductProvider';
import Card from '../../../Component/Card/Card';

const Women = () => {

    const { allProductData, setAllProductData } = useContext(ProductContext);

    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const womenProducts = data.filter(productData => productData.product.category === 'Women');
                // console.log(womenProduct);
                setAllProductData(womenProducts)
            })

    }, [setAllProductData]);

    return (
        <div className='my-20'>
            <div className='w-4/5 mx-auto grid grid-cols-3 gap-14'>
                {
                    allProductData.map(productData => <Card
                        key={productData.product_id}
                        productData={productData}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Women;