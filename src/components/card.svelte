<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import ArtworkContainer from './artworkContainer.svelte';
	export let title: string;
	export let slug: any;
	export let size: string;
	export let series: any;
	export let price: number;
	export let sold: boolean;
	export let mainImage: any;
	export let originalDescription: any;
	export let printsDescription: any;
	export let commissionDescription: any;
	export let etsyLink: string;
	export let imgTypes: any;
	export let page: string;
</script>

<section class="artworkCard">
	<article class="artwork">
		<div class="imgContainer {page}">
			{#if etsyLink}
				<a href={etsyLink} target="_blank" rel="noopener noreferrer">
					<img
						src={`https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_auto/v1668539933/${mainImage.public_id}`}
						alt={title}
						loading="lazy"
					/>
				</a>
			{:else}
				<img
					src={`https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_auto/v1668539933/${mainImage.public_id}`}
					alt={title}
					loading="lazy"
				/>
			{/if}
			{#if price}<p class="price">${price}</p>{/if}
			{#if sold && page === 'original-artwork'}
				<p class="sold">Sold</p>
			{/if}
		</div>
		<div class="artwork-info">
			<p class="size">{size}</p>
			<h3 class="title">"{title}"</h3>
			{#if originalDescription && page === 'original-artwork'}
				<div class="desc"><PortableText value={originalDescription} /></div>
			{/if}
			{#if commissionDescription && page === 'commissions'}
				<div class="desc"><PortableText value={commissionDescription} /></div>
			{/if}
			{#if printsDescription && page === 'other-artwork'}
				<div class="desc printDesc"><PortableText value={printsDescription} /></div>
			{/if}

			<!-- <PortableText value={printsDescription} /> -->
		</div>
	</article>
</section>

<style lang="scss">
	.artworkCard {
		width: 100%;
	}
	.imgContainer {
		width: 100%;
		position: relative;
		aspect-ratio: 413/270;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		margin-bottom: 10px;
		img {
			position: absolute;
			top: 0px;
			left: 0px;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center center;
			transition: opacity 0.3s ease-in-out;
		}
		&.original-artwork {
			img {
				&:hover {
					opacity: 0.25;
				}
			}
		}
	}
	.title {
		min-height: 63px;
	}

	h3 {
		color: var(--primaryColor);
		font-size: 1.7rem;
		margin: 10px 0;
		text-align: center;
	}
	p {
		text-align: center;
		margin: 0;
	}

	.sold {
		color: red;
		position: absolute;
		bottom: 30px;
		right: 30px;
		font-size: 36px;
		margin: 0;
		transform: rotate(-30deg);
		font-weight: 600;
		text-shadow: 3px 3px 4px #333;
	}
	.price {
		font-size: 36px;
	}
	.desc {
		text-align: center;
	}
</style>
