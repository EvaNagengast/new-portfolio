import React from 'react';
import './layout.module.css';
import {Outlet} from 'react-router-dom';
import Navigation from '../general/Navigation';
import Footer from '../general/Footer';

function Layout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
