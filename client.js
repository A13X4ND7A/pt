import sanityClient from '@sanity/client';

export default sanityClient({
	'projectId': '1tpjadzj',
	'dataset': 'production',
	apiVersion: '2021-03-25',
	useCdn: true,
});
