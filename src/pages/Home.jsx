import React, { useContext } from 'react'
import ProductCard from '../components/productCard/ProductCard'
import { ShopContext } from '../context/ShopContext'
import HeroSection from '../components/heroSection/HeroSection';
import FeaturedProduct from '../components/featuredProduct/FeaturedProduct';


const Home = () => {
    const { all_product } = useContext(ShopContext);
    console.log(all_product);



    return (

        <>
            <HeroSection />
            <div className='mx-auto container'>
                <FeaturedProduct />
            </div>
        </>
    )
}

export default Home
