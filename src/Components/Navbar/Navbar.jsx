import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Navbar = () => {
  return (
    <motion.nav
      initial={{width: 0}}
      whileInView={{width: '100%'}}
      transition={{duration: 1.2, ease: 'easeInOut'}}
      viewport={{once: true}}
    >
      <Link style={{textDecoration: 'none'}} to='/'>
      <motion.h2
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.4, delay: 1.4}}
      >K.A</motion.h2></Link>
      <Link style={{textDecoration: 'none'}} to='/contact'>
      <motion.h2
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.2, delay: 1.4}}
      >Contact Me</motion.h2></Link>
    </motion.nav>
  )
}

export default Navbar
