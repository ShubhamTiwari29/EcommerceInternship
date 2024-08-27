import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


const ProductCard = (props) => {
    const { addToCart } = useCart()


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
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
            <img
                className="w-full  object-cover"
                src={props.image}
                alt={props.name}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.name}</div>
                {/* <p className="text-gray-700 text-base">{product.description}</p> */}
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="text-gray-900 font-semibold text-lg">
                    ₹{props.new_price}
                </span>
            </div>
            <div className="px-6 pb-4 flex justify-between items-center">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
                <Link to={`/shop/${props.id}`}>
                    <button className="text-blue-500 font-semibold hover:underline">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;

