import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, seller, img, ratings, price } =props.Product
    
    
    return (
        <div className='products'>

        <img src={img} alt="" />
        <div className='product-info'>
        <p className='products-name'>Name:{name}</p>
        <p> Price:${price}</p>
        <p> Brand:{seller}</p>
        <p>Ratings:{ratings}</p>

        </div>

        <button onClick={()=>props.handelAddToCart(props.Product)} className='product-button'>
        <p className='btn-text'>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        
        </button>
            
        </div>
    );
};

export default Product

