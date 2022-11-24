import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
          <div className="w-full mx-auto">
          {/* <Footer></Footer> */}
          </div>
        </div>
    );
};

export default Main;