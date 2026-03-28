
import TechSVG from "../assets/coding-3-85.svg";
import { motion } from "motion/react";

const Skills = () => {
  const technologies = [
   {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React.JS",
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
  },
  {
    id: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    name: "Express.js",
  },
  {
    id: 5,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    id: 6,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    id: 7,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    id: 8,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    id: 9,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    id: 10,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    name: "Postman",
  },
  {
    id: 11,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    id: 12,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    id: 13,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
  },
  {
    id: 14,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    id: 15,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    id: 16,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    name: "GitHub",
  },
  {
    id: 17,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    name: "Vercel",
  }
];


  return (
    <div
      name="skills"
      className="min-h-screen w-full bg-blue px-5 min-[330px]:px-10 md:px-32 py-12 mt-12"
    >
      <div>
        <h1 className="text-xl md:text-4xl text-yellow font-bold border-b-4 border-gray-400 inline">
          Skills
        </h1>
        <p className="text-xs sm:text-base text-lightblue mt-6 font-mono">
          Behind every project is a set of powerful technologies and tools. Here are the skills that power my development workflow. ⚡🔧✨
        </p>
      </div>
      <div className="flex">
        <motion.div
          className="w-1/2 hidden xl:inline-block"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <img
            src={TechSVG}
            alt="Coding Illustration"
            style={{ width: "450px" }}
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-4 sm:grid-cols-5 gap-4 md:gap-5 mt-8 mx-auto xl:mx-0"
        >
          {technologies.map((item) => (
            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              key={item.id}
              className="relative group flex flex-col items-center md:p-2 p-1 bg-darkblue rounded-lg hover:-mt-2 hover:mb-2 hover:shadow-[0_10px_20px_rgba(232,241,255,0.3)] transform transition-all duration-200"
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-7 w-7 md:h-10 md:w-10 pt-2"
              />
              <div className="text-yellow mt-2 sm:text-base text-xs">
                {item.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
