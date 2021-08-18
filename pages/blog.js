import Date from '../components/Date';
import Link from 'next/link';
import {sanityClient, urlFor} from '../lib/sanity';
import {motion} from 'framer-motion';
import Loader from '../components/Loader';
const getPostsQuery = `*[_type == 'post' && slug.current != null] | order(publishedAt desc){
			_id,
			title,
            slug,
			publishedAt,
			mainImage,
			
		}`;

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

export default function Blog({posts}) {
	if (!posts) return <Loader />;
	return (
		<>
			<section className='bg-about-bg bg-cover bg-center md:mb-8'>
				<div className='max-w-6xl flex content-center pt-20 pb-14 md:pt-36 md:pb-32 px-20 md:px-28 lg:px-36'>
					<motion.h1
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin pt-8 lg:ml-32'>
						Blog
					</motion.h1>
				</div>
			</section>
			<section className='container mx-auto'>
				<motion.ul
					variants={listVariants}
					initial='initial'
					animate={posts.length > 0 && 'animate'}
					className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
					{posts?.length > 0 &&
						posts.map((post) => {
							return (
								<motion.li key={post._id} variants={listItemVariants}>
									<Link href={`/post/${post.slug.current}`}>
										<motion.a variants={actionVariants} whileTap='tap' className='block'>
											<div className='relative p-2 shadow-lg rounded-lg mb-10 bg-darkCol-default m-4'>
												<div className='absolute h-full w-full flex items-center justify-center'>
													<div className='rounded p-8'>
														<h2 className='lg:text-lg mb-4 font-thin uppercase bg-white bg-opacity-75 px-1 py-1 rounded flex flex-col'>
															{post.title}
															<span className='text-xs flex justify-end'>
																<Date dateString={post.publishedAt} />
															</span>
														</h2>
														<motion.button
															variants={buttonVariants}
															whileHover='hover'
															whileTap='tap'
															className='flex mx-auto bg-darkCol-default text-primary-default uppercase border-2 border-primary-default py-2 px-4 text-xs mt-4 rounded-sm items-center justify-center absolute bottom-7 right-12  '>
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
}

export async function getStaticProps() {
	const posts = await sanityClient.fetch(getPostsQuery);

	return {
		props: {posts},
	};
}
