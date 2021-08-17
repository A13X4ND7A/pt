import React from 'react';

const contact = () => {
	return (
		<>
			<section className='bg-contact-bg bg-cover bg-center mb-8'>
				<div className='max-w-6xl flex content-center pt-16 pb-14 md:pt-36 md:pb-32 px-4'>
					<h1 className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin'>
						Get in touch!
					</h1>
				</div>
			</section>
			<section className='container p-4'>
				<h2>Contact Form</h2>
				<p>
					If you would like to book a session, get more information or have a question, please get in touch below and I
					will get back to you.
				</p>
			</section>
		</>
	);
};

export default contact;
