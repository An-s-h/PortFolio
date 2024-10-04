import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
<<<<<<< HEAD
import SuperPod from "../../SuperPod.jpg";
import TempView from "../../Temp-View.jpg";
import GotToNotes from "../../GoToNotes.jpg";
=======
import SuperPod from "../assets/SuperPod.jpg";
import TempView from "../assets/Temp-View.jpg";
import GotToNotes from "../assets/Go-To-Notes.jpg";
>>>>>>> 002496d389f9235f182906f21c0fdb552aa104dc

const projects = [
  {
    id: 1,
    title: "Super-Pod",
    description:
      "A podcast streaming platform with JWT authentication, Redux for state management, and Cloudinary for media uploads.",
    image: SuperPod,
    liveLink: "https://super-pod.vercel.app/",
    githubLink: "https://github.com/yourusername/project-alpha",
    skills: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Temp-View",
    description:
      "A weather app with a 7-day forecast, real-time updates, and light/dark mode using OpenWeather API.",
    image: TempView,
    liveLink: "https://temp-view.vercel.app/",
    githubLink: "https://github.com/yourusername/project-beta",
    skills: ["React", "Tailwind CSS", "OpenWeather API"],
  },
  {
    id: 3,
    title: "Notes-To-MCQ",
    description:
      "An AI-powered quiz generator with custom quiz settings, built using React and Node.js.",
    image: GotToNotes,
    liveLink: "https://goto-notes.vercel.app/",
    githubLink: "https://github.com/yourusername/project-beta",
    skills: ["React", "Node.js", "Google Gemini API"],
  },
];

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className=" opacity-80 rounded-2xl shadow-lg overflow-hidden w-full  max-w-5xl h-[400px] my-10 mx-auto"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex h-full">
        <div className="p-10 flex flex-col justify-between">
          <div>
            <h3 className="lg:text-5xl text-3xl font-semibold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-2">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 lg:px-3 lg:py-2 px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-xs lg:text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 lg:px-3 lg:py-2 px-2 py-1 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 text-xs lg:text-sm"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
        <div className="w-[50%] relative overflow-hidden max-lg:hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-[200%] h-[80%] rounded-lg shadow-xl overflow-hidden transform perspective-1000 rotateY-12 inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"
              initial={{ rotateY: 12, translateX: "25%" }}
              animate={{
                rotateY: isHovered ? 5 : 12,
                translateX: isHovered ? "20%" : "25%",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-full h-full bg-white"
                initial={{ scale: 1.1 }}
                animate={{ scale: isHovered ? 1 : 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full pb-4"
                />
              </motion.div>
            </motion.div>
            {/* Laptop base */}
            <div className="absolute bottom-[10%] right-0 w-[70%] h-2 bg-white rounded-l-full " />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MyProjects() {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-12 text-center text-stone-300 tracking-wide lg:text-5xl">
          My Projects
        </h2>
        <div className="flex-row flex-wrap justify-center items-center gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
