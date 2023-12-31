import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../formatCurrency/formatCurrency';

function Cart() {
  const {cartItems, isCartVisible} = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return(
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        { cartItems.map((cartItem)=> <CartItem key={cartItem.id} data = {cartItem}/>)}
        
      </div>
      <h4 className="total-price">Valor total:</h4>
      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
      <a href=""><button className="finalizar-compra">Finalizar compra</button></a>
    </section>
  );
}

export default Cart;
