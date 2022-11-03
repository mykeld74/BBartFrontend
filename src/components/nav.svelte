<script lang="ts">
	import { slide } from 'svelte/transition';
	let openCollect = false;
	let openExperience = false;
	let openArtists = false;

	const handleClicks = (buttonType: string) => {
		if (buttonType === 'collect') {
			openCollect = !openCollect;
			openExperience = false;
			openArtists = false;
		} else if (buttonType === 'experience') {
			openExperience = !openExperience;
			openCollect = false;
			openArtists = false;
		} else if (buttonType === 'artist') {
			openArtists = !openArtists;
			openCollect = false;
			openExperience = false;
		}
	};
</script>

<nav>
	<div id="navBar">
		<div class="navSection">
			<div class="buttonContainer">
				<button on:click={() => handleClicks('collect')}>Collect Art</button>
			</div>
			{#if openCollect}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="pages" transition:slide on:click={() => (openCollect = false)}>
					<a href="/fine-art-prints"><p>Prints</p></a>
					<a href="/original-artwork"><p>Original Artwork</p></a>
					<a href="/commissions"><p>Commissions</p></a>
				</div>
			{/if}
		</div>
		<div class="navSection">
			<div class="buttonContainer">
				<button on:click={() => handleClicks('experience')}>Experience Art</button>
			</div>
			{#if openExperience}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="pages" transition:slide on:click={() => (openExperience = false)}>
					<a href="/"><p>Prints</p></a>
					<a href="/original-artwork"><p>Original Artwork</p></a>
					<a href="/commissions"><p>Commissions</p></a>
				</div>
			{/if}
		</div>
		<div class="navSection">
			<div class="buttonContainer artist">
				<button on:click={() => handleClicks('artist')}>Meet the Artist</button>
			</div>
			{#if openArtists}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="pages" transition:slide on:click={() => (openArtists = false)}>
					<a href="/"><p>Prints</p></a>
					<a href="/original-artwork"><p>Original Artwork</p></a>
					<a href="/commissions"><p>Commissions</p></a>
				</div>
			{/if}
		</div>
	</div>
</nav>

<style lang="scss">
	nav {
		width: calc(100% - 40px);
		max-width: 1280px;
		margin: 0 auto 20px;
		text-align: center;
	}
	#navBar {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		width: 100%;
		max-width: 540px;
	}
	.buttonContainer {
		border-right: 1px solid #333;
		&.artist {
			border-right: none;
		}
		@media (max-width: 768px) {
			border-right: none;
			border-bottom: 1px solid #333;
		}
	}
	button {
		background: none;
		border: none;
		font-size: 16px;
		font-weight: 500;
		font-weight: 700;
		padding: 0;
		width: 100%;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
		@media (max-width: 768px) {
			justify-content: flex-start;
			/* height: 30px; */
		}
	}
	.navSection {
		position: relative;
	}
	.pages {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background: #fff;
		z-index: 1;
		a {
			text-decoration: none;
			p {
				font-weight: 700;
				color: #000;
				cursor: pointer;
				text-align: center;
			}
		}
	}
</style>
