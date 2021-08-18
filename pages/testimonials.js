import {PortableText, sanityClient} from '../lib/sanity';
import {motion} from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const testimonialsQuery = `*[_type =='testimonial']{
	
	_id,
	clientName,
	testimonialText,
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

export default function Testimonials({testimonials}) {
	if (!testimonials) return <h1>No Testimonials to show </h1>;
	return (
		<>
			<section className='bg-testBg bg-cover bg-center mb-8'>
				<div className='max-w-6xl flex content-center pt-20 pb-14 md:pt-36 md:pb-32 px-4 md:px-20 lg:px-32'>
					<motion.h1
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin pt-8'>
						Testimonials
					</motion.h1>
				</div>
			</section>
			<ul>
				<motion.h2
					variants={headerVariants}
					initial='initial'
					animate='animate'
					className='text-2xl lg:text-4xl mb-2 font-thin uppercase ml-4 lg:ml-32'>
					Read what others have to say...
				</motion.h2>
				{testimonials.length > 0 &&
					testimonials.map((testimonial) => {
						return (
							<li key={testimonial._id}>
								<div className='flex flex-row p-12 text-darkCol-default text-xs md:text-xl lg:max-w-2xl items-center mx-auto'>
									<span className='text-2xl text-darkCol-default block pr-4'>
										<FaIcons.FaQuoteLeft />
									</span>
									<p>
										<PortableText className='text-darkCol-default' blocks={testimonial.testimonialText} />

										<br />
										<span className='font-xs font-bold text-darkCol-default flex justify-end'>
											{testimonial.clientName}
										</span>
									</p>
									<span className='text-2xl text-darkCol-default block pl-4'>
										<FaIcons.FaQuoteRight />
									</span>
								</div>
							</li>
						);
					})}
			</ul>
		</>
	);
}

export async function getStaticProps() {
	const testimonials = await sanityClient.fetch(testimonialsQuery);

	return {
		props: {testimonials},
	};
}
