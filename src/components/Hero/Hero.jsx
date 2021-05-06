import React from 'react';
import './Hero.styles.scss';

const Hero = () => {
    return (
        <section className="hero is-info is-large hero-image">
            <div className="hero-body">
                <div className="container">
                    <h1 className="hero-title">
                        Pizza reimagined.
                    </h1>
                    <div className="shop-now-btn">
                        <button className='button is-black' id='show-now'>
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;