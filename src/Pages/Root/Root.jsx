import React from 'react';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Header/Navbar';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;