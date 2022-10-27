import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../../Pages/Share/Footer/Footer';
import Header from '../../Pages/Share/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;