import React from 'react';
import './Summary.css'

const Summary = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tex =parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tex;
    return (
        <div className='Order-Summary'>
            <h1>Customer Order Summary</h1>
            <p className='Selected-Summary'>Selected summary: $ {cart.length}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shopping Charge: $ {shipping}</p>
            <p>Tex: ${tex} </p>
            <h3>Grand Total: ${grandTotal} </h3>

            <button className='Clear-Cart'>Clear Cart </button> <br />
            <button className='Review-Order'>Review Order</button>
            
        </div>
    );
};

export default Summary;