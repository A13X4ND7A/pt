import Link from 'next/link';
import {MenuData} from './MenuData';
import {motion} from 'framer-motion';

const navVariants = {
	initial: {
		opacity: 1,
	},
	animate: {
		transition: {
			staggerChildren: 0.5,
		},
	},
};

const listItem = {
	initial: {
		opacity: 0,
		y: '100vh',
	},
	animate: {
		opacity: 1,
		y: 0,
		delay: 0.5,
	},
};

const NavbarLinks = () => {
	return (
		<>
			<motion.ul variants={navVariants} initial='initial' animate={MenuData.length > 0 && 'animate'}>
				{/* Maps through the data file and outputs the menu based upon the data in the file. */}
				{MenuData.map((item, index) => {
					return (
						<motion.li key={index} className={item.cName} variants={listItem}>
							<Link href={item.path}>
								<a className='text-lg w-11/12 h-full flex items-center py-4'>
									<span className='block text-primary-default mr-2'>{item.icon}</span>
									{item.title}
								</a>
							</Link>
						</motion.li>
					);
				})}
			</motion.ul>
		</>
	);
};

export default NavbarLinks;
