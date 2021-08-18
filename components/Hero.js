import Link from 'next/link';
import {motion} from 'framer-motion';

const buttonVariants = {
	hover: {
		scale: 1.1,

		boxShadow: '0px 0px 8px rgb(255,255,255)',
		transition: {
			yoyo: 5,
		},
	},

	tap: {
		scale: 0.9,
		backgroundColor: '#d00c2a',
	},
};

const Hero = () => {
	return (
		<section className='h-full w-full min-h-screen bg-cover bg-center bg-hero-image '>
			<div className='h-full w-full bg-black bg-opacity-60 min-h-screen bg-cover'>
				<div className='container mx-auto md:pl-12 flex flex-col'>
					<h1 className='text-primary-default uppercase text-4xl pt-40 lg:pt-64 lg:text-6xl leading-10 tracking-wider flex justify-center md:justify-start'>
						Be the Best version <br /> of Yourself!
					</h1>
					<div className='flex flex-col md:flex-row md:items-center'>
						<p className='text-center text-gray-300 font-thin text-xl mt-7 tracking-wide flex flex-col items-center md:items-start md:text-2xl'>
							<span className='italic uppercase font-bold'>Progress</span> <br />
							<span className='text-jubRed font-normal flex mx-auto'>not</span>
							<br />
							perfection
						</p>
						<Link href='/contact/'>
							<motion.button
								variants={buttonVariants}
								whileHover='hover'
								whileTap='tap'
								className='mx-auto bg-darkCol-default text-primary-default uppercase border-2 border-primary-default py-2 px-4 text-sm rounded-sm max-h-12 mt-4 md:ml-12'>
								Get in Touch
							</motion.button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
