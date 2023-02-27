import './Contact.css'
import {AiOutlineMail, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-wrapper'>
            <motion.h1
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{duration: 1.2, delay: 0.4}}
            >Contact Me</motion.h1>
            <motion.a 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{duration: 1.2, delay: 0.6}}
            href="mailto:kidusfmariamayalew@gmail.com" target='_blank'>
              <p className='email'>kidusfmariamayalew@gmail.com</p>
            </motion.a>
            <motion.div 
                 initial={{opacity: 0}}
                 whileInView={{opacity: 1}}
                 viewport={{once: true}}
                 transition={{duration: 1.2, delay: 0.9}}
            className='socials'>
              <a href="https://t.me/wanderingsailboat" target='_blank'>
                <FaTelegramPlane/>
              </a>
              <a href="https://github.com/kidusfmariam" target='_blank'>
                <AiOutlineGithub/>
              </a>
              <a href="https://twitter.com/iwantdisfish" target='_blank'>
                <AiOutlineTwitter/>
              </a>
              <a href="#" target='_blank'>
                <AiOutlineLinkedin/>
              </a>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact
