import React from 'react'
import { useParams } from 'react-router'
import projects from '../../Projects'
import './ProjectDetail.css'
import { Link } from 'react-router-dom'
const ProjectDetail = () => {

    const{projectTitle} = useParams()
    const thisProject = projects.find(item => item.title === projectTitle)
  return (
    <div className='details-container'>
      <div className='title'>
      <h1>{thisProject.title}</h1>
      <div className='links'>
        <a href={thisProject.link} target='_blank' >Live Website</a>
        <a href={thisProject.github} target='_blank' >Github Repo</a>
      </div>
      </div>
     <div className='details-wrapper'>
        <p>{thisProject.description}</p>
        <div className='tools'>
        <h2>Tools Used</h2>
        <ul>
          {thisProject.tools.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        </div>
        <div className='project-img'>
            <img src={thisProject.screenshot1} alt={thisProject.title} />
        </div>
        <Link style={{textDecoration: 'none'}} to='/'>
          <p className='route-p'>Back to Projects</p>
        </Link>
     </div>
    </div>
  )
}

export default ProjectDetail
