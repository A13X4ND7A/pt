import sanityClient from '@sanity/client';

export default sanityClient({
	'projectId': '1tpjadzj',
	'dataset': 'production',
	apiVersion: 'v2021-06-07',
	useCdn: false,
});
