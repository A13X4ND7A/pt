import {PortableText, sanityClient, urlFor} from '../lib/sanity';
import Image from 'next/image';
import {motion} from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const servicesQuery = `*[_type =='services']{
	
	_id,
	title,
	servicesText,
	'mainImage': image.asset->url
	}`;

//for the list UL
const listVariants = {
	initial: {
		opacity: 1,
	},
	animate: {
		transition: {
			staggerChildren: 0.4,
		},
	},
};

//for the list items
const listItemVariants = {
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

export default function Services({services}) {
	if (!services) return <h1>No services to show </h1>;
	return (
		<>
			<section className='bg-testBg bg-cover bg-center mb-8'>
				<div className='max-w-6xl flex content-center pt-20 pb-14 md:pt-36 md:pb-32 px-4 md:px-20 lg:px-32'>
					<motion.h1
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin pt-8'>
						Services
					</motion.h1>
				</div>
			</section>
			<ul>
				<motion.h2
					variants={headerVariants}
					initial='initial'
					animate='animate'
					className='text-2xl lg:text-4xl mb-2 font-thin uppercase ml-4 lg:ml-32'>
					What I offer...
				</motion.h2>
				{services.length > 0 &&
					services.map((service) => {
						return (
							<li key={service._id}>
								<div className='container grid md:grid-cols-3 gap-4 mx-auto'>
									
									<div className='md:col-span-2'>
										<motion.h2
											variants={headerVariants}
											initial='initial'
											animate='animate'
											className='text-lg lg:text-2xl font-bold uppercase ml-4 md:ml-0'>
											{service.title}
										</motion.h2>
										<motion.div
											className='px-2 prose lg:prose-xl text-primary-light font-trade font-normal pb-8'
											variants={mainVariants}
											initial='initial'
											animate='animate'>
											<PortableText blocks={service.servicesText} />
										</motion.div>
									</div>
								</div>
							</li>
						);
					})}
			</ul>
		</>
	);
}

export async function getStaticProps() {
	const services = await sanityClient.fetch(servicesQuery);

	return {
		props: {services},
	};
}
