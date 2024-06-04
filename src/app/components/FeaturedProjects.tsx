'use client'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import DashboardImage from "../../assets/dashboard.png"
import Image, { StaticImageData } from 'next/image'
import MimoImage from "../../assets/mimo.png"
import SecurityImage from "../../assets/Security.png"

interface Project {
  id: number
  title: string
  description: string
  image: StaticImageData;
  link: string
  code: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Blue Dashboard',
    description: 'A sleek and modern React and Tailwind CSS dashboard for visualizing and managing data with a responsive layout and intuitive interface.',
    image: DashboardImage,
    link: 'https://blue-dashboard-mu.vercel.app/',
    code: 'https://github.com/suleosmann/blue-dashboard',
  },
  {
    id: 2,
    title: 'MiMo Finance',
    description: 'A cutting-edge finance app built with Next.js, Tailwind CSS, and TypeScript for simplified utility bill payments and management.',
    image: MimoImage,
    link: 'https://mimo-next-app.vercel.app/',
    code: 'https://github.com/suleosmann/mimo-next-app',
  },
  {
    id: 3,
    title: 'Broomsville Surveillance',
    description: 'A comprehensive security website built with React, CSS, and JavaScript, serving as a central hub for surveillance and security solutions in Broomsville.',
    image: SecurityImage,
    link: 'https://broomsvillesurveillance.co.ke/',
    code: 'https://github.com/suleosmann/security-website',
  },
]

const FeaturedProjects = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Featured Projects</h1>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="px-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-white">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-lg mb-4">{project.description}</p>
                  <div className="space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out"
                    >
                      View Project
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default FeaturedProjects