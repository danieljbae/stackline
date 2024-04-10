import React from 'react';
import { Product } from '../../utils/types';
import './ProductDetails.css';

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    return (
        <div className="ProductDetails">
            <img src={product.image} alt={product.title} />
            <h2 className='title'>{product.title}</h2>
            <p className='subtitle'>{product.subtitle}</p>
            <div className="tags">
                {product.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default ProductDetails;