"use client";
// components/ButtonExample.tsx
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface ButtonConfig {
  size: string;
  className: string;
}

const buttons: ButtonConfig[] = [
    {
      size: 'Extra Small',
      className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-1 rounded',
    },
    {
      size: 'Small',
      className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded',
    },
    {
      size: 'Medium',
      className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded',
    },
    {
      size: 'Large',
      className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded',
    },
    {
      size: 'Extra Large',
      className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded',
    },
    {
      size: '2XL',
      className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-24 rounded',
    }
  ];
  

const Button: React.FC = () => {
  const initialTabsState = buttons.reduce<{ [key: number]: 'preview' | 'code' }>((acc, _, index) => {
    acc[index] = 'preview';
    return acc;
  }, {});

  const [activeTabs, setActiveTabs] = useState(initialTabsState);

  const toggleTab = (index: number, tab: 'preview' | 'code') => {
    setActiveTabs((prevState) => ({
      ...prevState,
      [index]: tab,
    }));
  };

  return (
    <div className="sm:w-full w-[93vw] p-4">
        <h1 className="text-2xl font-bold mb-4">Button Examples</h1>
      <p className="text-gray-600 mb-4">Examples of buttons styled using Tailwind CSS</p>
      {buttons.map((button, index) => (
        <div key={index} className="mb-8">
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 font-bold rounded ${
                activeTabs[index] === 'preview' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
              }`}
              onClick={() => toggleTab(index, 'preview')}
            >
              Preview
            </button>
            <button
              className={`px-4 py-2 font-bold rounded ${
                activeTabs[index] === 'code' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
              }`}
              onClick={() => toggleTab(index, 'code')}
            >
              Code
            </button>
          </div>
          <div className='bg-gray-800 h-64 flex justify-center items-center'>
            {activeTabs[index] === 'preview' ? (
              <div className="mb-4">
                <button className={button.className}>Button</button>
              </div>
            ) : (
              <SyntaxHighlighter language="jsx" style={okaidia}>
                {`<button className="${button.className}">
  Button
</button>`}
              </SyntaxHighlighter>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Button;
