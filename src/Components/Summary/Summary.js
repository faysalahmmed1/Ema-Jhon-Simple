import React from 'react';
import './Summary.css'

const Summary = ({cart}) => {
    return (
        <div className='Order-Summary'>
            <h1>Order Summary</h1>
            <p className='Selected-Summary'>Selected summary: $ {cart.length}</p>
            <p>Total Price: $ </p>
            <p>Total Shopping Charge: $</p>
            <p>Tex: %</p>
            <h3>Grand Total: $ </h3>

            <button className='Clear-Cart'>Clear Cart </button> <br />
            <button className='Review-Order'>Review Order</button>
            
        </div>
    );
};

export default Summary;