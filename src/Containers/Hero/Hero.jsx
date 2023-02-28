import React from 'react'
import './Hero.css'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className='hero-container'>
    <div className='hero-wrapper'>
      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.2, delay: 1.2}}
      className='hero-left'>
            <h1>Kidus Ayalew</h1>
            <h2>Frontend developer, UI designer</h2>
      </motion.div>
      </div>
      <div className="hero-wrapper">
      <motion.div
        initial={{height: 0}}
        animate={{height: '100%'}}
        transition={{duration: 1.2, ease:'easeInOut'}}
      className='hero-right'>
            <motion.p
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1.2, delay: 1.2}}
            >I am a frontend developer with a keen eye for design. I'm up to date on the latest frontend technologies and UX design tools. I am dedicated to bringing beautiful designs to life.</motion.p>
            <motion.h2
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1.2, delay: 1.2}}
            >Get my resume</motion.h2>
      </motion.div>
      </div>
      </div>

  )
}

export default Hero
