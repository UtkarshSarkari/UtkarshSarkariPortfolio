import React, { useState } from 'react';
import weblogo from '../images/weblogo.png';
import sign from '../images/sign.png';
import menu from '../images/menu.png';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { allLinks } from './allLinks';

export default function Header({openModal}: any) {
  return (
    <nav className="w-full fixed top-0 left-0 p-6 lg:px-10 flex items-center justify-between font-mainFont bg-black z-50">
      <div className="flex items-center">
        <img src={weblogo} className='sm:h-18 sm:w-18 xl:h-20 xl:w-20' height={60} width={60} alt="" />
        <img src={sign} className='hidden sm:inline-block lg:h-10 lg:w-60 xl:h-14 xl:w-72' height={180} width={180} alt="" />
      </div>
      <img src={menu} className='lg:hidden' height={35} width={35} alt="" onClick={openModal} />
      <ul className="lg:flex hidden">
        {
          allLinks.map((link) => (
            <li key={link.name} className="px-6 lg:text-lg xl:mx-5"><Link spy={true} smooth={true} offset={-70} duration={1500} to={link.src} className="cursor-pointer hover:text-gray-300">{link.name}</Link></li>
          ))
        }
      </ul>

      


    </nav>
  )
}
