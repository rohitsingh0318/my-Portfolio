import React from "react";
import Clasicfashion from "../assets/ProjectPics/amzon.png";
import Plants from "../assets/ProjectPics/plants.png";
import ecommerce from "../assets/ProjectPics/shop easy.png";
import TakeNote from "../assets/ProjectPics/TakeNote.png";
import dashbord from "../assets/ProjectPics/dashbord.png";
import Company from "../assets/ProjectPics/company.png"
import { FaGithub } from "react-icons/fa";
import { DiCode } from "react-icons/di";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
  {
    id: 1,
    src: Company,
    nam: "Company Website",
    github: "https://github.com/rohitsingh0318",
    live: "#",
    bio: "R3 Labs IT Solutions is a modern IT company focused on delivering high-quality web development, software solutions, and digital services. We specialize in building scalable, user-friendly applications  and smart digital strategies.",
    techUsed: "Next.js, TailwindCSS, AOS, Email.js, Motion, Supabase",
  },
  {
    id: 2,
    src: dashbord,
    nam: "Real-Time Dashboard",
    github:"https://github.com/rohitsingh0318",
    live: "#",
    bio: "A real-time analytics dashboard designed to monitor and visualize live data with interactive charts and insights. It enables users to track performance metrics, analyze trends, and responsive and dynamic interface.",
    techUsed:
      "React.js, Node.js, Express, TailwindCSS, Recharts, Socket.io,",
  },
  {
    id: 3,
    src: ecommerce,
    nam: "E-commerce Website",
    github: "https://github.com/rohitsingh0318",
    live: "#",
    bio: "A full-featured e-commerce platform designed for seamless online shopping. It includes product listings, secure authentication, cart management, and smooth checkout functionality, responsive, and user-friendly",
    techUsed: "Next.js, MongoDB, Node.js, Express, TailwindCSS, authentication",
  },
  {
    id: 4,
    src: TakeNote,
    nam: "TakeNote App",
    github: "https://github.com/rohitsingh0318",
    live: "#",
    bio: "TakeNote is a secure and user-friendly note-taking application. It helps users create, edit, and organize their personal notes with ease, accessible anytime across multiple devices.",
    techUsed: "MongoDB, Express, React, Node.js, TailwindCSS",
  },
  {
    id: 5,
    src: Plants,
    nam: "Plants Blog",
    github: "https://github.com/rohitsingh0318",
    live: "#",
    bio: "A modern plant blog website featuring beautiful image sliders and engaging content. It offers users a visually rich experience to explore plant.",
    techUsed: "HTML, CSS, JavaScript, AOS, Slick Carousel",
  },
  {
    id: 6,
    src: Clasicfashion,
    nam: "Classic Fassion",
    github: "https://github.com/rohitsingh0318",
    live: "#",
    bio: "Classic Fashion is a modern e-commerce platform for fashion enthusiasts. It offers a wide range of stylish earrings for women and accessories with a seamless shopping experience.",
    techUsed: "React.JS, TailwindCSS, AOS, Farmer Motion, React Router, React Icons",
  },


];

  return (
    <div
      name="projects"
      className="h-auto w-full bg-blue max-h-fit px-5 min-[330px]:px-10 md:px-32 mt-20"
    >
      <div className="text-xl md:text-4xl text-yellow font-bold border-b-4 border-gray-400 inline">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-darkblue rounded-xl font-mono hover:-mt-3 hover:shadow-[0_10px_20px_rgba(232,241,255,0.3)] transform transition-all duration-200">
              <div>
                <img src={item.src} alt={item.nam} className="rounded-t-xl h-56 md:h-40 lg:h-44" />
              </div>
              <div className="px-4 mt-4">
                <div className="text-xl md:text-2xl font-bold text-lightblue md:h-16 lg:h-auto">
                  {item.nam}
                </div>
                <div className="text-lightblue mt-3 text-xs md:text-base md:h-60 lg:h-40">
                  {item.bio}
                </div>
                <div className="text-yellow mt-3 text-xs md:text-base md:h-24 lg:h-16">
                  Technologies Used:{" "}
                  <span className="text-lightblue">{item.techUsed}</span>
                </div>
                <div>
                  <div className="mt-4 flex gap-4 items-center">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow hover:text-lightblue hover:scale-110"
                    >
                      <Tooltip title="Github">
                        <IconButton>
                          <FaGithub color="#ffb703" size={30} />
                        </IconButton>
                      </Tooltip>
                    </a>
                    |
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow hover:text-lightblue hover:scale-110"
                    >
                      <Tooltip title="Live Demo">
                        <IconButton>
                          <DiCode size={45} color="#ffb703" />
                        </IconButton>
                      </Tooltip>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
