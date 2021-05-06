import React from 'react';
import './Main-section.styles.scss';
import { withRouter } from 'react-router-dom';
import pizza from '../../assets/featured.jpg';

const MainSection = ({ history }) => {
    return (
        <div className='main-section-container'>
            <div className='main-section-middle'>
                <div className='ms-m-image'>
                    <img src={pizza} alt='pizza'/>
                </div>
                <div className='ms-m-description'>
                    <h2>Pizza made to satisfy.</h2>
                    <p>
                        Handcrafted to perfection in our kitchens, 
                        You will find our pizza to be the best in the world.
                    </p>
                    <button className='button is-black' id='shop-now' onClick={() => history.push('/product/1')}>
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(MainSection);