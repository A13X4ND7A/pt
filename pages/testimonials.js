import {PortableText, sanityClient} from '../lib/sanity';
import {motion} from 'framer-motion';

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
				<div className='max-w-6xl flex content-center pt-16 pb-14 md:pt-36 md:pb-32 px-4 md:px-20 lg:px-32'>
					<motion.h1
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin'>
						Testimonials
					</motion.h1>
				</div>
			</section>
			<ul>
				{testimonials.length > 0 &&
					testimonials.map((testimonial) => {
						return (
							<li key={testimonial._id}>
								<h2 className='text-darkCol-default'>{testimonial.clientName}</h2>
								<p>
									<PortableText className='text-darkCol-default' blocks={testimonial.testimonialText} />
								</p>
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
