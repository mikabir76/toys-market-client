import React from 'react';
import Banner from '../Banner/Banner';
import Gellery from '../Gellery/Gellery';
import { dynamicTitle } from '../../GenneralFunction/GenneralFunction';
const Home = () => {
    dynamicTitle('Tukutoys')

    return (
        <div>
            <Banner></Banner>
            <Gellery></Gellery>
        </div>
    );
};

export default Home;