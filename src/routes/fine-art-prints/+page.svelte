<script lang="ts">
	import { fade } from 'svelte/transition';
	export let Images: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ Images } = data);
</script>

<div class="container" in:fade>
	<h1>Fine Art Prints</h1>

	<div class="linkContainer">
		<div class="linkPrints">
			<a href="/other-artwork">
				<div class="image">
					<img
						src={`https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_auto/v1668539930/${data.Images[0].mainImage.public_id}`}
						alt={data.Images[0].mainImage.alt}
						loading="lazy"
					/>
				</div>
				<div class="linkText"><p>Other Artwork</p></div>
			</a>
		</div>
		<div class="linkPrints">
			<a href="/colorado-flag">
				<div class="image">
					<img
						src={`https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_auto/v1668539930/${data.Images[1].mainImage.public_id}`}
						alt={data.Images[1].mainImage.alt}
						loading="lazy"
					/>
				</div>
				<div class="linkText"><p>Colorado Flag Series</p></div>
			</a>
		</div>
		<div class="linkPrints">
			<a href="aspens">
				<div class="image">
					<img
						src={`https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_auto/v1668539930/${data.Images[2].mainImage.public_id}`}
						alt={data.Images[2].mainImage.alt}
						loading="lazy"
					/>
				</div>
				<div class="linkText"><p>Aspen Series</p></div>
			</a>
		</div>
	</div>
</div>

<style>
	.linkContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2vw;
	}
	.image {
		aspect-ratio: 4/2.99;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
