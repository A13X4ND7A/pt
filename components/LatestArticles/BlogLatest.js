import {useState, useEffect} from 'react';
import {sanityClient} from '../../lib/sanity';
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

	return (
		<>
			<section className='grid grid-cols-1 bg-gray-300 h-96'>
				<h2 className=' uppercase text-2xl flex justify-center -ml-6 md:text-4xl lg:text-6xl'>Latest from the Blog</h2>

				<ul>
					{postData &&
						postData.map((post, index) => (
							<article key={index}>
								<li>{post.title}</li>
							</article>
						))}
				</ul>
			</section>
		</>
	);
};

export default BlogLatest;
