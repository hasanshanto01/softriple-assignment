import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../../Context/ProductProvider';
import Card from '../../../Component/Card/Card';

const Baby = () => {

    const { allProductData, setAllProductData } = useContext(ProductContext);

    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const babyProducts = data.filter(productData => productData.product.category === 'Baby');
                // console.log(babyProduct);
                setAllProductData(babyProducts)
            })

    }, [setAllProductData]);

    return (
        <div className='my-20'>
            <div className='w-4/5 mx-auto grid grid-cols-3 gap-14'>
                {
                    allProductData.map(productData => <Card
                        key={productData.productId}
                        productData={productData}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Baby;