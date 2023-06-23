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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: creator ,
    },
    {
      title: "EXTC Engineer",
      icon: backend,
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
      name: "Django",
      icon: Django_ball,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: Bootstrap3d,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Python",
      icon: python,
    },
    
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    
    
    {
      name: "SQLite",
      icon: sqlite,
    },
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Sub-Head of Robotic Arm and Actuation",
      company_name: "Dj's Antariksh",
      icon: antariksh,
      iconBg: "#FFFFFF",
      date: "March 2022 - Present",
      points: [
        "We build Martian Rovers and compete in university-level competitions.",
        "Robotic arm and navigation subsystem manufacturing, assembly, and testing are my responsibilities.",
        "Antariksh won the Remote European Rover Challenge-2022.",
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
        "Hardworking .",
      name: "Amit Deshmukh",
      designation: "HOD",
      branch: "Electronics and Telecommunication",
      company: "DJ Sanghvi",
      icon: men,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Great Team member, worked deligently on the project.",
      name: "Amey Kadam",
      designation: "Prof.",
      branch:"",
      company: "DJ Sanghvi",
      icon: men1,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Smart",
      name: "Arti Ambekar",
      designation: "Prof.",
      branch:"",
      company: "DJ Sanghvi",
      icon: women,
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Poke-Trade",
      description:
        "Web-based E-commerece site that allows users to list, sell, bid and manage auctions about various listing available, providing a convenient admin space for easy backend management need by the admin.",
      tags: [
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "sqlite",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: ecom,
      source_code_link: "https://github.com/wheydant/E-commerce-Django",
    },
    {
      name: "Wiki Clone",
      description:
        "Wikipedia clone having features for user to add new topics, edit details mentioned using Markdown language converted using markdown2 package",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "markdown",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: wiki_clone,
      source_code_link: "https://github.com/wheydant/WikiClone",
    },
    {
      name: "Micro Strip architecture",
      description:
        "Microstrip technology, a marvel of modern engineering, embodies elegance and precision in its intricate design. It seamlessly weaves together the realms of microwave engineering and circuitry.",
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