<script lang="ts">
	import { fade, blur } from 'svelte/transition';
	import Card from '$components/card.svelte';
	import ArtworkContainer from '$components/artworkContainer.svelte';
	export let Artwork: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ Artwork } = data);
</script>

<svelte:head><title>Commissions | Brenda Bennet Art</title></svelte:head>

<div class="container" in:fade>
	<h1>Commissions</h1>
	<p>
		Brenda will be taking new commissions in November. Please send your ideas to the artist on her
		Meet the Artist section, including any reference photos you wish, and the artist will return
		your inquiry quickly to consult with you. Some of her best work has come from her clients’
		hearts!
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
					page="commissions"
				/>
			</div>
		{/each}
	</ArtworkContainer>
</div>
