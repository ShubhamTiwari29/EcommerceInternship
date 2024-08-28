import React from 'react';
import img from '../../assets/Background.jpg'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

    const navigate = useNavigate()

    const handleCatagory = () => {
        navigate('/shop')
    };
    const handleShop = () => {
        navigate('/shop')
    }

    return (
        <section
            className="relative bg-cover bg-center h-[calc(100vh-80px)] flex items-center justify-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="relative z-10 text-center max-w-2xl">
                <h2 className="text-white text-5xl font-extrabold mb-4 animate-fadeInUp">
                    Unleash Your Style
                </h2>
                <p className="text-gray-200 text-lg mb-8 animate-fadeInUp delay-1s">
                    Discover the latest trends and elevate your wardrobe with our exclusive collections.
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all animate-fadeInUp delay-2s"

                        onClick={handleShop}
                    >
                        Shop Now
                    </button>
                    <button
                        className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all animate-fadeInUp delay-3s"
                        onClick={handleCatagory}

                    >
                        Explore Categories
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
