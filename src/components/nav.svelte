<script lang="ts">
	import { slide } from 'svelte/transition';
	let openCollect = false;
	let openExperience = false;
	let openArtists = false;
	let showOverlay = false;
	export let ArtPages: any;
	export let ArtistPages: any;

	const handleClicks = (buttonType: string) => {
		if (buttonType === 'collect') {
			openCollect = !openCollect;
			showOverlay = true;
			openExperience = false;
			openArtists = false;
		} else if (buttonType === 'experience') {
			openExperience = !openExperience;
			showOverlay = true;
			openCollect = false;
			openArtists = false;
		} else if (buttonType === 'artist') {
			openArtists = !openArtists;
			showOverlay = true;
			openCollect = false;
			openExperience = false;
		}
	};
</script>

<!-- <svelte:head>
	<link rel="stylesheet" href="../src/css/container.css" />
</svelte:head> -->

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={showOverlay ? 'navOverlay show' : 'navOverlay'}
	on:click={() => {
		openCollect = false;
		openExperience = false;
		openArtists = false;
		showOverlay = false;
	}}
/>
<nav>
	<div id="navBar">
		<div class="navSection">
			<div class="buttonContainer">
				<button class="navButton" on:click={() => handleClicks('collect')}>Collect Art</button>
			</div>
			{#if openCollect}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="pages"
					transition:slide
					on:click={() => {
						openCollect = false;
						showOverlay = false;
					}}
				>
					<a href="/fine-art-prints"><p>Prints</p></a>
					<a href="/original-artwork"><p>Original Artwork</p></a>
					<a href="/commissions"><p>Commissions</p></a>
				</div>
			{/if}
		</div>
		<div class="navSection">
			<div class="buttonContainer">
				<button class="navButton" on:click={() => handleClicks('experience')}>Experience Art</button
				>
			</div>
			{#if openExperience}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="pages"
					transition:slide
					on:click={() => {
						openExperience = false;
						showOverlay = false;
					}}
				>
					{#each ArtPages as artPage}
						<a href="/{artPage.slug.current}"><p>{artPage.navTitle}</p></a>
					{/each}
				</div>
			{/if}
		</div>
		<div class="navSection">
			<div class="buttonContainer artist">
				<button class="navButton" on:click={() => handleClicks('artist')}>Meet the Artist</button>
			</div>
			{#if openArtists}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="pages"
					transition:slide
					on:click={() => {
						openArtists = false;
						showOverlay = false;
					}}
				>
					{#each ArtistPages as artistPage}
						<a href="/{artistPage.slug.current}"><p>{artistPage.navTitle}</p></a>
					{/each}
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
		container: navBar / inline-size;
	}
	#navBar {
		display: grid;
		grid-template-columns: var(--navTemplateColumns);
		width: 100%;
		max-width: 540px;
	}

	.buttonContainer {
		border-right: 1px solid #333;
		&.artist {
			border-right: none;
		}
	}
	.navButton {
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
		z-index: 200;
		a {
			text-decoration: none;
			p {
				font-weight: 700;
				color: #000;
				cursor: pointer;
				text-align: center;
				font-size: 16px;
			}
		}
	}
	.navOverlay.show {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: transparent;
	}
	.navOverlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 0px;
		height: 0px;
	}
</style>
