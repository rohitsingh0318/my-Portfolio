import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div
      name="about"
      className="h-[80vh] w-full bg-blue max-h-screen px-5 min-[330px]:px-10 md:px-32 mt-10"
    >
      <div className="flex">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="text-xl md:text-4xl text-yellow font-bold border-b-4 border-gray-400 inline"
          >
            About
          </motion.div>

          <div className="text-lightblue text-xs sm:text-base mr-10 mt-8">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Hey there 👋, I’m Rohit Singh, a <strong>final year student</strong>{" "}
              on a quest to turn ideas into interactive, visually appealing web
              experiences. From tinkering with code to building dynamic
              applications, I’m all about making the web a little more
              awesome—one line of code at a time.
            </motion.p>
            <br />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I’m driven by a focus so sharp, I could probably code blindfolded
              (but I won’t). I believe in the magic of collaboration, where
              great minds come together to create even greater things.
              Challenges? Bring 'em on! I tackle them with a mix of
              determination, adaptability, and maybe a bit of caffeine ☕.
            </motion.p>
            <br />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              viewport={{ once: true }}
            >
              When I’m not busy coding, you’ll find me{" "}
              <strong>reading books</strong> 📚, jamming out to some tunes 🎧,
              or binge-watching the latest movies 📺. Life’s about balance,
              after all!
            </motion.p>
            <br />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4 }}
              viewport={{ once: true }}
              className="sm:inline hidden"
            >
              I mostly work with React, Node.js, Express.js, MongoDB,
              TailwindCSS, and other full-stack technologies to bring my ideas
              to life.
            </motion.p>
            <br />
            <br />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.6 }}
              viewport={{ once: true }}
              className="min-[915px]:inline hidden"
            >
              <i>
                "By believing passionately in something that still does not
                exist, we create it. The nonexistent is whatever we have not
                sufficiently desired." — Franz Kafka
              </i>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
