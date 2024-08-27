import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">
                    &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                </p>
                <ul className="flex justify-center space-x-6">
                    <li>
                        <a href="/about" className="hover:underline">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:underline">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/privacy-policy" className="hover:underline">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="/terms-of-service" className="hover:underline">
                            Terms of Service
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
