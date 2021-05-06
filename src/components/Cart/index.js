import React from 'react';
import { useState } from 'react'
import { CartContainer } from './CartElements'

const circle = (quantity) => {
    return (
        <span className="circle">{quantity}</span>
    )
}

function Menu({quantity, addToCart}) {
    return (
        <div className="menu">
            <div className="items">
                <ul className="item-1">
                    <li><a href="#">Gift card</a></li>
                    <li><a href="#">Smart Home</a></li>
                    <li><a href="#">Electronics</a></li>
                    <li><a href="#">Fashion</a></li>
                </ul>
                <ul className="item-2">
                    <li><a href="#">Cart
                    <img src="" width="20px" alt="" />
                    {addToCart === true ? circle(quantity) : null}
                    </a></li>
                    <li><a href="#"> <strong>En</strong></a></li>
                </ul>
            </div>
        </div>
    )
}

const Cart = () => {
    const [generalPrice, setGeneralPrice] = useState(10)
  
    const [quantity, setQuantity] = useState(1);
  
    const defaultDiscount = 2;
    let defaultCouponDiscount = quantity * defaultDiscount

    const [couponDiscount, setCoupoinDiscount] = useState(defaultDiscount);

    let defaultTotalPrice = generalPrice * quantity - couponDiscount;
    const [totalPrice, setTotalPrice] = useState(generalPrice)

    const [addToCart, setAddToCart] = useState(false);

    function incrementQuantity() {
      setQuantity(prevQuan => prevQuan + 1);
      setTotalPrice(prevPrice => prevPrice + generalPrice);
    }
    function decrementQuantity() {
      setQuantity(prevQuan => prevQuan - 1);
      setTotalPrice(prevPrice => prevPrice - generalPrice);
    }
    function usingCouponDiscount(e) {
        e.preventDefault();
        if(e.target.value === 123) {
            setCoupoinDiscount(prevDiscount => prevDiscount);
            setTotalPrice(prevPrice => prevPrice - couponDiscount * quantity);
        }
    }
    function handleClick(e) {
        e.preventDefault();
        setAddToCart(prevAddToCart => prevAddToCart = true);
    }
    return (
        <div className="Cart">
            <Menu quantity={quantity} addToCart={addToCart} />
            <br />
            <br />
            <br />
            <div className="box">
                <div className="image">
                    <img src="" alt="" />
                </div>
                <div className="detail">
                    <div className="title"></div>
                    <div className="desc">
                    </div>
                </div>
                <div className="set-quan set-bg">
                    <div className="quantity">Quantity{quantity}</div>
                    <div className="btns">
                        <button className="btn" onClick={incrementQuantity}>+</button>
                        <button className="btn" onClick={decrementQuantity}>-</button>
                    </div>
                </div>
                <div className="price">
                    <div className="gp">General price {generalPrice}$</div>
                    <div className="coupon set-bg">Use Coupon 
                        <form >
                            <input onChange={usingCouponDiscount} placeholder="Enter your coupon code" type="text"/>
                        </form>
                    </div>
                    <div className="total-price">Total Price {totalPrice}$</div>
                </div>
                <div className="add set-bg">
                    <button className="btn" onClick={handleClick} >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;