<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
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
					<img src={mainImage.asset.url} alt={mainImage.alt} loading="lazy" />
				</a>
			{:else}
				<img src={mainImage.asset.url} alt={mainImage.alt} loading="lazy" />
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
				<PortableText value={originalDescription} />
			{/if}
			{#if commissionDescription && page === 'commissions'}
				<PortableText value={commissionDescription} />
			{/if}
			{#if printsDescription && page === 'prints'}
				<PortableText value={printsDescription} />
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

	h3,
	p {
		text-align: center;
		margin: 0;
	}

	h3 {
		color: var(--primaryColor);
		font-size: 1.7rem;
		margin: 10px 0;
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
</style>
