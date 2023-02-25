<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	export let Bio: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ Bio } = data);
</script>

<svelte:head>
	<title>Artist Biography | Brenda Bennett Art</title>
</svelte:head>

<div class="container">
	<h1>{Bio[0].title}</h1>
	<div class="bio">
		<div class="bioPic">
			<img
				src={`https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_300/v1668539933/${Bio[0].mainImage.public_id}`}
				alt="Brenda Bennett"
				loading="lazy"
			/>
		</div>
		<PortableText value={Bio[0].body} />
	</div>
	<img
		src={`https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_auto/v1668539933/${Bio[0].secondaryImage.public_id}`}
		alt="Brenda Bennett Landscape"
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
