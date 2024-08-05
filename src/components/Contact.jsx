import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href={'mailto:' + CONTACT.email} className="border-b">
          {CONTACT.email}
        </a>
        <div className="flex justify-center my-10 gap-4">
          <a target="_blank" href="https://www.linkedin.com/in/nikitathomas11/">
            <FaLinkedin />
          </a>

          <a target="_blank" href="https://github.com/NikhitaThomas">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
