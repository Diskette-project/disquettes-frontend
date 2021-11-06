import React, { useState } from 'react';
import Nav from '../components/Nav/Nav';
import HeaderText from '../components/HeaderText/HeaderText';
import Phone from '../components/Phone/Phone';
import PhoneContextProvider from '../context/Phone.context';

function Home () {

    return (
        <PhoneContextProvider>
            <Nav />
            <HeaderText />
            <Phone />
        </PhoneContextProvider>
    );
}

export default Home;