import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, category, price, imageUrl }) => {
return (
    <div className="product-card">
    <img src={imageUrl} alt={name} />
    <h3>{name}</h3>
    <p>{category}</p>
    <p>${price}</p>
    <Link to={`/item/${id}`}>Ver Detalles</Link>
    </div>
);
};

export default ProductCard;
