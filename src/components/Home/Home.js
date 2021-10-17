import React from 'react';
import Banner from './Banner/Banner';
import Events from './Events/Events';
import NavBar from './NavBar/NavBar';
import TopServices from './TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <TopServices />
            <Events />
        </div>
    );
};

export default Home;