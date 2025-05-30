import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    Django_ball,
    nodejs,
    mongodb,
    git,
    figma,
    python,
    cpp,
    java,
    sqlite,
    Bootstrap,
    Bootstrap3d,
    docker,
    meta,
    starbucks,
    Django,
    tesla,
    antariksh,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    flask,
    ecom,
    pokemon,
    wikiClone,
    wiki_clone,
    extc,
    men,
    men1,
    women,
    oracle,
    CCC,
    AnonymousFeedback,
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
      title: "Associate Consultant",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "B. Tech in Electronics and Telecommunication",
      icon: creator ,
    },
    {
      title: "Honors in AI & ML",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
        {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: Django_ball,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: cpp,
    },
    
    {
      name: "SQLite",
      icon: sqlite,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Associate Consultant",
      company_name: "Oracle Financial Services Software",
      icon: oracle,
      iconBg: "#000",
      date: "July, 2024 - Present",
      points: [
        "Permodalan Nasional Berhad, Malaysia is my primary client at Oracle Financial Services Software.",
        "Developed and enhanced front-end and back-end components using Oracle RAD tools, SQL, and JavaScript for financial applications.",
        "Implemented custom reporting solutions by creating optimized BIP data models and RTF layouts, improving report performance and clarity by 20%.",
        "Collaborated with cross-functional teams to refactor legacy code and align systems with evolving business requirements."

      ],
    },
    {
      title: "Django Developer",
      company_name: "He and Her",
      icon: Django_ball,
      iconBg: "#092E20",
      date: "Sep 2022 - Oct 2022",
      points: [
        "Early stage startup in prototype designing stage.",
        "Designing of Database Schema and developed models for the same.",
        "Executed user interaction views including watch-list management, likes and comments.",
      ],
    },
  ];
  
  const testimonials = [
        {
      testimonial:
        "Vedant has consistently demonstrated a high level of technical skill, initiative, and ownership in every project he's been a part of.",
      name: "Sumit Kumar",
      designation: "Team Lead",
      branch:"PNB",
      company: "Oracle Financial Services Software",
      icon: men1,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Hardworking, Extremely talented hope all the best for his future",
      name: "Dr. Amit Deshmukh",
      designation: "Head of Department",
      branch: "Electronics and Telecommunication",
      company: "DJ Sanghvi",
      icon: men,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Great Team member, worked deligently on the project.",
      name: "Ameya Kadam",
      designation: "Prof.",
      branch:"PHD Project Head",
      company: "DJ Sanghvi",
      icon: men1,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Customer Consulting Catalogue",
      description:
        "The Customer Consulting Catalogue is a document summarization and retrieval portal designed for the Consulting Department of Oracle Financial Services Software (OFSS). It provides an intuitive platform for managing and accessing client proposal documentation by summarizing, indexing, and facilitating efficient search and retrieval of data based on users' needs. It leverages advanced vector search algorithms to return highly relevant results and allows multiple views of the data, including a chat feature that integrates with Oracle's Generative AI for in-depth queries.",
      tags: [
        {
          name: "Oracle's_Generative_AI",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
      ],
      image: CCC,
      source_code_link: "https://github.com/wheydant",
    },
    {
      name: "Anonymous Feedback",
      description:
        "Anonymous Feedback is a platform that allows users to provide honest, anonymous feedback without fear of judgment. This project is aimed at creating a safe environment where individuals can express their thoughts and suggestions freely. Anonymous Feedback is a web application built with Next.js and TypeScript that allows users to send and receive feedback anonymously. The project leverages Mongoose for data modeling, Zod for schema validation, and Resend as an email service provider. AI is used to suggest Messages. Using Technologies like Mongoose, ZOD, RESEND, NEXTAUTH.js, SHADCN and CHATGPT_API",
      tags: [
        {
          name: "Next_Js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: AnonymousFeedback,
      source_code_link: "https://github.com/wheydant/annonymous-feedback/",
    },
    {
      name: "Universal Embedded Interface Board",
      description:
        "Designed and fabricated a custom PCB that functions as a universal extension board compatible with Arduino Uno, Raspberry Pi, and STM microcontrollers. The board intelligently routes analog and digital pins to corresponding headers, allowing seamless integration and switching between different processors. This versatile design eliminates the need for multiple interface boards, enabling rapid prototyping and testing across platforms. The project involved schematic design, PCB layout, signal routing, and hardware debugging, resulting in a reliable and flexible development tool for embedded systems.",
      tags: [
        {
          name: "altium",
          color: "blue-text-gradient",
        },
        {
          name: "ie3d",
          color: "green-text-gradient",
        },
        {
          name: "vna",
          color: "pink-text-gradient",
        },
      ],
      image: extc,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };