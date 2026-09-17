<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { getImageSrc } from '$lib/cloudinaryFetch';

	let { data } = $props();
	const bio = $derived(data.Bio);
</script>

<svelte:head>
	<title>Artist Biography | Brenda Bennett Art</title>
</svelte:head>

<div class="container">
	<h1>{bio[0].title}</h1>
	<div class="bio">
		<div class="bioPic scrollFade">
			<img
				src={getImageSrc(bio[0].mainImage, 'f_auto,q_auto,w_300')}
				alt={bio[0].mainImage?.alt || 'Brenda Bennett'}
				loading="lazy"
			/>
		</div>
		<PortableText value={bio[0].body} />
	</div>
	<img
		class="scrollFade"
		src={getImageSrc(bio[0].secondaryImage, 'f_auto,q_auto')}
		alt={bio[0].secondaryImage?.alt || 'Brenda Bennett Landscape'}
		loading="lazy"
	/>
</div>

<style>
	.bioPic {
		width: 200px;
		float: left;
		margin-right: 20px;
	}
</style>
