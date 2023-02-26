import React from 'react'
import projects from '../../../Projects'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './ProjectGrid.css'
const ProjectGrid = () => {
  return (
    <div className='project-container'>
      {projects.map(item => (
        <ProjectCard
            image={item.thmbnail}
            title={item.title}
        />
      ))}
    </div>
  )
}

export default ProjectGrid
