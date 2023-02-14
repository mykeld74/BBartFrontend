import client from '$lib/client';
export const prerender = true;

export async function load() {
	const query = `*[_type == "artwork" && ("Commission" in imgTypes[]->.title) ]  | order(order asc){
      _id,
      title,
      slug,
      size,
			series[0]->,
			imgTypes[]->,
      price,
      sold,
      originalDescription,
      printsDescription,
      commissionDescription,
      etsyLink,
      mainImage
		}`;
	const Artwork = await client.fetch(query);

	return { Artwork };
}
