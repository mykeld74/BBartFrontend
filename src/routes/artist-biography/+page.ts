import client from '$lib/client';
export const prerender = true;

export async function load() {
	const query = `*[_type == "page" && slug.current == 'artist-biography'] {
    _id,
    title,
    slug,
    body,
    mainImage,
    secondaryImage,
  }`;
	const Bio = await client.fetch(query);

	return { Bio };
}
