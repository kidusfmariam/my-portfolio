import React from 'react'
import projects from '../../../Projects'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './ProjectGrid.css'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const ProjectGrid = () => {
  return (
    <div className='project-container'>
      {projects.map(item => (
        
        <ProjectCard
            key={item.id}
            image={item.thmbnail}
            title={item.title}
            id={item.id}
            
        />
        
      ))}
    </div>
  )
}

export default ProjectGrid
