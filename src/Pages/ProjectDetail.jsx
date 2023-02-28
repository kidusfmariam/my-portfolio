import React from 'react'
import { useParams } from 'react-router'
import projects from '../../Projects'
import './ProjectDetail.css'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const ProjectDetail = () => {

    const{projectTitle} = useParams()
    const thisProject = projects.find(item => item.title === projectTitle)
  return (
    <div className='details-container'>
      <div className='title'>
      <motion.h1
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.2}}
        viewport={{once: true}}
      >{thisProject.title}</motion.h1>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.4}}
        viewport={{once: true}}
      className='links'>
        <a href={thisProject.link} target='_blank' >Live Website</a>
        <a href={thisProject.github} target='_blank' >Github Repo</a>
      </motion.div>
      </div>
     <div className='details-wrapper'>
        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1.2, delay: 0.6}}
          viewport={{once: true}}
        >{thisProject.description}</motion.p>
        <div className='tools'>
        <motion.h2
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1.2, delay: 0.8}}
          viewport={{once: true}}
        >Tools Used</motion.h2>
        <motion.ul
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1.2, delay: 1}}
          viewport={{once: true}}
        >
          {thisProject.tools.map(item => (
            <li>{item}</li>
          ))}
        </motion.ul>
        </div>
        <motion.div 
          initial={{y: 150}}
          animate={{y: 0}}
          viewport={{once: true}}
          transition={{duration: 1.2, ease: 'easeInOut'}}

        className='project-img'>
            <img src={thisProject.screenshot1} alt={thisProject.title} />
        </motion.div>
        <Link style={{textDecoration: 'none'}} to='/'>
          <p className='route-p'>Back to Projects</p>
        </Link>
     </div>
    </div>
  )
}

export default ProjectDetail
