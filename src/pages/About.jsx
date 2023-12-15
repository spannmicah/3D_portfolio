import { CTA } from '../components';
import { skills } from '../constants';

const About = () => {
	return (
		<section className='max-container'>
			<h1 className='head-text'>
				Hello, I'm{' '}
				<span className='blue-gradient_text font-semibold drop-shadow'>
					Micah
				</span>
			</h1>

			<div className='mt-5 flex flex-col gap-3 text-slate-500'>
				<p>
					Front-end developer based in the US, specializing in building
					responsive and scalable web apps with a strong focus in creating the
					best design patterns.
				</p>
			</div>

			<div className='py-10 flex flex-col'>
				<h3 className='subhead-text'>My Skills</h3>

				<div className='mt-16 flex flex-wrap gap-12'>
					{skills.map((skill) => (
						<div
							className='block-container w-20 h-20'
							key={skill.name}>
							<div className='btn-back rounded-xl' />
							<div className='btn-front rounded-xl flex justify-center items-center'>
								<img
									src={skill.imageUrl}
									alt={skill.name}
									className='w-1/2 h-1/2 object-contain'
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='py-6'>
				<h3 className='subhead-text'>Work experience</h3>
				<div className='mt-5 flex flex-col gap-3 text-slate-500'>
					<p className='text-md '>
						I've worked with companies like CSI that helped me grow and improve
						both my character and my technical craft. Joining forces with many
						intelligent people to get a project done. Please see my{' '}
						<a
							className='blue-gradient_text font-semibold cursor-pointer'
							href='https://apricot-timothea-93.tiiny.site/'
							target='_blank'
							rel='no-referrer'>
							resume {''}
						</a>
						for more.
					</p>
				</div>
			</div>

			<hr className='border-slate-200' />

			<CTA />
		</section>
	);
};

export default About;
