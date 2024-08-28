import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* company Information */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Shoppy</h2>
                    <p className="text-gray-400 mb-4">
                        We are dedicated to providing the best products and services. Explore our exclusive collections and enjoy a premium shopping experience with us.
                    </p>
                    <p className="text-gray-400">
                        <FaMapMarkerAlt className="inline-block mr-2" />
                        12 Indira Nagar, Lucknow,U.P. 226001
                    </p>
                    <p className="text-gray-400">
                        <FaPhoneAlt className="inline-block mr-2" />
                        +91-1234567890
                    </p>
                    <p className="text-gray-400">
                        <FaEnvelope className="inline-block mr-2" />
                        info@shoppy.com
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/about" className="hover:underline hover:text-blue-400 transition duration-300 flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline hover:text-blue-400 transition duration-300 flex items-center">
                                <FaPhoneAlt className="mr-2" />
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/privacy-policy" className="hover:underline hover:text-blue-400 transition duration-300 flex items-center">
                                <FaEnvelope className="mr-2" />
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms-of-service" className="hover:underline hover:text-blue-400 transition duration-300 flex items-center">
                                <FaEnvelope className="mr-2" />
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p className="text-gray-500">
                    &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
