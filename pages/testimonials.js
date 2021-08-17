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
		<main className='mt-22 min-h-screen '>
			<section className='bg-testBg bg-cover bg-no-repeat h-96'>
				<h4 className='flex justify-center text-primary-default mt-28 -ml-6 md:text-lg lg:text-2xl'>
					What My Clients Say
				</h4>
				<h1 className='text-darkCol-default uppercase text-2xl flex justify-center -ml-6 md:text-4xl lg:text-6xl'>
					Testimonials
				</h1>
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
		</main>
	);
}

export async function getStaticProps() {
	const testimonials = await sanityClient.fetch(testimonialsQuery);

	return {
		props: {testimonials},
	};
}
