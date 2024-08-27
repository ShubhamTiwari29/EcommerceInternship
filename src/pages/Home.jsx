import React, { useContext } from 'react'
import ProductCard from '../components/productCard/ProductCard'
import { ShopContext } from '../context/ShopContext'


const Home = () => {
    const { all_product } = useContext(ShopContext);
    console.log(all_product);



    return (
        <div className=" container grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
            {all_product.map((item, i) => {
                return < ProductCard key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

            })}
        </div>
    )
}

export default Home
