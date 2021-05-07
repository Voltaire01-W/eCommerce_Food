import React, { useContext, useState, useEffect } from 'react';
import './Single-product.styles.scss';
import { CartContext } from '../../Context/Cart-context';
import { isInCart } from '../../helpers';
import { ProductsContext } from '../../Context/Products-context';
import { withRouter } from 'react-router-dom';
import Layout from '../Shared/layout';

const SingleProduct = ({ match, history: {push} }) => {
    const { products } = useContext(ProductsContext);
    const { addProduct, cartItems, increase } = useContext(CartContext);
    const { id } = match.params;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const product = products.find(item => Number(item.id) === Number(id));

        // if the product doesn't exist, redirect user to the shop page.
        if (!product) {
            return push('/shop');
        }

        setProduct(product);
    }, [id, product, push, products]);
    // during check for product, if none is found, return null
    if (!product) {
        return null
    }

    const { imageUrl, title, price, description } = product;
    const itemInCart = isInCart(product, cartItems);
    return (
        <Layout>
            <div className='single-product-container'>
                <div className='product-image'>
                    <img src={imageUrl} alt='product' />
                </div>
                <div className='product-details'>
                    <div className='name-price'>
                        <h3>{title}</h3>
                        <p>${price}</p>
                    </div>
                    <div className='add-to-cart-btns'>
                        {
                            !itemInCart &&
                            <button 
                                className='button is-black nomad-btn' 
                                id='btn-white-outline'
                                onClick={() => addProduct(product)}>
                                    ADD TO CART
                            </button>
                        }
                        {
                            itemInCart &&
                            <button 
                                className='button is-white nomad-btn' 
                                id='btn-white-outline'
                                onClick={() => increase(product)}>
                                    ADD MORE
                            </button>
                        }
                        <button className='button is-black nomad-btn' id='btn-white-outline'>
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                    <div className='product-description'>
                        <p>
                            { description }
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default withRouter(SingleProduct);