import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import shoppingBag from '../../assets/shopping-bag.png';
import './cart-icon.styles.scss';
import { CartContext } from '../../Context/Cart-context';

const CartIcon = ({ history }) => {
    const { itemCount } = useContext(CartContext);
    return (
        <div className='cart-container' onClick={() => history.push('/cart')}>
            <img src={shoppingBag} alt='shopping-cart-icon' />
            {
                itemCount > 0 ? <span className='cart-count'> { itemCount } </span> : null
            }
        </div>
    )
}

export default withRouter(CartIcon);