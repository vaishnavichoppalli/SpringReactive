import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <span className="copyRight">
        Copyright © 2023 Hyundai Translead. All rights reserved.
      </span>
      <div className="footer-menu">
        <a className="footer-link">Help Desk</a>
        <a className="footer-link">Terms of Use</a>
        <a className="footer-link">Privacy Policy</a>
      </div>
    </div>
  );
}
