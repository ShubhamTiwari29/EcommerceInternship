import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-gray-300">
                        Coool
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="hover:text-gray-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:text-gray-300">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-300">
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link to="/Cart" className="hover:text-gray-300">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
