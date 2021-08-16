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

const Programs = () => {
	return (
		<section className='grid grid-cols-1 md:grid-cols-3 bg-gray-300 h-96'>
			<div className='bg-men-image bg-cover bg-center'>
				<div className='h-full w-full bg-black bg-opacity-50 bg-cover flex flex-col items-center justify-center'>
					<motion.h2
						variants={buttonVariants}
						whileHover='hover'
						whileTap='tap'
						className='text-primary-default uppercase font-light border-2 p-2 cursor-pointer'>
						Programs for Men
					</motion.h2>
				</div>
			</div>
			<div className='bg-women-image bg-cover bg-center flex flex-col items-center justify-center'>
				<div className='h-full w-full bg-black bg-opacity-50 bg-cover flex flex-col items-center justify-center'>
					<div className='flex flex-row items-center group'>
						<motion.h2
							variants={buttonVariants}
							whileHover='hover'
							whileTap='tap'
							className='text-primary-default uppercase font-light border-2 p-2 cursor-pointer'>
							Programs for Women
						</motion.h2>
					</div>
				</div>
			</div>
			<div className='bg-group-image bg-cover bg-center'>
				<div className='h-full w-full bg-black bg-opacity-50 bg-cover flex flex-col items-center justify-center'>
					<motion.h2
						variants={buttonVariants}
						whileHover='hover'
						whileTap='tap'
						className='text-primary-default uppercase font-light border-2 p-2 cursor-pointer'>
						Group Fitness classes
					</motion.h2>
				</div>
			</div>
		</section>
	);
};

export default Programs;
