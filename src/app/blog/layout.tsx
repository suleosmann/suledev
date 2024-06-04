import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <main className="p-4 min-h-screen">
        <div className='grid sm:grid-cols-5 grid-cols-3 gap-2  justify-center'>
        <button className='bg-blue-500 py-2 sm:px-4 rounded-lg hover:bg-blue-700'>tutorials</button>
        <button className='bg-blue-500 py-2 sm:px-4 rounded-lg hover:bg-blue-700'>productivity</button>
        <button className='bg-blue-500 py-2 sm:px-4 rounded-lg hover:bg-blue-700'>career</button>
        <button className='bg-blue-500 py-2 sm:px-4 rounded-lg hover:bg-blue-700'>resources</button>
        <button className='bg-blue-500 py-2 sm:px-4 rounded-lg hover:bg-blue-700'>inspiration</button>
        </div>
        <div className='my-8'>
            <input type="search" placeholder='Search articles' className='pl-2 py-3 rounded-lg bg-gray-900 w-full'/>
        </div>
        {children}
      </main>
      
    </div>
  );
};

export default Layout;
