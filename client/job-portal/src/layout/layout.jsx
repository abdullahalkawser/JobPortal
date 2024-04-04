import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../pages/Navber/Navber';
import Footer from '../pages/footer/footer';

const Layout = () => {
    return (
        <div >
           <Navbar></Navbar>
            <Outlet/>
            
            <Footer></Footer>
        </div>
    );
};

export default Layout;
