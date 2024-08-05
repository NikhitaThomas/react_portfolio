import project1 from '/assets/shopping-cart.jpg';
import project2 from '/assets/tip-calc.png';
import project3 from '/assets/huddle-landing.jpg';
import project4 from '/assets/bookmark-landing.jpg';

export const HERO_CONTENT = `I'm a recent Masters graduate in Computer Science specializing in Network and Information Security from the University of Wollongong. Passionate about technology and problem-solving, I have hands-on experience in web development and cybersecurity.`;

export const ABOUT_TEXT = `I am a highly motivated and adaptable individual, eager to learn and grow in dynamic environments. My strong technical skills are complemented by my ability to work collaboratively in teams and communicate effectively. I thrive on solving complex problems and continuously seek opportunities to improve and innovate.`;

export const EXPERIENCES = [
  {
    year: '2021 - 2022',
    role: 'Tech Expert',
    company: 'Wiingy',
    description: `Taught kids programming, web development, science, technology and robotics`,
    technologies: ['Arduino', 'HTML', 'robotics'],
  },
  {
    year: '2021',
    role: 'Frontend Developer Intern',
    company: 'Saksham: A Helping Hand',
    description: `Helped develop user interfaces for web applications using HTML, CSS, Javascript and Bootstrap. Worked closely with backend developers to integrate frontend components.`,
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
  },
  //   {
  //     year: '2021 - 2022',
  //     role: 'Full Stack Developer',
  //     company: 'Facebook',
  //     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //     technologies: ['Python', 'Svelte', 'Three.js', 'Postgres'],
  //   },
  {
    year: '2019',
    role: 'Web Development Intern',
    company: 'Innovative Play',
    description: `Contributed to the development of a fantasy cricket app.`,
    technologies: ['wordpress'],
  },
];

export const EDUCATION = [
  {
    year: '2022 - 2024',
    degree: 'Masters of computer science',
    major: 'Network and Information Security',
    univeristy: 'Univeristy of Wollongong',
    description: `Completed a masters degree.`,
    technologies: [
      'data structures',
      'algorithms',
      'DBMS',
      'research',
      'cryptography',
    ],
  },
  {
    year: '2017 - 2020',
    degree: ' Bachelors of Science',
    major: 'Information Technology',
    univeristy: 'Univeristy of Mumbai',
    description: `Completed a Bachelors degree.`,
    technologies: ['python', 'algorithms', 'SQL', 'security'],
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
    name: 'Introduction to Cloud Computing',
    organization: 'IBM',
    technologies: [
      'cloud',
      'cloud computing',
      'hybrid cloud',
      'cloud storage',
      'cloud security',
    ],
  },
  {
    year: '2024',
    name: 'Getting Started with Git and Github',
    organization: 'IBM',
    technologies: ['version control', 'git', 'github'],
  },
];

export const PROJECTS = [
  {
    title: 'Shopping Cart',
    image: project1,
    description:
      'A fully functional shopping cart with features like adding to cart, removing from cart and calculating the total of the cart',
    technologies: ['HTML', 'CSS', 'Nextjs', 'TailwindCSS'],
    link: 'https://productlistwithcart123.netlify.app/',
    code: 'https://github.com/NikhitaThomas/product_list_with_cart',
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
    title: 'Bookmark Landing Page',
    image: project4,
    description:
      'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
    technologies: ['HTML', 'CSS', 'Nextjs', 'TailwindCSS'],
  },
];

export const CONTACT = {
  address: 'New South Wales, Australia',
  //   phoneNo: '+12 4555 666 00 ',
  email: 'nikhitathomas@yahoo.in',
};
