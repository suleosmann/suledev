import React from 'react'

const page = () => {
  return (
    <div className="mb-8">
      <div className="flex space-x-4 mb-4">
        <button className="px-4 py-2 font-bold rounded bg-gray-300 text-gray-800" disabled>
          Preview
        </button>
        <button className="px-4 py-2 font-bold rounded bg-gray-300 text-gray-800" disabled>
          Code
        </button>
      </div>
      <div className='bg-gray-800 h-64 flex justify-center items-center'>
        <p className="text-white text-xl">Coming Soon</p>
      </div>
    </div>
  )
}

export default page
