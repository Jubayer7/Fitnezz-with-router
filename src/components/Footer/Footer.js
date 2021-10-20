import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div>
                <p>Copyright Company Name &copy; 2021. All rights reserved.</p>
            </div>
            <div className="footer">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-google-plus-square"></i>
                <i class="fab fa-youtube"></i>

            </div>
        </div>
    );
};

export default Footer;