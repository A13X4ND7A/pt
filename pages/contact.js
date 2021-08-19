import React from 'react';
import {motion} from 'framer-motion';

const headerVariants = {
	initial: {
		y: '-100vh',
		opacity: 0,
	},
	animate: {
		opacity: 1,
		y: -10,
		transition: {
			type: 'spring',
			damping: 10,
			mass: 0.75,
			stiffness: 100,
			delay: 0.5,
		},
	},
};

const mainVariants = {
	initial: {
		x: '100vw',
		opacity: 0,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			damping: 10,
			mass: 0.75,
			stiffness: 100,
			delay: 0.5,
		},
	},
};
const contact = () => {
	return (
		<>
			<section className='bg-contact-bg bg-cover bg-center mb-8'>
				<div className='max-w-6xl flex content-center pt-20 pb-14 md:pt-36 md:pb-32 px-4'>
					<motion.h1
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin pt-8 md:ml-14 lg:ml-32'>
						Get in touch!
					</motion.h1>
				</div>
			</section>
			<motion.h2
				variants={headerVariants}
				initial='initial'
				animate='animate'
				className='text-2xl lg:text-4xl mb-2 uppercase ml-4 lg:ml-32 font-tradeCondensed'>
				Contact Me...
			</motion.h2>
		</>
	);
};

export default contact;
