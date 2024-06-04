import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Sample from '../../assets/image.jpg'
import DashboardImage from "../../assets/dashboard.png"
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
const ProjectCard: React.FC<Project> = ({ title, description, image, link, code }) => (
  <div className=" shadow-md rounded-lg overflow-hidden">
    <Image src={image} alt={title} width={600} height={400} className="w-full h-auto" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-white">{description}</p>
      <div className='space-x-4'>
      <a href={link} className="text-blue-500 hover:underline mt-4 inline-block">
        Live
      </a>
      <a href={code} className="text-blue-500 hover:underline mt-4 inline-block">
        Code
      </a>
      </div>
    </div>
  </div>
)

const page: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page