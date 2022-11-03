<section class="artworkContainer">
	<slot />
</section>

<style>
	.artworkContainer {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		grid-gap: 20px;
		justify-items: center;
		align-items: start;
		margin: 0 auto;
	}
</style>
