import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/spannmicah",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/micah-spann-84ba8b23b/",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-pink",
    name: "Splashtees",
    description:
      "Created a website using Next JS connected to a CMS for a client to showcase their t-shirt company while allowing them to add new products through the use of the CMS.",
    link: "https://splashtees.net/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Video Game Discovery",
    description:
      "Created a React application with Chakra-UI to create an application where users can view different games and filter them by category, console, and more.",
    link: "https://videogame-discovery.netlify.app/",
  },

  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Etch-A-Sketch",
    description:
      "Created an application that allows you to sketch a drawing when hovering over the grid. Users can change the grid size and change the colors they use as they draw.",
    link: "https://etching-and-sketching.netlify.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Portfolio Project",
    description:
      "Created a 3d portfolio to host and share my talent across the web with future employers. Challenged me to learn how the 3d works and implement good design practices.",
    link: "https://mspann-portfolio.netlify.app",
  },
];
