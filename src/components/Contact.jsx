
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { motion } from 'motion/react';

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState({ name: false, email: false, msg: false });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const newError = {
      name: name.trim().length === 0,
      email: !validateEmail(email),
      msg: msg.trim().length === 0,
    };

    setError(newError);

    if (!Object.values(newError).includes(true)) {
      emailjs
      .sendForm('service_edeouz8', 'template_c9q0hbd', form.current, {
        publicKey: 'zwPImE6xDpEHZKaSo',
      })
      .then((result) => {
          toast.success("Message sent successfully!");
          setName("");
          setEmail("");
          setMsg("");
          setError({ name: false, email: false, msg: false });
      }, (error) => {
          toast.error("Failed to send message, please try again!");
      });
    } else {
      toast.error("Please fix the errors and submit again.");
    }
  };

  return (
    <div name='contact' className='min-h-screen w-full bg-blue max-h-[130vh] px-5 min-[330px]:px-10 md:px-32 mt-40'>
      <div>
        <div>
          <div className='text-4xl text-yellow font-bold border-b-4 border-gray-400 inline'>Contact</div>
          <p className='py-6 text-lg text-lightblue font-mono'>Got a question, a project, or a bad joke? Ping me! 💬</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.00 }}
          className='flex justify-center items-center'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full min-[320px]:w-2/3 sm:w-2/3 md:w-1/2 mt-10'>
            <input
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
              name='from_name'
              placeholder='Enter your name'
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${error.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {error.name && <label className='my-2 text-red-500'>Name cannot be empty!</label>}

            <input
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              name='from_email'
              placeholder='Enter your email'
              className={`my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${error.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {error.email && <label className='mb-4 text-red-500'>Please enter a valid email!</label>}

            <textarea
              name="message"
              onChange={e => setMsg(e.target.value)}
              value={msg}
              placeholder='Enter your message'
              rows="7"
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${error.msg ? 'border-red-500' : 'border-gray-300'}`}
            ></textarea>
            {error.msg && <label className='mt-2 text-red-500'>Message cannot be empty!</label>}

            <button className='md:px-6 md:py-4 text-sm md:text-base px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 hover:scale-105 my-8 mx-auto'>Let's Talk!</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
