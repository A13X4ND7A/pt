import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {PortableText, sanityClient, urlFor} from '../lib/sanity';

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

const Services = () => {
	return (
		<>
			<section className='bg-services-bg bg-cover bg-center md:mb-8'>
				<div className='max-w-6xl flex content-center pt-16 pb-14 md:pt-36 md:pb-32 px-4 md:px-20 lg:px-32'>
					<motion.h1
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin'>
						What I Offer
					</motion.h1>
				</div>
			</section>
			<div>
				<h2>I offer several programs</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis excepturi quia dolorem cum laboriosam
					doloremque aspernatur voluptas facere. Perspiciatis deserunt, sequi similique error beatae ad magni et
					eligendi nobis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, aut nobis, neque molestias
					ipsa dolorem ipsam esse nemo placeat dolor doloribus vero cum reiciendis quasi iure odio corporis ratione
					doloremque, blanditiis beatae? Necessitatibus alias libero, unde similique natus aliquid quaerat excepturi ea
					officiis adipisci nesciunt corrupti perspiciatis temporibus quae qui. Quod sit consequuntur unde aperiam
					reiciendis eius? Nesciunt quia officia voluptatum ex sequi! Maiores ea quasi suscipit blanditiis iusto, veniam
					quos porro cumque unde atque quas illum quo harum maxime? Reprehenderit reiciendis voluptas blanditiis
					doloremque maxime dignissimos itaque harum laborum minima tempore excepturi impedit, quae quos earum esse sed
					deleniti porro incidunt et placeat eius ducimus. Autem nobis mollitia consequatur adipisci asperiores nostrum
					totam quidem ullam magni molestiae! Cumque quam repellat officiis eius excepturi? Odio voluptate delectus
					nemo? Perferendis, tempora similique a animi eaque ratione architecto enim repudiandae aliquid illo voluptatem
					reprehenderit rem cupiditate, quibusdam quam id. Nihil voluptas odio labore recusandae odit dolores facere
					impedit quae, numquam laudantium rerum? Beatae sapiente, veritatis iusto magnam dolorem doloremque nesciunt
					iure voluptatem! Veniam fuga quidem odit aspernatur quia quo enim excepturi recusandae nam sint maiores, atque
					tempora numquam deserunt obcaecati? Asperiores delectus placeat harum odit repellat, voluptatum praesentium
					quae pariatur eligendi totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aut inventore
					aliquid qui non cum, assumenda facere porro voluptatem iste laudantium eligendi voluptas error obcaecati quas
					dolor similique officiis at suscipit ipsum voluptatum nulla saepe excepturi laborum. Aperiam placeat magni
					ducimus, beatae repellat labore soluta obcaecati quas voluptas voluptatum ullam sit totam blanditiis mollitia
					ratione molestiae repudiandae molestias voluptates inventore ipsum perferendis numquam id doloremque. Autem
					quidem minus placeat magnam recusandae possimus qui, debitis hic eligendi, expedita alias odio est asperiores
					fugiat natus ad commodi? Tenetur expedita consequuntur animi consequatur modi voluptatibus ut eaque, quis
					recusandae blanditiis itaque aliquam nemo obcaecati doloremque amet sequi cum? Tenetur eligendi ad adipisci
					ducimus saepe nesciunt, corrupti iure, labore delectus odit explicabo nihil iusto itaque accusantium nam
					nostrum necessitatibus, perspiciatis molestiae omnis dolorem earum pariatur. Nemo aliquid beatae nam fuga
					dignissimos illum ipsa obcaecati doloribus deserunt, nisi quos sapiente nihil quibusdam quidem laborum
					possimus, blanditiis magnam quisquam provident doloremque vel dolore officia recusandae! Corporis voluptate
					consequuntur ea earum eos libero temporibus repellendus molestias numquam? Sit adipisci natus nam harum! Unde
					consectetur explicabo rem in veritatis officia voluptatum saepe odio quos fugit, magni a asperiores eligendi
					corrupti et doloribus quas dignissimos libero numquam maxime repudiandae autem nobis, rerum quo! Ipsum quia,
					eius culpa id voluptas quas nostrum doloremque! Pariatur totam quam itaque magnam maiores nulla quas nisi
					ipsam. Veritatis odio blanditiis cum libero excepturi placeat fugit magnam iste! Veniam iste cupiditate, animi
					sed nobis in nesciunt doloribus mollitia, sequi aperiam tenetur dicta eos velit magnam asperiores iure?
					Eveniet, aspernatur. Explicabo minima iste repudiandae quam blanditiis rem, illo sapiente ab alias. Corporis
					deserunt est, laborum repellendus accusantium quisquam voluptatem consectetur nesciunt quam officiis nihil
					facilis suscipit harum inventore officia, vero quas? Vel alias quo maiores tempore sequi sapiente magni quasi
					autem amet? Fugiat iste veniam adipisci et sapiente accusantium, modi eius obcaecati vitae perferendis?
					Voluptatem sed illo, consequatur odio aliquid nobis reprehenderit dignissimos sint earum qui omnis harum
					laborum itaque tenetur voluptas fuga sequi? Pariatur aut dolorem dolorum sunt placeat ipsum cum, fuga fugit
					magnam. Quo error reprehenderit repellat nulla qui, est nostrum natus tempore nobis! Reprehenderit
					exercitationem dicta mollitia accusamus explicabo enim velit est? Aperiam consequuntur a modi, qui ipsum
					cupiditate consequatur beatae delectus veritatis dolorem est tempora eos, temporibus iure quia corporis. Odit
					quia, inventore quidem aspernatur minima quasi reiciendis fugiat! Modi inventore enim consectetur dolor iste
					aperiam, ipsa deserunt neque quidem, necessitatibus facilis.
				</p>
			</div>
		</>
	);
};

export default Services;
