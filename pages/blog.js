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
			<main className='mt-28 min-h-screen'>
				<section className='container mx-auto'>
					<article className='shadow-lg rounded-lg mb-8 bg-primary-default'>
						<motion.h1
							variants={headerVariants}
							initial='initial'
							animate='animate'
							className='text-2xl md:text-6xl font-thin uppercase flex justify-center pt-4'>
							Blog
						</motion.h1>

						<motion.ul
							variants={listVariants}
							initial='initial'
							animate={posts.length > 0 && 'animate'}
							className='container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
							{posts?.length > 0 &&
								posts.map((post) => {
									return (
										<motion.li key={post._id} variants={listItemVariants}>
											<Link href={`/post/${post.slug.current}`}>
												<motion.a variants={actionVariants} whileHover='hover' whileTap='tap' className='block'>
													<div className='relative p-2 shadow-lg rounded-lg mb-10 bg-darkCol-default m-4'>
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
																	className='flex mx-auto bg-darkCol-default text-primary-default uppercase border-2 border-primary-default py-2 px-4 text-xs mt-4 rounded-sm items-center justify-center '>
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
					</article>
				</section>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const posts = await sanityClient.fetch(getPostsQuery);

	return {
		props: {posts},
	};
}
