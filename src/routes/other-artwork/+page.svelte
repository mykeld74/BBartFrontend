<script lang="ts">
	import { fade } from 'svelte/transition';
	import Card from '$components/card.svelte';
	import ArtworkContainer from '$components/artworkContainer.svelte';
	export let Artwork: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ Artwork } = data);
</script>

<svelte:head><title>Other Artwork | Brenda Bennett Art</title></svelte:head>

<div class="container" in:fade>
	<h1>Other Artwork</h1>
	<p>
		Additional subjects Brenda is drawn to paint include angels, horses, flowers, fish, and other
		“random things of beauty.” Click on any of the images to view it in Brenda’s Etsy store.
	</p>

	<ArtworkContainer>
		{#each Artwork as { title, slug, size, series, price, sold, mainImage, originalDescription, printsDescription, commissionDescription, etsyLink, imgTypes }}
			<Card
				{title}
				{slug}
				{size}
				{series}
				{price}
				{sold}
				{mainImage}
				{originalDescription}
				{printsDescription}
				{commissionDescription}
				{etsyLink}
				{imgTypes}
				page="other-artwork"
			/>
		{/each}
	</ArtworkContainer>
</div>
