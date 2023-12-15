import { Link } from 'react-router-dom';

import { arrow } from '../assets/icons';

const HomeInfo = ({ currentStage }) => {
	if (currentStage === 1)
		return (
			<h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
				Hi, I am <span className='font-semibold'>Micah 🧑‍💻</span>
				<br />A front-end developer
			</h1>
		);

	if (currentStage === 2) {
		return (
			<div className='info-box'>
				<p className='font-medium sm:text-xl text-center'>
					Picked up many front-end skills with companies and am looking to apply
					them more
				</p>

				<Link
					to='/about'
					className='neo-brutalism-white neo-btn'>
					Learn more
					<img
						src={arrow}
						alt='arrow'
						className='w-4 h-4 object-contain'
					/>
				</Link>
			</div>
		);
	}

	if (currentStage === 3) {
		return (
			<div className='info-box'>
				<p className='font-medium text-center sm:text-xl'>
					Created multiple projects to benefit others. <br />
					Curious about the impact?
				</p>

				<Link
					to='/projects'
					className='neo-brutalism-white neo-btn'>
					Visit my portfolio
					<img
						src={arrow}
						alt='arrow'
						className='w-4 h-4 object-contain'
					/>
				</Link>
			</div>
		);
	}

	if (currentStage === 4) {
		return (
			<div className='info-box'>
				<p className='font-medium sm:text-xl text-center'>
					Seeking a developer or need a project completed? <br />
					I'm just a few clicks away.
				</p>

				<Link
					to='/contact'
					className='neo-brutalism-white neo-btn'>
					Let's talk
					<img
						src={arrow}
						alt='arrow'
						className='w-4 h-4 object-contain'
					/>
				</Link>
			</div>
		);
	}

	return null;
};

export default HomeInfo;
