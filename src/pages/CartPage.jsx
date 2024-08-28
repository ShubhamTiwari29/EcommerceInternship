import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, handleRemoveItem, decreaseQuantity, increaseQuantity } = useCart();

    // Calculate total price
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.new_price * item.quantity, 0);
    };

    // Calculate total number of items
    const calculateTotalItems = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 bg-gray-100 shadow-lg rounded-lg mt-8">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Your Shopping Cart</h1>

            <p className="text-lg mb-6 text-gray-600 text-center">You have {calculateTotalItems()} items in your cart</p>

            {cartItems.length > 0 ? (
                <div>
                    <div className="space-y-8">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col md:flex-row items-start md:items-center border-b pb-6 mb-6 bg-white rounded-lg shadow-md"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full md:w-48 h-48 object-cover rounded-lg shadow-md mb-4 md:mb-0"
                                />
                                <div className="ml-0 md:ml-6 flex-1">
                                    <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-gray-500 mt-1">Size: {item.size} | Color: {item.color}</p>
                                    <p className="text-xl font-bold text-gray-800 mt-2">₹{item.new_price}</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <label className="mr-2 text-gray-600">Quantity:</label>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="text-center border-t border-b border-gray-300 p-2 bg-gray-200 px-4 py-2 rounded-l-full hover:bg-gray-400 "
                                            >
                                                -
                                            </button>
                                            <p className="w-16 text-center border-t border-b border-gray-300 p-2 bg-gray-100">
                                                {item.quantity}
                                            </p>
                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="text-center border-t border-b border-gray-300 p-2 bg-gray-200 px-4 py-2 rounded-r-full hover:bg-gray-400 "
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="text-red-600 mt-4 font-semibold hover:text-red-800 transition"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-800">Total: ₹{calculateTotal()}</h2>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 hover:from-blue-600 hover:to-blue-800 transition-all">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-2xl font-semibold text-gray-600">Your cart is empty.</p>
                    <p className="text-gray-500 mt-2">Start adding some products to your cart now!</p>
                </div>
            )}
        </div>
    );
};

export default CartPage;
