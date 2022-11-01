<script lang="ts">
	import Card from '$components/card.svelte';
	import ArtworkContainer from '$components/artworkContainer.svelte';
	export let Artwork: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ Artwork } = data);
</script>

<svelte:head><title>Orginal Artwork | Brenda Bennett Art</title></svelte:head>

<div class="container">
	<h1>Original Artwork</h1>
	<p>
		Serious collectors of original works are welcome to schedule an appointment at Brenda’s home
		studio, near Belmar in Lakewood, Colorado, Mondays through Thursdays from 9am-2pm. Contact
		Brenda to schedule your appointment here:
	</p>

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
				page="original-artwork"
			/>
		{/each}
	</ArtworkContainer>
</div>
