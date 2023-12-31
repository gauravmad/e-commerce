import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';

import { useStateContext } from '../context/StateContext';


export default function Navbar() {

  const {showCart, setShowCart, totalQuantities} = useStateContext();

  return (
    <div>
      <div className="navbar-container">
        <p className="logo">
          <Link href="/">GM Headphones</Link>
        </p>

        <Link href="/contact">
          Contact
        </Link>

        <button 
          type="button" 
          className="cart-icon flex flex-row"
          onClick={()=>setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

      </div>

      {showCart && 
        <Cart/>
      }
    </div>
  )
};

