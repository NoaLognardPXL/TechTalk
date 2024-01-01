import React from 'react';
import logo from "../../assets/footer-logo.png";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <img className="logo" alt="logo pxl" src={logo} width="98" height="98" />
            <p>© Hogeschool PXL<br></br>
                Elfde-Liniestraat 24<br></br>
                B-3500 HASSELT<br></br>
                tel. +32 11 77 55 55</p>
        </div>
    );
}

export default Footer;