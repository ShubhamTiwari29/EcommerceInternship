import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import ShopContextProvider from './context/ShopContext';
import Footer from './components/footer/Footer';
import Shop from './pages/Shop';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CartContextProvider from './context/CartContext';

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <CartContextProvider>
                <ShopContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/shop/:id" element={<ProductDetailsPage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </ShopContextProvider>
            </CartContextProvider>
            <Footer />
        </Router>
    )
}

export default AppRoutes;
