import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useCart } from '../context/CartContext';

const ProductDetailsPage = (props) => {
    const { id } = useParams();
    const { all_product } = useContext(ShopContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart()

    useEffect(() => {
        const product = all_product.find(item => item.id == id);
        setProduct(product);
        setLoading(false);
    }, [id]);


    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            new_price: product.new_price,
            old_price: product.old_price,
            image: product.image,
            // color: selectedColor,
            // size: selectedSize,
        });
    };



    return (
        <div className="max-w-7xl mx-auto p-6">
            {!!product && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="w-full">
                            <img className="w-full rounded-lg shadow-lg" src={product.image} alt={product.name} />
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-4">
                            {product.images?.map((image, index) => (
                                <img key={index} className="w-full h-24 object-cover rounded-lg shadow-md" src={image} alt={`${product.name}-${index}`} />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                            <p className="text-gray-700 mb-4">{product.description}</p>
                            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ab fugit tempora, deleniti adipisci esse minima? Rerum hic maiores fugit maxime deserunt temporibus animi quisquam accusamus. Veritatis, facilis earum corporis nihil tempora reprehenderit consequuntur doloribus. </p>
                            <p className="text-xl font-semibold text-green-600 mb-4">₹{product.new_price}</p>

                            {product.sizes && <div className="mb-4">
                                <label className="block text-gray-600 mb-2">Size:</label>
                                <select className="w-full p-2 border rounded-md" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                                    <option value="">Select Size</option>
                                    {product.sizes?.map((size, index) => (
                                        <option key={index} value={size}>{size} </option>
                                    ))}
                                </select>
                            </div>}

                            {product.colors && <div className="mb-4">
                                <label className="block text-gray-600 mb-2">Color:</label>
                                <select className="w-full p-2 border rounded-md" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                                    <option value="">Select Color</option>
                                    {product.colors?.map((color, index) => (
                                        <option key={index} value={color}>{color}</option>
                                    ))}
                                </select>
                            </div>}

                            <div className="mb-4">
                                <label className="block text-gray-600 mb-2">Quantity:</label>
                                <input type="number" className="w-full p-2 border rounded-md" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
                            </div>
                        </div>

                        <button
                            className="w-full bg-blue-600 text-white py-3 rounded-md mt-4 hover:bg-blue-700 transition duration-200"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
            {!product && (
                <p className="text-center text-red-500 font-bold text-xl">Product not found</p>
            )}
        </div>
    );
};

export default ProductDetailsPage;
