import React from 'react';
import Banner from './Banner/Banner';
import NavBar from './NavBar/NavBar';
import TopServices from './TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <TopServices />
        </div>
    );
};

export default Home;