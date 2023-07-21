import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [allProductData, setAllProductData] = useState([]);

    const productInfo = {
        allProductData,
        setAllProductData
    };

    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;