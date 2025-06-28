import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../navigation/Navbar';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;