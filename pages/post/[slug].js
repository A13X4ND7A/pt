import {sanityClient, urlFor, usePreviewSubscription, PortableText} from '../../lib/sanity';
import Date from '../../components/Date';
import {motion} from 'framer-motion';
import {useRouter} from 'next/router';
import ErrorPage from 'next/error';

const postQuery = `*[_type =='post' && slug.current == $slug][0]{
	_id,
	title,
	slug,
	mainImage,
	publishedAt,
	body,	
	"numberOfCharacters": length(pt::text(body)),
	"estimatedWordCount": round(length(pt::text(body)) / 5),
	"estimatedReadingTime": round(length(pt::text(body) / 5) / 180 ),
	
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

export default function OnePost({data, preview}) {
	const router = useRouter();
	const {data: post} = usePreviewSubscription(postQuery, {
		params: {slug: data.post?.slug.current},
		initialData: data,
		enabled: preview,
	});
	if (!router.isFallback && !post.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const estimatesReadingTime = Math.round(post?.estimatedWordCount / 200);
	return (
		<main className='mt-28 min-h-screen '>
			<section className='container mx-auto px-2'>
				<article className='shadow-lg rounded-lg mb-4'>
					<div className='relative'>
						<div className='absolute h-full w-full flex items-center justify-center'>
							<div className='rounded p-12'>
								<motion.h2
									variants={headerVariants}
									initial='initial'
									animate='animate'
									className='text-2xl lg:text-6xl mb-4 font-thin uppercase bg-white bg-opacity-75 px-1 py-1 rounded'>
									{post?.title}
								</motion.h2>
							</div>
						</div>
						<img
							src={urlFor(post?.mainImage).url()}
							alt={post.title}
							className='w-full object-cover rounded-t'
							style={{height: '400px'}}
						/>
					</div>
					<span className='block uppercase text-sm px-16 lg:px-48 mt-4 font-bold'>
						<Date dateString={post?.publishedAt} />
					</span>
					<span className='block font-thin uppercase text-sm px-16 lg:px-48 mt-1 '>
						{estimatesReadingTime} Min Read
					</span>
					<motion.div
						variants={mainVariants}
						initial='initial'
						animate='animate'
						className='pb-8 px-16 lg:px-48 prose lg:prose-xl max-w-full mt-4 font-trade font-normal'>
						<PortableText blocks={post?.body} />
					</motion.div>
				</article>
			</section>
		</main>
	);
}

export async function getStaticProps({params}) {
	const {slug} = params;
	const post = await sanityClient.fetch(postQuery, {slug});

	return {props: {data: {post}, preview: true}};
}

export async function getStaticPaths() {
	const paths = await sanityClient.fetch(
		`*[_type == 'post' && defined(slug.current)]{
			"params": {
				"slug": slug.current
			}	
		}`
	);
	return {
		paths,
		fallback: true,
	};
}
