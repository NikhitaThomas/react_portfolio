import project1 from '../assets/shopping-cart.jpg';
import project2 from '../assets/tip-calc.png';
import project3 from '../assets/huddle-landing.jpg';
// import project4 from '../assets/projects/project-4.jpg';

export const HERO_CONTENT = `I'm a recent Masters graduate in Computer Science specializing in Network and Information Security from the University of Wollongong. Passionate about technology and problem-solving, I have hands-on experience in web development and cybersecurity.`;

export const ABOUT_TEXT = `I am a highly motivated and adaptable individual, eager to learn and grow in dynamic environments. My strong technical skills are complemented by my ability to work collaboratively in teams and communicate effectively. I thrive on solving complex problems and continuously seek opportunities to improve and innovate.`;

export const EXPERIENCES = [
  {
    year: '2023 - Present',
    role: 'Senior Full Stack Developer',
    company: 'Google Inc.',
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ['Javascript', 'React.js', 'Next.js', 'mongoDB'],
  },
  {
    year: '2022 - 2023',
    role: 'Frontend Developer',
    company: 'Adobe',
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ['HTML', 'CSS', 'Vue.js', 'mySQL'],
  },
  {
    year: '2021 - 2022',
    role: 'Full Stack Developer',
    company: 'Facebook',
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ['Python', 'Svelte', 'Three.js', 'Postgres'],
  },
  {
    year: '2020 - 2021',
    role: 'Software Engineer',
    company: 'Paypal',
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ['Ruby', 'Rails', 'PHP', 'Sqlite'],
  },
];

export const EDUCATION = [
  {
    year: '2022 - 2024',
    degree: 'Masters of computer science',
    major: 'Network and Information Security',
    univeristy: 'Univeristy of Wollongong',
    description: `Completed a masters degree.`,
    technologies: ['data structures', 'Algorithms', 'DBMS', 'Research'],
  },
  {
    year: '2017 - 2020',
    degree: ' Bachelors of Science',
    major: 'Information Technology',
    univeristy: 'Univeristy of Mumbai',
    description: `Completed a Bachelors degree.`,
    technologies: ['Python', 'Algorithms', 'SQL'],
  },
];

export const CERTIFICATIONS = [
  {
    year: '2024',
    name: 'Figma Essential Training: The Basics',
    organization: 'LinkedIn Learning',
    technologies: ['figma'],
  },
  {
    year: '2024',
    name: 'Figma Essential Training: The Basics',
    organization: 'LinkedIn Learning',
    technologies: ['figma'],
  },
  {
    year: '2024',
    name: 'Figma Essential Training: The Basics',
    organization: 'LinkedIn Learning',
    technologies: ['figma'],
  },
];

export const PROJECTS = [
  {
    title: 'Shopping Cart',
    image: project1,
    description:
      'A fully functional shopping cart with features like adding to cart, removing from cart and calculating the total of the cart',
    technologies: ['HTML', 'CSS', 'Nextjs', 'TailwindCSS'],
  },
  {
    title: 'Tip Calculator',
    image: project2,
    description:
      'An application for calculatin the tip that each person has to pay',
    technologies: ['HTML', 'CSS', 'Nextjs', 'TailwindCSS'],
  },
  {
    title: 'Huddle Landing Page',
    image: project3,
    description: 'A landing page that showcases frontend skills',
    technologies: ['HTML', 'CSS', 'React', 'TailwindCSS'],
  },
  {
    title: 'Blogging Platform',
    // image: project4,
    description:
      'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
    technologies: ['HTML', 'CSS', 'Vue.js', 'Express', 'mySQL'],
  },
];

export const CONTACT = {
  address: '767 Fifth Avenue, New York, NY 10153 ',
  phoneNo: '+12 4555 666 00 ',
  email: 'me@example.com',
};
