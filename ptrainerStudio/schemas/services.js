export default {
	name: 'services',
	title: 'Services Offered',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},

		{
			name: 'servicesText',
			title: 'Services Text Text',
			type: 'blockContent',
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		
	],
};
