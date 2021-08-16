import React from 'react';

const contact = () => {
	return (
		<div className='mt-28 container mx-auto'>
			<h1 classname='text-2xl uppercase'>Get in touch!</h1>

			<h2>Contact Form</h2>
			<p>
				If you would like to book a session, get more information or have a question, please get in touch below and I
				will get back to you.{' '}
			</p>
			<form action='' method='post' className='flex flex-col'>
				<label for='name' className='flex'>
					Name
				</label>
				<input type='text' name='name' placeholder='Name' />
				<label for='email'>Email</label>
				<input type='text' name='email' placeholder='Email' />
				<label for='phone'>Tel. Number</label>
				<input type='text' name='phone' placeholder='Phone' />
				<label for='message'>Message</label>
				<input type='text' name='message' placeholder='Message' />
			</form>
		</div>
	);
};

export default contact;
