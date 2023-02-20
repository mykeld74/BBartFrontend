<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	export let Bio: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ Bio } = data);
</script>

<div class="container">
	<h1>{Bio[0].title}</h1>
	<div class="bio">
		<div class="bioPic">
			<img src={Bio[0].mainImage.asset.url} alt={Bio[0].mainImage.alt} loading="lazy" />
		</div>
		<PortableText value={Bio[0].body} />
	</div>
	<img src={Bio[0].secondaryImage.asset.url} alt={Bio[0].secondaryImage.alt} loading="lazy" />
</div>

<style>
	.bioPic {
		width: 200px;
		float: left;
		margin-right: 20px;
	}
</style>
