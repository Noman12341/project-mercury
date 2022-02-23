import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <div id="footer">
            Copyright {new Date().getFullYear()} © <strong>Media-Shades</strong>
        </div>
    )
}

export default Footer;