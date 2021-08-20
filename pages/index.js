import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Testimonial from '../components/Testimonials/Testimonial';
import BlogLatest from '../components/LatestArticles/BlogLatest';
import Maps from '../components/Maps/Maps';

export default function Home() {
	return (
		<>
			{/*--Hero section--*/}
			<Hero />
			{/*--Testimonial section--*/}
			<Testimonial />

			{/*--section for the programs--*/}
			<Programs />

			{/*--section for the blog--*/}
			<BlogLatest />

			{/*--section for the Maps--*/}
			<Maps />
		</>
	);
}
