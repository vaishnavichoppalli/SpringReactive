import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './GlobalLayout.css';

const GlobalLayout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GlobalLayout;
