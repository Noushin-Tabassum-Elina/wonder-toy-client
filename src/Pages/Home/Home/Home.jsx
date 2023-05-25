import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import { useTitle } from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div className='mt-16'>
            <h1>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <CustomerReview></CustomerReview>
            <Contact></Contact>
            
            </h1>

        </div>
    );
};

export default Home;