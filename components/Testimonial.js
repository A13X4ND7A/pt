import * as FaIcons from 'react-icons/fa';
const Testimonial = () => {
	return (
		<section className='flex flex-col bg-testimonial-image bg-cover bg-no-repeat bg-right-top h-testimonial'>
			<div className='h-full w-full bg-black bg-opacity-50 bg-cover'>
				<h4 className='flex justify-center text-primary-default mt-28 -ml-6 md:text-lg lg:text-2xl'>
					What My Clients Say
				</h4>
				<h2 className='text-gray-300 uppercase text-2xl flex justify-center -ml-6 md:text-4xl lg:text-6xl'>
					Testimonials
				</h2>
				<div className='flex flex-row p-12 text-gray-200 text-xs md:text-xl lg:max-w-2xl items-center mx-auto'>
					<span className='text-2xl text-gray-200 block pr-4'>
						<FaIcons.FaQuoteLeft />
					</span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Varius duis at consectetur lorem donec massa sapien faucibus et. Convallis convallis
						tellus id interdum velit. Tristique senectus et netus et. Curabitur gravida arcu ac tortor dignissim
						convallis.
						<br />
						<span className='font-xs font-bold text-gray-200 flex justify-end'>Anna Jones</span>
					</p>
					<span className='text-2xl text-gray-200 block pl-4'>
						<FaIcons.FaQuoteRight />
					</span>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
