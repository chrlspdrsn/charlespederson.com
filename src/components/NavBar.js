import React, { useState } from 'react';
import "../styles/NavBar.css";
import logo from "../images/logo.png";
import contactImg from "../images/icons/contact.png";
import menuBar from "../images/icons/menuBar.png";
import { Link } from 'react-scroll';

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
        <nav className="navBar">
            <img src={logo} alt="Logo written C P" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="home" spy={ true } smooth={true} offset={-115} duration={500} className="desktopMenuLinkItem">Home</Link>
                <Link activeClass="active" to="about" spy={ true } smooth={true} offset={-100} duration={500} className="desktopMenuLinkItem">About</Link>
                <Link activeClass="active" to="projects" spy={ true } smooth={true} offset={-100} duration={500} className="desktopMenuLinkItem">Projects</Link>
                <Link activeClass="active" to="resume" spy={ true } smooth={true} offset={-100} duration={500} className="desktopMenuLinkItem">Resume</Link>
            </div>

            <Link activeClass=" " to="contact" spy={ true } smooth={true} offset={-115} duration={500} className="desktopButton">
                <img src={contactImg} alt="Message box icon" className="desktopMenuImage" />
                Contact Me
            </Link>
        </nav>
        <nav className="mobileMenuNav">
            <img src={menuBar} alt="Mobile View menu bar" className="mobileMenuIcon" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link activeClass="active" to="home" spy={ true } smooth={true} offset={0} duration={500} className="mobileMenuLinkItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="about" spy={ true } smooth={true} offset={0} duration={500} className="mobileMenuLinkItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="projects" spy={ true } smooth={true} offset={0} duration={500} className="mobileMenuLinkItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to="resume" spy={ true } smooth={true} offset={0} duration={500} className="mobileMenuLinkItem" onClick={() => setShowMenu(false)}>Resume</Link>
                <Link activeClass="active" to="contact" spy={ true } smooth={true} offset={0} duration={500} className="mobileMenuLinkItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
        </>
    )
};