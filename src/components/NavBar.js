import React from 'react';
import "../styles/NavBar.css";
import logo from "../images/logo.png";
import contactImg from "../images/contact.png";

import { Link } from '@aws-amplify/ui-react';

export default function NavBar() {
    return <div>
        <nav className="navBar">
            <img src={logo} alt="Logo written C P" className="logo" />
            <div className="desktopMenu">
                <Link className="desktopMenuLinkItem">Home</Link>
                <Link className="desktopMenuLinkItem">About</Link>
                <Link className="desktopMenuLinkItem">Projects</Link>
                <Link className="desktopMenuLinkItem">Resume</Link>
            </div>
            
            <button className="desktopButton">
                <img src={contactImg} alt="" className="desktopMenuImage" />
                Contact Me
            </button>
        </nav>
    </div>
};