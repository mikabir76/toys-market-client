import React from 'react';
import Banner from '../Banner/Banner';
import Gellery from '../Gellery/Gellery';
import { dynamicTitle } from '../../GenneralFunction/GenneralFunction';
import BestToy from '../BestToy/BestToy';
import Categories from './Categories/Categories';

const Home = () => {
    dynamicTitle('Tukutoys')

    return (
        <div>
            <Banner></Banner>
            <Gellery></Gellery>
           <Categories></Categories>
           <BestToy></BestToy>
        </div>
    );
};

export default Home;