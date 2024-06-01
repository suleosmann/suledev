import React from 'react'
import SideBar from './components/SideBar'
import Button from "./components/ui/Buttons"
const page = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Tailwind Components Showcase</h1>
      <p className="mb-4">
        Welcome to my Tailwind Components showcase! This page is dedicated to displaying various UI components built using Tailwind CSS. It's a way to demonstrate my proficiency with Tailwind CSS and serve as a reference for future projects.
      </p>
      <p className="mb-4">
        Use the sidebar to navigate through different components. Each component has a live preview and the corresponding code snippet.
      </p>
      <p className="mb-4">
        Feel free to explore and use these components in your own projects. Happy coding!
      </p>    
      </div>
  )
}

export default page
