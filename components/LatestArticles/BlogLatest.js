import {useState, useEffect} from 'react';
import {sanityClient, urlFor} from '../../lib/sanity';
import Date from '../../components/Date';
import Link from 'next/link';
import {motion} from 'framer-motion';
const BlogLatest = () => {
	const [postData, setPostData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"] | order(publishedAt desc) [0..3]{
                _id,
			title,
            slug,
			publishedAt,
			mainImage,
            }`
			)
			.then((data) => setPostData(data))
			.catch(console.error);
	}, []);

	//framer motion variants

	//for the headers
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

	const actionVariants = {
		hover: {
			scale: [1, 0.9, 1],
		},

		tap: {
			scale: 0.9,
		},
	};
	//for the buttons
	const buttonVariants = {
		hover: {
			scale: 1.1,
			boxShadow: '0px 0px 8px rgb(255,255,255)',
			transition: {
					yoyo: 5,
				},
		},

		tap: {
			scale: 0.9,
			backgroundColor: '#d00c2a',
		},
	};

	return (
		<>
			<section className='pt-6'>
				<h4 className='flex justify-center text-primary-dark md:text-lg lg:text-2xl'>From my blog</h4>
				<h2 className='text-darkCol uppercase text-2xl flex justify-center md:text-4xl lg:text-6xl'>Latest Articles</h2>

				<motion.ul
					variants={listVariants}
					initial='initial'
					animate={postData?.length > 0 && 'animate'} //check to see the post length and then animate each individual post
					className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
					{postData?.length > 0 &&
						postData.map((post) => {
							return (
								<motion.li key={post._id} variants={listItemVariants}>
									<Link href={`/post/${post.slug.current}`}>
										<motion.a variants={actionVariants} whileTap='tap' className='block'>
											<div className='relative p-2 shadow-lg rounded-lg bg-darkCol-default m-4'>
												<div className='absolute h-full w-full flex items-center justify-center'>
													<div className='rounded p-8'>
														<h1 className='lg:text-2xl mb-4 font-thin uppercase bg-white bg-opacity-75 px-1 py-1 rounded flex flex-col'>
															{post.title}
															<span className='text-xs flex justify-end'>
																<Date dateString={post.publishedAt} />
															</span>
														</h1>
														<motion.button
															variants={buttonVariants}
															whileHover='hover'
															whileTap='tap'
															className='flex mx-auto bg-darkCol-default text-primary-default uppercase border-2 border-primary-default py-2 px-4 text-xs mt-4 rounded-sm items-center justify-center absolute bottom-7 right-12'>
															Read Article
														</motion.button>
													</div>
												</div>
												<img
													src={urlFor(post.mainImage).url()}
													alt={post.title}
													className='w-full object-cover rounded-t'
													style={{height: '250px'}}
												/>
											</div>
										</motion.a>
									</Link>
								</motion.li>
							);
						})}
				</motion.ul>
			</section>
		</>
	);
};

export default BlogLatest;
