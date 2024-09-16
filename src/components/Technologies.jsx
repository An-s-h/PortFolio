import React from 'react';
import { FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt } from 'react-icons/fa';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiRedux, SiJavascript, SiPostman, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';

const Technologies = () => {
  // Function to return floating animation with alternating directions
  const getFloatAnimation = (isUpwards, delay, duration) => ({
    initial: { y: 0 },
    animate: {
      y: isUpwards ? [0, -10, 0] : [0, 10, 0], // Up for some, Down for others
      transition: {
        duration: duration,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        delay: delay,
      },
    },
  });

  return (
    <div className='pb-24'>
      <h2 className='mb-20 pt-5 text-center  text-stone-300 tracking-wide lg:text-5xl text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-5'>
        {/* First icon goes up */}
        <motion.div variants={getFloatAnimation(true, 0, 2)} initial="initial" animate="animate">
          <FaHtml5 className='text-6xl text-orange-500 hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Second icon goes down */}
        <motion.div variants={getFloatAnimation(false, 0.2, 2)} initial="initial" animate="animate">
          <FaCss3Alt className='text-6xl text-blue-600 hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Third icon goes up */}
        <motion.div variants={getFloatAnimation(true, 0.4, 2)} initial="initial" animate="animate">
          <SiJavascript className='text-6xl text-yellow-400 hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Fourth icon goes down */}
        <motion.div variants={getFloatAnimation(false, 0.6, 2)} initial="initial" animate="animate">
          <RiReactjsLine className='text-6xl text-cyan-400 hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Fifth icon goes up */}
        <motion.div variants={getFloatAnimation(true, 0.8, 2)} initial="initial" animate="animate">
          <RiTailwindCssFill className='text-6xl text-blue-400 hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Sixth icon goes down */}
        <motion.div variants={getFloatAnimation(false, 1, 2)} initial="initial" animate="animate">
          <FaNodeJs className='text-6xl text-green-400 hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Seventh icon goes up */}
        <motion.div variants={getFloatAnimation(true, 1.2, 2)} initial="initial" animate="animate">
          <SiExpress className='text-6xl text-gray-400 hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Eighth icon goes down */}
        <motion.div variants={getFloatAnimation(false, 1.4, 2)} initial="initial" animate="animate">
          <SiMongodb className='text-6xl text-green-400 hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Ninth icon goes up */}
        <motion.div variants={getFloatAnimation(true, 1.6, 2)} initial="initial" animate="animate">
          <SiRedux className='text-6xl text-purple-500 hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Tenth icon goes down */}
        <motion.div variants={getFloatAnimation(false, 1.8, 2)} initial="initial" animate="animate">
          <FaJava className='text-6xl text-red-600 hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Eleventh icon goes up */}
        <motion.div variants={getFloatAnimation(true, 2, 2)} initial="initial" animate="animate">
          <FaGitAlt className='text-6xl text-orange-400 hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Twelfth icon goes down */}
        <motion.div variants={getFloatAnimation(false, 2.2, 2)} initial="initial" animate="animate">
          <FaGithub className='text-6xl text-black hover:scale-110 transition-transform'/>
        </motion.div>
        {/* Thirteenth icon goes up */}
    
       
      </div>
    </div>
  );
};

export default Technologies;
