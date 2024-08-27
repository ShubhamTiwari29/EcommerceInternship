import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartContext = createContext()

export const useCart = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        // Initialize state with cart items from localStorage
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        return savedCartItems || []; // Return saved items or an empty array
    });

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        console.log('Checking local storage.....', savedCartItems);
        setCartItems(savedCartItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log('Your data added:', cartItems);
    }, [cartItems]);

    const navigate = useNavigate();


    const addToCart = (item) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(cartItem =>
                cartItem.id === item.id &&
                cartItem.color === item.color &&
                cartItem.size === item.size
            );
            if (itemExists) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }

        });
        navigate('/cart');
    };


    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const decreaseQuantity = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(cartItem =>
                cartItem.id === itemId && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
        );
    };

    const increaseQuantity = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(cartItem =>
                cartItem.id === itemId
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };



    const contextValue = {
        cartItems,
        addToCart,
        handleRemoveItem,
        decreaseQuantity,
        increaseQuantity

    };
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>

    )


};
export default CartContextProvider;
