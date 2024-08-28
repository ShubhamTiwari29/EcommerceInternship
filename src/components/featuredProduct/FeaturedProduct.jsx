import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import ProductCard from '../productCard/ProductCard';

const FeaturedProduct = () => {

    const { all_product } = useContext(ShopContext);
    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {all_product.slice(5, 14).map((item, i) => {
                    return < ProductCard key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                })}


            </div>
        </section>
    )
}

export default FeaturedProduct
