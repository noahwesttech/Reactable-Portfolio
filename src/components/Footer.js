import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>123 Fake House</p>
                        <p>California, USA</p>
                    </div>
                </div>
                <div className="phone">
                <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>1-234-123-1234</p>
                    </div>
                </div>
                <div className="email">
                <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>info@gmail.com</p>
                    </div>
                </div>
            <div className="right">
                <h4>About the company</h4>
                <p>WestTechGlobal is a company started and ran by Noah Westberry</p>
                <div className="social">
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
