import {useState} from 'react';
import Logo from '../../public/logo_full.svg';
import Image from 'next/image';
import Link from 'next/link';
import NavbarLinks from './NavbarLinks';
import {IconContext} from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import {motion} from 'framer-motion';

const logoVariants = {
	animate: {
		scale: [1, 0.5, 1],
	},
};

const Navbar = () => {
	//state for the hamburger menu
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<IconContext.Provider value={'#acb7c1'}>
				{/* Hamburger menu icon */}

				<div className='flex fixed items-center justify-between h-16 top-0 px-4  mx-auto text-primary-default z-10 bg-darkCol-default w-screen py-2 md:h-24 2xl:px-72 mb-16 '>
					<div className='flex justify-start w-1/2 '>
						<Link href='/'>
							<a className='flex items-center text-primary-default'>
								<span className='md:hidden'>
									<Image
										className='text-primary-default mt-1'
										alt='Scott Thom Logo'
										src='/hand_logo.svg'
										width={60}
										height={50}
										quality='1'></Image>
								</span>
								<span className='hidden md:block'>
									<motion.svg
										className='max-w-156 min-w-156'
										id='Layer_2'
										data-name='Layer 2'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 184.13 104.78'>
										<motion.use href={`${Logo}#barbell_hand`} variants={logoVariants} animate='animate' />
										<motion.use href={`${Logo}#personal_trainer`} />
										<motion.use href={`${Logo}#Scott_Thom`} />
									</motion.svg>
								</span>
							</a>
						</Link>
					</div>
					<button className='flex items-end text-2xl px-12 lg:hidden' onClick={showSidebar}>
						<svg
							className='text-primary-lightest stroke-current'
							role='presentation'
							width='32'
							height='32'
							viewBox='0 0 32 32'
							title='Menu Icon'>
							<g strokeLinecap='round' strokeWidth='2'>
								<path
									d='M9 9.5h17M0 .5L26 .5M9 18.5L26 18.5'
									transform='translate(-325 -537) translate(325 537) translate(4 7)'></path>
							</g>
						</svg>
					</button>
					<div className='hidden lg:block'>
						<NavbarLinks />
					</div>
				</div>

				{/* when Icon is clicked add the class nav-menu-active else just nav menu. If clicked, show the menu with a close icon at the top */}
				<div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
					<ul className='w-full flex flex-col px-8 md:px-12' onClick={showSidebar}>
						<button className='px-8 mt-7 text-2xl ml-auto text-primary-default flex items-end'>
							<AiIcons.AiOutlineClose />
						</button>

						{/* Navbar links imporrted from file */}
						<NavbarLinks />
					</ul>
				</div>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
