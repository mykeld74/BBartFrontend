import client from '$lib/client';
export const prerender = true;

export async function load() {
	const query = `*[_type == "artwork" && ("Other" in series[]->.title) ]  | order(order asc){
      _id,
      title,
      slug,
      size,
			series[]->,
			imgTypes[]->,
      price,
      sold,
      originalDescription,
      printsDescription,
      commissionDescription,
      etsyLink,
      mainImage{
        asset->{url, metadata{dimensions}},
        alt
      }
		}`;
	const Artwork = await client.fetch(query);

	return { Artwork };
}
