<script lang="ts">
	import { fade } from 'svelte/transition';
	import { PortableText } from '@portabletext/svelte';
	export let HerStudio: any;
	/** @type {import('./$types').PageData} */
	export let data: any;
	$: ({ HerStudio } = data);
</script>

<svelte:head>
	<title>Her Studio | Brenda Bennett Art</title>
</svelte:head>

<div class="container">
	<div class="studioWrapper">
		<div class="studioContainer">
			<div class="herStudio">
				<h1>{HerStudio[0].title}</h1>
				<PortableText value={HerStudio[0].body} />
			</div>
			<div class="image1 imageContainer" in:fade={{ duration: 125, delay: 100 }}>
				<img
					src="https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_800/v1668539933/studio_pic_WorkSpace"
					alt="Her Studio"
					loading="lazy"
				/>
			</div>
			<div class="image2 imageContainer" in:fade={{ duration: 125, delay: 200 }}>
				<img
					src="https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_400/v1668539933/studio_pic_Scissors-1"
					alt="Her Studio"
					loading="lazy"
				/>
			</div>
			<div class="image3 imageContainer" in:fade={{ duration: 125, delay: 300 }}>
				<img
					src="https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_400/v1668539933/studio_pic_InkSprays"
					alt="Her Studio"
					loading="lazy"
				/>
			</div>
			<div class="image4 imageContainer" in:fade={{ duration: 125, delay: 400 }}>
				<img
					src="https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_400/v1668539933/studio4"
					alt="Her Studio"
					loading="lazy"
				/>
			</div>
			<div class="image5 imageContainer" in:fade={{ duration: 125, delay: 400 }}>
				<img
					src="https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_800/v1668539933/studio_pic_ArtistSeriesImages-1"
					alt="Her Studio"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.studioWrapper {
		position: relative;
		container: studio / inline-size;
		z-index: -1;
	}

	.herStudio {
		grid-area: desc;
		align-self: center;
	}
	.image1 {
		grid-area: studioImage1;
	}
	.image2 {
		grid-area: studioImage2;
	}
	.image3 {
		grid-area: studioImage3;
	}
	.image4 {
		grid-area: studioImage4;
	}
	.image5 {
		grid-area: studioImage5;
	}
	.imageContainer {
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center center;
		}
	}
</style>
