import React from 'react';

export default function ProductItem({ product }) {
    const { img, title } = product;
    return (
        <div>
            <div>
                <img src={`./img/products/${img}`} alt={title} />
            </div>
            <div>{title}</div>
        </div>
    )
}
