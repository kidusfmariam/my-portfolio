import React from 'react'
import './ProjectCard.css'
const ProjectCard = ({image, title}) => {
  return (
    <div className='project-card'>
    <div className="img">
    <img src={image} alt={title} />
    </div>
      
      <div className='card-overlay'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default ProjectCard
