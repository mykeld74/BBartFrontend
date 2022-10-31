<script lang="ts">
	import Card from '$components/card.svelte';
	import ArtworkContainer from '$components/artworkContainer.svelte';
	export let Artwork: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ Artwork } = data);
</script>

<svelte:head><title>Commissions | Brenda Bennet Art</title></svelte:head>

<ArtworkContainer>
	{#each Artwork as { title, slug, size, series, price, sold, mainImage, originalDescription, printsDescription, etsyLink, imgTypes }}
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
			{etsyLink}
			{imgTypes}
		/>
	{/each}
</ArtworkContainer>
