import React from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.3, // Stagger for smoother entrance
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <div className="lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse lg:ml-32 items-center">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
        </motion.div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariant}
            className="flex flex-col items-center lg:items-start mt-10 lg:ml-40 text-center lg:text-left"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 tracking-tighter text-7xl lg:text-8xl font-extrabold"
            >
              I'm <span className="text-stone-600">Ansh.</span>
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-400 to-stone-600 bg-clip-text text-3xl font-semibold text-transparent lg:mt-4"
            >
              Driving end-to-end excellence with seamless user experiences
              through masterfully crafted code.
              <br />
              <span className="italic font-medium">"Full Stack Developer"</span>
            </motion.span>

            <motion.p
              variants={childVariants}
              className="max-w-lg py-6 text-lg lg:text-xl leading-relaxed tracking-tighter text-gray-700"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={childVariants}
              className="flex space-x-4 mt-4"
            >
              <a
                href="../public/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white rounded-full px-6 py-5 text-sm text-stone-800 shadow-md hover:shadow-lg transition-all"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
