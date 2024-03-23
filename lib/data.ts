import React from "react";
import { FaReact } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { PiCertificateBold } from "react-icons/pi";
import myPortfolioImg from "@/public/my-portfolio.png";
import cinemaniaImg from "@/public/cinemania.png";
import weatherAppImg from "@/public/weather-app.png";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "my Literature career",
    location: "Egypt",
    description: "Published my first novel .",
    icon: React.createElement(BsBook),
    date: "2014",
  },
  {
    title: "my Literature career",
    location: "Egypt",
    description: "Published my short story collection.",
    icon: React.createElement(BsBook),
    date: "2017",
  },
  {
    title: "Front-End Developer",
    location: "Denmark",
    description:
      "certificate of completion web development track HTML, CSS. | sponsorship by ministry of Communications and Information Technology, Egypt",
    icon: React.createElement(PiCertificateBold),
    date: "2021",
  },
  {
    title: "Graduated Bootcamp",
    location: "Denmark",
    description:
      "I graduated after A 28-week course designed to cover all aspects of full-stack development including HTML, CSS, JavaScript, NodeJS, ExpressJS, GIT, MySQL and ReactJS.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Front-End Developer ",
    location: "Denmark",
    description:
      "I worked as a front-end developer intern for costbits.com. My stack includes React, TypeScript, Tailwind, Nivo charts",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "My portfolio",
    description:
      "a portfolio website to showcase my projects and skills. built with Typescript and Nextjs",
    tags: ["React", "Next.js", "Tailwind", "framer motion", "TypeScript"],
    imageUrl: myPortfolioImg,
    demoLink: "https://alaa-abdelbaki.vercel.app/",
    sourceLink: "https://github.com/aladdin91/my-portfolio",
  },
  {
    title: "Cinemania",
    description:
      "For my final project at HackYourFuture, I worked with my team on both front-end and back-end development",
    tags: ["React", "Expressjs", "MUI", "Nodejs", "mySql", "KnexJS"],
    imageUrl: cinemaniaImg,
    demoLink: "https://cinemania.fly.dev/",
    sourceLink: "https://github.com/HackYourFuture-CPH/CINEMANIA",
  },
  {
    title: "Weather app",
    description:
      "A weather app that show the temperature according to the user location",
    tags: ["Html", "Css", "Javascript", "Leaflet", "openstreetmap"],
    imageUrl: weatherAppImg,
    demoLink: "https://hyf-weather-app.netlify.app/",
    sourceLink: "https://github.com/aladdin91/Weather-app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Material UI",
  "MongoDB",
  "mySql",
  "KnexJS",
  "Express",
  "Framer Motion",
] as const;
