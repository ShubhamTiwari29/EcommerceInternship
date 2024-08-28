import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = (props) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: props.id,
            name: props.name,
            new_price: props.new_price,
            old_price: props.old_price,
            image: props.image,
        });
    };

    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white m-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative group">
                <img
                    className="w-full h-auto object-cover transition duration-300 group-hover:scale-110"
                    src={props.image}
                    alt={props.name}
                />
                {props.old_price && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                        {Math.round(((props.old_price - props.new_price) / props.old_price) * 100)}% OFF
                    </span>
                )}
            </div>
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl text-gray-800 mb-2 truncate">{props.name}</h3>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-900 font-semibold text-lg">₹{props.new_price}</span>
                    {props.old_price && (
                        <span className="text-gray-500 line-through text-sm">₹{props.old_price}</span>
                    )}
                </div>
            </div>
            <div className="px-6 pb-4 flex justify-between items-center">
                <button
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded-full hover:from-blue-600 hover:to-blue-800 transition-all"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
                <Link to={`/shop/${props.id}`}>
                    <button className="text-blue-600 font-semibold hover:underline transition-all">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
