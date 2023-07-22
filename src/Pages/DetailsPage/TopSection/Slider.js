import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = ({ productData }) => {

    const { images } = productData.product;
    // console.log(images);

    let imagesData = [];

    images.map(img => imagesData.push({
        original: img,
        thumbnail: img,
    }
    ))

    console.log(imagesData);

    return (
        <ImageGallery
            items={imagesData}
            showPlayButton={false}
        />
    );
};

export default Slider;