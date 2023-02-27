import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const ProjectCard = ({image, title, id}) => {
  return (
    <Link style={{textDecoration: 'none'}} to={`/${title}`}>
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      viewport={{once: true}}
      transition={{duration: 1, delay: id/10 + 1.4}}
    className='project-card'>
    <img src={image} alt={title} />  
      <div className='card-overlay'>
        <h1>{title}</h1>
      </div>
    </motion.div>
    </Link>
  )
}

export default ProjectCard
