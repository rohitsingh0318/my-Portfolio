import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-darkblue flex text-yellow justify-around md:py-4 py-2 md:text-base sm:text-sm min-[420px]:text-xs text-[0.5rem] items-center'>
        <div>Made with ❤️ by Rohit Singh. &#169; All rights reserved.</div>
        <div className='flex gap-2'>
            <a href="https://github.com/rohitsingh0318" target="_blank" rel="noopener noreferrer" className='hover:cursor-none hover:text-lightblue'><FaGithub size={25}/></a>
            <a href="https://www.linkedin.com/in/mr-rohit-singh03/" target="_blank" rel="noopener noreferrer" className='hover:cursor-none hover:text-lightblue'><FaLinkedin size={25}/></a>
            <a href="https://www.instagram.com/rohit_singh__1803/" target="_blank" rel="noopener noreferrer" className='hover:cursor-none hover:text-lightblue'><FaInstagram size={25}/></a>
        </div>
    </div>
  )
}

export default Footer