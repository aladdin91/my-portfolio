import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";
import myPortfolioImg from "@/public/my-portfolio.png";
import cinemaniaImg from "@/public/cinemania.png";
import weatherAppImg from "@/public/weather-app.png";
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
