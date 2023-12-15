import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <p className="logo">
          <Link href="/">GM Headphones</Link>
        </p>

        <button type="button" className="cart-icon flex flex-row">
          <AiOutlineShopping />
          <span className="cart-item-qty">2</span>
        </button>

      </div>
    </div>
  )
};

