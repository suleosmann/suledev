// app/tailwind/layout.js
import React from 'react';
import SideBar from './components/SideBar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className='hidden sm:block'>
        <SideBar />
      </div>
      <div className="flex-grow sm:p-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
