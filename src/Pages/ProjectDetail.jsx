import React from 'react'
import { useParams } from 'react-router'
import projects from '../../Projects'
import './ProjectDetail.css'

const ProjectDetail = () => {

    const{projectTitle} = useParams()
    const thisProject = projects.find(item => item.title === projectTitle)
  return (
    <div>
     <h1>{thisProject.title}</h1>
     <img src={thisProject.thmbnail} alt="" />
    </div>
  )
}

export default ProjectDetail
