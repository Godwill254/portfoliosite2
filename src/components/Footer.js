import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>123 Marsabit Plaza</p>
                        <p> Nairobi.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color:"#fff", marginRight:"2rem"}} /> +254 707 434 189 </h4>                    
                </div>
                <div className="email">
                    <h4> <FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem"}} /> simiyugodwill540@gmail.com </h4>
                </div>
            </div>

            <div className="right">
                <h4>About my portfolio</h4>
                <p>Welcome to my website. I am Will. I like developing interactive websites with a good user experience.</p>
                <div className="social">
                    < FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    < FaTwitter size={30} style={{ color:"#fff", marginRight:"1rem"}} />
                    < FaLinkedin size={30} style={{ color:"#fff", marginRight:"1rem"}} />
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Footer;
