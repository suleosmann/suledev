"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef} className='w-full font-inter flex justify-between items-center p-8'>
      <div className='font-bold text-3xl'>
        <Link href='/'>
          suleiman.dev
        </Link>
      </div>
      <div className='relative'>
        <button onClick={toggleMenu} className='md:hidden'>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
        <ul className={`absolute right-0 mt-2 w-48 shadow-lg rounded-lg md:static md:flex md:space-x-8 font-semibold ${isOpen ? 'bg-custom-blue' : ''} ${isOpen ? 'block' : 'hidden'} md:block`}>
          {/* <li className='py-2 px-4 md:py-0'>
            <Link href='/blog'>
              blog
            </Link>
          </li> */}
          <li className='py-2 px-4 md:py-0'>
            <Link href='/projects'>
              projects
            </Link>
          </li>
          <li className='py-2 px-4 md:py-0'>
            <Link href='/tailwind'>
              tailwind
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
