<script>
	export let additionalClasses = '';
</script>

<section class={`artworkContainer ${additionalClasses}`}>
	<slot />
</section>

<style>
	.artworkContainer {
		width: 100%;
		display: grid;
		grid-template-columns: var(
			--artworkContainerTemplateColumns,
			repeat(auto-fit, minmax(350px, 1fr))
		);
		grid-gap: 20px;
		justify-items: center;
		align-items: start;
		margin: 0 auto;
	}
	.fourWide {
		--artworkContainerTemplateColumns: repeat(auto-fit, minmax(300px, 1fr));
	}
</style>
