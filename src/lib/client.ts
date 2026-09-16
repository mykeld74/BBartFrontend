import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'eyosaf8p',
	dataset: 'production',
	apiVersion: '2024-01-01',
	useCdn: true
});

export default client;
