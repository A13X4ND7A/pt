import Image from 'next/image';
import {PortableText, sanityClient, urlFor} from '../lib/sanity';
import {motion} from 'framer-motion';

const getBioQuery = `*[_type == 'author'][0]{
			name,
			bio,
			'authorImage': image.asset->url
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

export default function About({author}) {
	return (
		<>
			<section className='bg-about-bg bg-cover bg-center md:mb-8'>
				<div className='max-w-6xl flex content-center pt-20 pb-14 md:pt-36 md:pb-32 px-4 md:px-16 lg:px-20'>
					<motion.h1
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin pt-8'>
						About Scott
					</motion.h1>
				</div>
			</section>
			<div className='container grid md:grid-cols-3 gap-4 mx-auto'>
				<Image
					className='md:col-span-1 max-w-100'
					alt={author.name}
					src={urlFor(author.authorImage).url()}
					layout='intrinsic'
					height={4000}
					width={6000}
					objectFit='cover'
					q='1'></Image>
				<div className='md:col-span-2'>
					<motion.h2
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='text-2xl lg:text-6xl mb-4 font-tradeCondensed uppercase ml-4 md:ml-0'>
						{author.name}
					</motion.h2>
					<motion.div
						className='px-2 prose lg:prose-xl text-primary-light font-trade'
						variants={mainVariants}
						initial='initial'
						animate='animate'>
						<PortableText blocks={author.bio} />
					</motion.div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const author = await sanityClient.fetch(getBioQuery);

	return {
		props: {author},
	};
}
