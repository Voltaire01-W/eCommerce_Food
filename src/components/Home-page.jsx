import React from 'react';
import Layout from './Shared/layout'
import Hero from './Hero/Hero';
import MainSection from './Main-section/Main-section';
import FeaturedCollection from './Featured-collection/Featured-collection';

const HomePage = () => {
    return (
        <>
            <Layout>
                <Hero />
                <MainSection />
                <FeaturedCollection />
            </Layout>
        </>
    );
}

export default HomePage;