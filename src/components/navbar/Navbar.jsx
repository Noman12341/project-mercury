import React from 'react'
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header id="header">
            <div className='d-flex align-items-center'>
                <div>
                    <Link to="/">
                        <img src="http://mercurygc.com/wp-content/uploads/2021/12/Mercurylogo.png" width={142} height={69} alt="logo" />
                    </Link>
                </div>
                <div className="d-flex align-items-center header-wrapper-options">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/">Home</Link></div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;