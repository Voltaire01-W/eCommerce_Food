import React from 'react';
import './Footer.styles.scss';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            {year} Copyright PIZZA Company
        </div>
    );
}

export default Footer;