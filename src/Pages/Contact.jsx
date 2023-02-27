import './Contact.css'
import {AiOutlineMail, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-wrapper'>
            <h1>Contact Me</h1>
            <a href="mailto:kidusfmariamayalew@gmail.com" target='_blank'>
              <p className='email'>kidusfmariamayalew@gmail.com</p>
            </a>
            <div className='socials'>
              <a href="https://t.me/wanderingsailboat" target='_blank'>
                <FaTelegramPlane/>
              </a>
              <a href="https://github.com/kidusfmariam" target='_blank'>
                <AiOutlineGithub/>
              </a>
              <a href="#" target='_blank'>
                <AiOutlineTwitter/>
              </a>
              <a href="#" target='_blank'>
                <AiOutlineLinkedin/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Contact
