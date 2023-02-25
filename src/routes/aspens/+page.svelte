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

<svelte:head><title>Aspen Series | Brenda Bennett Art</title></svelte:head>

{#if isLoaded}
	<div class="container" in:fade>
		<h1>Aspen Series</h1>
		<h2>
			Brenda’s home studio is in the foothills of the Rocky Mountains. The aspen trees that color
			the landscape are a favorite subject for her artwork, and a favorite resting spot on her
			backcountry sojourns.
		</h2>
		<p>Click on any of the images to view it in Brenda’s Etsy store.</p>

		<ArtworkContainer>
			{#each Artwork as { title, slug, size, series, price, sold, mainImage, originalDescription, printsDescription, commissionDescription, etsyLink, imgTypes }, i}
				<div class="cardContainer" in:blur={{ duration: 300, delay: 100 * i }}>
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
						imgWidth="500"
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
