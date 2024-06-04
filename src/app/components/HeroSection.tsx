import React from 'react'
import Image from 'next/image'
import HeroImage from '../../assets/sulelogoimage.jpeg'
import { Button } from "../../components/ui/button"

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          {`Hi, I'm Suleiman!`}
        </h1>
        <h4 className="mt-3 text-lg md:text-2xl lg:text-4xl font-normal tracking-widest">
          I <span className="text-[#3e32e4]">build</span> custom WEB solutions and{' '}
          <span className="text-[#3e32e4]">write</span> about DEV.
        </h4>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-2">
        <Button variant="default" className="mb-2 sm:mb-0 sm:mr-2">
          My Projects
        </Button>
        <Button variant="secondary">Get in Touch</Button>
      </div>
    </div>
  )
}

export default HeroSection
