import * as FaIcons from 'react-icons/fa';
import {useState, useEffect} from 'react';
import {sanityClient, PortableText} from '../../lib/sanity';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const Testimonial = () => {
	const [testimonialData, setTestimonialData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "testimonial"] {
                _id,
			clientName,
            testimonialText,
			testimonialExcerpt,
		}`
			)
			.then((data) => setTestimonialData(data))
			.catch(console.error);
	}, []);

	return (
		<>
			<section className='flex flex-col bg-testimonial-image bg-cover bg-no-repeat bg-right-top h-testimonial'>
				<div className='h-full w-full bg-black bg-opacity-50 bg-cover'>
					<h4 className='flex justify-center text-primary-default mt-28 -ml-6 md:text-lg lg:text-2xl'>
						What My Clients Say
					</h4>
					<h2 className='text-gray-300 uppercase text-2xl flex justify-center -ml-6 md:text-4xl lg:text-6xl'>
						Testimonials
					</h2>
					<Carousel
						showArrows={false}
						infiniteLoop={true}
						showThumbs={false}
						showStatus={false}
						autoPlay={true}
						showIndicators={false}
						interval={7000}>
						{testimonialData?.length > 0 &&
							testimonialData.map((testimonial) => {
								return (
									<div className='flex flex-row p-12 text-gray-200 text-xs md:text-xl lg:max-w-2xl items-center mx-auto'>
										<span className='text-2xl text-gray-200 block pr-4'>
											<FaIcons.FaQuoteLeft />
										</span>
										<p>
											{testimonial.testimonialExcerpt}
											<br />
											<span className='font-xs font-bold text-gray-200 flex justify-end'>{testimonial.clientName}</span>
										</p>
										<span className='text-2xl text-gray-200 block pl-4'>
											<FaIcons.FaQuoteRight />
										</span>
									</div>
								);
							})}
					</Carousel>
				</div>
			</section>
		</>
	);
};

export default Testimonial;
