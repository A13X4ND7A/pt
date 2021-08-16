import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Testimonial from '../components/Testimonial';
import BlogLatest from '../components/BlogLatest';

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
		</>
	);
}
