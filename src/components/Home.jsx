import React from "react";
import Button from "./common/Button";
import CodingImage from "../assets/coding-5-33.svg";
import ResumePDF from "../assets/Skills/Rohit_resume_portfolio.pdf";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="flex justify-around items-center h-screen w-full bg-blue max-h-screen px-5 min-[330px]:px-10 md:px-32"
    >
      <div>
        <div className="flex flex-col gap-3 font-mono mb-16 font-bold">
          <motion.div
            className="text-lightblue text-xl md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            Hi there,
          </motion.div>
          <motion.div
            className="text-lightblue text-2xl md:text-5xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            My name is <span className="text-yellow">Rohit Singh</span>
          </motion.div>
          <motion.div
            className="text-gray text-xl md:text-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.9 }}
          >
            I am a&nbsp;
            <TypeAnimation
              sequence={[
                " Front End Developer",
                1000,
                " Backend Developer",
                1000,
                " SEO Specialist",
                1000,
                " Figma Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.875 rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </motion.div>
        </div>
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.3 }}
        >
          <Link to={"contact"} smooth={true} duration={500}>
            <Button text={"Get in Touch"} outlined={false} />
          </Link>
          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text={"Resume"} outlined={true} />
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1.7 }}
        className="hidden min-[990px]:inline"
      >
        <img
          src={CodingImage}
          alt="Coding Illustration"
          style={{ width: "450px" }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
