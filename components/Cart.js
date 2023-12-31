import React, { useRef } from 'react';
import Link from 'next/link';

import { AiOutlineMinus, AiOutlineLeft, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const Cart = () => {

  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();


  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className="cart-container">
        <button 
            type='button'
            className='cart-heading'
            onClick={()=>setShowCart(false)}
        >
            <AiOutlineLeft/>
            <span className='heading'>Your Cart</span>
            <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
            <div className="empty-cart flex flex-col justify-center items-center">
                <AiOutlineShopping size={150}/>
                <h3>Your Shopping Cart is Empty</h3>
                <Link href="/">
                    <button
                        type='button'
                        onClick={()=>setShowCart(false)}
                        className='btn'
                    >
                        Contine Shopping
                    </button>
                </Link>
            </div>
        )}

        <div className="product-container">
            {cartItems.length>=1 && cartItems.map((item,index)=>(
                <div className="product" key={item._id}>
                    <img 
                        src={urlFor(item?.image[0])}
                        className='cart-product-image'
                    />
                    <div className="item-desc">
                        <div className="flex top">
                            <h5>{item.name}</h5>
                            <h4>{item.price}</h4>
                        </div>
                        <div className="flex flex-row justify-between bottom ">
                            <div>
                                <p className="quantity-desc flex justify-start items-center">
                                    <div className="minus" onClick=""><AiOutlineMinus /></div>
                                    <div className="num">0</div>
                                    <div className="plus" onClick=""><AiOutlinePlus /></div>
                                </p>
                            </div>
                            <button 
                                type='button' 
                                className='remove-item'
                                onClick=""
                            >
                                <TiDeleteOutline/>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {cartItems.length >=1 && (
            <div className="cart-bottom">
                <div className="total">
                    <h3>Subtotal</h3>
                    <h3>${totalPrice}</h3>
                </div>
                <div className="btn-container">
                    <button type="button" className="btn" onClick="">
                        Pay with Stripe
                    </button>
                </div>
            </div>
        )}

      </div>
    </div>
  )
}

export default Cart
