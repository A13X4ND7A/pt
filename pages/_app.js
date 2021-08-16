import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import {AnimatePresence, motion} from 'framer-motion';

function MyApp({Component, pageProps, router}) {
	return (
		<AnimatePresence>
			<div
				key={router.route}
				initial='pageInitial'
				animate='pageAnimate'
				variants={{
					pageInitial: {
						opacity: 0,
					},
					pageAnimate: {
						opacity: 1,
					},
				}}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		</AnimatePresence>
	);
}

export default MyApp;
