import client from '$lib/client';
export const prerender = true;

export async function load() {
	const query = `*[_type == "artwork" && title=="American War Horse" || title == "Blue Sky Basin" || title == "Moonlit Aspen" ]| order(title asc){
      _id,
      title,
      mainImage{
        asset->{url, metadata{dimensions}},
        alt
      }
		}`;
	const Images = await client.fetch(query);

	return { Images };
}
