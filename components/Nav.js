"use client";

import React, {useState, useEffect} from 'react'
import "@/styles/navbar.css"
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BarsOutlined } from '@ant-design/icons';
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png'



const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleMenuToggle = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <nav className="navbar">
      <Link href='/'>
        {/* <div className="navbar-brand">VLAD EDU</div> */}
        <div className="navbar-brand">
          <h1>VLAD</h1>
          <h3>EDUCATION</h3>
        </div>
      </Link>
      {/* Desktop Navigation */}
      <div className="nav-desktop">
        <ul className="navbar-links">
          <li><a href="/#about">About Us</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#partners">Partners</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/#testimonials">Testimonials</a></li>
        </ul>
        <Link href="/contact" passHref>
              <div className="navbar-button">
                <div className="navbar-button-sign">➔</div>
                <span className="navbar-button-text">Contact Us</span>
              </div>
        </Link>
      </div>
      {/* Mobile Navigation */}
      <div className="nav-mobile">
        <button className='hamburger' onClick={handleMenuToggle}><BarsOutlined /></button>
        {toggleDropdown && (
          <div className='dropdown'>
            <Link href='/#about' onClick={handleMenuToggle} className='dropdown-list'>About us</Link>
            <Link href='/#services' onClick={handleMenuToggle} className='dropdown-list'>Services</Link>
            <Link href='/#partners' onClick={handleMenuToggle} className='dropdown-list'>Partners</Link>
            <Link href='/blog' onClick={handleMenuToggle} className='dropdown-list'>Blog</Link>
            <Link href='/#testimonials' onClick={handleMenuToggle} className='dropdown-list'>Testimonials</Link>
            <Link href="/contact" onClick={handleMenuToggle} passHref>
              <div className="navbar-button">
                <div className="navbar-button-sign">➔</div>
                <span className="navbar-button-text">Contact Us</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav