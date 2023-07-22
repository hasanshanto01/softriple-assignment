import React from 'react';
import Slider from './Slider';


const TopSection = ({ productData }) => {
    const { name, price, sizes, colors } = productData.product;


    return (
        <div className='flex items-center gap-10 p-2 border border-dashed border-primary rounded-md'>
            <div className='w-3/5 bg-primary'>
                <Slider
                    productData={productData}
                ></Slider>
            </div>
            <div className='w-2/5 p-3'>
                <h2 className='text-3xl font-semibold'>{name}</h2>
                <p className='text-4xl text-primary my-5'><strong>{price}</strong></p>
                <div className="form-control flex-row gap-3 my-5">
                    <label className="label">
                        <span className="label-text text-lg">Size:</span>
                    </label>
                    <select className="select select-bordered">
                        {
                            sizes.map((size, i) => <option
                                key={i}
                            >{size}</option>)
                        }
                    </select>
                </div>
                <div className="form-control flex-row gap-3 mb-16">
                    <label className="label">
                        <span className="label-text text-lg">Color:</span>
                    </label>
                    <select className="select select-bordered">
                        {
                            colors.map((color, i) => <option
                                key={i}
                            >{color}</option>)
                        }
                    </select>
                </div>
                <div className='flex gap-5 w-4/5 mx-auto'>
                    <button className="btn btn-primary w-1/2">Buy Now</button>
                    <button className="btn btn-secondary w-1/2">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default TopSection;