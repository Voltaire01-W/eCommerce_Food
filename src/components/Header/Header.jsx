import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import CartIcon from '../cart-icon/cart-icon';

const Header = () => {
    return (
        <nav className='nav-menu'>
            <div className='logo'>
                <Link to='/eCommerce_Food'>Khan's Pizza Place!</Link>
            </div>
            <ul>
                <li>
                    <Link to='/eCommerce_Food'>
                     Home
                    </Link>
                </li>
                <li>
                    <Link to='/shop'>
                     Shop
                    </Link>
                </li>
            </ul>
            <CartIcon />
        </nav>
    )
}

export default Header;