import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const LayOut = () => {
    return (
        <div>
            <header>
                
                
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-138px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
               <Footer> </Footer>
            </footer>
        </div>
    );
};

export default LayOut;