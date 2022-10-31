import client from '$lib/client';
export const prerender = true;

export async function load() {
	const query = `*[_type == "artwork"  && ("Original" in imgTypes[]->.title)]  | order(order asc){
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
      etsyLink,
      mainImage{
        asset->{url, metadata{dimensions}},
        alt
      }
		}`;
	const Artwork = await client.fetch(query);

	return { Artwork };
}
