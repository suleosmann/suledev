import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <div className='font-inter flex justify-between'>
      <div className='font-bold text-3xl p-5'>
        <Link href='/'>
          suleiman.dev
        </Link>
      </div>
      <div className='text-lg p-8'>
        <ul className='flex space-x-8'>
          <li>
            <Link href='/blog'>
              blog
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              projects
            </Link>
          </li>
          <li>
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
