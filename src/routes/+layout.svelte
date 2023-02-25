<script lang="ts">
	import '$css/style.scss';
	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
	export let Pages: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ ArtPages, ArtistPages } = data);
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header {ArtPages} {ArtistPages} />
<slot />
<Footer />
