import {motion} from 'framer-motion';

const loaderVariants = {
	animationOne: {
		x: [-20, 20],
		y: [0, -30],
		transition: {
			x: {
				yoyo: Infinity,
				duration: 0.5,
			},
			y: {
				yoyo: Infinity,
				duration: 0.255,
				ease: 'easeOut',
			},
		},
	},
};

const Loader = () => {
	return (
		<>
			<motion.div
				className='w-2 h-2 mx-auto m-y-6 rounded-full bg-white'
				variants={loaderVariants}
				animate='animationOne'></motion.div>
		</>
	);
};

export default Loader;
