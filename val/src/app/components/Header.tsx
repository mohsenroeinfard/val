
'use client'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import profilePic from '../../../public/asset/images/cart.svg'
import userpic from '../../../public/asset/images/user.svg'



const Header: React.FC = ()=> {
  const isActive: (pathname: string) => boolean =
    pathname => usePathname() === pathname
    return (
    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

    <div className="container" dir={'rtl'}>
      <a className="navbar-brand" href="index.html">دژاوو<span>.</span></a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className={isActive('/')? "nav-item active" : ""}>
            <a className="nav-link" href="/">خانه</a>
          </li>
          <li className={isActive('/shop')? "nav-item active" : ""}><Link className="nav-link" href="shop">فروشگاه</Link></li>
        
          <li className={isActive('/management')? "nav-item active" : ""}><Link className="nav-link" href="management">مدیر</Link></li>
          <li><a className="nav-link" href="blog.html">پیشنهادهای ویژه</a></li>
          <li><a className="nav-link" href="contact.html">تماس با ما</a></li>
          <li ><a className="nav-link" href="about.html">درباره ما</a></li>
        </ul>
 
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li><a className="nav-link" href="#"><Image src={userpic} alt="none"/></a></li>
          <li><a className="nav-link" href="cart.html"><Image src={profilePic} alt="none"/></a></li>
        </ul>
      </div>
    </div>
      
  </nav>
  );
}

export default Header
