import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Summary from '../Summary/Summary';





const Shop = () => {

    const [Products, setProducts]= useState([])
    const [cart , setCart ]=useState([])

    useEffect( ()=> { 
        fetch('Products.json')
        .then(res => res.json())
        .then (data => setProducts(data) )
    }, []);
    const handelAddToCart = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='Shop-Container'>

            <div className="Products-Container">
            {
                Products.map(product=><Product 
                    key={Product.id}
                    Product={product}
                    handelAddToCart={handelAddToCart}
                    ></Product>)
            }

            </div>

            <div className="cart-Container">

          <Summary cart ={cart}></Summary>

            </div>
        </div>
    );
};

export default Shop;