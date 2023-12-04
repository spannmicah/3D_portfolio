import { meta, shopify, starbucks, tesla } from '../assets/images';
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
} from '../assets/icons';

export const skills = [
	{
		imageUrl: css,
		name: 'CSS',
		type: 'Frontend',
	},
	{
		imageUrl: express,
		name: 'Express',
		type: 'Backend',
	},
	{
		imageUrl: git,
		name: 'Git',
		type: 'Version Control',
	},
	{
		imageUrl: github,
		name: 'GitHub',
		type: 'Version Control',
	},
	{
		imageUrl: html,
		name: 'HTML',
		type: 'Frontend',
	},
	{
		imageUrl: javascript,
		name: 'JavaScript',
		type: 'Frontend',
	},
	{
		imageUrl: react,
		name: 'React',
		type: 'Frontend',
	},
	{
		imageUrl: sass,
		name: 'Sass',
		type: 'Frontend',
	},
	{
		imageUrl: tailwindcss,
		name: 'Tailwind CSS',
		type: 'Frontend',
	},
	{
		imageUrl: typescript,
		name: 'TypeScript',
		type: 'Frontend',
	},
];

export const socialLinks = [
	{
		name: 'Contact',
		iconUrl: contact,
		link: '/contact',
	},
	{
		name: 'GitHub',
		iconUrl: github,
		link: 'https://github.com/spannmikey',
	},
	{
		name: 'LinkedIn',
		iconUrl: linkedin,
		link: 'https://www.linkedin.com/in/micah-spann-84ba8b23b/',
	},
];

export const projects = [
	{
		iconUrl: threads,
		theme: 'btn-back-green',
		name: 'Video Game Discovery',
		description:
			'Created a React application with Chakra-UI to create an application where users can view different games and filter them by category, console, and more.',
		link: 'https://videogame-discovery.netlify.app/',
	},
	{
		iconUrl: snapgram,
		theme: 'btn-back-pink',
		name: 'Social Media Dashboard',
		description:
			'Built a dashboard with HTML, SCSS, and JavaScript. This helped me understand how to design my code in a maintainable and scalable way.',
		link: 'https://social-media-dash-mikey.netlify.app/',
	},
	{
		iconUrl: pricewise,
		theme: 'btn-back-red',
		name: 'URL Saver Chrome Extension',
		description:
			'Created a chrome extension that allows users to save links from chrome browser. This was expired due to the fact that I hate having tons of bookmarks for different websites.',
		link: 'https://github.com/spannmikey/url-saver',
	},
	{
		iconUrl: estate,
		theme: 'btn-back-black',
		name: 'Portfolio Project',
		description:
			'Developed a 3d portfolio to host and share my talent across the web with future employers. Challenged me to learn how the 3d works and implement good design practices.',
		link: 'https://mspann-portfolio.netlify.app',
	},
];
