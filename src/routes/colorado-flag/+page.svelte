<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, blur } from 'svelte/transition';
	import Card from '$components/card.svelte';
	import ArtworkContainer from '$components/artworkContainer.svelte';
	export let Artwork: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ Artwork } = data);

	let isLoaded = false;
	onMount(() => {
		isLoaded = true;
	});
</script>

<svelte:head><title>Colorado Flag Series | Brenda Bennett Art</title></svelte:head>

{#if isLoaded}
	<div class="container" in:fade>
		<h1>Colorado Flag Series</h1>
		<h2>The state of Colorado proudly flies its flag. Are you flying yours?</h2>
		<p>Click on any of the images to view it in Brenda’s Etsy store.</p>

		<ArtworkContainer>
			{#each Artwork as { title, slug, size, series, price, sold, mainImage, originalDescription, printsDescription, commissionDescription, etsyLink, imgTypes }, i}
				<div class="cardContainer" in:blur={{ duration: 500, delay: 125 * i }}>
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
				</div>
			{/each}
		</ArtworkContainer>
	</div>
{/if}

<style>
	.cardContainer {
		width: 100%;
	}
</style>
