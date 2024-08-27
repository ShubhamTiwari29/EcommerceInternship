import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, handleRemoveItem, decreaseQuantity, increaseQuantity } = useCart();

    // const [quantity, setQuantity] = useState(1)

    // Calculate total price
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.new_price * item.quantity, 0);
    };

    // Calculate total number of items
    const calculateTotalItems = () => {
        return cartItems.length;
    };

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>


            <p className="text-lg mb-4">Total Items: {calculateTotalItems()}</p>

            {cartItems.length > 0 ? (
                <div>
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-start border-b pb-4 mb-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 rounded-lg"
                                />
                                <div className="ml-4 flex-1">
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">
                                        Size: {item.size} | Color: {item.color}
                                    </p>
                                    <p className="text-lg font-medium mt-2">₹{item.new_price}</p>
                                    <div className="flex items-center mt-2">
                                        <label className="mr-2">Quantity:</label>
                                        <div className="flex items-center mt-2">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-lg"
                                            >
                                                -
                                            </button>
                                            <p
                                                className="w-16 border-t border-b border-gray-300 p-1 text-center"
                                            >
                                                {item.quantity}
                                            </p>
                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-lg"
                                            >
                                                +
                                            </button>
                                        </div>

                                    </div>
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="text-red-500 mt-2 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                        <h2 className="text-2xl font-semibold">Total: ₹{calculateTotal()}</h2>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty. Start adding some products!</p>
            )}
        </div>
    );
};

export default CartPage;
