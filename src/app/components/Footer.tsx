import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='footer' className="w-full text-center p-8 bg-dark">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Have a project in mind?
      </h2>
      <p className="text-lg md:text-xl font-normal mb-8 text-gray-400">
        {`I'm available to work!`}
      </p>
      <div className="mb-8">
        <p className="text-lg md:text-xl font-normal text-white mb-2">
          Email: <a href="mailto:your-email@example.com" className="text-blue-500 hover:text-green-600 transition duration-300">suleosman73@gmail.com</a>
        </p>
        <p className="text-lg md:text-xl font-normal text-white">
          Phone: <a href="tel:+1234567890" className="text-blue-500 hover:text-green-600 transition duration-300">+254 718 772 203</a>
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl p-2 rounded-full bg-black hover:bg-gray-700 transition duration-300">
          <FaTwitter />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl p-2 rounded-full bg-black hover:bg-gray-700 transition duration-300">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl p-2 rounded-full bg-black hover:bg-gray-700 transition duration-300">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Footer