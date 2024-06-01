import React from 'react';
import Link from 'next/link';

const SideBar = () => {
  const components = [
    'Buttons',
    'Accordion',
    'Alerts',
    'Avatar',
    'Badge',
    'Banner',
    'Bottom Navigation',
    'Breadcrumb',
    'Button Group',
    'Card',
    'Carousel',
    'Chat Bubble',
    'Clipboard',
    'Device Mockups',
    'Drawer',
    'Dropdowns',
    'Footer',
    'Forms',
    'Gallery',
    'Indicators',
    'Jumbotron',
    'KBD',
    'List Group',
    'Mega Menu',
    'Modal',
    'Navbar',
    'Pagination',
    'Popover',
    'Progress',
    'Rating',
    'Sidebar',
    'Skeleton',
    'Speed Dial',
    'Spinner',
    'Stepper',
    'Tables',
    'Tabs',
    'Timeline',
    'Toast',
    'Tooltips',
    'Typography',
    'Video'
  ];

  return (
    <div className="bg-gray-800 text-white w-64 h-full">
      <div className="p-4 font-bold"> 
      <Link href='/tailwind'>COMPONENTS</Link>
      </div>
      <ul className="space-y-2 p-4">
        {components.map((item) => (
          <li key={item} className="hover:bg-gray-700 rounded p-2">
            <Link href={`/tailwind/${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
