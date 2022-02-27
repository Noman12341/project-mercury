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
                    <Link className='nav-link' to="/">
                        Home
                    </Link>
                    <div>
                        <div className="nav-dropdown">
                            What We Are ?
                            <div className="nav-dropdown-container">
                                <Link className="drop-down-link" to="/about-us">About Us</Link>
                                <Link className="drop-down-link" to="/our-values">Values</Link>
                                <Link className="drop-down-link" to="/">Management</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="nav-dropdown">
                            What we do ?
                            <div className="nav-dropdown-container">
                                <Link className="drop-down-link" to="/">Oil & Gas</Link>
                                <Link className="drop-down-link" to="/">Power & Energy</Link>
                                <Link className="drop-down-link" to="/">Steel</Link>
                                <Link className="drop-down-link" to="/">Textile</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="nav-dropdown">
                            Comodities
                            <div className="nav-dropdown-container">
                                <Link className="drop-down-link" to="/">Coal</Link>
                                <Link className="drop-down-link" to="/">Wheat</Link>
                                <Link className="drop-down-link" to="/">Petrolium</Link>
                            </div>
                        </div>
                    </div>
                    <Link className='nav-link' to="/">
                        Galary
                    </Link>
                    <div>
                        <div className="nav-dropdown">
                            Contact Us
                            <div className="nav-dropdown-container">
                                <Link className="drop-down-link" to="/">Russia</Link>
                                <Link className="drop-down-link" to="/">Dubai</Link>
                                <Link className="drop-down-link" to="/">Pakistan</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar;