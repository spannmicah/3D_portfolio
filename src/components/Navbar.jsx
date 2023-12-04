import { NavLink } from 'react-router-dom';

import { logo } from '../assets/images';

const Navbar = () => {
	return (
		<header className='header'>
			<NavLink to='/'>
				<p className='w-18 h-18 blue-gradient_text'>MS</p>
			</NavLink>
			<nav className='flex text-lg gap-7 font-medium'>
				<NavLink
					to='/about'
					className={({ isActive }) =>
						isActive ? 'blue-gradient_text' : 'text-black'
					}>
					About
				</NavLink>
				<NavLink
					to='/projects'
					className={({ isActive }) =>
						isActive ? 'blue-gradient_text' : 'text-black'
					}>
					Projects
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
