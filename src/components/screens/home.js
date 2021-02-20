import React from 'react';
import Header from '../parts/header';
import Footer from '../parts/footer';
import Slider from '../parts/slider';
import Deals from '../parts/deals';


const Home = () =>{
    return (
        <>
            <Header />
            <Slider />
            <Deals />
            <Footer />
        </>
    );
};

export default Home;