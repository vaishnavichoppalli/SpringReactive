import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./GlobalLayout.css";
import Footer from "../../footer/Footer";

const GlobalLayout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
