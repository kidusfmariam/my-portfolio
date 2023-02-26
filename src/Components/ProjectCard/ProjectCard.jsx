import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'
const ProjectCard = ({image, title}) => {
  return (
    <Link style={{textDecoration: 'none'}} to={`/${title}`}>
    <div className='project-card'>
    <img src={image} alt={title} />  
      <div className='card-overlay'>
        <h1>{title}</h1>
      </div>
    </div>
    </Link>
  )
}

export default ProjectCard
