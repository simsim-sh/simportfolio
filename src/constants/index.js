import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  MySQL,
  git,
  navix,
  codealpha,
  mastertrust,
  solidity,
  blockchain,
  polygon,
  Rozarpay,
multicompany,
  amor,
  x,
  gmail,
  githublogo,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web3.0 Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "blockchain",
    icon: blockchain,
  },
  {
    name: "polygon",
    icon: polygon,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Code Alpha",
    icon: codealpha,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      " Developed and maintained web applications using React.js and associated technologies.",
      "Collaborated with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality products.",
      "Implemented responsive design techniques to ensure seamless user experiences across various devices and browsers.",
      "Actively participated in code reviews, offering constructive feedback to foster continuous improvement within the development team.",
    ],
  },
// {
//   title: "Sales Executive",
//   company_name: "Master Trust Ltd",
//   icon: mastertrust,
//   iconBg: "#383E56",
//   date: "Jan 2024 - Mar 2024",
//   points: [
//     "Worked as a Sales Executive in a trading company, specializing in financial products and services.",
//     "Focused on promoting and selling mutual funds, equity trading, and other investment options to clients.",
//     "Built strong client relationships, provided investment advice, and assisted customers in achieving their financial goals through tailored solutions.",
//   ],
// },
  {
    title: "MERN Stack Developer",
    company_name: "Navix consultancy Services",
    icon: navix,
    iconBg: "#383E56",
    date: "Apr 2024 - Current",
    points: [
      "Led the Project Management Dashboard development, handling both frontend and backend. Built the visual representation of tasks, teams, and project progress using React, React Vite, and dynamic chart libraries like Highcharts and Recharts. Developed robust backend functionalities with Node.js, Express, and MongoDB, enabling user authentication, task creation, project assignment, status tracking, and real-time activity logging. The system supports features such as priority tagging, due dates, and custom dashboards for improved team collaboration and productivity.",
      "Developed the Lamarque project with a fully dynamic frontend using HTML, CSS, and JavaScript, and handled form submission with PHP. Made the website fully responsive, with dynamic sections for easy updates, similar to premium builders like Bhutani Group.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Muticompany live data show",
    description:
    "Multicompany Live Data Show is a real-time web application designed to display live data from multiple companies in a unified dashboard. Built with React for a dynamic frontend, Node.js for robust backend services, and MongoDB for efficient data handling, this platform provides seamless access to real-time updates, analytics, and performance metrics across various companies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "red-text-gradient",
      },
    ],
    image: multicompany,
    live_link: "https://multicompanylivedatashow.netlify.app/",
    // source_code_link:
    //   "https://github.com/abhishekmahaja/Random-GIF-Generator-Project",
  },
  {
    name: "Armor-guardian",
    description:
    "'Armor-Guardian' is a robust web application designed to safeguard and manage fare and pricing information with precision and reliability. Developed using HTML, CSS, and JavaScript, it combines a secure, user-friendly interface with responsive design for seamless use across all devices. Armor-Guardian acts as a digital shield, ensuring your fare data is always organized, accessible, and protected.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: amor,
    live_link: "https://armor-guardian.vercel.app/",
    source_code_link: "https://github.com/abhishekmahaja/My-Fares-Hub",
  },
  {
    name: "RazorPay Clone",
    description:
      "The RazorPay Clone is a robust web application that replicates the functionality of the popular payment gateway service, RazorPay. Developed using modern web technologies such as HTML, CSS, JavaScript, and integrating with backend technologies like Node.js and MongoDB, this clone offers a seamless and secure platform for online payments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "red-text-gradient",
      },
    ],
    image: Rozarpay,
    live_link: "http://rozarpayclone.netlify.app",
    source_code_link:
      "https://github.com/abhishekmahaja/RazorPay-Clone-Using-Tailwind",
  },
];

export { services, technologies, experiences, testimonials, projects };
