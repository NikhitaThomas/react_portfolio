import { useState } from 'react';
import Experience from './Experience';
import Education from './Education';
import Certifications from './Certifications';
import { motion } from 'framer-motion';

const Background = () => {
  const [tab, setTab] = useState('Experience');

  const renderTabContent = () => {
    switch (tab) {
      case 'Education':
        return <Education />;
      case 'Experience':
        return <Experience />;
      case 'Certifications':
        return <Certifications />;
      default:
        return null;
    }
  };

  return (
    <div id="background">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-10 my-20 text-center text-xl md:text-2xl lg:text-4xl"
      >
        <button
          className={`tab-button ${
            tab === 'Experience'
              ? 'border-b-4 py-6'
              : 'opacity-30 font-extralight'
          }`}
          onClick={() => setTab('Experience')}
        >
          Experience
        </button>
        <button
          className={`tab-button ${
            tab === 'Education'
              ? 'border-b-4 py-6'
              : 'opacity-30 font-extralight'
          }`}
          onClick={() => setTab('Education')}
        >
          Education
        </button>
        <button
          className={`tab-button ${
            tab === 'Certifications'
              ? 'border-b-4 py-6'
              : 'opacity-30 font-extralight'
          }`}
          onClick={() => setTab('Certifications')}
        >
          Certifications
        </button>
      </motion.div>
      {renderTabContent()}
    </div>
  );
};

export default Background;
