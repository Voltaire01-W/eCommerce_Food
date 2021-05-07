import React, { useContext } from 'react';
import { CartContext } from '../../../Context/Cart-context';
import Layout from '../../Shared/layout';
import CartItem from './Cart-item';
import Total from './total';
import './Cart-page.styles.scss';

const CartPage = () => {
    const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);
    const funcs = { increase, decrease, removeProduct }
    return (
        <Layout>
            <>
                <h1>Cart</h1>
                {
                    cartItems.length === 0 ? <div className='empty-cart'>Your Cart is empty.</div>
                    :
                    <>
                        <div className='cart-page'>
                            <div className='cart-item-container'>
                                {
                                    cartItems.map(item => <CartItem { ...item } key={item.id} { ...funcs } />)
                                }
                            </div>
                            <Total itemCount={itemCount} total={total} clearCart={clearCart}/>
                        </div>
                    </>
                }
            </>
        </Layout>
    );
}

export default CartPage;