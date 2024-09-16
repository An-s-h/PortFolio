import React from 'react'
import {HERO_CONTENT} from '../constants'
import { motion, transform } from 'framer-motion'

const containerVariant={
  hidden:{opacity:0,x:-100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChildren:0.5,
    }
  }
}
const childVariants={
  hidden:{opacity:0,x:-100},
  visible:{opacity:1,x:0,transition:{duration:0.5}}
}
const Hero = () => {
  return (
    <div className=' lg:mb-36 '>
      <div className='flex flex-wrap lg:flex-row-reverse lg:ml-32'>
        <div className='w-full lg:w-1/2'>
       
        </div>
        <div className='w-full lg:w-1/2 '>
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariant}
        
        className='flex flex-col items-center lg:items-start mt-10 lg:ml-40'>
          <motion.h2
          variants={childVariants}
          className='pb-2 tracking-tighter lg:text-8xl text-7xl lg:mt-32 ml'>
            I'm <span className='text-stone-600'>Ansh.</span>
            </motion.h2>
            <motion.span 
            variants={childVariants}
            className='bg-gradient-to-r from-stone-300 to stone-600 bg-clip-text text-3xl tracking-tight text-transparent lg:mt-4 ml-10 lg:ml-0'>
            
            Driving end-to-end excellence with seamless user experiences through masterfully crafted code.
            <br/>"Full Stack Develeper"</motion.span>
            <motion.p
            variants={childVariants} className='max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
            <motion.a
            variants={childVariants}
            href="/resume.pdf" target='_blank' rel='noopener noreferrer' download className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10 '>
            Download Resume</motion.a>
          </motion.div>        
        </div>
      </div>
    </div>
  )
}

export default Hero
