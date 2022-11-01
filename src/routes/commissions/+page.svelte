<script lang="ts">
	import Card from '$components/card.svelte';
	import ArtworkContainer from '$components/artworkContainer.svelte';
	export let Artwork: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ Artwork } = data);
</script>

<svelte:head><title>Commissions | Brenda Bennet Art</title></svelte:head>

<div class="container">
	<h1>Commissions</h1>
	<p>
		Brenda will be taking new commissions in November. Please send your ideas to the artist on her
		Meet the Artist section, including any reference photos you wish, and the artist will return
		your inquiry quickly to consult with you. Some of her best work has come from her clients’
		hearts!
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
				page="commissions"
			/>
		{/each}
	</ArtworkContainer>
</div>
