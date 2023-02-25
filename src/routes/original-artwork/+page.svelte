<script lang="ts">
	import { fade, blur } from 'svelte/transition';
	import Card from '$components/card.svelte';
	import ArtworkContainer from '$components/artworkContainer.svelte';
	export let Artwork: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ Artwork } = data);
</script>

<svelte:head><title>Original Artwork | Brenda Bennett Art</title></svelte:head>

<div class="container" in:fade>
	<h1>Original Artwork</h1>
	<p>
		Serious collectors of original works are welcome to schedule an appointment at Brenda’s home
		studio, near Belmar in Lakewood, Colorado, Mondays through Thursdays from 9am-2pm. Contact
		Brenda to schedule your appointment here:
	</p>

	<ArtworkContainer additionalClasses="fourWide">
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
					page="original-artwork"
				/>
			</div>
		{/each}
	</ArtworkContainer>
</div>

<style>
	.cardContainer {
		width: 100%;
	}
</style>
